export interface Membro {
  id: string;
  nome: string;
  funcao: string;
}

export interface Culto {
  id: string;
  nome: string;
  dia: string;
  horario: string;
  descricao: string;
  descricaoCompleta: string;
  slug: string;
  responsavel: Membro;
  membros: Membro[];
}

export const cultos: Culto[] = [
  {
    id: "culto-domingo",
    nome: "Culto de Domingo",
    dia: "Domingo",
    horario: "18:00 — 20:30",
    descricao:
      "Culto geral de adoração, palavra e comunhão para toda a família.",
    descricaoCompleta:
      "O Culto de Domingo é o principal encontro semanal da COMEPE. Às 18h de cada domingo, nos reunimos para adorar a Deus, ouvir a Palavra pregada com unção e vivenciar a comunhão genuína entre irmãos. Um momento especial para toda a família.",
    slug: "culto-domingo",
    responsavel: { id: "r1", nome: "A definir", funcao: "Pastor Responsável" },
    membros: [
      { id: "m1", nome: "A definir", funcao: "Ministro de Louvor" },
      { id: "m2", nome: "A definir", funcao: "Recepção" },
    ],
  },
  {
    id: "rede-jovens",
    nome: "Rede de Jovens",
    dia: "A confirmar",
    horario: "A confirmar",
    descricao:
      "Encontro especial para os jovens com louvor, palavra e comunhão.",
    descricaoCompleta:
      "A Rede de Jovens é o encontro exclusivo da juventude da COMEPE. Um espaço seguro e animado onde os jovens podem adorar, aprender e crescer juntos na fé. Com louvor contemporâneo, palavra relevante e comunhão verdadeira.",
    slug: "rede-jovens",
    responsavel: { id: "r2", nome: "A definir", funcao: "Líder de Jovens" },
    membros: [
      { id: "m3", nome: "A definir", funcao: "Louvor" },
      { id: "m4", nome: "A definir", funcao: "Coordenação" },
    ],
  },
  {
    id: "rede-casais",
    nome: "Rede de Casais",
    dia: "A confirmar",
    horario: "A confirmar",
    descricao:
      "Encontro para casais com ensinamentos que fortalecem o matrimônio.",
    descricaoCompleta:
      "A Rede de Casais é o encontro mensal dos casais da COMEPE. Através de dinâmicas, estudos bíblicos e momentos de comunhão, fortalecemos os laços matrimoniais e construímos famílias baseadas nos princípios de Deus.",
    slug: "rede-casais",
    responsavel: { id: "r3", nome: "A definir", funcao: "Líder de Casais" },
    membros: [
      { id: "m5", nome: "A definir", funcao: "Louvor" },
      { id: "m6", nome: "A definir", funcao: "Coordenação" },
    ],
  },
];
