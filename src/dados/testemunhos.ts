export interface Testemunho {
  id: string;
  nome: string;
  funcao: string;
  texto: string;
}

export const testemunhos: Testemunho[] = [
  {
    id: "t1",
    nome: "Maria Santos",
    funcao: "Membro há 5 anos",
    texto:
      "A COMEPE foi o lugar onde encontrei uma família de verdade. Vim sem esperança e saí renovada pelo amor de Deus e pelo acolhimento desta comunidade incrível.",
  },
  {
    id: "t2",
    nome: "João Oliveira",
    funcao: "Membro há 3 anos",
    texto:
      "Entrei pela primeira vez num domingo de manhã e me senti em casa. A palavra ministrada e o cuidado das pessoas transformaram minha vida completamente.",
  },
  {
    id: "t3",
    nome: "Ana Paula",
    funcao: "Membro há 2 anos",
    texto:
      "Fui convidada por uma amiga e não sabia o que esperar. Hoje sou parte desta família e não imagino minha vida sem a COMEPE e sem a comunhão que encontrei aqui.",
  },
];
