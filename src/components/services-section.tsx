"use client";

import { Button } from "@/components/ui/button";
import { Camera, FileText, ChefHat, ArrowRight, Zap, Palette, Bot } from "lucide-react";
import { motion } from "framer-motion";

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

const products = [
  {
    id: 1,
    title: "Визуалы для Маркетплейсов",
    description: "Создание продающих фото для Ozon и Wildberries. Проработка света, текстур и композиции, повышающей конверсию.",
    icon: Camera,
    features: ["Ozon / WB Style", "High Key Lighting", "Appetite Appeal"],
    gradient: "from-blue-500/20 to-indigo-500/5",
    borderColor: "group-hover:border-blue-500/50"
  },
  {
    id: 2,
    title: "Инженерия Промтов",
    description: "Разработка архитектуры промтов по принципу ТТК. Создаю системы, обеспечивающие стабильный результат.",
    icon: FileText,
    features: ["Prompt Engineering", "AI Agents", "Process Automation"],
    gradient: "from-purple-500/20 to-pink-500/5",
    borderColor: "group-hover:border-purple-500/50"
  },
  {
    id: 3,
    title: "Концептуальный Фуд-дизайн",
    description: "Визуализация меню и новых блюд. Объединяю кулинарные технологии и генеративный арт для создания идеальных изображений еды.",
    icon: ChefHat,
    features: ["Menu Engineering", "Food Styling", "Concept Art"],
    gradient: "from-orange-500/20 to-red-500/5",
    borderColor: "group-hover:border-orange-500/50"
  }
];

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const handleCardClick = (title: string) => {
    onSelectService(title);
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-32 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container px-4 relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Экспертиза, которая <br />
              <span className="text-primary">приносит прибыль</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Комплексные решения на стыке кулинарии и искусственного интеллекта
            </p>
          </div>
          <div className="hidden md:block">
            <Button 
              variant="ghost" 
              className="text-muted-foreground hover:text-foreground"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Нужна консультация? <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group h-full"
            >
              <div 
                onClick={() => handleCardClick(product.title)}
                className={`relative h-full flex flex-col bg-card/50 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20 cursor-pointer ${product.borderColor}`}
              >
                {/* Background Gradient Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                
                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <product.icon className="w-7 h-7 text-foreground" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {product.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                    {product.description}
                  </p>

                  {/* Features Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.features.map((feature) => (
                      <span 
                        key={feature} 
                        className="px-3 py-1 text-xs font-medium rounded-full border border-white/10 bg-white/5 text-foreground/70"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Action */}
                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-sm font-medium text-primary group-hover:text-foreground transition-colors">
                      Выбрать услугу
                    </span>
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}