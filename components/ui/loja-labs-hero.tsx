"use client";

import { ArrowUpRight, Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import Link from "next/link";

const navigation = [
  { name: "Produtos", href: "#produtos" },
  { name: "Serviços", href: "#servicos" },
  { name: "Packs", href: "#packs" },
  { name: "Blog", href: "https://aglabs.ia.br/blog", external: true },
];

export function CommerceHero() {
  return (
    <div className="w-full relative container px-2 mx-auto max-w-7xl">
      {/* ─── Hero card ─── */}
      <div
        className="mt-6 rounded-2xl relative overflow-hidden"
        style={{
          backgroundImage: 'url("/hero-bg.jpg")',
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
                    // SheetClose: os links de âncora rolam a própria página,
                    // então o menu precisa sair da frente ao tocar.
                    <SheetClose key={item.name} asChild>
                      <Button
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
                    </SheetClose>
                  ))}
                </nav>
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
              className="cursor-pointer bg-primary/10 border border-primary/30 p-0 rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 group"
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
                <div className="rounded-sm flex items-center justify-center m-auto bg-primary w-10 h-10 ml-2 group-hover:scale-110 transition-transform duration-300">
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
                Produtos da AG LABS
              </span>
              <br />
              <span className="text-foreground">com preço na página.</span>
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Sistemas e ferramentas de IA para assinar ou comprar direto,
              sem reunião. E os serviços da AG LABS para quando o seu negócio
              precisa de algo sob medida.
            </motion.p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
