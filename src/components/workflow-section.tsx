"use client";

import { FileSearch, Layers, ChefHat, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: FileSearch,
    title: "1. Ингредиенты (Анализ)",
    description: "Погружаюсь в вашу нишу. Изучаю конкурентов, ТЗ и текущие боли. Собираю данные (промты, референсы).",
    color: "text-blue-400",
    bg: "bg-blue-400/10"
  },
  {
    icon: Layers,
    title: "2. Рецептура (Архитектура)",
    description: "Разрабатываю структуру промта или агента по методу ТТК. Создаю систему, а не просто текст.",
    color: "text-purple-400",
    bg: "bg-purple-400/10"
  },
  {
    icon: ChefHat,
    title: "3. Тестирование (Дегустация)",
    description: "Запускаю итерации, проверяю на стабильность. Очищаю результат от мусора нейросети.",
    color: "text-orange-400",
    bg: "bg-orange-400/10"
  },
  {
    icon: Rocket,
    title: "4. Подача (Сдача)",
    description: "Передаю готовый результат + инструкции по использованию. Вы получаете работающий инструмент.",
    color: "text-pink-400",
    bg: "bg-pink-400/10"
  }
];

export default function WorkflowSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container px-4 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Как я работаю</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Четкий процесс без хаоса. От анализа до готового решения по шеф-технологии.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connector Line for Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-white/10 to-transparent"></div>
              )}

              <div className="h-full p-6 rounded-2xl border border-white/5 bg-card/30 backdrop-blur-sm hover:bg-white/5 transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl ${step.bg} ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}