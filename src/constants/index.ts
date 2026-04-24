import type { NavItem, Metric, Fund, Partner, ProfileCard } from '../types';

export const BASE_URL = 'https://carmelcapital.com.br';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/home' },
  { label: 'Quem Somos', href: '/quem-somos' },
  { label: 'Nossos Fundos', href: '#nossos-fundos' },
  { label: 'Governança', href: '/governanca' },
  { label: 'Investidores', href: '/investidores' },
  { label: 'Novos Negócios', href: '/novos-negocios' },
  { label: 'Contato', href: '/contato' },
];

export const HERO_SLIDES = [
  `${BASE_URL}/admin/files/banner/450167c81e728d9d4c2f636f067f89cc14862c.png`,
  `${BASE_URL}/admin/files/banner/1195387ca3de19fcb1be8ff8d296db600a0e8c0.jpg`,
  `${BASE_URL}/admin/files/banner/4040745a87ff679a2f3e71d9181a67b7542122c.png`,
  `${BASE_URL}/admin/files/banner/1409869664a974da856a15152f10777a4c6cdf1.png`,
  `${BASE_URL}/admin/files/banner/41625961679091c5a880faf6fb5e6087eb1b2dc.png`,
  `${BASE_URL}/admin/files/banner/518934361bfac54d2d98d3630eff1b8425a65cc.png`,
];

export const PROFILE_CARDS: ProfileCard[] = [
  {
    id: 'investidor',
    title: 'Investidor',
    description:
      'A Carmel Capital oferece soluções estratégicas voltadas para investidores que buscam rentabilidade com segurança. Somos especializados em fundos de investimento e operações estruturadas, tais como otimização tributária, redução de custos financeiros, fidelização de fornecedores e melhoria no fluxo de caixa. Nossa expertise também permite a antecipação de tendências e o fortalecimento de relações com os principais agentes do mercado. Com mais de 400 fundos e operações estruturadas criados, a Carmel Capital é sinônimo de confiança e resultados no setor.',
    imageSrc: `${BASE_URL}/imagens/home/investidor.png`,
    href: '/investidores',
  },
  {
    id: 'empresa',
    title: 'Empresa',
    description:
      'Com mais de 30 anos de experiência no mercado financeiro, os sócios da Carmel Capital são especialistas em desenvolver soluções estruturadas sob medida para as necessidades específicas de cada empresa. Nosso conhecimento profundo do setor, aliado à capacidade de antecipar tendências e ao relacionamento sólido com os principais players do mercado, garante agilidade e eficiência na implementação de estratégias financeiras.',
    imageSrc: `${BASE_URL}/imagens/home/empresa.png`,
    href: '/novos-negocios',
  },
];

export const METRICS: Metric[] = [
  { value: 'R$5850MM', label: 'Ativos sob Gestão' },
  { value: 'R$750MM', label: 'Fundos Líquidos' },
  { value: 'R$850MM', label: 'FIDCs Multisetoriais' },
  { value: 'R$400MM', label: 'Fundo de Participação' },
  { value: 'R$464MM', label: 'FIDCs de Desenvolvimento Imobiliário' },
  { value: 'R$850MM', label: 'FIDCs Empresariais' },
];

