// Fonte única do catálogo: as seções da página (components/ui/catalog-sections.tsx)
// e o ItemList do JSON-LD (app/layout.tsx) leem daqui. Preço mudou em algum
// produto → mudar aqui e em public/llms.txt.

export type Product = {
  name: string;
  /** Uma linha: o que é e para quem. */
  description: string;
  /** Condição de entrada, como aparece na página do produto. */
  price: string;
  cta: string;
  href: string;
  /** Página descritiva, quando o botão leva direto para dentro do app. */
  infoHref?: string;
  logo?: string;
};

export type Service = {
  name: string;
  description: string;
  price: string;
  image: string;
  href: string;
};

export type Pack = {
  name: string;
  description: string;
  image: string;
  href: string;
};

export const WHATSAPP_URL =
  "https://wa.me/5564993259857?text=Ol%C3%A1!%20Vim%20pela%20Loja%20Labs%20e%20quero%20saber%20mais.";

// Produtos de marca própria: compra ou cadastro direto, sem conversa.
export const PRODUCTS: Product[] = [
  {
    name: "Barberias",
    description:
      "Sistema de gestão para barbearias: agendamento online, equipe e relatórios.",
    price: "A partir de R$ 49/mês · 7 dias grátis",
    cta: "Testar grátis",
    href: "https://barberias.com.br/",
    logo: "/logos/barberias.png",
  },
  {
    name: "Members",
    description:
      "Área de membros para hospedar, vender e entregar cursos e conteúdos digitais.",
    price: "6,99% por venda",
    cta: "Conhecer",
    href: "https://members.ia.br/",
    logo: "/logos/members.png",
  },
  {
    name: "Viajeki",
    description:
      "Planejamento de viagens em grupo, com roteiro por dia, mapa, clima e IA.",
    price: "Grátis · roteiro com IA por R$ 19,90",
    cta: "Planejar viagem",
    href: "https://viajeki.com.br/",
    logo: "/logos/viajeki.png",
  },
  {
    name: "AG LABS App",
    description:
      "Imagens, vídeos, narrações e músicas criadas com inteligência artificial.",
    price: "120 créditos grátis · planos a partir de R$ 26,32/mês",
    cta: "Criar agora",
    href: "https://aglabs.app.br/",
    infoHref: "https://aglabs.app.br/sobre",
    logo: "/logos/app-aglabs.png",
  },
  {
    name: "MeCard",
    description:
      "Cartão de visita digital e página profissional, com modelos e editor visual.",
    price: "Grátis · Pro por R$ 9,90/mês",
    cta: "Criar meu cartão",
    href: "https://mecard.com.br/",
    logo: "/logos/mecard.png",
  },
  {
    name: "VibeKit",
    description:
      "52 templates React com design system, para começar um SaaS com base pronta.",
    price: "R$ 97 · pagamento único",
    cta: "Ver templates",
    href: "https://templates.aglabs.ia.br/",
  },
];

// Serviços da AG LABS: têm escopo, então o caminho passa por uma página
// de detalhes ou pelo atendimento.
export const SERVICES: Service[] = [
  {
    name: "Site profissional",
    description:
      "Landing page ou site para o seu negócio, com domínio .com.br incluso e primeira versão em até 48 horas.",
    price: "R$ 497 + R$ 97/mês",
    image: "/cards/websites.webp",
    href: "https://lp.aglabs.ia.br/",
  },
  {
    name: "Atendente de IA",
    description:
      "Atendente no WhatsApp treinado com as informações da sua empresa, que responde e registra os contatos.",
    price: "A partir de R$ 147/mês",
    image: "/cards/agentes.webp",
    href: "https://rag.aglabs.ia.br/",
  },
  {
    name: "Automações",
    description:
      "Processos e integrações entre sistemas automatizados, com escopo definido em diagnóstico.",
    price: "Sob proposta",
    image: "/cards/automacoes.webp",
    href: "https://wf.aglabs.ia.br/",
  },
];

// Ofertas independentes de Antonio Garcia, vendidas na página de cada uma.
export const PACKS: Pack[] = [
  {
    name: "Cortes Virais",
    description: "Pack de cortes de vídeo prontos para redes sociais.",
    image: "/cards/cortes-virais.webp",
    href: "https://cortes.lojalabs.com.br/",
  },
  {
    name: "Pack Canva",
    description: "Pacote de templates editáveis no Canva.",
    image: "/cards/pack-canva.webp",
    href: "https://pack.lojalabs.com.br/",
  },
  {
    name: "Achadinhos",
    description: "Seleção de produtos recomendados, com links de afiliado.",
    image: "/cards/achadinhos.webp",
    href: "https://afiliados-aeq.pages.dev/amz/",
  },
];
