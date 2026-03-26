import { Target, Eye, Heart } from "lucide-react";
import estilos from "./SecaoSobre.module.css";

const pilares = [
  {
    id: "missao",
    icone: <Target size={22} color="#ffffff" />,
    titulo: "Nossa Missão",
    descricao:
      "Proclamar o evangelho de Jesus Cristo, fazendo discípulos e transformando vidas pelo poder do Espírito Santo.",
  },
  {
    id: "visao",
    icone: <Eye size={22} color="#ffffff" />,
    titulo: "Nossa Visão",
    descricao:
      "Ser uma comunidade de fé que impacta Suzano e região, levando esperança e amor a cada família.",
  },
  {
    id: "valores",
    icone: <Heart size={22} color="#ffffff" />,
    titulo: "Nossos Valores",
    descricao:
      "Fé genuína, amor incondicional, comunhão verdadeira e compromisso com a Palavra de Deus.",
  },
];

export function SecaoSobre() {
  return (
    <section id="sobre" className={estilos.secao}>
      <div className={estilos.inner}>
        <div className={estilos.colEsquerda}>
          <span className={estilos.rotulo}>Quem somos</span>
          <h2 className={estilos.titulo}>
            Uma igreja que
            <br />
            <span className={estilos.tituloDestaque}>transforma vidas</span>
          </h2>
          <div className={estilos.linha} />
          <p className={estilos.texto}>
            A COMEPE — Comunidade Evangélica Pentecostal — nasceu do desejo de
            ver vidas transformadas pelo poder de Deus em Suzano e região. Somos
            uma família unida pela fé, comprometida com o evangelho de Jesus
            Cristo e com o cuidado genuíno de cada pessoa que chega até nós.
          </p>
          <p className={estilos.texto}>
            Aqui você encontra um lugar de acolhimento, crescimento espiritual e
            comunhão verdadeira. Independente de onde você veio ou onde está, há
            um lugar para você na COMEPE.
          </p>

          <div className={estilos.versiculo}>
            <p className={estilos.versiculoTexto}>
              Porque Deus amou o mundo de tal maneira que deu o seu Filho
              unigênito, para que todo aquele que nele crê não pereça, mas tenha
              a vida eterna.
            </p>
            <span className={estilos.versiculoReferencia}>João 3:16</span>
          </div>
        </div>

        <div className={estilos.colDireita}>
          {pilares.map((pilar) => (
            <div key={pilar.id} className={estilos.card}>
              <div className={estilos.cardIcone}>{pilar.icone}</div>
              <div className={estilos.cardTexto}>
                <span className={estilos.cardTitulo}>{pilar.titulo}</span>
                <p className={estilos.cardDescricao}>{pilar.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
