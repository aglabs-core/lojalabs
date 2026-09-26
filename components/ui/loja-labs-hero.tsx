"use client";

import { preload } from "react-dom";
import { ArrowUpRight, Menu, Search } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";

// Artes servidas do próprio domínio. Vinham do bucket do Supabase: oito
// requisições a um terceiro no caminho crítico, e este é o conteúdo visual
// principal da página — cada card ficava cinza até a resposta chegar.
//
// Também estavam muito maiores que o espaço em que aparecem. O card mais
// largo tem ~360px (uma coluna no mobile) e os PNGs vinham com 800 a 1080px:
// 4,4MB no total viraram 456KB em WebP de 800px, que ainda cobre tela 2x.
const categories = [
  {
    title: "Websites que vendem",
    image: "/cards/websites.webp",
    href: "https://lp.aglabs.ia.br/",
  },
  {
    title: "Agentes de IA",
    image: "/cards/agentes.webp",
    href: "https://rag.aglabs.ia.br/",
  },
  {
    title: "Automações (Workflows)",
    image: "/cards/automacoes.webp",
    href: "https://wf.aglabs.ia.br/",
  },
  {
    title: "Barberias — SaaS para barbearias",
    image: "/cards/barberias.webp",
    href: "https://barberias.com.br/",
  },
  {
    title: "Templates React (VibeKit)",
    image: "/cards/vibekit.webp",
    href: "https://templates.aglabs.ia.br/",
  },
  {
    title: "Cortes Virais",
    image: "/cards/cortes-virais.webp",
    href: "https://cortes-virais.pages.dev/",
  },
  {
    title: "Pack Canva",
    image: "/cards/pack-canva.webp",
    href: "https://pack-canva.pages.dev/",
  },
  {
    title: "Achadinhos",
    image: "/cards/achadinhos.webp",
    href: "https://afiliados-aeq.pages.dev/amz/",
  },
];

const navigation = [
  { name: "Início", href: "/" },
  { name: "Blog", href: "https://aglabs.ia.br/blog", external: true },
  { name: "Websites", href: "https://lp.aglabs.ia.br/", external: true },
  { name: "Agentes IA", href: "https://rag.aglabs.ia.br/", external: true },
];

