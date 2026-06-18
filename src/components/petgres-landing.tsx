"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  Bone,
  CalendarCheck,
  Camera,
  Cat,
  ChevronDown,
  ClipboardCheck,
  Dog,
  Droplets,
  ExternalLink,
  Gift,
  Mail,
  MapPinned,
  MapPin,
  Menu,
  MessageCircleHeart,
  Navigation,
  PackageCheck,
  PawPrint,
  Phone,
  Scissors,
  Send,
  ShoppingBag,
  Sparkles,
  Store,
  Users,
  Wind,
  X,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ctaHref, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Banho e Tosa", href: "#banho-e-tosa" },
  { label: "Produtos", href: "#produtos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M12.04 2.003c-5.5 0-9.97 4.47-9.97 9.97 0 1.76.46 3.47 1.34 4.98L2 22.003l5.18-1.36a9.94 9.94 0 0 0 4.86 1.27h.01c5.5 0 9.97-4.47 9.97-9.97 0-2.66-1.04-5.17-2.92-7.05a9.92 9.92 0 0 0-7.06-2.89zm0 18.18h-.01a8.27 8.27 0 0 1-4.21-1.15l-.3-.18-3.07.81.82-3-.2-.31a8.23 8.23 0 0 1-1.27-4.39c0-4.55 3.71-8.25 8.26-8.25 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.42 5.84c0 4.55-3.71 8.21-8.27 8.21zm4.53-6.16c-.25-.12-1.47-.72-1.7-.8-.23-.08-.39-.12-.55.12-.16.25-.63.8-.78.96-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.41.06-.62.31-.21.25-.81.79-.81 1.94 0 1.14.83 2.24.94 2.4.12.16 1.63 2.49 3.95 3.49.55.24.98.38 1.32.49.55.17 1.05.15 1.45.09.44-.07 1.36-.55 1.55-1.09.19-.54.19-1 .14-1.09-.06-.09-.22-.16-.46-.28z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

type IconItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const services: IconItem[] = [
  {
    title: "Banho e Tosa",
    description:
      "Higiene, conforto e finalização com atenção ao temperamento de cada pet.",
    icon: Scissors,
  },
  {
    title: "Produtos Pet",
    description:
      "Itens selecionados para rotina, cuidado e bem-estar no dia a dia.",
    icon: ShoppingBag,
  },
  {
    title: "Acessórios",
    description:
      "Opções práticas para passeio, conforto, brincadeira e organização.",
    icon: Gift,
  },
  {
    title: "Cuidados e Higiene",
    description:
      "Orientação próxima para manter seu pet limpo, cheiroso e protegido.",
    icon: Droplets,
  },
];

const groomingSteps: Array<IconItem> = [
  {
    title: "Recepção",
    description:
      "Boas-vindas tranquilas e cadastro rápido, respeitando o tempo de adaptação do pet.",
    icon: Users,
  },
  {
    title: "Avaliação",
    description:
      "Análise da pelagem, da pele e de cuidados específicos antes de iniciar o banho.",
    icon: BadgeCheck,
  },
  {
    title: "Banho",
    description:
      "Shampoo escolhido para o tipo de pelo, com água em temperatura agradável.",
    icon: Droplets,
  },
  {
    title: "Secagem",
    description:
      "Secadores em potência segura para conforto e proteção da pele do pet.",
    icon: Wind,
  },
  {
    title: "Tosa",
    description:
      "Tosa higiênica ou estética, sempre alinhada com o tutor antes de começar.",
    icon: Scissors,
  },
  {
    title: "Finalização",
    description:
      "Perfume suave, laço ou gravatinha e devolução do pet pronto para casa.",
    icon: Sparkles,
  },
];

const productCategories: Array<IconItem & { tag: string }> = [
  {
    title: "Higiene Premium",
    description: "Shampoos, condicionadores e itens de limpeza para um cuidado completo.",
    tag: "Curadoria",
    icon: Droplets,
  },
  {
    title: "Acessórios",
    description: "Camas, potes, comedouros e utilidades para o dia a dia do pet.",
    tag: "Conforto",
    icon: PackageCheck,
  },
  {
    title: "Brinquedos",
    description: "Diversão e enriquecimento ambiental com segurança garantida.",
    tag: "Diversão",
    icon: Bone,
  },
  {
    title: "Guias e Coleiras",
    description: "Passeios mais tranquilos com itens ajustados e resistentes.",
    tag: "Passeio",
    icon: PawPrint,
  },
];

const galleryPlaceholders = [
  { title: "Fachada na Rua Juá", icon: Store, color: "bg-[#eaf6ff]" },
  { title: "Equipe no atendimento", icon: Users, color: "bg-[#fff7de]" },
  { title: "Banho e tosa em processo", icon: Scissors, color: "bg-[#eefaf4]" },
  { title: "Pets atendidos", icon: Dog, color: "bg-[#fff1ea]" },
];

const trustSignals = [
  {
    title: "Rua Juá, 160",
    description: "Atendimento local no bairro Saúde, São Paulo/SP.",
    icon: MapPinned,
  },
  {
    title: "Agendamento direto",
    description: "Conversa objetiva pelo WhatsApp, sem formulário frio.",
    icon: MessageCircleHeart,
  },
  {
    title: "Rotina com cuidado",
    description: "Processo de banho e tosa pensado para reduzir estresse.",
    icon: ClipboardCheck,
  },
];

const testimonials = [
  {
    name: "Carla S.",
    pet: "Theo",
    photo: "/assets/testimonials/pet-theo.svg",
    quote:
      "O Theo voltou cheirosinho e super calminho. Atendimento atencioso do início ao fim.",
    rotation: -2.6,
  },
  {
    name: "Renata M.",
    pet: "Mia",
    photo: "/assets/testimonials/pet-mia.svg",
    quote:
      "A Mia é uma gatinha tímida e foi recebida com toda a paciência. Saiu macia e perfumada.",
    rotation: 1.6,
  },
  {
    name: "Bruno A.",
    pet: "Luna",
    photo: "/assets/testimonials/pet-luna.svg",
    quote:
      "Banho e tosa impecáveis. A Luna ama vir aqui — isso já diz tudo sobre o cuidado.",
    rotation: -1.2,
  },
];

const faqItems = [
  {
    question: "Onde fica a Petgres?",
    answer:
      "Estamos na Rua Juá, 160, bairro Saúde, em São Paulo/SP, com acesso fácil para moradores da Saúde, Bosque da Saúde e Praça da Árvore.",
  },
  {
    question: "Como agendar banho e tosa?",
    answer:
      "O agendamento é feito pelo WhatsApp. A conversa já começa com contexto, facilitando horários, dúvidas e próximos passos.",
  },
  {
    question: "Vocês atendem gatos?",
    answer:
      "Sim. Atendemos cães e gatos com processo de banho, secagem e higiene adaptado ao temperamento de cada pet.",
  },
  {
    question: "Quais formas de pagamento aceitam?",
    answer:
      "Trabalhamos com as principais formas de pagamento, incluindo Pix, débito e crédito. Confirme as opções pelo WhatsApp antes de fechar o atendimento.",
  },
  {
    question: "Têm produtos para raças pequenas e grandes?",
    answer:
      "Sim. Trabalhamos com curadoria para diferentes portes e necessidades. Consulte a disponibilidade pelo WhatsApp.",
  },
  {
    question: "Posso ir comprar produtos sem agendar?",
    answer:
      "Para compra de produtos não é necessário agendar. Apenas o serviço de banho e tosa precisa de horário marcado.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const waSchedule = ctaHref("schedule");
const waGeneral = ctaHref("general");
const waProducts = ctaHref("products");
const waTrust = ctaHref("trust");

function MotionBlock({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left",
      )}
    >
      <Badge
        className={cn(
          "mb-4",
          tone === "dark" && "border-white/20 bg-white/10 text-white",
        )}
      >
        {eyebrow}
      </Badge>
      <h2
        className={cn(
          "text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl",
          tone === "dark" ? "text-white" : "text-[var(--ink)]",
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mt-4 text-base leading-7 sm:text-lg",
          tone === "dark" ? "text-white/76" : "text-[var(--muted)]",
        )}
      >
        {description}
      </p>
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={cn(
          "relative z-10 mx-auto flex w-full max-w-[1180px] items-center justify-between rounded-full px-4 py-3 transition-all duration-300",
          scrolled ? "glass" : "border border-transparent bg-white/52 backdrop-blur-sm",
        )}
      >
        <a
          href="#inicio"
          className="flex min-w-0 items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
          aria-label="Ir para o início da página da Petgres"
        >
          <span className="relative grid size-12 shrink-0 place-items-center overflow-hidden rounded-full bg-white shadow-sm">
            <Image
              src="/assets/petgres-logo-clean.png"
              alt="Logo Petgres"
              width={46}
              height={46}
              priority
            />
          </span>
          <span className="hidden min-w-0 flex-col leading-none sm:flex">
            <strong className="text-base font-bold text-[var(--ink)]">Petgres</strong>
            <span className="mt-1 text-xs font-medium text-[var(--muted)]">
              Bairro Saúde
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navItems.map((nav) => (
            <a
              key={nav.href}
              href={nav.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-[var(--muted)] transition hover:bg-[var(--soft-blue)] hover:text-[var(--brand-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
            >
              {nav.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <Button asChild size="sm">
            <a href={waSchedule} target="_blank" rel="noreferrer">
              <CalendarCheck />
              Agendar Atendimento
            </a>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Fechar menu ao tocar fora"
              className="fixed inset-0 z-0 bg-[rgba(242,248,252,0.86)] backdrop-blur-[6px] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              id="mobile-menu"
              className="glass relative z-10 mx-auto mt-3 w-[calc(100%-0.5rem)] max-w-[1180px] rounded-[8px] p-3 lg:hidden"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <nav className="grid gap-1" aria-label="Navegação mobile">
                {navItems.map((nav) => (
                  <a
                    key={nav.href}
                    href={nav.href}
                    onClick={() => setOpen(false)}
                    className="rounded-[8px] px-4 py-3 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--soft-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
                  >
                    {nav.label}
                  </a>
                ))}
              </nav>
              <Button asChild className="mt-3 w-full" size="lg">
                <a href={waSchedule} target="_blank" rel="noreferrer">
                  <CalendarCheck />
                  Agendar Atendimento
                </a>
              </Button>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();
  const floatingItems = [
    { label: "Banho e Tosa", className: "left-4 top-5" },
    { label: "Produtos Pet", className: "right-4 top-20" },
    { label: "Acessórios", className: "bottom-20 left-6" },
    { label: "Cuidado com carinho", className: "bottom-5 right-6" },
  ];

  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-4 pb-14 pt-28 sm:pt-32 lg:pb-20 lg:pt-36"
    >
      <div className="absolute inset-0 -z-10 soft-grid opacity-60" />
      <div className="absolute inset-0 -z-10 paw-pattern opacity-50" />
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <motion.div
          variants={container}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={item}>
            <Badge>
              <PawPrint className="size-3.5" />
              Petshop no bairro Saúde
            </Badge>
          </motion.div>
          <motion.h1
            variants={item}
            className="text-balance mt-5 text-4xl font-bold leading-[1.04] text-[var(--ink)] sm:text-5xl lg:text-6xl"
          >
            Cuidado, carinho e bem-estar para o seu pet no bairro Saúde.
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl"
          >
            Na Petgres, seu pet encontra banho e tosa, produtos, acessórios e
            atendimento dedicado para ficar limpo, saudável e feliz.
          </motion.p>
          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild size="lg">
              <a href={waSchedule} target="_blank" rel="noreferrer">
                <CalendarCheck />
                Agendar Atendimento
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={waGeneral} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="size-4 text-[#25D366]" />
                Falar no WhatsApp
              </a>
            </Button>
          </motion.div>
          <motion.div
            variants={item}
            className="mt-8 hidden max-w-xl grid-cols-3 gap-3 sm:grid"
            aria-label="Destaques da Petgres"
          >
            {[
              ["Bairro Saúde", MapPin],
              ["Banho e tosa", Scissors],
              ["Produtos pet", ShoppingBag],
            ].map(([label, Icon]) => {
              const FeatureIcon = Icon as LucideIcon;
              return (
                <div
                  key={label as string}
                  className="rounded-[8px] border border-[var(--line)] bg-white/76 p-3 text-center shadow-sm backdrop-blur"
                >
                  <FeatureIcon className="mx-auto mb-2 size-4 text-[var(--brand-blue)]" />
                  <p className="text-xs font-bold text-[var(--ink)]">{label as string}</p>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
          className="relative mx-auto hidden w-full max-w-xl sm:block"
        >
          <div className="premium-ring relative aspect-[4/3] overflow-hidden rounded-[8px] bg-white">
            <Image
              src="/assets/petgres-hero-pets.webp"
              alt="Cachorro e gato em ambiente limpo de cuidado pet"
              fill
              sizes="(min-width: 1024px) 520px, 92vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[rgba(17,50,80,0.44)] to-transparent" />
          </div>

          <div className="absolute -left-4 -top-4 grid size-24 place-items-center rounded-full bg-white shadow-[0_18px_45px_rgba(16,48,82,0.16)]">
            <Image
              src="/assets/petgres-logo-clean.png"
              alt="Petgres"
              width={76}
              height={76}
              className="rounded-full"
            />
          </div>

          {floatingItems.map((floating, index) => (
            <motion.div
              key={floating.label}
              className={cn(
                "absolute hidden rounded-full border border-white/80 bg-white/88 px-4 py-2 text-xs font-bold text-[var(--ink)] shadow-[0_16px_34px_rgba(16,48,82,0.16)] backdrop-blur sm:block",
                floating.className,
              )}
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, index % 2 ? -8 : 8, 0] }
              }
              transition={{
                duration: 4 + index * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {floating.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="bg-white px-4 py-5">
      <div className="section-shell grid gap-3 md:grid-cols-3">
        {trustSignals.map((signal) => (
          <a
            key={signal.title}
            href={signal.title === "Agendamento direto" ? waGeneral : "#localizacao"}
            target={signal.title === "Agendamento direto" ? "_blank" : undefined}
            rel={signal.title === "Agendamento direto" ? "noreferrer" : undefined}
            className="group flex items-start gap-3 rounded-[8px] border border-[var(--line)] bg-[#f7fbff] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-[var(--brand-blue)] hover:bg-white hover:shadow-[0_16px_40px_rgba(7,103,201,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-[var(--brand-blue)] shadow-sm">
              <signal.icon className="size-5" />
            </span>
            <span>
              <strong className="block text-sm font-bold text-[var(--ink)]">
                {signal.title}
              </strong>
              <span className="mt-1 block text-sm leading-5 text-[var(--muted)]">
                {signal.description}
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="relative section-y bg-white px-4">
      <div className="absolute inset-0 paw-pattern opacity-50" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" aria-hidden />
      <div className="section-shell relative">
        <SectionIntro
          eyebrow="Serviços"
          title="Tudo que a rotina do seu pet precisa, com atendimento próximo."
          description="A Petgres combina cuidado no banho e tosa com produtos e acessórios para deixar o dia a dia mais prático, confortável e seguro."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <MotionBlock key={service.title} delay={index * 0.04}>
              <Card className="group h-full transition duration-300 hover:-translate-y-1 hover:border-[var(--brand-blue)] hover:shadow-[0_24px_60px_rgba(7,103,201,0.14)]">
                <CardHeader>
                  <div className="mb-4 grid size-12 place-items-center rounded-[8px] bg-[var(--soft-blue)] text-[var(--brand-blue)] transition group-hover:bg-[var(--brand-blue)] group-hover:text-white">
                    <service.icon className="size-6" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>{service.description}</CardContent>
              </Card>
            </MotionBlock>
          ))}
        </div>
        <MotionBlock className="mt-10 flex justify-center">
          <Button asChild variant="secondary">
            <a href={waTrust} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="size-4 text-[#25D366]" />
              Conversar antes de agendar
            </a>
          </Button>
        </MotionBlock>
      </div>
    </section>
  );
}

function Grooming() {
  return (
    <section id="banho-e-tosa" className="relative section-y px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <Image
          src="/assets/petgres-hero-pets.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7fbff]/95 via-[#f7fbff]/92 to-[#f7fbff]" />
        <div className="absolute inset-0 paw-pattern opacity-40" />
      </div>

      <div className="section-shell relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <MotionBlock>
          <SectionIntro
            align="left"
            eyebrow="Banho e Tosa"
            title="Um processo cuidadoso do primeiro contato à finalização."
            description="Cada etapa foi pensada para reduzir estresse, manter a higiene em dia e entregar um pet cheiroso, confortável e bem cuidado."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a href={waSchedule} target="_blank" rel="noreferrer">
                <CalendarCheck />
                Agendar Banho e Tosa
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href={`tel:+${siteConfig.whatsapp}`}>
                <Phone />
                Ligar para a Petgres
              </a>
            </Button>
          </div>
        </MotionBlock>

        <MotionBlock delay={0.08}>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {groomingSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative rounded-[8px] border border-[var(--line)] bg-white/95 p-5 shadow-sm backdrop-blur-sm"
              >
                <span className="absolute right-4 top-4 text-xs font-bold text-[var(--muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="grid size-11 place-items-center rounded-full bg-[var(--soft-warm)] text-[var(--brand-blue)]">
                  <step.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-base font-bold text-[var(--ink)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </MotionBlock>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section
      id="produtos"
      className="relative section-y bg-gradient-to-b from-[#081d3a] via-[var(--ink)] to-[#081d3a] px-4 text-white overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-64 premium-glow pointer-events-none" aria-hidden />
      <div className="absolute inset-0 paw-pattern opacity-20" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-warm)]/70 to-transparent" aria-hidden />

      <div className="section-shell relative">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="max-w-xl">
            <Badge className="mb-4 border-[var(--brand-warm)]/30 bg-[var(--brand-warm)]/10 text-[var(--brand-warm)]">
              <Sparkles className="size-3.5" />
              Curadoria Premium
            </Badge>
            <h2 className="text-balance text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Produtos selecionados para cuidar do seu pet entre uma visita e outra.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/76 sm:text-lg">
              Cada item foi escolhido pensando na qualidade, na rotina e no bem-estar do seu cão ou gato. Consulte a disponibilidade pelo WhatsApp.
            </p>
          </div>
          <div className="flex justify-start lg:justify-end">
            <Button asChild variant="warm" size="lg">
              <a href={waProducts} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="size-4 text-[#0a1f3d]" />
                Consultar pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((category, index) => (
            <MotionBlock key={category.title} delay={index * 0.05}>
              <a
                href={waProducts}
                target="_blank"
                rel="noreferrer"
                className="premium-product-card group flex h-full flex-col justify-between rounded-[10px] p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-warm)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="grid size-14 place-items-center rounded-[10px] bg-gradient-to-br from-[var(--brand-warm)] to-[#d99518] text-[#0a1f3d] shadow-[0_8px_24px_rgba(246,191,63,0.35)]">
                      <category.icon className="size-7" />
                    </div>
                    <span className="rounded-full border border-white/16 bg-white/[0.05] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/72">
                      {category.tag}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white">{category.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/72">
                    {category.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[var(--brand-warm)]">
                  <WhatsAppIcon className="size-4 text-[var(--brand-warm)]" />
                  <span>Consultar disponibilidade</span>
                  <ExternalLink className="size-3.5 transition group-hover:translate-x-1" />
                </div>
              </a>
            </MotionBlock>
          ))}
        </div>

        <MotionBlock className="mt-14">
          <div className="rounded-[12px] border border-white/12 bg-white/[0.04] p-6 text-center backdrop-blur sm:p-8">
            <p className="text-base text-white/80 sm:text-lg">
              Não encontrou o que procura? Mande mensagem que a gente busca pra você.
            </p>
            <div className="mt-5 flex justify-center">
              <Button asChild variant="warm" size="lg">
                <a href={waProducts} target="_blank" rel="noreferrer">
                  <WhatsAppIcon className="size-4 text-[#0a1f3d]" />
                  Pedir orientação personalizada
                </a>
              </Button>
            </div>
          </div>
        </MotionBlock>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galeria" className="section-y px-4">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <SectionIntro
              align="left"
              eyebrow="Galeria"
              title="Fotos reais devem ser a prova visual da Petgres."
              description="A estrutura prioriza fachada, equipe, processo de banho e tosa e pets atendidos. Enquanto o acervo real não entra, nada aqui inventa depoimentos ou bastidores."
            />
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="secondary">
                <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
                  <InstagramIcon className="size-4" />
                  Ver Instagram
                </a>
              </Button>
              <Button asChild>
                <a href={waGeneral} target="_blank" rel="noreferrer">
                  <WhatsAppIcon className="size-4 text-[#25D366]" />
                  Pedir fotos pelo WhatsApp
                </a>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {galleryPlaceholders.map((photo, index) => (
              <MotionBlock key={photo.title} delay={index * 0.05}>
                <div
                  className={cn(
                    "group flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-[8px] border border-[var(--line)] p-5 shadow-sm",
                    photo.color,
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="grid size-11 place-items-center rounded-full bg-white text-[var(--brand-blue)] shadow-sm">
                      <photo.icon className="size-5" />
                    </div>
                    <Camera className="size-5 text-[var(--muted)] transition group-hover:text-[var(--brand-blue)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--ink)]">
                      {photo.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-[var(--muted)]">
                      Foto real em breve
                    </p>
                  </div>
                </div>
              </MotionBlock>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="depoimentos" className="relative section-y bg-white px-4 overflow-hidden">
      <div className="absolute inset-0 paw-pattern opacity-40" aria-hidden />
      <div className="section-shell relative">
        <SectionIntro
          eyebrow="Depoimentos"
          title="Histórias reais de quem confia o pet à Petgres."
          description="Cada laço, cada banho e cada tosa virou memória boa. Veja o que os tutores contam sobre o cuidado da Petgres."
        />

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <MotionBlock key={testimonial.name} delay={index * 0.08} className="flex justify-center">
              <motion.figure
                initial={{ rotate: testimonial.rotation }}
                whileInView={{ rotate: testimonial.rotation }}
                whileHover={{ rotate: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="polaroid w-full max-w-[300px] rounded-[6px]"
              >
                <div className="polaroid-photo relative aspect-square">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={testimonial.photo}
                    alt={`Retrato de ${testimonial.pet}, pet do depoimento`}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-4 text-center">
                  <p className="polaroid-caption text-2xl text-[var(--ink)] leading-none">
                    {testimonial.pet} &amp; {testimonial.name}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    “{testimonial.quote}”
                  </p>
                </figcaption>
              </motion.figure>
            </MotionBlock>
          ))}
        </div>

        <MotionBlock className="mt-14 flex justify-center">
          <Button asChild variant="secondary">
            <a href={waGeneral} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="size-4 text-[#25D366]" />
              Conversar com a Petgres
            </a>
          </Button>
        </MotionBlock>
      </div>
    </section>
  );
}

function FaqQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative section-y px-4 overflow-hidden">
      <div className="absolute inset-0 checker-pattern" aria-hidden />
      <div className="absolute inset-0 checker-overlay" aria-hidden />

      <div className="section-shell relative">
        <SectionIntro
          eyebrow="Dúvidas frequentes"
          title="As respostas para as perguntas que a gente mais recebe."
          description="Se a sua dúvida não estiver aqui, fala com a gente pelo WhatsApp — a resposta sai rápida."
        />

        <div className="mx-auto mt-12 grid max-w-3xl gap-3">
          {faqItems.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <MotionBlock key={faq.question} delay={index * 0.03}>
                <div className="overflow-hidden rounded-[10px] border border-[var(--line)] bg-white shadow-[0_18px_45px_rgba(7,103,201,0.08)]">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="faq-trigger flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-[var(--soft-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] sm:px-6 sm:py-5"
                  >
                    <span className="flex items-center gap-3">
                      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[var(--soft-blue)] text-[var(--brand-blue)]">
                        <PawPrint className="size-4" />
                      </span>
                      <span className="text-base font-bold text-[var(--ink)] sm:text-lg">
                        {faq.question}
                      </span>
                    </span>
                    <ChevronDown
                      className={cn(
                        "faq-chevron size-5 shrink-0 text-[var(--brand-blue)]",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                      >
                        <div className="border-t border-[var(--line)] px-5 py-4 text-sm leading-7 text-[var(--muted)] sm:px-6 sm:py-5 sm:text-base">
                          {faq.answer}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </MotionBlock>
            );
          })}
        </div>

        <MotionBlock className="mt-12 flex justify-center">
          <Button asChild>
            <a href={waGeneral} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="size-4 text-white" />
              Tirar dúvida pelo WhatsApp
            </a>
          </Button>
        </MotionBlock>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="localizacao" className="section-y px-4">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
        <MotionBlock>
          <div className="flex h-full flex-col justify-between rounded-[8px] border border-[var(--line)] bg-white p-6 shadow-[0_18px_50px_rgba(16,48,82,0.08)] sm:p-8">
            <div>
              <Badge>
                <MapPin className="size-3.5" />
                Localização
              </Badge>
              <h2 className="mt-5 text-balance text-3xl font-bold leading-tight text-[var(--ink)] sm:text-4xl">
                Petgres no bairro Saúde, perto da sua rotina.
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                {siteConfig.address}
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <Button asChild>
                <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">
                  <Navigation />
                  Como chegar
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href={waGeneral} target="_blank" rel="noreferrer">
                  <WhatsAppIcon className="size-4 text-[#25D366]" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </MotionBlock>

        <MotionBlock delay={0.08}>
          <div className="map-frame relative h-[360px] overflow-hidden rounded-[8px] border border-[var(--line)] bg-[var(--soft-blue)] shadow-[0_18px_50px_rgba(16,48,82,0.08)] lg:h-full">
            <div className="absolute inset-0 grid place-items-center p-6 text-center text-[var(--ink)]">
              <div>
                <MapPin className="mx-auto size-9 text-[var(--brand-blue)]" />
                <p className="mt-3 text-sm font-bold">{siteConfig.address}</p>
              </div>
            </div>
            <iframe
              className="relative z-10"
              title="Mapa com localização da Petgres no bairro Saúde"
              src={siteConfig.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="absolute bottom-4 left-4 right-4 z-20 rounded-[8px] border border-[var(--line)] bg-white/92 px-4 py-3 text-sm font-semibold text-[var(--ink)] shadow-sm backdrop-blur sm:right-auto">
              {siteConfig.address}
            </div>
          </div>
        </MotionBlock>
      </div>
    </section>
  );
}

function Contact() {
  const contacts = [
    {
      label: "WhatsApp",
      value: siteConfig.whatsappDisplay,
      href: waGeneral,
      icon: WhatsAppIcon,
      iconClass: "text-[#25D366]",
      external: true,
    },
    {
      label: "E-mail",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      icon: Mail,
      iconClass: "text-[var(--brand-blue)]",
      external: false,
    },
    {
      label: "Instagram",
      value: `@${siteConfig.instagram}`,
      href: siteConfig.instagramUrl,
      icon: InstagramIcon,
      iconClass: "text-[#E1306C]",
      external: true,
    },
  ];

  return (
    <section id="contato" className="section-y bg-white px-4">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <SectionIntro
            align="left"
            eyebrow="Contato"
            title="Fale com a Petgres do jeito mais fácil para você."
            description="Agende banho e tosa, consulte produtos e tire dúvidas diretamente pelos canais oficiais."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.external ? "_blank" : undefined}
                  rel={contact.external ? "noreferrer" : undefined}
                  className="group rounded-[8px] border border-[var(--line)] bg-[#f7fbff] p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--brand-blue)] hover:bg-white hover:shadow-[0_20px_50px_rgba(7,103,201,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <Icon className={cn("size-6", contact.iconClass)} />
                    {contact.external ? (
                      <ExternalLink className="size-4 text-[var(--muted)]" />
                    ) : null}
                  </div>
                  <p className="mt-5 text-sm font-semibold text-[var(--muted)]">
                    {contact.label}
                  </p>
                  <p className="mt-1 break-words text-base font-bold text-[var(--ink)]">
                    {contact.value}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="px-4 pb-16">
      <div className="section-shell overflow-hidden rounded-[8px] bg-[var(--brand-blue)] text-white shadow-[0_26px_70px_rgba(7,103,201,0.25)]">
        <div className="relative grid gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
          <div className="absolute right-8 top-8 hidden text-white/12 lg:block">
            <Cat className="size-32" />
          </div>
          <div className="relative">
            <Badge className="border-white/22 bg-white/12 text-white">
              <Sparkles className="size-3.5" />
              Atendimento Petgres
            </Badge>
            <h2 className="mt-5 text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Seu pet merece cuidado de verdade.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/78 sm:text-lg">
              Agende um horário ou fale com a Petgres pelo WhatsApp para cuidar
              do seu melhor amigo com carinho e segurança.
            </p>
          </div>
          <div className="relative flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild variant="warm" size="lg">
              <a href={waSchedule} target="_blank" rel="noreferrer">
                <CalendarCheck />
                Agendar Atendimento
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="border border-white/32 bg-white text-[var(--brand-blue)] hover:bg-white/92"
            >
              <a href={waGeneral} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="size-4 text-[#25D366]" />
                Conversar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const shouldShow = window.scrollY > 420;
      setVisible((current) => (current === shouldShow ? current : shouldShow));
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          href={waSchedule}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="fixed inset-x-4 bottom-[calc(0.875rem+env(safe-area-inset-bottom))] z-50 flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--brand-blue)] px-5 text-sm font-bold text-white shadow-[0_18px_45px_rgba(0,83,178,0.32)] ring-1 ring-white/70 md:hidden"
          aria-label="Agendar atendimento pelo WhatsApp"
        >
          <Send className="size-4" />
          Agendar pelo WhatsApp
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--footer-blue)] px-4 py-12 text-white">
      <div className="section-shell grid gap-8 md:grid-cols-[1fr_auto_auto]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-14 place-items-center overflow-hidden rounded-full bg-white">
              <Image
                src="/assets/petgres-logo-clean.png"
                alt="Logo Petgres"
                width={54}
                height={54}
                className="rounded-full"
              />
            </span>
            <div>
              <p className="text-lg font-bold text-white">Petgres</p>
              <p className="text-sm text-white/72">Petshop no bairro Saúde</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-white/72">
            Banho e tosa, produtos, acessórios e atendimento com carinho para
            cães e gatos em São Paulo/SP.
          </p>
        </div>
        <nav aria-label="Links rápidos" className="grid gap-2 text-sm">
          {navItems.map((nav) => (
            <a
              key={nav.href}
              href={nav.href}
              className="font-semibold text-white/76 transition hover:text-white"
            >
              {nav.label}
            </a>
          ))}
        </nav>
        <div className="grid gap-2 text-sm text-white/76">
          <a
            className="flex items-center gap-2 font-semibold text-white/86 hover:text-white"
            href={waGeneral}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon className="size-4 text-[#25D366]" />
            {siteConfig.whatsappDisplay}
          </a>
          <a
            className="flex items-center gap-2 font-semibold text-white/86 hover:text-white"
            href={`mailto:${siteConfig.email}`}
          >
            <Mail className="size-4" />
            {siteConfig.email}
          </a>
          <a
            className="flex items-center gap-2 font-semibold text-white/86 hover:text-white"
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon className="size-4" />
            @{siteConfig.instagram}
          </a>
          <span className="flex items-start gap-2 text-white/72">
            <MapPin className="mt-0.5 size-4 shrink-0" />
            {siteConfig.address}
          </span>
        </div>
      </div>
      <div className="section-shell mt-8 flex flex-col gap-2 border-t border-white/12 pt-6 text-xs text-white/64 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Petgres. Todos os direitos reservados.</span>
        <span>Cuidado local, atendimento próximo.</span>
      </div>
    </footer>
  );
}

export function PetgresLanding() {
  return (
    <main className="pb-20 md:pb-0">
      <Header />
      <Hero />
      <TrustStrip />
      <Services />
      <Grooming />
      <Products />
      <Gallery />
      <Testimonials />
      <FaqQuestions />
      <Location />
      <Contact />
      <FinalCta />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
