"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Zap } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { NetworkBg } from "@/components/visuals/network-bg";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Parallax logic for blobs (Local ambient effects)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  };

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const blob1Transform = useTransform(
    [springX, springY],
    ([x, y]) => `translate(${x * 0.05}px, ${y * 0.05}px)`
  );
  
  const blob2Transform = useTransform(
    [springX, springY],
    ([x, y]) => `translate(${x * -0.1}px, ${y * -0.1}px)`
  );

  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20"
      onMouseMove={handleMouseMove}
    >
      {/* Neural Network Animation (Overlay) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <NetworkBg />
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0"></div>
      
      {/* Ambient Glows with Parallax (Local to Hero) */}
      <motion.div 
        style={{ transform: blob1Transform }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-40 pointer-events-none"
      />
      <motion.div 
        style={{ transform: blob2Transform }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] -z-10 opacity-30 pointer-events-none"
      />

      <div className="container relative z-10 px-4 max-w-5xl mx-auto text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-foreground/80">
            Доступен для новых проектов
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance"
        >
          Превращаю идеи в <br className="hidden md:block" />
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-purple-600 to-pink-600 blur-2xl opacity-40 animate-pulse"></span>
            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-pink-500">
              ИИ-продукты
            </span>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 font-light text-balance"
        >
          Инженерия промтов, создание AI-агентов и визуальный контент. 
          Подход шеф-повара к нейросетям: точность, рецептура, результат.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button 
            size="lg" 
            className="h-14 px-8 text-base bg-white text-black hover:bg-white/90 font-semibold shadow-xl shadow-white/10"
            onClick={scrollToContact}
          >
            Обсудить проект
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="h-14 px-8 text-base border-white/10 hover:bg-white/5 hover:border-white/20 text-white"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Портфолио услуг
          </Button>
        </motion.div>

        {/* Bento-style Grid Stats (Mini) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center text-center">
            <TrendingUp className="h-8 w-8 text-primary mb-2" />
            <div className="text-3xl font-bold">20+</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Лет опыта</div>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center text-center">
            <Zap className="h-8 w-8 text-purple-500 mb-2" />
            <div className="text-3xl font-bold">AI</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Инженерия</div>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center text-center">
            <Sparkles className="h-8 w-8 text-pink-500 mb-2" />
            <div className="text-3xl font-bold">100%</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Результат</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}