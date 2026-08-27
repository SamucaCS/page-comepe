import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { useAnimacaoScroll } from "../../hooks/useAnimacaoScroll";
import estilos from "./SecaoCelulas.module.css";

export function SecaoCelulas() {
  const { ref, visivel } = useAnimacaoScroll();

  return (
    <section id="celulas" className={estilos.secao}>
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`${estilos.inner} animavel ${visivel ? "visivel" : ""}`}
      >
        <div className={estilos.iconeWrapper}>
          <MapPin size={26} color="#c9a84c" />
        </div>

        <span className={estilos.rotulo}>Comunhão</span>
        <h2 className={estilos.titulo}>Encontre uma célula perto de você</h2>
        <div className={estilos.linha} />
        <p className={estilos.subtitulo}>
          As células são pequenos grupos que se reúnem durante a semana para
          orar, estudar a Palavra e viver em comunhão. Descubra a célula mais
          próxima de você e faça parte.
        </p>

        <Link to="/celulas" className={estilos.botao}>
          <MapPin size={16} />
          Buscar célula
        </Link>
      </div>
    </section>
  );
}
