import { useParams, Link } from "react-router-dom";
import { eventos } from "../../../dados/eventos";
import estilos from "./PaginaEvento.module.css";

export function PaginaEvento() {
  const { slug } = useParams<{ slug: string }>();
  const evento = eventos.find((e) => e.slug === slug);

  if (!evento) {
    return (
      <div className={estilos.pagina}>
        <div className={estilos.conteudo}>
          <div className={estilos.etiqueta}>
            <span className={estilos.etiquetaTexto}>Evento não encontrado</span>
          </div>
          <h1 className={estilos.titulo}>404</h1>
          <p className={estilos.descricao}>
            Este evento não existe ou foi encerrado.
          </p>
          <Link to="/" className={estilos.botao}>
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={estilos.pagina}>
      <div className={estilos.conteudo}>
        <div className={estilos.etiqueta}>
          <span className={estilos.etiquetaTexto}>Evento</span>
        </div>
        <h1 className={estilos.titulo}>{evento.nome}</h1>
        <p className={estilos.descricao}>{evento.descricao}</p>
        <Link to="/" className={estilos.botaoVoltar}>
          ← Voltar à agenda
        </Link>
      </div>
    </div>
  );
}
