export interface Evento {
  id: string;
  nome: string;
  descricao: string;
  data: string;
  local: string;
  vagas: number;
  slug: string;
  destaque: boolean;
}

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

export interface Evento {
  id: string;
  nome: string;
  descricao: string;
  data: string;
  local: string;
  vagas: number;
  slug: string;
  destaque: boolean;
  lotes: Lote[];
  pagamento: Pagamento;
  observacoes: string[];
}

export const eventos: Evento[] = [
  {
    id: "gqm-2025",
    nome: "GQM",
    descricao:
      "Um encontro transformador para toda a família. Venha viver dias de renovação, palavra e comunhão.",
    data: "Fevereiro a Setembro de 2025",
    local: "A definir",
    vagas: 10,
    slug: "gqm",
    destaque: true,
    lotes: [
      {
        id: "l1",
        mes: "Fevereiro",
        quantidade: 8,
        valor: 75,
        status: "disponivel",
      },
      {
        id: "l2",
        mes: "Março",
        quantidade: 7,
        valor: 90,
        status: "disponivel",
      },
      {
        id: "l3",
        mes: "Abril",
        quantidade: 6,
        valor: 110,
        status: "disponivel",
      },
      {
        id: "l4",
        mes: "Maio",
        quantidade: 5,
        valor: 138,
        status: "disponivel",
      },
      {
        id: "l5",
        mes: "Junho",
        quantidade: 4,
        valor: 180,
        status: "disponivel",
      },
      {
        id: "l6",
        mes: "Julho",
        quantidade: 3,
        valor: 260,
        status: "disponivel",
      },
      {
        id: "l7",
        mes: "Agosto",
        quantidade: 2,
        valor: 410,
        status: "disponivel",
      },
      {
        id: "l8",
        mes: "Setembro",
        quantidade: 1,
        valor: 900,
        status: "proximo",
      },
    ],
    pagamento: {
      banco: "Asaas",
      codigo: "461",
      agencia: "0001",
      conta: "1045781-0",
      pix: "11979901568",
      titular: "Comunidade Evangélica Pentecostal",
    },
    observacoes: [
      "Crianças de 00 a 03 anos não pagam",
      "Crianças de 04 a 06 anos pagam meia entrada",
      "Acelere sua inscrição e pagamento!",
    ],
  },
];
