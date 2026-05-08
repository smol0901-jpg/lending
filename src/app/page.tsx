"use client";

import { useState } from "react";
import { useScroll } from "framer-motion";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import WorkflowSection from "@/components/workflow-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { RadarChart } from "@/components/visuals/radar-chart";
import { Starfield } from "@/components/visuals/starfield";
import FlightStatus from "@/components/flight-status";

export default function Home() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  
  // Global scroll hook for warp effects
  const { scrollYProgress } = useScroll();

  const skillsData = [
    { label: "AI Strategy", value: 95 },
    { label: "Prompting", value: 100 },
    { label: "Visuals", value: 85 },
    { label: "Management", value: 90 },
    { label: "FoodTech", value: 95 },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/30">
      {/* Noise Overlay */}
      <div className="bg-noise"></div>

      {/* Global Warp Background */}
      <Starfield scrollProgress={scrollYProgress} />

      <Header />
      
      <main className="flex-1 relative z-10">
        <HeroSection />
        
        <ServicesSection 
          onSelectService={setSelectedService}
        />

        {/* About / Process Section */}
        <section id="about" className="py-24 border-y border-white/5 bg-muted/30 relative overflow-hidden">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">От шеф-повара к <span className="text-primary">AI-архитектору</span></h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Меня зовут <span className="text-foreground font-semibold">Александр Смолянинов</span>. 
                    Проработал в общепите более 20 лет, пройдя путь от повара до руководителя. 
                    Управлял кухнями, столовыми, производствами и ресторанами в Санкт-Петербурге, Кингисеппе и Гатчине.
                  </p>
                  <p>
                    В 2017 году я начал автоматизировать рутину в Excel, применяя сложные формулы для расчета себестоимости. Сегодня я перенес этот системный подход в мир нейросетей.
                  </p>
                  <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5">
                    <h3 className="text-foreground font-bold mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      Методология ТТК
                    </h3>
                    <p className="text-sm">
                      Для меня промт — это не просто запрос, а Технологическая карта. Это четкая инструкция, 
                      гарантирующая, что нейросеть выдаст предсказуемый и качественный результат, а не случайный набор пикселей.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 blur-3xl rounded-full"></div>
                <div className="relative">
                  <RadarChart data={skillsData} size={320} />
                  <div className="text-center mt-4">
                    <span className="text-sm text-muted-foreground uppercase tracking-widest">Компетенции</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WorkflowSection />

        <ContactSection selectedService={selectedService} />
      </main>

      {/* Flight HUD */}
      <FlightStatus />

      <Footer />
    </div>
  );
}