export interface Lote {
  id: string;
  mes: string;
  quantidade: number;
  valor: number;
  status: "disponivel" | "esgotado" | "proximo";
}

export interface Pagamento {
  banco: string;
  codigo: string;
  agencia: string;
  conta: string;
  pix: string;
  titular: string;
}

export interface Parcelamento {
  vezes: number;
  valor: number;
}

export interface Evento {
  id: string;
  nome: string;
  descricao: string;
  data: string;
  dataCalendario?: string;
  local: string;
  vagas?: number;
  slug: string;
  destaque: boolean;
  realizado?: boolean;
  lotes: Lote[];
  valorAVista?: number;
  /** Até quando pagar (texto para mostrar, ex.: "quinta-feira, 29 de outubro"). */
  prazoPagamento?: string;
  /** O mesmo prazo curto, para o número do topo (ex.: "29/10"). */
  prazoPagamentoCurto?: string;
  parcelamento?: Parcelamento;
  whatsapp?: string;
  pagamento?: Pagamento;
  observacoes: string[];
}

export const eventos: Evento[] = [
  {
    id: "gqm-2026",
    nome: "GQM",
    descricao:
      "Um encontro transformador para toda a família. Venha viver dias de renovação, palavra e comunhão.",
    data: "30 de Outubro a 02 de Novembro de 2026",
    dataCalendario: "2026-10-30",
    local: "A definir",
    vagas: 10,
    slug: "gqm",
    destaque: true,
    lotes: [
      {
        id: "unico",
        mes: "Inscrição",
        quantidade: 1,
        valor: 500,
        status: "disponivel",
      },
    ],
    prazoPagamento: "quinta-feira, 29 de outubro",
    prazoPagamentoCurto: "29/10",
    pagamento: {
      banco: "Asaas",
      codigo: "461",
      agencia: "0001",
      conta: "1045781-0",
      pix: "11979901568",
      titular: "Comunidade Evangélica Pentecostal",
    },
    observacoes: [
      "Pagamento até quinta-feira, 29 de outubro",
      "Crianças de 00 a 03 anos não pagam",
      "Crianças de 04 a 06 anos pagam meia entrada",
      "Acelere sua inscrição e pagamento!",
    ],
  },
  {
    id: "daycamp-2025",
    nome: "DayCamp",
    descricao:
      "Um dia especial de comunhão, louvor e confraternização em meio à natureza. Venha viver um dia inesquecível com a família COMEPE.",
    data: "21 de Abril de 2026",
    dataCalendario: "2026-04-21",
    local: "Chácara Bela Vista — Arujá",
    vagas: 0,
    slug: "daycamp",
    destaque: false,
    realizado: true,
    lotes: [
      {
        id: "dc-l1",
        mes: "Ingresso",
        quantidade: 50,
        valor: 50,
        status: "disponivel",
      },
    ],
    pagamento: {
      banco: "Bradesco",
      codigo: "237",
      agencia: "",
      conta: "",
      pix: "01213146852",
      titular: "COMEPE",
    },
    observacoes: ["Valor de R$ 50,00 por pessoa", "Pagamento via PIX Bradesco"],
  },
  {
    id: "encontro-a2",
    nome: "Encontro A2",
    descricao:
      "Um final de semana especial para os casais da Rede A2, com momentos de renovação, ensino e comunhão em meio à natureza.",
    data: "06 a 08 de Novembro de 2026",
    dataCalendario: "2026-11-06",
    local: "Socorro — SP",
    slug: "encontro-a2",
    destaque: false,
    lotes: [],
    valorAVista: 2350,
    parcelamento: { vezes: 12, valor: 234.98 },
    whatsapp: "5511982252401",
    observacoes: [
      "Vagas limitadas",
      "Fale conosco pelo WhatsApp para mais informações e inscrições",
    ],
  },
];
