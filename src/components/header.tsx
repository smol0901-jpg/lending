"use client";

import { Button } from "@/components/ui/button";
import { Menu, X, BrainCircuit } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <div 
          className="flex items-center gap-3 font-bold text-xl tracking-tight cursor-pointer group"
          onClick={() => scrollToSection("hero")}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
            <BrainCircuit className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="leading-none text-foreground">ASV_PROD</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">AI Engineering</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection("services")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
          >
            Услуги
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
          >
            Обо мне
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </button>
          <Button 
            onClick={() => scrollToSection("contact")}
            variant="default"
            className="bg-white text-black hover:bg-white/90 shadow-lg shadow-white/5"
          >
            Связаться
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/5 bg-background/95 backdrop-blur-xl p-6 flex flex-col gap-6 absolute w-full">
          <button 
            onClick={() => scrollToSection("services")}
            className="text-left text-lg font-medium text-muted-foreground hover:text-foreground"
          >
            Услуги
          </button>
          <button 
            onClick={() => scrollToSection("about")}
            className="text-left text-lg font-medium text-muted-foreground hover:text-foreground"
          >
            Обо мне
          </button>
          <Button 
            onClick={() => scrollToSection("contact")}
            className="w-full bg-white text-black"
          >
            Связаться
          </Button>
        </div>
      )}
    </header>
  );
}