"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="py-24 relative">
      <div className="container px-4 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Частые вопросы</h2>
          <p className="text-muted-foreground">
            Быстрые ответы, чтобы мы не тратили время на лишнюю переписку
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border-white/10 bg-card/20 rounded-2xl px-6">
            <AccordionTrigger className="text-left hover:no-underline py-6">
              Как происходит оплата?
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-muted-foreground">
              Работаю по предоплате 50% для новых заказчиков. Оплата принимается на карту Сбербанк/Тинькофф или по выставленному счету (если вы юрлицо). Остаток — после сдачи работы.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-white/10 bg-card/20 rounded-2xl px-6">
            <AccordionTrigger className="text-left hover:no-underline py-6">
              Сколько правок можно сделать?
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-muted-foreground">
              Обычно хватает 2-3 итераций. Если мы четко утвердили ТЗ на старте, правок требуется минимум. Мне интересно сделать качественно с первого раза, чем переливать из пустого в порожнее.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-white/10 bg-card/20 rounded-2xl px-6">
            <AccordionTrigger className="text-left hover:no-underline py-6">
              Вы работаете по договору?
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-muted-foreground">
              Да, при необходимости могу заключить договор оказания услуг с физическим или юридическим лицом.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-white/10 bg-card/20 rounded-2xl px-6">
            <AccordionTrigger className="text-left hover:no-underline py-6">
              Нужен ли мне доступ к моим аккаунтам?
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-muted-foreground">
              Нет. Я создаю промты и контент, вы сами их используете. Если требуется настройка интеграций (например, AI-бот), доступ обсуждаем отдельно.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}