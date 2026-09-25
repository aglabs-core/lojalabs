import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lojalabs.com.br"),
  title: "Loja Labs — Websites, Agentes de IA e Automações | AG LABS",
  alternates: { canonical: "/" },
  description:
    "A loja da AG LABS: websites que vendem, agentes de IA, automações e templates para automatizar processos e escalar o seu negócio.",
  keywords: ["websites", "agentes de IA", "automação", "inteligência artificial", "templates", "AG LABS", "Loja Labs"],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Loja Labs — Websites, Agentes de IA e Automações | AG LABS",
    description:
      "A loja da AG LABS: websites que vendem, agentes de IA, automações e templates para automatizar processos e escalar o seu negócio.",
    url: "https://lojalabs.com.br",
    siteName: "Loja Labs",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loja Labs — Websites, Agentes de IA e Automações | AG LABS",
    description:
      "A loja da AG LABS: websites que vendem, agentes de IA, automações e templates para automatizar processos e escalar o seu negócio.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

// Espelho do que a página mostra: os cards de serviço (loja-labs-hero.tsx)
// e a malha de marcas próprias (product-logo-cloud.tsx). Ao adicionar item
// em qualquer um dos dois, refletir aqui para o ItemList não sair de sincronia.
const PRODUCTS = [
  // Serviços da marca AG LABS
  { name: "Websites que vendem", url: "https://lp.aglabs.ia.br/" },
  { name: "Agentes de IA", url: "https://rag.aglabs.ia.br/" },
  { name: "Automações (Workflows)", url: "https://wf.aglabs.ia.br/" },
  { name: "Templates React (VibeKit)", url: "https://templates.aglabs.ia.br/" },
  // Produtos de marca própria (entidade própria, AG LABS como creator)
  { name: "Barberias — SaaS para barbearias", url: "https://barberias.com.br/" },
  { name: "Members — plataforma para criadores de conteúdo", url: "https://members.ia.br/" },
  { name: "Viajeki — planejamento de viagens com IA", url: "https://viajeki.com.br/" },
  { name: "AG LABS App — geração de mídia com IA", url: "https://lp.aglabs.app.br/" },
  // Produtos complementares
  { name: "Cortes Virais", url: "https://cortes-virais.pages.dev/" },
  { name: "Pack Canva", url: "https://pack-canva.pages.dev/" },
  { name: "Achadinhos", url: "https://afiliados-aeq.pages.dev/amz/" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://aglabs.ia.br/#organization",
      name: "AG LABS Intelligence",
      alternateName: "AG LABS",
      slogan: "IA aplicada — agentes, automações e sistemas para negócios em escala",
      description:
        "Agência brasileira de inteligência artificial aplicada a negócios: agentes autônomos, automação de processos, integrações de dados e websites de alto desempenho.",
      url: "https://aglabs.ia.br/",
      logo: "https://aglabs.ia.br/android-chrome-512x512.png",
      areaServed: { "@type": "Country", name: "Brasil" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rio Verde",
        addressRegion: "GO",
        addressCountry: "BR",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+55-64-99325-9857",
        contactType: "sales",
        areaServed: "BR",
        availableLanguage: ["pt-BR"],
      },
      sameAs: [
        "https://www.facebook.com/profile.php?id=61573483665476",
        "https://www.instagram.com/ag_labs/",
        "https://x.com/aglabsrv",
        "https://www.linkedin.com/company/ag-labs",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://lojalabs.com.br/#website",
      url: "https://lojalabs.com.br/",
      name: "Loja Labs",
      inLanguage: "pt-BR",
      publisher: { "@id": "https://aglabs.ia.br/#organization" },
    },
    {
      "@type": "CollectionPage",
      "@id": "https://lojalabs.com.br/#webpage",
      url: "https://lojalabs.com.br/",
      name: "Loja Labs — Websites, Agentes de IA e Automações da AG LABS",
      isPartOf: { "@id": "https://lojalabs.com.br/#website" },
      about: { "@id": "https://aglabs.ia.br/#organization" },
      inLanguage: "pt-BR",
      mainEntity: {
        "@type": "ItemList",
        itemListElement: PRODUCTS.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: p.name,
          url: p.url,
        })),
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} ${syne.variable} font-[family-name:var(--font-inter)] antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
