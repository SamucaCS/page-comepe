import { Quote } from "lucide-react";
import { testemunhos } from "../../../dados/testemunhos";
import { useAnimacaoScroll } from "../../hooks/useAnimacaoScroll";
import estilos from "./SecaoTestemunhos.module.css";

export function SecaoTestemunhos() {
  const { ref: refCabecalho, visivel: visivelCabecalho } = useAnimacaoScroll();
  const { ref: refGrid, visivel: visivelGrid } = useAnimacaoScroll();

  return (
    <section id="testemunhos" className={estilos.secao}>
      <div className={estilos.inner}>
        <div
          ref={refCabecalho as React.RefObject<HTMLDivElement>}
          className={`${estilos.cabecalhoSecao} animavel ${visivelCabecalho ? "visivel" : ""}`}
        >
          <span className={estilos.rotulo}>Testemunhos</span>
          <h2 className={estilos.titulo}>O que a comunidade diz</h2>
          <div className={estilos.linha} />
          <p className={estilos.subtitulo}>
            Vidas transformadas pelo poder de Deus na COMEPE.
          </p>
        </div>

        <div
          ref={refGrid as React.RefObject<HTMLDivElement>}
          className={`${estilos.grid} animavel atraso-2 ${visivelGrid ? "visivel" : ""}`}
        >
          {testemunhos.map((t) => (
            <div key={t.id} className={estilos.card}>
              <div className={estilos.aspas}>
                <Quote size={28} />
              </div>
              <p className={estilos.texto}>{t.texto}</p>
              <div className={estilos.divisor} />
              <div className={estilos.autor}>
                <div className={estilos.autorAvatar}>{t.nome.charAt(0)}</div>
                <div>
                  <p className={estilos.autorNome}>{t.nome}</p>
                  <p className={estilos.autorFuncao}>{t.funcao}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
