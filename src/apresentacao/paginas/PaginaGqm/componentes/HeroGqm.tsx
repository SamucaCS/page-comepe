import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import type { Evento } from "../../../../dados/eventos";
import estilos from "./HeroGqm.module.css";

interface Props {
  evento: Evento;
}

export function HeroGqm({ evento }: Props) {
  const valorUnico = evento.lotes.length === 1;
  return (
    <section className={estilos.hero}>
      <div className={estilos.fundoDecorado}>
        <div className={`${estilos.circulo} ${estilos.circulo1}`} />
        <div className={`${estilos.circulo} ${estilos.circulo2}`} />
        <div className={`${estilos.circulo} ${estilos.circulo3}`} />
        <div className={estilos.linhaDourada} />
      </div>

      <div className={estilos.conteudo}>
        <Link to="/" className={estilos.botaoVoltar}>
          <ArrowLeft size={14} />
          Voltar ao início
        </Link>

        <div className={estilos.etiqueta}>
          <div className={estilos.ponto} />
          <span className={estilos.etiquetaTexto}>{evento.data}</span>
        </div>

        <h1 className={estilos.titulo}>
          {evento.nome}
          <span className={estilos.tituloDestaque}>COMEPE</span>
        </h1>

        <p className={estilos.subtitulo}>Comunidade Evangélica Pentecostal</p>

        <p className={estilos.descricao}>{evento.descricao}</p>

        <div className={estilos.painelVagas}>
          <div className={estilos.itemVaga}>
            <span className={estilos.vagaNumero}>{evento.vagas}</span>
            <span className={estilos.vagaLabel}>Vagas Restantes</span>
          </div>
          <div className={estilos.divisor} />
          <div className={estilos.itemVaga}>
            {valorUnico && evento.prazoPagamentoCurto ? (
              <>
                <span className={estilos.vagaNumero}>{evento.prazoPagamentoCurto}</span>
                <span className={estilos.vagaLabel}>Pagar até</span>
              </>
            ) : (
              <>
                <span className={estilos.vagaNumero}>{evento.lotes.length}</span>
                <span className={estilos.vagaLabel}>Lotes</span>
              </>
            )}
          </div>
          <div className={estilos.divisor} />
          <div className={estilos.itemVaga}>
            <span className={estilos.vagaNumero}>
              R${evento.lotes[0].valor}
            </span>
            <span className={estilos.vagaLabel}>{valorUnico ? "Inscrição" : "A partir de"}</span>
          </div>
        </div>

        <div className={estilos.acoes}>
          <a href="#lotes" className={estilos.botaoPrimario}>
            Garantir minha vaga
          </a>
          <a href="#pagamento" className={estilos.botaoSecundario}>
            Ver pagamento
          </a>
        </div>
      </div>
    </section>
  );
}
