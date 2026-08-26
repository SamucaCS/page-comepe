export interface Membro {
  id: string;
  nome: string;
  funcao: string;
}

export interface EquipeCulto {
  id: string;
  nome: string;
  descricao: string;
  link: string | null;
  membros: Membro[];
}

export interface Culto {
  id: string;
  nome: string;
  dia: string;
  horario: string;
  descricao: string;
  descricaoCompleta: string;
  slug: string;
  foto?: string | null;
  responsavel: Membro;
  membros: Membro[];
  equipes?: EquipeCulto[];
}

export const cultos: Culto[] = [
  {
    id: "culto-domingo",
    nome: "Culto de Domingo",
    dia: "Domingo",
    horario: "18:00 — 20:30",
    descricao: "Culto da Família, palavra e comunhão para toda a família.",
    descricaoCompleta:
      "O Culto de Domingo é o principal encontro semanal da COMEPE. Às 18h de cada domingo, nos reunimos para adorar a Deus, ouvir a Palavra pregada com unção e vivenciar a comunhão genuína entre irmãos. Um momento especial para toda a família.",
    slug: "culto-domingo",
    responsavel: {
      id: "r1",
      nome: "Apóstolo Joel Motta Carvalho",
      funcao: "Pastor Responsável",
    },
    membros: [],
    equipes: [
      {
        id: "eq-louvor",
        nome: "Louvor",
        descricao: "Conduz a congregação à adoração",
        link: "/ministerios/louvor",
        membros: [],
      },
      {
        id: "eq-intercessao",
        nome: "Intercessão",
        descricao: "Equipe de oração e intercessão",
        link: "/ministerios/intercessao",
        membros: [],
      },
      {
        id: "eq-wakeplay",
        nome: "Wakeplay",
        descricao: "Ministério infantil durante o culto",
        link: "/ministerios/wakeplay",
        membros: [],
      },
      {
        id: "eq-wakemidia",
        nome: "Wakemídia",
        descricao: "Transmissão e comunicação",
        link: "/ministerios/wakemidia",
        membros: [],
      },
      {
        id: "eq-cesta",
        nome: "Cesta do Amor",
        descricao: "Assistência social e acolhimento",
        link: "/ministerios/cesta-do-amor",
        membros: [],
      },
      {
        id: "eq-pastoral",
        nome: "Equipe Pastoral",
        descricao: "Apoio e cuidado pastoral",
        link: "/ministerios/pastoral",
        membros: [],
      },
      {
        id: "eq-som",
        nome: "Ministério de Som",
        descricao: "Operação e qualidade do áudio",
        link: "/ministerios/som",
        membros: [],
      },
      {
        id: "eq-asher",
        nome: "Asher",
        descricao: "Cuidado e inclusão de pessoas com deficiência visual",
        link: "/ministerios/asher",
        membros: [],
      },
      {
        id: "eq-wake-fotos",
        nome: "Wake Fotos",
        descricao: "Fotografia dos cultos e eventos",
        link: "/ministerios/wake-fotos",
        membros: [],
      },
    ],
  },
  {
    id: "rede-jovens",
    nome: "Rede de Jovens",
    dia: "Sábado",
    horario: "19:30",
    descricao:
      "Encontro especial para os jovens com louvor, palavra e comunhão.",
    descricaoCompleta:
      "A Rede de Jovens é o encontro exclusivo da juventude da COMEPE. Um espaço seguro e animado onde os jovens podem adorar, aprender e crescer juntos na fé. Com louvor contemporâneo, palavra relevante e comunhão verdadeira.",
    slug: "rede-jovens",
    foto: "/equipe_de_jovens.JPG",
    responsavel: { id: "r2", nome: "Dãmarys", funcao: "Responsável" },
    membros: [],
    equipes: [
      {
        id: "eq-jovens",
        nome: "Equipe",
        descricao: "Equipe da Rede de Jovens",
        link: null,
        membros: [
          { id: "j1", nome: "Apostola Berenice", funcao: "Equipe" },
          { id: "j2", nome: "Jeferssor", funcao: "Equipe" },
          { id: "j3", nome: "Silvia", funcao: "Equipe" },
          { id: "j4", nome: "Pedro", funcao: "Equipe" },
          { id: "j5", nome: "Victoria", funcao: "Equipe" },
          { id: "j6", nome: "Kesya", funcao: "Equipe" },
          { id: "j7", nome: "Fernanda", funcao: "Equipe" },
          { id: "j8", nome: "Daniela", funcao: "Equipe" },
          { id: "j9", nome: "Samuel", funcao: "Equipe" },
        ],
      },
    ],
  },
  {
    id: "rede-casais",
    nome: "Rede de Casais A2",
    dia: "Toda 3ª quinta-feira do mês",
    horario: "20:00",
    descricao:
      "Encontro para casais com ensinamentos que fortalecem o matrimônio.",
    descricaoCompleta:
      "A Rede de Casais é o encontro mensal dos casais da COMEPE. Através de dinâmicas, estudos bíblicos e momentos de comunhão, fortalecemos os laços matrimoniais e construímos famílias baseadas nos princípios de Deus.",
    slug: "rede-casais",
    responsavel: {
      id: "r3",
      nome: "Thiago e Tamires",
      funcao: "Líderes de Casais",
    },
    membros: [],
  },
  {
    id: "rede-homens",
    nome: "Rede de Homens",
    dia: "Toda 1ª quarta-feira do mês",
    horario: "19:30",
    descricao:
      "Encontro para homens com palavra, comunhão e fortalecimento do caráter cristão.",
    descricaoCompleta:
      "A Rede de Homens da COMEPE é um espaço de crescimento, identidade e propósito para os homens da comunidade. Através de encontros com a Palavra de Deus, comunhão genuína e desafios práticos, equipamos os homens para serem pilares em suas famílias e na sociedade.",
    slug: "rede-homens",
    foto: "/equipe_rede_homens.JPG",
    responsavel: { id: "r4", nome: "Pastor Paulo", funcao: "Líder" },
    membros: [],
  },
  {
    id: "rede-mulheres",
    nome: "Rede de Mulheres",
    dia: "Toda última quarta-feira do mês",
    horario: "19:30",
    descricao:
      "Encontro para mulheres com louvor, palavra e momentos de cuidado e restauração.",
    descricaoCompleta:
      "A Rede de Mulheres da COMEPE é um espaço de acolhimento, cura e empoderamento para as mulheres da comunidade. Através de encontros cheios de adoração, Palavra e comunhão, fortalecemos a identidade e o propósito de cada mulher em Deus.",
    slug: "rede-mulheres",
    foto: "/equipe_rede_mulheres.JPG",
    responsavel: { id: "r5", nome: "Apóstola Berenice", funcao: "Líder" },
    membros: [],
  },
  {
    id: "rede-criancas",
    nome: "Rede de Crianças",
    dia: "A definir",
    horario: "09:00",
    descricao:
      "Encontro especial para as crianças com atividades bíblicas, louvor e muito amor.",
    descricaoCompleta:
      "A Rede de Crianças da COMEPE é um espaço alegre e seguro dedicado às crianças da comunidade. Com histórias bíblicas, músicas, dinâmicas e muito amor, plantamos a semente da fé no coração de cada criança, formando pequenos guerreiros de Deus.",
    slug: "rede-criancas",
    foto: "/equipe_kids.JPG",
    responsavel: { id: "r6", nome: "Bruna", funcao: "Líder" },
    membros: [],
  },
];
