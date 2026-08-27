import { Link } from "react-router-dom";
import { Construction } from "lucide-react";
import estilos from "./PaginaEmConstrucao.module.css";

export function PaginaEmConstrucao() {
  return (
    <div className={estilos.pagina}>
      <div className={estilos.fundoDecorado}>
        <div className={estilos.circulo1} />
        <div className={estilos.circulo2} />
      </div>

      <div className={estilos.conteudo}>
        <div className={estilos.iconeWrapper}>
          <Construction size={36} color="#c9a84c" />
        </div>

        <span className={estilos.rotulo}>Em breve</span>

        <h1 className={estilos.titulo}>
          Essa página está
          <br />
          <span className={estilos.tituloDestaque}>em construção</span>
        </h1>

        <p className={estilos.descricao}>
          Estamos preparando essa novidade com muito carinho. Em breve você
          vai poder encontrar a célula mais próxima de você por aqui.
        </p>

        <div className={estilos.versiculo}>
          <p className={estilos.versiculoTexto}>
            "Porque eu sei os planos que tenho para vocês, planos de fazê-los
            prosperar e não de causar dano, planos de dar a vocês esperança e um
            futuro."
          </p>
          <span className={estilos.versiculoRef}>Jeremias 29:11</span>
        </div>

        <div className={estilos.acoes}>
          <Link to="/" className={estilos.botaoPrimario}>
            Voltar ao início
          </Link>
          <Link to="/#contato" className={estilos.botaoSecundario}>
            Falar com a gente
          </Link>
        </div>
      </div>
    </div>
  );
}
