"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  AtSign,
  BadgeCheck,
  Bone,
  CalendarCheck,
  Camera,
  Cat,
  CheckCircle2,
  Dog,
  Droplets,
  ExternalLink,
  Gift,
  Heart,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  PackageCheck,
  PawPrint,
  Phone,
  Quote,
  Scissors,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Store,
  Users,
  Wind,
  X,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Banho e Tosa", href: "#banho-e-tosa" },
  { label: "Produtos", href: "#produtos" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

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

const groomingSteps = [
  { title: "Recepção", icon: Users },
  { title: "Avaliação", icon: BadgeCheck },
  { title: "Banho", icon: Droplets },
  { title: "Secagem", icon: Wind },
  { title: "Tosa", icon: Scissors },
  { title: "Finalização", icon: Sparkles },
];

const productCategories: IconItem[] = [
  {
    title: "Higiene",
    description: "Shampoos, itens de limpeza e cuidados para a rotina.",
    icon: Droplets,
  },
  {
    title: "Acessórios",
    description: "Camas, potes, itens de conforto e utilidades pet.",
    icon: PackageCheck,
  },
  {
    title: "Brinquedos",
    description: "Opções para enriquecer o dia e gastar energia com segurança.",
    icon: Bone,
  },
  {
    title: "Guias e coleiras",
    description: "Itens para passeios mais tranquilos e bem ajustados.",
    icon: PawPrint,
  },
];

const differentials: IconItem[] = [
  {
    title: "Atendimento com carinho",
    description: "Relação próxima, escuta cuidadosa e atenção aos detalhes.",
    icon: Heart,
  },
  {
    title: "Vila Mariana",
    description: "Endereço fácil de chegar para quem vive ou trabalha na região.",
    icon: MapPin,
  },
  {
    title: "Banho e tosa com cuidado",
    description: "Processo organizado para conforto, higiene e segurança.",
    icon: ShieldCheck,
  },
  {
    title: "Produtos selecionados",
    description: "Curadoria prática para necessidades reais de cães e gatos.",
    icon: Star,
  },
  {
    title: "Ambiente seguro",
    description: "Rotina pensada para receber pets com calma e responsabilidade.",
    icon: CheckCircle2,
  },
];

const galleryPlaceholders = [
  { title: "Ambiente da loja", icon: Store, color: "bg-[#eaf6ff]" },
  { title: "Banho e tosa", icon: Scissors, color: "bg-[#fff7de]" },
  { title: "Produtos e acessórios", icon: ShoppingBag, color: "bg-[#eefaf4]" },
  { title: "Pets atendidos", icon: Dog, color: "bg-[#fff1ea]" },
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

const waSchedule = whatsappUrl(
  "Olá, Petgres! Gostaria de agendar um atendimento para banho e tosa.",
);
const waGeneral = whatsappUrl(
  "Olá, Petgres! Vim pelo site e gostaria de falar com vocês.",
);
const waProducts = whatsappUrl(
  "Olá, Petgres! Gostaria de consultar a disponibilidade de produtos e acessórios.",
);

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

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={cn(
          "mx-auto flex w-full max-w-[1180px] items-center justify-between rounded-full px-4 py-3 transition-all duration-300",
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
              Vila Mariana
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-[var(--muted)] transition hover:bg-[var(--soft-blue)] hover:text-[var(--brand-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
            >
              {item.label}
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

      {open ? (
        <div
          id="mobile-menu"
          className="glass mx-auto mt-3 w-[calc(100%-0.5rem)] max-w-[1180px] rounded-[8px] p-3 lg:hidden"
        >
          <nav className="grid gap-1" aria-label="Navegação mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-[8px] px-4 py-3 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--soft-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
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
              Petshop na Vila Mariana
            </Badge>
          </motion.div>
          <motion.h1
            variants={item}
            className="text-balance mt-5 text-4xl font-bold leading-[1.04] text-[var(--ink)] sm:text-5xl lg:text-6xl"
          >
            Cuidado, carinho e bem-estar para o seu pet na Vila Mariana.
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
                <MessageCircle />
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
              ["Vila Mariana", MapPin],
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
              src="/assets/petgres-hero-pets.png"
              alt="Cachorro e gato em ambiente limpo de cuidado pet"
              fill
              priority
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

function Services() {
  return (
    <section id="servicos" className="section-y bg-white px-4">
      <div className="section-shell">
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
      </div>
    </section>
  );
}

function Grooming() {
  return (
    <section id="banho-e-tosa" className="section-y px-4">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
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
                className="relative rounded-[8px] border border-[var(--line)] bg-white p-5 shadow-sm"
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
                  Atendimento organizado para conforto e previsibilidade.
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
    <section id="produtos" className="section-y bg-[var(--ink)] px-4 text-white">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionIntro
            align="left"
            tone="dark"
            eyebrow="Produtos e acessórios"
            title="Itens para cuidar melhor do seu pet entre uma visita e outra."
            description="Consulte a disponibilidade pelo WhatsApp e receba orientação para escolher o que faz sentido para a rotina do seu cão ou gato."
          />
          <div className="flex justify-start lg:justify-end">
            <Button asChild variant="warm" size="lg">
              <a href={waProducts} target="_blank" rel="noreferrer">
                <MessageCircle />
                Consultar pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((category, index) => (
            <MotionBlock key={category.title} delay={index * 0.04}>
              <div className="h-full rounded-[8px] border border-white/14 bg-white/[0.07] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/[0.11]">
                <div className="grid size-12 place-items-center rounded-[8px] bg-white text-[var(--brand-blue)]">
                  <category.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{category.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/74">
                  {category.description}
                </p>
              </div>
            </MotionBlock>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  return (
    <section className="section-y bg-white px-4">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Diferenciais"
          title="Confiança para você, tranquilidade para o seu melhor amigo."
          description="O cuidado da Petgres aparece nos detalhes: na forma de receber, orientar, higienizar e entregar cada atendimento."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {differentials.map((differential, index) => (
            <MotionBlock key={differential.title} delay={index * 0.04}>
              <div className="h-full rounded-[8px] border border-[var(--line)] bg-gradient-to-b from-white to-[#f7fbff] p-5">
                <differential.icon className="size-6 text-[var(--brand-blue)]" />
                <h3 className="mt-5 text-base font-bold text-[var(--ink)]">
                  {differential.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {differential.description}
                </p>
              </div>
            </MotionBlock>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="section-y px-4">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionIntro
            align="left"
            eyebrow="Galeria"
            title="Uma estrutura pronta para receber fotos reais da Petgres."
            description="A área já está preparada para mostrar ambiente, produtos, pets atendidos e detalhes do banho e tosa assim que o acervo real estiver disponível."
          />
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
    <section className="section-y bg-white px-4">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Depoimentos"
          title="Avaliações reais merecem espaço real."
          description="Para preservar confiança, esta seção está pronta para receber comentários verificados de clientes da Petgres, sem inventar avaliações."
        />
        <MotionBlock className="mx-auto mt-12 max-w-3xl">
          <div className="rounded-[8px] border border-[var(--line)] bg-[#f7fbff] p-6 text-center shadow-sm sm:p-10">
            <Quote className="mx-auto size-9 text-[var(--brand-blue)]" />
            <p className="mt-5 text-balance text-xl font-bold leading-8 text-[var(--ink)]">
              Em breve, avaliações reais de clientes atendidos pela Petgres.
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[var(--muted)]">
              Enquanto isso, fale pelo WhatsApp para tirar dúvidas, consultar
              produtos ou agendar banho e tosa.
            </p>
            <Button asChild className="mt-6" variant="secondary">
              <a href={waGeneral} target="_blank" rel="noreferrer">
                <MessageCircle />
                Conversar agora
              </a>
            </Button>
          </div>
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
                Petgres na Vila Mariana, perto da sua rotina.
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
                  <MessageCircle />
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
              title="Mapa com localização da Petgres na Vila Mariana"
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
      icon: MessageCircle,
      external: true,
    },
    {
      label: "E-mail",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      icon: Mail,
      external: false,
    },
    {
      label: "Instagram",
      value: `@${siteConfig.instagram}`,
      href: siteConfig.instagramUrl,
      icon: AtSign,
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
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noreferrer" : undefined}
                className="group rounded-[8px] border border-[var(--line)] bg-[#f7fbff] p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--brand-blue)] hover:bg-white hover:shadow-[0_20px_50px_rgba(7,103,201,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <contact.icon className="size-6 text-[var(--brand-blue)]" />
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
            ))}
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
                <MessageCircle />
                Conversar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-white px-4 py-10">
      <div className="section-shell grid gap-8 md:grid-cols-[1fr_auto_auto]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/assets/petgres-logo-clean.png"
              alt="Logo Petgres"
              width={54}
              height={54}
              className="rounded-full"
            />
            <div>
              <p className="text-lg font-bold text-[var(--ink)]">Petgres</p>
              <p className="text-sm text-[var(--muted)]">Petshop na Vila Mariana</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-[var(--muted)]">
            Banho e tosa, produtos, acessórios e atendimento com carinho para
            cães e gatos em São Paulo/SP.
          </p>
        </div>
        <nav aria-label="Links rápidos" className="grid gap-2 text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-semibold text-[var(--muted)] transition hover:text-[var(--brand-blue)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="grid gap-2 text-sm text-[var(--muted)]">
          <a
            className="font-semibold hover:text-[var(--brand-blue)]"
            href={waGeneral}
            target="_blank"
            rel="noreferrer"
          >
            {siteConfig.whatsappDisplay}
          </a>
          <a
            className="font-semibold hover:text-[var(--brand-blue)]"
            href={`mailto:${siteConfig.email}`}
          >
            {siteConfig.email}
          </a>
          <a
            className="font-semibold hover:text-[var(--brand-blue)]"
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            @{siteConfig.instagram}
          </a>
          <span>{siteConfig.address}</span>
        </div>
      </div>
      <div className="section-shell mt-8 flex flex-col gap-2 border-t border-[var(--line)] pt-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Petgres. Todos os direitos reservados.</span>
        <span>Cuidado local, atendimento próximo.</span>
      </div>
    </footer>
  );
}

export function PetgresLanding() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Grooming />
      <Products />
      <Differentials />
      <Gallery />
      <Testimonials />
      <Location />
      <Contact />
      <FinalCta />
      <Footer />
    </main>
  );
}
