"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send, MessageCircle, Monitor, Mail, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";

interface ContactSectionProps {
  selectedService: string | null;
}

export default function ContactSection({ selectedService }: ContactSectionProps) {
  const [visitorName, setVisitorName] = useState("");
  const [visitorContact, setVisitorContact] = useState("");

  const messageBody = useMemo(() => {
    let text = "Здравствуйте! Интересует сотрудничество.\n";
    if (selectedService) text += `\nУслуга: ${selectedService}\n`;
    if (visitorName) text += `\nИмя: ${visitorName}`;
    if (visitorContact) text += `\nКонтакт: ${visitorContact}`;
    return text;
  }, [selectedService, visitorName, visitorContact]);

  const getLinks = () => {
    const encodedBody = encodeURIComponent(messageBody);
    const subject = encodeURIComponent("Заявка с сайта ASV_PROD");
    return {
      email: `mailto:smolyaninovchef@vk.com?subject=${subject}&body=${encodedBody}`,
      telegram: `https://t.me/asv_prod?text=${encodedBody}`,
      vk: `https://vk.me/-233759821`
    };
  };

  const links = getLinks();

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[150px] -z-10"></div>

      <div className="container px-4 relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Начнем проект?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Оставьте контактные данные, и я свяжусь с вами в течение 24 часов для обсуждения деталей.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">Ваше имя</Label>
                <Input 
                  id="name" 
                  placeholder="Как к вам обращаться?" 
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                  className="bg-background/50 border-white/10 h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact" className="text-sm font-medium">Контакт (Telegram или Телефон)</Label>
                <Input 
                  id="contact" 
                  placeholder="+7 или @username" 
                  value={visitorContact}
                  onChange={(e) => setVisitorContact(e.target.value)}
                  className="bg-background/50 border-white/10 h-12"
                />
              </div>

              {selectedService && (
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <span className="font-medium text-primary block">Услуга выбрана:</span>
                    {selectedService}
                  </div>
                </div>
              )}

              <Button 
                size="lg" 
                className="w-full h-14 bg-white text-black hover:bg-white/90 font-semibold text-base"
                onClick={() => {
                   if(!visitorName || !visitorContact) {
                     alert("Пожалуйста, заполните поля имени и контакта");
                     return;
                   }
                   window.open(links.telegram, '_blank');
                }}
              >
                <Send className="mr-2 h-5 w-5" />
                Отправить заявку в Telegram
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                Нажимая кнопку, вы переходите в Telegram для отправки сообщения.
              </p>
            </div>
          </motion.div>

          {/* Right: Direct Contacts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid gap-4">
              <a 
                href={links.vk}
                target="_blank"
                className="group p-6 rounded-2xl border border-white/10 bg-card/30 hover:bg-blue-600/10 hover:border-blue-500/30 transition-all flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Monitor className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <div className="font-semibold text-lg">ВКонтакте</div>
                  <div className="text-sm text-muted-foreground">Написать сообщение</div>
                </div>
              </a>

              <a 
                href={links.email}
                className="group p-6 rounded-2xl border border-white/10 bg-card/30 hover:bg-purple-600/10 hover:border-purple-500/30 transition-all flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <div className="font-semibold text-lg">Email</div>
                  <div className="text-sm text-muted-foreground">smolyaninovchef@vk.com</div>
                </div>
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Режим работы
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Отвечаю в течение рабочего дня (Мск). Для срочных вопросов предпочтителен Telegram.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}