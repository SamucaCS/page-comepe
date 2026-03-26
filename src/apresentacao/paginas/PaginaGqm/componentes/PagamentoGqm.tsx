import { useState } from "react";
import { Copy, CheckCheck, Zap, Building2 } from "lucide-react";
import type { Evento } from "../../../../dados/eventos";
import estilos from "./PagamentoGqm.module.css";

interface Props {
  evento: Evento;
}

export function PagamentoGqm({ evento }: Props) {
  const [copiado, setCopiado] = useState(false);
  const { pagamento } = evento;

  function copiarPix() {
    navigator.clipboard.writeText(pagamento.pix);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 3000);
  }

  return (
    <section id="pagamento" className={estilos.secao}>
      <div className={estilos.inner}>
        <div className={estilos.cabecalho}>
          <span className={estilos.rotulo}>Como Pagar</span>
          <h2 className={estilos.titulo}>Dados para Pagamento</h2>
          <div className={estilos.linha} />
        </div>

        <div className={estilos.grid}>
          <div className={estilos.cartao}>
            <p className={estilos.cartaoTitulo}>
              <Building2 size={14} />
              Dados Bancários
            </p>
            <div className={estilos.lista}>
              <div className={estilos.item}>
                <span className={estilos.itemRotulo}>Titular</span>
                <span className={estilos.itemValor}>{pagamento.titular}</span>
              </div>
              <div className={estilos.item}>
                <span className={estilos.itemRotulo}>Banco</span>
                <span className={estilos.itemValor}>
                  {pagamento.banco} — {pagamento.codigo}
                </span>
              </div>
              <div className={estilos.item}>
                <span className={estilos.itemRotulo}>Agência</span>
                <span className={estilos.itemValor}>{pagamento.agencia}</span>
              </div>
              <div className={estilos.item}>
                <span className={estilos.itemRotulo}>Conta Corrente</span>
                <span className={estilos.itemValor}>{pagamento.conta}</span>
              </div>
            </div>
          </div>

          <div className={`${estilos.cartao} ${estilos.cartaoEscuro}`}>
            <p
              className={`${estilos.cartaoTitulo} ${estilos.cartaoTituloClaro}`}
            >
              <Zap size={14} />
              Pagamento via Pix
            </p>
            <div className={estilos.lista}>
              <div className={`${estilos.item} ${estilos.itemClaro}`}>
                <span
                  className={`${estilos.itemRotulo} ${estilos.itemRotuloClaro}`}
                >
                  Titular
                </span>
                <span
                  className={`${estilos.itemValor} ${estilos.itemValorClaro}`}
                >
                  {pagamento.titular}
                </span>
              </div>
              <div className={`${estilos.item} ${estilos.itemClaro}`}>
                <span
                  className={`${estilos.itemRotulo} ${estilos.itemRotuloClaro}`}
                >
                  Banco
                </span>
                <span
                  className={`${estilos.itemValor} ${estilos.itemValorClaro}`}
                >
                  {pagamento.banco} — {pagamento.codigo}
                </span>
              </div>
            </div>

            <div className={estilos.painelPix}>
              <span className={estilos.pixRotulo}>Chave Pix</span>
              <span className={estilos.pixValor}>{pagamento.pix}</span>
              <button
                onClick={copiarPix}
                className={`${estilos.botaoCopiar} ${copiado ? estilos.botaoCopiado : ""}`}
              >
                {copiado ? <CheckCheck size={14} /> : <Copy size={14} />}
                {copiado ? "Copiado!" : "Copiar chave"}
              </button>
            </div>
          </div>
        </div>

        <div className={estilos.alerta}>
          <div className={estilos.alertaIcone}>
            <Zap size={20} color="#0a1f44" />
          </div>
          <div className={estilos.alertaTexto}>
            <span className={estilos.alertaTitulo}>
              Acelere sua inscrição e pagamento!
            </span>
            <span className={estilos.alertaDescricao}>
              Após realizar o pagamento, entre em contato para confirmar sua
              inscrição. Os lotes encerram automaticamente ao atingir o limite
              de vagas.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
