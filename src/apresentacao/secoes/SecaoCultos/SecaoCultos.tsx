import { Link } from "react-router-dom";
import { Sun, Users, Heart } from "lucide-react";
import { cultos } from "../../../dados/cultos";
import { useAnimacaoScroll } from "../../hooks/useAnimacaoScroll";
import estilos from "./SecaoCultos.module.css";
import type { JSX } from "react";

const mapaIcones: Record<string, JSX.Element> = {
  "culto-domingo": <Sun size={24} color="#0a1f44" />,
  "rede-jovens": <Users size={24} color="#ffffff" />,
  "rede-casais": <Heart size={24} color="#ffffff" />,
};

export function SecaoCultos() {
  const { ref: refCabecalho, visivel: visivelCabecalho } = useAnimacaoScroll();
  const { ref: refGrid, visivel: visivelGrid } = useAnimacaoScroll();

  return (
    <section id="cultos" className={estilos.secao}>
      <div className={estilos.fundoDecorado}>
        <div className={estilos.bolha1} />
        <div className={estilos.bolha2} />
      </div>

      <div className={estilos.inner}>
        <div
          ref={refCabecalho as React.RefObject<HTMLDivElement>}
          className={`${estilos.cabecalhoSecao} animavel ${visivelCabecalho ? "visivel" : ""}`}
        >
          <span className={estilos.rotulo}>Programação</span>
          <h2 className={estilos.titulo}>Cultos e Horários</h2>
          <div className={estilos.linha} />
        </div>

        <div
          ref={refGrid as React.RefObject<HTMLDivElement>}
          className={`${estilos.grid} animavel atraso-2 ${visivelGrid ? "visivel" : ""}`}
        >
          {cultos.map((culto) => {
            const ehDestaque = culto.id === "culto-domingo";
            return (
              <Link
                key={culto.id}
                to={`/cultos/${culto.slug}`}
                className={`${estilos.card} ${ehDestaque ? estilos.cardDestaque : ""}`}
              >
                <div
                  className={`${estilos.iconeWrapper} ${ehDestaque ? estilos.iconeWrapperDestaque : ""}`}
                >
                  {mapaIcones[culto.id]}
                </div>
                <p className={estilos.cardNome}>{culto.nome}</p>
                <div className={estilos.cardInfo}>
                  <div className={estilos.infoItem}>
                    <span className={estilos.infoRotulo}>Dia</span>
                    <span
                      className={`${estilos.infoValor} ${ehDestaque ? estilos.infoValorDestaque : ""}`}
                    >
                      {culto.dia}
                    </span>
                  </div>
                  <div className={estilos.infoItem}>
                    <span className={estilos.infoRotulo}>Horário</span>
                    <span
                      className={`${estilos.infoValor} ${ehDestaque ? estilos.infoValorDestaque : ""}`}
                    >
                      {culto.horario}
                    </span>
                  </div>
                </div>
                <p className={estilos.cardDescricao}>{culto.descricao}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
