export interface Membro {
  id: string;
  nome: string;
  funcao: string;
}

export interface Ministerio {
  id: string;
  nome: string;
  descricao: string;
  descricaoCompleta: string;
  icone: string;
  publico: string;
  slug: string;
  responsavel: Membro;
  membros: Membro[];
}

export const ministerios: Ministerio[] = [
  {
    id: "louvor",
    nome: "Louvor",
    descricao:
      "Ministério responsável pela adoração e louvor nos cultos, conduzindo a congregação à presença de Deus através da música.",
    descricaoCompleta:
      "O Ministério de Louvor é o coração da adoração na COMEPE. Através da música e da adoração genuína, conduzimos a congregação à presença de Deus em cada culto. Nosso compromisso é com a excelência musical e com a espiritualidade, buscando sempre ministrar com unção e preparo.",
    icone: "Music",
    publico: "Toda a congregação",
    slug: "louvor",
    responsavel: { id: "r1", nome: "A definir", funcao: "Líder de Louvor" },
    membros: [
      { id: "m1", nome: "Membro 1", funcao: "Vocal" },
      { id: "m2", nome: "Membro 2", funcao: "Violão" },
      { id: "m3", nome: "Membro 3", funcao: "Teclado" },
    ],
  },
  {
    id: "wakemidia",
    nome: "Wakemídia",
    descricao:
      "Ministério de comunicação e mídia responsável pela transmissão dos cultos, redes sociais e produção de conteúdo digital.",
    descricaoCompleta:
      "O Wakemídia é o ministério de comunicação da COMEPE. Somos responsáveis por transmitir os cultos ao vivo, gerenciar as redes sociais, produzir conteúdo digital e registrar os momentos especiais da comunidade. Nossa missão é levar a palavra de Deus além das paredes da igreja.",
    icone: "Video",
    publico: "Toda a congregação",
    slug: "wakemidia",
    responsavel: { id: "r2", nome: "A definir", funcao: "Líder de Mídia" },
    membros: [
      { id: "m4", nome: "Membro 1", funcao: "Transmissão" },
      { id: "m5", nome: "Membro 2", funcao: "Redes Sociais" },
      { id: "m6", nome: "Membro 3", funcao: "Design" },
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
    responsavel: { id: "r3", nome: "A definir", funcao: "Líder Social" },
    membros: [
      { id: "m7", nome: "Membro 1", funcao: "Arrecadação" },
      { id: "m8", nome: "Membro 2", funcao: "Distribuição" },
    ],
  },
  {
    id: "wakeplay",
    nome: "Wakeplay",
    descricao:
      "Ministério infantil que cuida das crianças durante os cultos com atividades lúdicas, ensinamentos bíblicos e muito amor.",
    descricaoCompleta:
      "O Wakeplay é o ministério infantil da COMEPE. Cuidamos das crianças durante os cultos com atividades lúdicas, histórias bíblicas, músicas e muito amor. Nosso objetivo é plantar a semente da fé no coração de cada criança desde cedo, em um ambiente seguro e divertido.",
    icone: "Star",
    publico: "Crianças",
    slug: "wakeplay",
    responsavel: { id: "r4", nome: "A definir", funcao: "Líder Infantil" },
    membros: [
      { id: "m9", nome: "Membro 1", funcao: "Professora" },
      { id: "m10", nome: "Membro 2", funcao: "Auxiliar" },
    ],
  },
  {
    id: "jovens",
    nome: "Ministério dos Jovens",
    descricao:
      "Ministério dedicado aos jovens com encontros, estudos bíblicos e atividades que fortalecem a fé na juventude.",
    descricaoCompleta:
      "O Ministério dos Jovens da COMEPE é um espaço de crescimento, comunhão e propósito para a juventude. Através de encontros, estudos bíblicos, eventos e atividades, ajudamos os jovens a descobrirem sua identidade em Cristo e a viverem uma fé genuína no dia a dia.",
    icone: "Users",
    publico: "Jovens",
    slug: "jovens",
    responsavel: { id: "r5", nome: "A definir", funcao: "Líder de Jovens" },
    membros: [
      { id: "m11", nome: "Membro 1", funcao: "Coordenador" },
      { id: "m12", nome: "Membro 2", funcao: "Auxiliar" },
    ],
  },
  {
    id: "casais",
    nome: "Ministério dos Casais",
    descricao:
      "Ministério que fortalece os laços matrimoniais através de encontros, retiros e aconselhamento bíblico para casais.",
    descricaoCompleta:
      "O Ministério dos Casais da COMEPE existe para fortalecer os matrimônios e famílias da nossa comunidade. Através de encontros, retiros e aconselhamento baseado na Palavra de Deus, ajudamos os casais a construírem relacionamentos sólidos, saudáveis e com propósito eterno.",
    icone: "HandHeart",
    publico: "Casais",
    slug: "casais",
    responsavel: { id: "r6", nome: "A definir", funcao: "Líder de Casais" },
    membros: [
      { id: "m13", nome: "Casal 1", funcao: "Coordenação" },
      { id: "m14", nome: "Casal 2", funcao: "Auxiliar" },
    ],
  },
];