export const FUNDS: Fund[] = [
  {
    id: 'carmel-fic-fidc',
    name: 'CARMEL FIC FIDC',
    cnpj: '43.871.874/0001-27',
    info: [
      { label: 'Aplicação inicial', value: 'Não há' },
      { label: 'Movimentação mínima', value: 'Não há' },
      { label: 'Saldo mínimo', value: 'Não há' },
      { label: 'Prazo de Aplicação', value: 'D+0' },
      { label: 'Prazo de Resgate', value: 'D+91' },
      { label: 'Taxa Administração', value: '2% a.a.' },
      { label: 'Taxa Performance', value: '20% sobre o CDI semestralmente' },
      { label: 'Administração e Custódia', value: 'Banco Genial S.A.' },
      { label: 'Gestora', value: 'Carmel Gestora de Ativos Ltda.' },
      { label: 'Classificação ANBIMA', value: 'Multimercado Dinâmico' },
      { label: 'Classificação Tributária', value: 'Longo Prazo' },
      { label: 'Código ISIN', value: 'BR0EVYCTF003' },
    ],
    objective:
      'O Fundo procurará investir os seus recursos em uma carteira diversificada composta por diferentes FIDCs que atuem especificadamente no mercado de crédito, buscando retorno superior a 100% do CDI Over.',
    documents: [
      { label: 'Lâmina | Fevereiro 2025', href: `${BASE_URL}/admin/files/arquivos/3702-2026.pdf` },
      { label: 'Regulamento', href: `${BASE_URL}/admin/files/arquivos/8carmel-fic-fim-cp.pdf` },
      { label: 'Carmel x BTG', href: `${BASE_URL}/admin/files/arquivos/32link.pdf` },
    ],
  },
  {
    id: 'cobuccio-fidc',
    name: 'COBUCCIO FUNDO DE INVESTIMENTO EM DIREITOS CREDITÓRIOS DE CLASSE ÚNICA FECHADA',
    cnpj: '32.526.025/0001-10',
    info: [
      { label: 'Aplicação inicial', value: '50.000.000,00' },
      { label: 'Movimentação mínima', value: 'Classe Fechada' },
      { label: 'Saldo mínimo', value: 'Classe Fechada' },
      { label: 'Prazo de Resgate', value: '10/01/2028' },
      { label: 'Taxa Administração', value: 'Conforme Anexo da Classe' },
      { label: 'Taxa Performance', value: 'Não há' },
      { label: 'Administração e Custódia', value: 'Singulare CTVM S.A' },
      { label: 'Gestora', value: 'Carmel Gestora de Ativos Ltda.' },
      { label: 'Classificação Tributária', value: 'Longo prazo' },
    ],
    objective:
      'Fundo de Investimento em Direitos Creditórios de Classe Única Fechada, com distribuição coordenada pelo Banco Itaú BBA S.A.',
    documents: [
      { label: 'Anúncio de Início', href: `${BASE_URL}/admin/files/arquivos/39.pdf` },
      { label: 'Regulamento', href: `${BASE_URL}/admin/files/arquivos/16regulamento.pdf` },
      { label: 'Sumário Cobuccio', href: `${BASE_URL}/admin/files/arquivos/43.pdf` },
      { label: 'Comunicado ao Mercado', href: `${BASE_URL}/admin/files/arquivos/28comunicado-mercado-cb.pdf` },
    ],
  },
  {
    id: 'sb-fidc',
    name: 'SB FIDC MULTISSETORIAL DE CLASSE ÚNICA FECHADA',
    cnpj: '23.956.882/0001-69',
    info: [
      { label: 'Aplicação inicial', value: 'R$1.000,00' },
      { label: 'Prazo de Aplicação', value: 'Conforme Anúncio' },
      { label: 'Prazo de Resgate', value: 'Conforme Anúncio' },
      { label: 'Taxa Administração', value: 'Conforme Regulamento' },
      { label: 'Taxa Performance', value: 'Não há' },
      { label: 'Administração e Custódia', value: 'Singulare CTVM SA' },
      { label: 'Gestora', value: 'Carmel Gestora de Ativos Ltda.' },
      { label: 'Classificação ANBIMA', value: 'FIDC' },
      { label: 'Classificação Tributária', value: 'Longo Prazo' },
    ],
    objective:
      'A Classe terá como objetivo proporcionar aos Cotistas a valorização das Cotas de suas respectivas titularidades por meio da aplicação dos recursos da Classe, preponderantemente na aquisição de Direitos Creditórios.',
    documents: [
      { label: 'Comunicado ao Mercado', href: `${BASE_URL}/admin/files/arquivos/24comunicado-mercado.pdf` },
      { label: 'Regulamento', href: `${BASE_URL}/admin/files/arquivos/19regulamento.pdf` },
      { label: 'Anúncio de Encerramento SB', href: `${BASE_URL}/admin/files/arquivos/25.pdf` },
      { label: 'Sumário', href: `${BASE_URL}/admin/files/arquivos/34.pdf` },
    ],
  },
  {
    id: 'enel2-fidc',
    name: 'ENEL2 LEGAL CLAIMS FIDC',
    cnpj: '58.051.964/0001-42',
    info: [
      { label: 'Aplicação inicial', value: '10.000.000,00' },
      { label: 'Movimentação mínima', value: 'Classe fechada' },
      { label: 'Saldo mínimo', value: 'Classe Fechada' },
      { label: 'Prazo de Aplicação', value: 'Conforme anúncio' },
      { label: 'Prazo de Resgate', value: 'Conforme anúncio' },
      { label: 'Taxa Administração', value: 'Conforme Regulamento' },
      { label: 'Taxa Performance', value: 'Não há' },
      { label: 'Administração e Custódia', value: 'BRL Trust DTVM S.A.' },
      { label: 'Gestora', value: 'Carmel Gestora de Ativos Ltda.' },
      { label: 'Classificação ANBIMA', value: 'FIDC' },
      { label: 'Classificação Tributária', value: 'Longo Prazo' },
    ],
    objective: 'Fundo estruturado para aquisição de direitos creditórios oriundos de ações judiciais contra a Enel.',
    documents: [
      { label: 'Anúncio de Início Enel', href: `${BASE_URL}/admin/files/arquivos/36.pdf` },
      { label: 'Anúncio de Encerramento', href: `${BASE_URL}/admin/files/arquivos/anuncio-de-encerramento.pdf` },
    ],
  },
];

