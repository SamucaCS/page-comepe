import { Link } from "react-router-dom";
import { Compass } from "lucide-react";
import estilos from "./Pagina404.module.css";

export function Pagina404() {
  return (
    <div className={estilos.pagina}>
      <div className={estilos.fundoDecorado}>
        <div className={estilos.circulo1} />
        <div className={estilos.circulo2} />
      </div>

      <span className={estilos.numero}>404</span>

      <div className={estilos.conteudo}>
        <div className={estilos.iconeWrapper}>
          <Compass size={36} color="#c9a84c" />
        </div>

        <h1 className={estilos.titulo}>
          Página não
          <br />
          <span className={estilos.tituloDestaque}>encontrada</span>
        </h1>

        <p className={estilos.descricao}>
          A página que você está procurando não existe ou foi movida. Mas você
          ainda está no caminho certo!
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
          <Link to="/#agenda" className={estilos.botaoSecundario}>
            Ver agenda
          </Link>
        </div>
      </div>
    </div>
  );
}
