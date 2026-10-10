import { ArrowUpRight, LayoutTemplate, MessageCircle } from "lucide-react";
import { PACKS, PRODUCTS, SERVICES, WHATSAPP_URL } from "@/lib/catalog";

const heading = { fontFamily: "var(--font-syne), sans-serif" };

function SectionHeader({ title, lead }: { title: string; lead: string }) {
  return (
    <div className="mb-8 max-w-2xl">
      <h2
        className="text-2xl font-bold tracking-tight text-foreground md:text-4xl"
        style={heading}
      >
        {title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
        {lead}
      </p>
    </div>
  );
}

export function CatalogSections() {
  return (
    <div className="container mx-auto max-w-7xl px-4">
      {/* ─── Produtos próprios ─── */}
      <section id="produtos" className="scroll-mt-6 pt-16">
        <SectionHeader
          title="Produtos"
          lead="Você cria a conta ou compra direto na página de cada um. O preço está aqui."
        />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <li
              key={product.name}
              className="flex flex-col rounded-3xl border border-white/10 bg-muted/50 p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/[0.06]">
                  {product.logo ? (
                    <img
                      src={product.logo}
                      alt=""
                      width={256}
                      height={256}
                      loading="lazy"
                      decoding="async"
                      className="h-8 w-auto object-contain"
                    />
                  ) : (
                    <LayoutTemplate
                      aria-hidden="true"
                      className="size-6 text-primary"
                    />
                  )}
                </div>
                <h3
                  className="text-xl font-semibold text-foreground"
                  style={heading}
                >
                  {product.name}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>
              <p className="mb-6 mt-4 text-sm font-medium text-foreground">
                {product.price}
              </p>
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex h-11 items-center justify-center gap-2 self-start rounded-sm bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                {product.cta}
                <ArrowUpRight aria-hidden="true" className="size-4" />
                <span className="sr-only"> — {product.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* ─── Serviços ─── */}
      <section id="servicos" className="scroll-mt-6 pt-20">
        <SectionHeader
          title="Serviços"
          lead="Feitos pela AG LABS para o seu negócio. Veja os detalhes na página de cada serviço ou tire a dúvida no WhatsApp."
        />
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {SERVICES.map((service) => (
            <li key={service.name}>
              <a
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-muted/50 transition-colors hover:border-primary/40"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3
                    className="text-xl font-semibold text-foreground"
                    style={heading}
                  >
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <p className="mt-4 text-sm font-medium text-foreground">
                    {service.price}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-primary">
                    Ver detalhes
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col items-start gap-4 rounded-3xl border border-white/10 bg-muted/50 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            <span className="font-medium text-foreground">
              Não sabe qual serve para você?
            </span>{" "}
            Conte o que precisa e a gente indica o caminho.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-sm border border-primary/40 bg-primary/10 px-5 text-sm font-semibold text-foreground transition-colors hover:bg-primary/20"
          >
            <MessageCircle aria-hidden="true" className="size-4" />
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* ─── Packs ─── */}
      <section id="packs" className="scroll-mt-6 pt-20">
        <SectionHeader
          title="Packs digitais"
          lead="Ofertas independentes de Antonio Garcia. Preço, compra e suporte ficam na página de cada uma."
        />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {PACKS.map((pack) => (
            <li key={pack.name}>
              <a
                href={pack.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-muted/50 transition-colors hover:border-primary/40"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={pack.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="flex items-center justify-between gap-2 text-base font-semibold text-foreground">
                    {pack.name}
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                    />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pack.description}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* ─── Rodapé ─── */}
      <footer className="mt-20 flex flex-col gap-6 border-t border-white/10 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/logo-aglabs.png"
            alt="AG LABS"
            className="h-6 w-auto brightness-0 invert"
          />
          <span>Loja Labs é a vitrine de produtos da AG LABS.</span>
        </div>
        <nav aria-label="Rodapé" className="flex flex-wrap gap-x-6 gap-y-3">
          <a
            href="https://aglabs.ia.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Site da AG LABS
          </a>
          <a
            href="https://aglabs.ia.br/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Blog
          </a>
          <a
            href="https://bio.aglabs.ia.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Redes sociais
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            WhatsApp
          </a>
        </nav>
      </footer>
    </div>
  );
}
