"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Node {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

export function NetworkBg() {
  const [nodes, setNodes] = useState<Node[]>([]);

  useEffect(() => {
    // Generate nodes only on client to prevent hydration mismatch
    const generatedNodes = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 10,
    }));
    setNodes(generatedNodes);
  }, []);

  // Avoid rendering empty SVG if nodes are not loaded yet (though it happens fast)
  if (nodes.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style={{ stopColor: "rgba(255,255,255,0.1)", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "rgba(255,255,255,0)", stopOpacity: 0 }} />
          </radialGradient>
        </defs>
        
        {/* Connecting Lines (Static aesthetic representation) */}
        <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
          {nodes.slice(0, 10).map((node, i) => (
            <line
              key={`line-${i}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${nodes[(i + 3) % nodes.length].x}%`}
              y2={`${nodes[(i + 3) % nodes.length].y}%`}
            />
          ))}
        </g>

        {/* Animated Nodes */}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r={node.size}
            fill="url(#grad1)"
            animate={{
              y: [`${node.y}%`, `${node.y - 10}%`, `${node.y}%`],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: node.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}