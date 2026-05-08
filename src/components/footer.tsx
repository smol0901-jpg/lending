"use client";

import { Github, Twitter, Linkedin, Mail, FileText, ShieldCheck } from "lucide-react";
import { BrainCircuit } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-background pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <BrainCircuit className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">ASV_PROD</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm mb-6">
              Промт-инженер и визуал-продюсер. Создаю системы и контент, которые работают на результат. Подход ТТК в мире AI.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Услуги</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">Обо мне</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a></li>
            </ul>
          </div>

          {/* Legal with Dialogs */}
          <div>
            <h3 className="font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="h-auto p-0 justify-start text-muted-foreground hover:text-foreground">
                      <ShieldCheck className="mr-2 h-4 w-4" />
                      Политика конфиденциальности
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Политика конфиденциальности</DialogTitle>
                    </DialogHeader>
                    <ScrollArea className="h-[60vh] w-full pr-4">
                      <div className="space-y-4 text-sm text-muted-foreground">
                        <p><strong>1. Общие положения</strong></p>
                        <p>Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта ASV_PROD (далее — «Сайт», «Мы»). Используя Сайт, вы соглашаетесь с условиями данной политики.</p>
                        
                        <p><strong>2. Сбор информации</strong></p>
                        <p>Мы собираем только те данные, которые вы предоставляете добровольно при заполнении форм обратной связи (имя, контактные данные в Telegram или email). Мы также собираем технические данные (IP-адрес, тип браузера, операционная система) для аналитики и улучшения работы Сайта.</p>

                        <p><strong>3. Использование информации</strong></p>
                        <p>Ваши данные используются исключительно для связи с вами по вашему запросу, обсуждения деталей заказа и оказания услуг. Мы не передаем ваши персональные данные третьим лицам, за исключением случаев, предусмотренных действующим законодательством РФ.</p>

                        <p><strong>4. Защита информации</strong></p>
                        <p>Мы принимаем необходимые организационные и технические меры для защиты вашей информации от несанкционированного доступа, изменения, раскрытия или уничтожения.</p>

                        <p><strong>5. Изменение политики</strong></p>
                        <p>Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности. Новая редакция политики вступает в силу с момента ее размещения на Сайте.</p>
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </li>
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="h-auto p-0 justify-start text-muted-foreground hover:text-foreground">
                      <FileText className="mr-2 h-4 w-4" />
                      Договор оферты
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Договор публичной оферты</DialogTitle>
                    </DialogHeader>
                    <ScrollArea className="h-[60vh] w-full pr-4">
                      <div className="space-y-4 text-sm text-muted-foreground">
                        <p><strong>1. Предмет договора</strong></p>
                        <p>Смолянинов А. В. (далее — «Исполнитель») обязуется оказать услуги по инженерии промтов, созданию AI-контента и визуального дизайна, а Заказчик обязуется оплатить эти услуги.</p>

                        <p><strong>2. Порядок оформления заказа</strong></p>
                        <p>Оформление заказа осуществляется путем отправки заполненной формы на Сайте или сообщения в мессенджер. Отправка данных и подтверждение заказа является акцептом настоящей оферты.</p>

                        <p><strong>3. Стоимость и порядок оплаты</strong></p>
                        <p>Стоимость услуг определяется индивидуально в зависимости от объема и сложности работ и фиксируется в смете или коммерческом предложении. Оплата производится в рублях РФ путем перевода на банковскую карту Исполнителя или иным согласованным способом.</p>

                        <p><strong>4. Сроки выполнения работ</strong></p>
                        <p>Сроки выполнения работ устанавливаются договоренностью сторон и начинаются с момента получения предоплаты (если она предусмотрена) или подтверждения технического задания.</p>

                        <p><strong>5. Права и обязанности сторон</strong></p>
                        <p>Исполнитель обязуется предоставить результат работы, соответствующий согласованным требованиям. Заказчик обязуется своевременно предоставлять необходимые материалы и feedback. Исключительные права на переданный результат переходят к Заказчику после полной оплаты услуг.</p>

                        <p><strong>6. Ответственность сторон</strong></p>
                        <p>Стороны несут ответственность за невыполнение или ненадлежащее выполнение условий договора в соответствии с действующим законодательством РФ.</p>
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground pt-2">
                <Mail className="h-4 w-4" />
                <span>smolyaninovchef@vk.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} ASV_PROD. Все права защищены.</p>
          <div className="flex gap-6">
            <span>Россия, Санкт-Петербург</span>
          </div>
        </div>
      </div>
    </footer>
  );
}