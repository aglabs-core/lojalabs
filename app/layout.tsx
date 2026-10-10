import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { PACKS, PRODUCTS, SERVICES } from "@/lib/catalog";

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
  title: "Loja Labs — Produtos e serviços da AG LABS, com preço",
  alternates: { canonical: "/" },
  description:
    "A vitrine da AG LABS: Barberias, Members, Viajeki, AG LABS App, MeCard e VibeKit para assinar ou comprar direto, mais sites, atendente de IA e automações.",
  keywords: ["AG LABS", "Loja Labs", "Barberias", "Members", "Viajeki", "MeCard", "VibeKit", "sites", "atendente de IA", "automação"],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Loja Labs — Produtos e serviços da AG LABS, com preço",
    description:
      "A vitrine da AG LABS: Barberias, Members, Viajeki, AG LABS App, MeCard e VibeKit para assinar ou comprar direto, mais sites, atendente de IA e automações.",
    url: "https://lojalabs.com.br",
    siteName: "Loja Labs",
    locale: "pt_BR",
    type: "website",
    // Card 1200x630 em JPEG, abaixo dos ~300 KB que o WhatsApp aceita na prévia.
    images: [{ url: "/og-cover.jpg", width: 1200, height: 630, alt: "Loja Labs — produtos digitais da AG LABS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loja Labs — Produtos e serviços da AG LABS, com preço",
    description:
      "A vitrine da AG LABS: Barberias, Members, Viajeki, AG LABS App, MeCard e VibeKit para assinar ou comprar direto, mais sites, atendente de IA e automações.",
    images: ["/og-cover.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

// O ItemList sai do mesmo catálogo que a página renderiza (lib/catalog.ts).
// Para o AG LABS App, o buscador recebe a página descritiva, não o app.
const ITEMS = [
  ...PRODUCTS.map((p) => ({ name: p.name, description: p.description, url: p.infoHref ?? p.href })),
  ...SERVICES.map((s) => ({ name: s.name, description: s.description, url: s.href })),
  ...PACKS.map((p) => ({ name: p.name, description: p.description, url: p.href })),
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
      name: "Loja Labs — Produtos e serviços da AG LABS",
      isPartOf: { "@id": "https://lojalabs.com.br/#website" },
      about: { "@id": "https://aglabs.ia.br/#organization" },
      inLanguage: "pt-BR",
      mainEntity: {
        "@type": "ItemList",
        itemListElement: ITEMS.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          description: item.description,
          url: item.url,
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
