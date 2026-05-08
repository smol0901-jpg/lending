"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Rocket, Target } from "lucide-react";

export default function FlightStatus() {
  const { scrollYProgress } = useScroll();

  // Map progress to velocity percentage
  const velocity = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  // Map progress to status text
  const statusText = useTransform(scrollYProgress, 
    [0, 0.3, 0.7, 1], 
    ["Стабилизация орбиты", "Набор высоты", "Вход в атмосферу", "Контактирование"]
  );

  // Map progress to status icon color
  const statusColor = useTransform(scrollYProgress, 
    [0, 0.5, 1], 
    ["hsl(220, 13%, 65%)", "hsl(280, 70%, 60%)", "hsl(0, 72%, 51%)"]
  );

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed bottom-6 right-6 z-40 hidden md:block"
    >
      <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-4 w-64 shadow-2xl">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Telemetry</span>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse delay-75"></div>
          </div>
        </div>
        
        {/* Velocity Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-muted-foreground">VELOCITY</span>
            <motion.span className="font-mono text-primary">{velocity.get().toFixed(0)}%</motion.span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"
              style={{ scaleX: scrollYProgress }}
            />
          </div>
        </div>

        {/* Status */}
        <div className="flex items-center gap-3 pt-2 border-t border-white/5">
          <motion.div 
            style={{ backgroundColor: statusColor }}
            className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-black/50"
          >
            <motion.div
              animate={{ rotate: scrollYProgress.get() * 360 }}
              transition={{ duration: 0.1 }}
            >
               <Rocket className="h-4 w-4 text-white" />
            </motion.div>
          </motion.div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Status</div>
            <motion.div className="text-sm font-bold text-foreground">
              {statusText}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}