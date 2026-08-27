export interface Membro {
  id: string;
  nome: string;
  funcao: string;
}

export interface Equipe {
  id: string;
  nome: string;
  membros: Membro[];
}

export interface Ministerio {
  id: string;
  nome: string;
  descricao: string;
  descricaoCompleta: string;
  icone: string;
  publico: string;
  slug: string;
  foto?: string | null;
  responsavel: Membro;
  membros: Membro[];
  equipes?: Equipe[];
}

export const ministerios: Ministerio[] = [
  {
    id: "louvor",
    nome: "Louvor",
    descricao:
      "Ministério responsável pela adoração e louvor nos cultos, conduzindo a congregação à presença de Deus através da música.",
    descricaoCompleta:
      "O Ministério de Louvor é o coração da adoração na COMEPE. Através da música e da adoração genuína, conduzimos a congregação à presença de Deus em cada culto. Nosso compromisso é com a excelência musical e com a espiritualidade, buscando sempre ministrar com unção e preparo. Confira abaixo as equipes de Abril a Julho.",
    icone: "Music",
    publico: "Toda a congregação",
    slug: "louvor",
    foto: "/equipe_louvor.JPG",
    responsavel: { id: "r1", nome: "Dâmarys", funcao: "Líder de Louvor" },
    membros: [],
    equipes: [
      {
        id: "equipe-a",
        nome: "Equipe A",
        membros: [
          { id: "a1", nome: "Keyla", funcao: "Dirigente" },
          { id: "a2", nome: "Coral", funcao: "Back Vocal" },
          { id: "a3", nome: "Dâmarys", funcao: "Violão" },
          { id: "a4", nome: "Danieli", funcao: "Baixo" },
          { id: "a5", nome: "Samuel", funcao: "Bateria" },
          { id: "a6", nome: "Apa. Berenice", funcao: "Teclado" },
          { id: "a7", nome: "Wilsinho", funcao: "Guitarra" },
        ],
      },
      {
        id: "equipe-b",
        nome: "Equipe B",
        membros: [
          { id: "b1", nome: "Dâmarys", funcao: "Dirigente e Violão" },
          { id: "b2", nome: "Shirleyne", funcao: "Back Vocal" },
          { id: "b3", nome: "Sandra", funcao: "Back Vocal" },
          { id: "b4", nome: "Alexandre", funcao: "Back Vocal" },
          { id: "b5", nome: "Charles", funcao: "Baixo" },
          { id: "b6", nome: "Danilo", funcao: "Bateria" },
          { id: "b7", nome: "Cido", funcao: "Teclado" },
          { id: "b8", nome: "Wilsinho", funcao: "Guitarra" },
        ],
      },
      {
        id: "equipe-c",
        nome: "Equipe C",
        membros: [
          { id: "c1", nome: "Fernando", funcao: "Dirigente e Violão" },
          { id: "c2", nome: "Tamires", funcao: "Back Vocal" },
          { id: "c3", nome: "Ana", funcao: "Back Vocal" },
          { id: "c4", nome: "André", funcao: "Back Vocal" },
          { id: "c5", nome: "Charles", funcao: "Baixo" },
          { id: "c6", nome: "Thiago", funcao: "Bateria" },
          { id: "c7", nome: "Apa. Berenice", funcao: "Teclado" },
          { id: "c8", nome: "Alexandre", funcao: "Guitarra" },
        ],
      },
      {
        id: "equipe-d",
        nome: "Equipe D",
        membros: [
          { id: "d1", nome: "Shirleyne", funcao: "Dirigente" },
          { id: "d2", nome: "Denise", funcao: "Back Vocal" },
          { id: "d3", nome: "Silmara", funcao: "Back Vocal" },
          { id: "d4", nome: "Danilo", funcao: "Back Vocal" },
          { id: "d5", nome: "André", funcao: "Violão" },
          { id: "d6", nome: "Danieli", funcao: "Baixo" },
          { id: "d7", nome: "Samuel", funcao: "Bateria" },
          { id: "d8", nome: "Apa. Berenice", funcao: "Teclado" },
          { id: "d9", nome: "Wilsinho", funcao: "Guitarra" },
        ],
      },
      {
        id: "equipe-e",
        nome: "Equipe E",
        membros: [
          { id: "e1", nome: "Luiz", funcao: "Dirigente e Violão" },
          { id: "e2", nome: "Carol", funcao: "Back Vocal" },
          { id: "e3", nome: "Nilma", funcao: "Back Vocal" },
          { id: "e4", nome: "Fernando", funcao: "Back Vocal" },
          { id: "e5", nome: "Charles", funcao: "Baixo" },
          { id: "e6", nome: "Danilo", funcao: "Bateria" },
          { id: "e7", nome: "Cido", funcao: "Teclado" },
          { id: "e8", nome: "Wilsinho", funcao: "Guitarra" },
        ],
      },
    ],
  },
  {
    id: "wakemidia",
    nome: "Wakemídia",
    descricao:
      "Equipe de projeção responsável pela exibição de mídias e suporte visual durante os cultos e eventos da COMEPE.",
    descricaoCompleta:
      "O Wakemídia é a equipe de projeção da COMEPE. Somos responsáveis pela exibição de letras, mídias e todo o suporte visual durante os cultos e eventos, garantindo que cada momento seja acompanhado com excelência e dedicação.",
    icone: "Video",
    publico: "Equipe de Projeção",
    slug: "wakemidia",
    foto: "/equipe_wakemidia.JPG",
    responsavel: { id: "r2", nome: "Luiz", funcao: "Líder" },
    membros: [
      { id: "wm1", nome: "Rebeca", funcao: "Equipe" },
      { id: "wm2", nome: "Wilson", funcao: "Equipe" },
      { id: "wm3", nome: "Samuel", funcao: "Equipe" },
      { id: "wm4", nome: "Matheus", funcao: "Equipe" },
      { id: "wm5", nome: "Pedro", funcao: "Equipe" },
      { id: "wm6", nome: "Felipe", funcao: "Equipe" },
    ],
  },
  {
    id: "cesta-do-amor",
    nome: "Cesta do Amor",
    descricao:
      "Ministério de assistência social que arrecada e distribui cestas básicas para famílias em situação de vulnerabilidade.",
    descricaoCompleta:
      "O Cesta do Amor é o ministério de ação social da COMEPE. Através da arrecadação e distribuição de cestas básicas, expressamos o amor de Deus de forma prática às famílias em situação de vulnerabilidade em Suzano e região. Acreditamos que a fé sem obras é morta.",
    icone: "Heart",
    publico: "Comunidade",
    slug: "cesta-do-amor",
    foto: "/equipe_cesta_amor.JPG",
    responsavel: { id: "r3", nome: "Pastor Paulo", funcao: "Líder Social" },
    membros: [
      { id: "m7", nome: "Membro 1", funcao: "Arrecadação" },
      { id: "m8", nome: "Membro 2", funcao: "Distribuição" },
    ],
  },
  {
    id: "wakeplay",
    nome: "Wakeplay",
    descricao:
      "Equipe de transmissão responsável pela gravação e transmissão ao vivo dos cultos e eventos da COMEPE.",
    descricaoCompleta:
      "O Wakeplay é a equipe de transmissão da COMEPE. Somos responsáveis pela gravação e transmissão ao vivo dos cultos e eventos, levando a Palavra de Deus além das paredes da igreja com excelência e dedicação.",
    icone: "Star",
    publico: "Equipe de Transmissão",
    slug: "wakeplay",
    foto: "/equipe_wakeplay.JPG",
    responsavel: { id: "r4", nome: "Rafaela e Lucas", funcao: "Líderes" },
    membros: [
      { id: "wp1", nome: "Pastora Keyla", funcao: "Equipe" },
      { id: "wp2", nome: "Kesya", funcao: "Equipe" },
      { id: "wp3", nome: "Danilo", funcao: "Equipe" },
      { id: "wp4", nome: "Felipe", funcao: "Equipe" },
      { id: "wp5", nome: "Pastor Charles", funcao: "Equipe" },
      { id: "wp6", nome: "Ana Beatriz", funcao: "Equipe" },
      { id: "wp7", nome: "Samuel", funcao: "Equipe" },
    ],
  },
  {
    id: "jovens",
    nome: "Rede de Jovens",
    descricao:
      "Ministério dedicado aos jovens com encontros, estudos bíblicos e atividades que fortalecem a fé na juventude.",
    descricaoCompleta:
      "A Rede de Jovens da COMEPE é um espaço de crescimento, comunhão e propósito para a juventude. Através de encontros, estudos bíblicos, eventos e atividades, ajudamos os jovens a descobrirem sua identidade em Cristo e a viverem uma fé genuína no dia a dia.",
    icone: "Users",
    publico: "Jovens",
    slug: "jovens",
    foto: "/equipe_de_jovens.JPG",
    responsavel: { id: "r5", nome: "Dãmarys", funcao: "Responsável" },
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
  {
    id: "intercessao",
    nome: "Intercessão",
    descricao:
      "Ministério de oração e intercessão que sustenta espiritualmente todos os cultos e atividades da COMEPE.",
    descricaoCompleta:
      "O Ministério de Intercessão é o alicerce espiritual da COMEPE. Através da oração constante e da intercessão fervorosa, sustentamos cada culto, evento e necessidade da comunidade. Acreditamos que a oração é o combustível que move a igreja e transforma vidas.",
    icone: "HandsClapping",
    publico: "Toda a congregação",
    slug: "intercessao",
    foto: "/equipe_intercessao.JPG",
    responsavel: {
      id: "r7",
      nome: "A definir",
      funcao: "Líder de Intercessão",
    },
    membros: [
      { id: "int1", nome: "A definir", funcao: "Intercessor" },
      { id: "int2", nome: "A definir", funcao: "Intercessor" },
    ],
    equipes: [],
  },
  {
    id: "pastoral",
    nome: "Equipe Pastoral",
    descricao:
      "Equipe responsável pelo cuidado, acolhimento e acompanhamento espiritual de cada membro da comunidade.",
    descricaoCompleta:
      "A Equipe Pastoral da COMEPE é responsável pelo cuidado integral de cada membro da comunidade. Através do acompanhamento espiritual, aconselhamento e acolhimento, buscamos garantir que ninguém enfrente os desafios da vida sozinho. Nossa missão é pastorear com amor, dedicação e compromisso com a Palavra de Deus.",
    icone: "BookOpen",
    publico: "12 Discípulos do Apóstolo Joel",
    slug: "pastoral",
    foto: "/equipe_pastoral.JPG",
    responsavel: {
      id: "r8",
      nome: "Apóstolo Joel Motta Carvalho",
      funcao: "Pastor Responsável",
    },
    membros: [
      { id: "pas1", nome: "A definir", funcao: "Pastor Auxiliar" },
      { id: "pas2", nome: "A definir", funcao: "Auxiliar Pastoral" },
    ],
    equipes: [],
  },
  {
    id: "ouro-oufir",
    nome: "Ouro de oufir",
    descricao:
      "Ministério de discipulado e crescimento espiritual para aprofundar a fé e o compromisso com Deus.",
    descricaoCompleta:
      "O Ouro de oufir é o ministério de discipulado da COMEPE. Um espaço de aprofundamento espiritual, onde buscamos crescer no conhecimento de Deus, no caráter cristão e no propósito de vida. Como ouro que passa pelo fogo, somos moldados para refletir a glória de Cristo.",
    icone: "Crown",
    publico: "Toda a congregação",
    slug: "ouro-oufir",
    foto: "/equipe_ouro_oufir.JPG",
    responsavel: { id: "r9", nome: "Amanda", funcao: "Responsável" },
    membros: [],
  },
  {
    id: "asher",
    nome: "Asher",
    descricao:
      "Ministério de cuidado e inclusão dedicado às pessoas com deficiência visual, promovendo acolhimento e participação plena na vida da igreja.",
    descricaoCompleta:
      "O Ministério Asher da COMEPE é dedicado ao cuidado e inclusão das pessoas com deficiência visual. Com amor e sensibilidade, buscamos garantir que cada pessoa cega ou com baixa visão seja plenamente acolhida, participante ativa da comunidade e alcançada pela Palavra de Deus.",
    icone: "Eye",
    publico: "Pessoas com deficiência visual",
    slug: "asher",
    foto: "/fotos_asher.JPG",
    responsavel: { id: "r11", nome: "Silvia", funcao: "Líder" },
    membros: [
      { id: "ash1", nome: "Pastora Maria", funcao: "Coordenação" },
      { id: "ash2", nome: "Vanessa", funcao: "Coordenação" },
    ],
  },
  {
    id: "wake-fotos",
    nome: "Wake Fotos",
    descricao:
      "Equipe de fotografia responsável por registrar os momentos especiais dos cultos e eventos da COMEPE.",
    descricaoCompleta:
      "O Wake Fotos é a equipe de fotografia da COMEPE. Somos responsáveis por registrar com excelência os momentos especiais dos cultos, eventos e a vida da comunidade, preservando memórias e contando a história da nossa igreja através das imagens.",
    icone: "Camera",
    publico: "Equipe de Fotografia",
    slug: "wake-fotos",
    foto: "/equipe_wake_foto.JPG",
    responsavel: { id: "r12", nome: "Daniela", funcao: "Líder" },
    membros: [],
  },
  {
    id: "anjos-guarda",
    nome: "Anjos da Guarda",
    descricao:
      "Ministério que cuida da segurança e organização dos veículos na rua durante os cultos e eventos da COMEPE.",
    descricaoCompleta:
      "Os Anjos da Guarda são o ministério de segurança viária da COMEPE. Com dedicação e cuidado, nossa equipe orienta e zela pelos veículos estacionados nas ruas ao redor da igreja durante os cultos e eventos, servindo a Deus e à comunidade com excelência nos bastidores.",
    icone: "Car",
    publico: "Segurança Viária",
    slug: "anjos-guarda",
    foto: "/equipe_anjos_guarda.JPG",
    responsavel: {
      id: "r14",
      nome: "Pastor Paulo e Pastor Irineu",
      funcao: "Líderes",
    },
    membros: [],
  },
  {
    id: "som",
    nome: "Ministério de Som",
    descricao:
      "Equipe responsável pela operação e qualidade do som em todos os cultos e eventos da COMEPE.",
    descricaoCompleta:
      "O Ministério de Som da COMEPE é responsável pela operação técnica de áudio em todos os cultos e eventos. Com dedicação e excelência, garante que a Palavra e o louvor cheguem com clareza a cada pessoa presente, servindo a Deus nos bastidores com propósito.",
    icone: "Volume2",
    publico: "Equipe de Sonorização",
    slug: "som",
    foto: "/equipe_som.JPG",
    responsavel: { id: "r13", nome: "Dâmarys", funcao: "Líder" },
    membros: [],
  },
  {
    id: "kids",
    nome: "Ministério Kids",
    descricao:
      "Ministério infantil que cuida das crianças durante os cultos com atividades lúdicas, ensinamentos bíblicos e muito amor.",
    descricaoCompleta:
      "O Ministério dos Kids da COMEPE cuida das crianças durante os cultos com atividades lúdicas, histórias bíblicas, músicas e muito amor. Nosso objetivo é plantar a semente da fé no coração de cada criança desde cedo, em um ambiente seguro e divertido.",
    icone: "Baby",
    publico: "Crianças",
    slug: "kids",
    foto: "/equipe_kids.JPG",
    responsavel: { id: "r10", nome: "Bruna", funcao: "Líder Infantil" },
    membros: [],
  },
];
