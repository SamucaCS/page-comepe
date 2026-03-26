import { CheckCircle, XCircle, Clock } from "lucide-react";
import type { Evento } from "../../../../dados/eventos";
import estilos from "./LotesGqm.module.css";

interface Props {
  evento: Evento;
}

const mapaClasseCartao: Record<string, string> = {
  disponivel: estilos.cartaoDisponivel,
  esgotado: estilos.cartaoEsgotado,
  proximo: estilos.cartaoProximo,
};

const mapaClasseBadge: Record<string, string> = {
  disponivel: estilos.badgeDisponivel,
  esgotado: estilos.badgeEsgotado,
  proximo: estilos.badgeProximo,
};

const mapaRotulo: Record<string, string> = {
  disponivel: "Disponível",
  esgotado: "Esgotado",
  proximo: "Em breve",
};

function IconeStatus({ status }: { status: string }) {
  if (status === "disponivel") return <CheckCircle size={18} color="#4ade80" />;
  if (status === "esgotado") return <XCircle size={18} color="#f87171" />;
  return <Clock size={18} color="#f0d080" />;
}

export function LotesGqm({ evento }: Props) {
  return (
    <section id="lotes" className={estilos.secao}>
      <div className={estilos.inner}>
        <div className={estilos.cabecalho}>
          <span className={estilos.rotulo}>Inscrições</span>
          <h2 className={estilos.titulo}>Lotes e Valores</h2>
          <p className={estilos.subtitulo}>
            Os valores aumentam a cada mês. Garanta sua vaga no menor preço
            disponível.
          </p>
          <div className={estilos.linha} />
        </div>

        <div className={estilos.grid}>
          {evento.lotes.map((lote) => (
            <div
              key={lote.id}
              className={`${estilos.cartao} ${mapaClasseCartao[lote.status]}`}
            >
              <div className={estilos.cabecalhoCartao}>
                <span className={estilos.mes}>{lote.mes}</span>
                <span
                  className={`${estilos.badge} ${mapaClasseBadge[lote.status]}`}
                >
                  {mapaRotulo[lote.status]}
                </span>
              </div>

              <p className={estilos.valor}>
                <span className={estilos.valorPrefixo}>R$</span>
                {lote.valor.toFixed(2).replace(".", ",")}
              </p>

              <div className={estilos.rodapeCartao}>
                <span className={estilos.quantidade}>
                  <span className={estilos.quantidadeDestaque}>
                    {lote.quantidade}x
                  </span>{" "}
                  parcelas
                </span>
                <IconeStatus status={lote.status} />
              </div>
            </div>
          ))}
        </div>

        <div className={estilos.painelObservacoes}>
          <p className={estilos.observacaoTitulo}>Observações importantes</p>
          {evento.observacoes.map((obs, index) => (
            <div key={index} className={estilos.observacaoItem}>
              <div className={estilos.observacaoPonto} />
              <span>{obs}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