export const PARTNERS: Partner[] = [
  { id: '1', src: `${BASE_URL}/admin/files/parceiros/4540789a9760fad7b14f898381d939051cb0bd7.png`, alt: 'Parceiro 1' },
  { id: '2', src: `${BASE_URL}/admin/files/parceiros/130867183697b4b9e21cd8ff76c42068187b000.png`, alt: 'Parceiro 2' },
  { id: '3', src: `${BASE_URL}/admin/files/parceiros/1018457162598832c70fc595515b2085d6c5f15.png`, alt: 'Parceiro 3' },
  { id: '4', src: `${BASE_URL}/admin/files/parceiros/37071782da7f3656dc2070190b0b088c35c034a.png`, alt: 'Parceiro 4' },
  { id: '5', src: `${BASE_URL}/admin/files/parceiros/50214301ecd9501d4d875c6293705f7f9073bd3.png`, alt: 'Parceiro 5' },
  { id: '6', src: `${BASE_URL}/admin/files/parceiros/50138918f6dd9428bbef16d1afe717054ec79.png`, alt: 'Parceiro 6' },
  { id: '7', src: `${BASE_URL}/admin/files/parceiros/483153db41658ae019987ccd6504de6b8742a5.png`, alt: 'Parceiro 7' },
  { id: '8', src: `${BASE_URL}/admin/files/parceiros/32399357c8c701e9feb381064a54eba71470755.png`, alt: 'Parceiro 8' },
  { id: '9', src: `${BASE_URL}/admin/files/parceiros/3655787401bac5e29e04ce883de23f55c474e0e.png`, alt: 'Parceiro 9' },
];

export const COLLAGE_IMAGES = [
  { src: `${BASE_URL}/imagens/home/imagem-colagem-2.png`, alt: 'Carmel Capital 1' },
  { src: `${BASE_URL}/imagens/home/imagem-colagem-1.png`, alt: 'Carmel Capital 2' },
  { src: `${BASE_URL}/imagens/home/imagem-colagem-3.png`, alt: 'Carmel Capital 3' },
];

export const FOOTER_NAV: NavItem[] = [
  { label: 'Home', href: '/home' },
  { label: 'Governança', href: '/governanca' },
  { label: 'Para Investidores', href: '/investidores' },
  { label: 'Quem somos', href: '/quem-somos' },
  { label: 'Para Empresas', href: '/novos-negocios' },
  { label: 'Contato', href: '/contato' },
];