export function CommerceHero() {
  const reduceMotion = useReducedMotion();

  // Stagger orquestrado pelo container — os filhos herdam o timing,
  // sem precisar de delay manual por índice.
  const gridVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.05,
        staggerChildren: reduceMotion ? 0 : 0.08,
      },
    },
  };

  // Entrada de cada card. Em prefers-reduced-motion fazemos apenas o fade
  // (sem deslocamento/escala), que é o comportamento acessível recomendado.
  const cardVariants: Variants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.985 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Fundo do card do topo (maior elemento da tela): sem o preload, só é
  // descoberto quando o CSS inline é aplicado.
  preload("/hero-bg.webp", { as: "image", fetchPriority: "high" });

  return (
    <div className="w-full relative container px-2 mx-auto max-w-7xl min-h-screen">
      {/* ─── Hero card ─── */}
      <div
        className="mt-6 rounded-2xl relative overflow-hidden"
        style={{
          backgroundImage: 'url("/hero-bg.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay sobre o bg do card hero */}
        <div className="absolute inset-0 bg-black/75 z-0" />
        {/* ─── Header ─── */}
        <header className="flex items-center relative z-10">
          {/* Left: logo + nav */}
          <div className="w-full md:w-2/3 lg:w-1/2 bg-background/95 backdrop-blur-sm p-4 rounded-br-2xl flex items-center gap-2">
            <Link href="/" className="shrink-0 mr-2">
              <img
                src="/logo-aglabs.png"
                alt="AG LABS"
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>

            <nav className="hidden lg:flex items-center justify-between w-full">
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  variant="link"
                  className="cursor-pointer relative group hover:text-primary transition-colors font-medium text-foreground/80"
                  asChild
                >
                  <a
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {item.name}
                  </a>
                </Button>
              ))}
              <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer text-foreground/80 hover:text-foreground hover:bg-transparent transition-colors"
              >
                <Search className="w-5 h-5" />
              </Button>
            </nav>

            {/* Mobile hamburger */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden ml-auto">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary transition-colors"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[300px] sm:w-[400px] p-0 bg-background/95 backdrop-blur-md border-r border-border/50"
              >
                <SheetHeader className="p-6 text-left border-b border-border/50">
                  <SheetTitle className="flex items-center justify-between">
                    <Link href="/">
                      <img
                        src="/logo-aglabs.png"
                        alt="AG LABS"
                        className="h-7 w-auto brightness-0 invert"
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col p-6 space-y-1">
                  {navigation.map((item) => (
                    <Button
                      key={item.name}
                      variant="ghost"
                      className="justify-start px-2 h-12 text-base font-medium hover:bg-accent/20 hover:text-primary transition-colors"
                      asChild
                    >
                      <a
                        href={item.href}
                        {...(item.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {item.name}
                      </a>
                    </Button>
                  ))}
                </nav>
                <Separator className="mx-6" />
                <div className="p-6 flex flex-col gap-4">
                  <Button
                    variant="outline"
                    className="justify-start gap-2 h-12 hover:bg-accent/20 transition-colors"
                  >
                    <Search className="w-4 h-4" />
                    Buscar
                  </Button>
                </div>
                <Separator className="mx-6" />
                <div className="p-6">
                  <Button
                    className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                    asChild
                  >
                    <a
                      href="https://aglabs.ia.br"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ir para AG LABS
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Right: CTA button */}
          <div className="hidden md:flex w-1/2 justify-end items-center pr-4 gap-4 ml-auto">
            <Button
              variant="secondary"
              className="cursor-pointer bg-primary/10 border border-primary/30 p-0 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              asChild
            >
              <a
                href="https://aglabs.ia.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="pl-4 py-2 text-sm font-medium text-foreground">
                  Ir para AG LABS
                </span>
                <div className="rounded-full flex items-center justify-center m-auto bg-primary w-10 h-10 ml-2 group-hover:scale-110 transition-transform duration-300">
                  <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                </div>
              </a>
            </Button>
          </div>
        </header>

        {/* ─── Hero text ─── */}
        <motion.section
          className="w-full px-4 py-24 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.15]"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                Produtos digitais
              </span>
              <br />
              <span className="text-foreground">que geram resultado.</span>
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Templates, ferramentas de IA e recursos premium criados pela
              AG LABS para acelerar seu negócio ou projeto criativo.
            </motion.p>
          </div>
        </motion.section>
      </div>

      {/* ─── Product cards ─── */}
      <motion.div
        id="produtos"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mt-12 pb-16"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {categories.map((category) => (
          <motion.div
            key={category.title}
            variants={cardVariants}
            whileHover={
              reduceMotion
                ? undefined
                : { y: -6, transition: { duration: 0.3, ease: "easeOut" } }
            }
            // IMPORTANTE: nada de `transition-*` (CSS) aqui — esta camada é
            // controlada pelo Framer Motion. Misturar transição CSS com a
            // animação JS na mesma propriedade causava o flicker no final.
            // `will-change-transform` mantém a camada promovida e evita o
            // repaint de despromoção ao terminar a animação.
            className="group relative bg-muted/50 rounded-3xl p-4 sm:p-6 min-h-[250px] sm:min-h-[300px] w-full overflow-hidden will-change-transform"
          >
            {/* O nome do produto precisa existir como texto.
                O card desenha a imagem como background-image do CSS e o
                título está impresso dentro do PNG, então até aqui a página
                inteira tinha 33 palavras indexáveis: oito produtos e nenhuma
                palavra sobre nenhum deles. Um hub de produtos que não diz o
                nome dos produtos não ranqueia para nenhum deles.
                Fica sr-only porque o título já aparece na arte — a intenção é
                torná-lo legível para buscador e leitor de tela, não mudar o
                desenho. */}
            <h2 className="sr-only">{category.title}</h2>

            {/* bg image — sem overlay. As transições CSS de hover ficam aqui,
                num elemento que o Framer Motion NÃO controla (sem conflito). */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
              style={{ backgroundImage: `url(${category.image})` }}
            />

            <a
              href={category.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={category.title}
              className="absolute inset-0 z-20"
            >
              {/* arrow button bottom-right — sem borda */}
              <div className="absolute bottom-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-black/80 backdrop-blur-sm rounded-tl-xl flex items-center justify-center z-10">
                <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
