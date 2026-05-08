"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface DataPoint {
  label: string;
  value: number; // 0 to 100
}

interface RadarChartProps {
  data: DataPoint[];
  size?: number;
  className?: string;
}

export function RadarChart({ data, size = 300, className }: RadarChartProps) {
  const [animatedValues, setAnimatedValues] = useState(data.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues(data.map(d => d.value));
    }, 500);
    return () => clearTimeout(timer);
  }, [data]);

  const center = size / 2;
  const radius = size / 2 - 40; // Padding for labels
  const angleSlice = (Math.PI * 2) / data.length;

  // Helper to get coordinates
  const getCoordinates = (value: number, index: number) => {
    const angle = index * angleSlice - Math.PI / 2;
    const r = (value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  const polygonPoints = animatedValues
    .map((val, i) => {
      const coords = getCoordinates(val, i);
      return `${coords.x},${coords.y}`;
    })
    .join(" ");

  const axisLines = data.map((_, i) => {
    const endCoords = getCoordinates(100, i);
    return (
      <line
        key={`axis-${i}`}
        x1={center}
        y1={center}
        x2={endCoords.x}
        y2={endCoords.y}
        stroke="rgba(255, 255, 255, 0.1)"
        strokeWidth="1"
      />
    );
  });

  const webLevels = [20, 40, 60, 80, 100].map((level) => {
    const points = data
      .map((_, i) => {
        const coords = getCoordinates(level, i);
        return `${coords.x},${coords.y}`;
      })
      .join(" ");
    return (
      <polygon
        key={`web-${level}`}
        points={points}
        fill="none"
        stroke="rgba(255, 255, 255, 0.05)"
        strokeWidth="1"
      />
    );
  });

  const labels = data.map((d, i) => {
    const coords = getCoordinates(115, i); // Push labels out a bit
    return (
      <text
        key={`label-${i}`}
        x={coords.x}
        y={coords.y}
        fill="white"
        fontSize="12"
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-muted-foreground font-medium text-xs"
      >
        {d.label}
      </text>
    );
  });

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
        {/* Background Web */}
        {webLevels}
        {axisLines}
        
        {/* Data Polygon with Gradient */}
        <defs>
          <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(124, 58, 237, 0.5)" /> {/* Primary Color */}
            <stop offset="100%" stopColor="rgba(236, 72, 153, 0.5)" /> {/* Pink */}
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <polygon
          points={polygonPoints}
          fill="url(#radarGradient)"
          stroke="rgba(255, 255, 255, 0.5)"
          strokeWidth="2"
          filter="url(#glow)"
          style={{
            transition: "all 1s ease-out",
            transformOrigin: "center"
          }}
        />

        {/* Dots on vertices */}
        {animatedValues.map((val, i) => {
          const coords = getCoordinates(val, i);
          return (
            <circle
              key={`dot-${i}`}
              cx={coords.x}
              cy={coords.y}
              r="4"
              fill="#fff"
              className="animate-pulse"
            />
          );
        })}

        {/* Labels */}
        {labels}
      </svg>
    </div>
  );
}