"use client";

import { useEffect, useRef, useMemo } from "react";
import { useTransform, useSpring, MotionValue } from "framer-motion";

interface StarfieldProps {
  scrollProgress?: MotionValue<number>;
}

export function Starfield({ scrollProgress }: StarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  // Calculate speed based on scroll (Base 2, Max 25)
  const baseSpeed = 2;
  const warpSpeed = 25;
  
  // Smoothly interpolate speed based on scroll progress
  const currentSpeed = useSpring(
    useTransform(scrollProgress || 0, [0, 1], [baseSpeed, warpSpeed]), 
    { stiffness: 50, damping: 20, mass: 1 }
  );

  // Get raw value for the animation loop
  const speedRef = useRef(baseSpeed);
  currentSpeed.on("change", (v) => (speedRef.current = v));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX - width / 2) * 0.05, // Reduced parallax for stability at high speeds
        y: (e.clientY - height / 2) * 0.05,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const numStars = 200; // More stars for better warp effect
    const stars: { x: number; y: number; z: number; prevZ: number }[] = [];

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: (Math.random() - 0.5) * width * 3,
        y: (Math.random() - 0.5) * height * 3,
        z: Math.random() * width,
        prevZ: width,
      });
    }

    const animate = () => {
      // Use trail effect instead of clearRect for speed sensation
      ctx.fillStyle = scrollProgress?.get() > 0.8 ? "rgba(9, 9, 11, 0.3)" : "rgba(9, 9, 11, 1)";
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      const speed = speedRef.current;

      stars.forEach((star) => {
        star.z -= speed;

        if (star.z <= 0) {
          star.x = (Math.random() - 0.5) * width * 3;
          star.y = (Math.random() - 0.5) * height * 3;
          star.z = width;
          star.prevZ = width;
        }

        // Parallax
        const offsetX = mouseRef.current.x * (width - star.z) / width;
        const offsetY = mouseRef.current.y * (width - star.z) / width;

        const x = (star.x - offsetX) * (width / star.z) + cx;
        const y = (star.y - offsetY) * (width / star.z) + cy;

        // Trail length depends on speed
        const trailLength = speed * 1.5; 
        const px = (star.x - offsetX) * (width / (star.z + trailLength)) + cx;
        const py = (star.y - offsetY) * (width / (star.z + trailLength)) + cy;

        // Opacity fade based on depth
        const alpha = (1 - star.z / width);
        
        // Draw Trail (more visible at high speeds)
        if (speed > 5) {
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(x, y);
          ctx.strokeStyle = `rgba(168, 85, 247, ${alpha * 0.4})`; // Purple trails for warp
          ctx.lineWidth = Math.max(0.5, (1 - star.z / width) * (speed / 10));
          ctx.stroke();
        }

        // Draw Star Head
        ctx.beginPath();
        ctx.arc(x, y, Math.max(0.5, (1 - star.z / width) * 2), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationRef.current!);
    };
  }, [scrollProgress]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 mix-blend-screen"
    />
  );
}