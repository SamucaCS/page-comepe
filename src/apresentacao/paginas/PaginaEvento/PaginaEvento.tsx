import {
  ArrowLeft,
  Calendar,
  Check,
  Copy,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { eventos } from "../../../dados/eventos";
import { Cabecalho } from "../../componentes/Cabecalho/Cabecalho";
import { Rodape } from "../../componentes/Rodape/Rodape";
import estilos from "./PaginaEvento.module.css";

export function PaginaEvento() {
  const { slug } = useParams<{ slug: string }>();
  const evento = eventos.find((e) => e.slug === slug);
  const [copiado, setCopiado] = useState(false);

  function copiarPix() {
    if (!evento?.pagamento) return;
    navigator.clipboard.writeText(evento.pagamento.pix);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  }

  if (!evento) {
    return (
      <div className={estilos.paginaErro}>
        <div className={estilos.erroConteudo}>
          <div className={estilos.etiqueta}>
            <span className={estilos.etiquetaTexto}>Evento não encontrado</span>
          </div>
          <h1 className={estilos.erroTitulo}>404</h1>
          <p className={estilos.erroDescricao}>
            Este evento não existe ou foi encerrado.
          </p>
          <Link to="/" className={estilos.botao}>
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  const precoUnico =
    evento.lotes.length === 1 ? evento.lotes[0].valor : null;

  return (
    <div className={estilos.pagina}>
      <Cabecalho />

      <section className={estilos.hero}>
        <div className={estilos.heroDecorado}>
          <div className={estilos.heroCirculo1} />
          <div className={estilos.heroCirculo2} />
        </div>
        <div className={estilos.heroInner}>
          <Link to="/#agenda" className={estilos.botaoVoltar}>
            <ArrowLeft size={14} />
            Voltar à agenda
          </Link>
          {evento.realizado ? (
            <div className={estilos.badgeRealizado}>
              <span className={estilos.badgeRealizadoTexto}>Realizado</span>
            </div>
          ) : (
            evento.destaque && (
              <div className={estilos.badgeDestaque}>
                <div className={estilos.badgePonto} />
                <span className={estilos.badgeTexto}>Em destaque</span>
              </div>
            )
          )}
          <span className={estilos.rotulo}>Evento</span>
          <h1 className={estilos.titulo}>{evento.nome}</h1>
          <div className={estilos.painelInfo}>
            <div className={estilos.infoItem}>
              <Calendar size={15} color="rgba(255,255,255,0.5)" />
              <span className={estilos.infoTexto}>{evento.data}</span>
            </div>
            <div className={estilos.infoItem}>
              <MapPin size={15} color="rgba(255,255,255,0.5)" />
              <span className={estilos.infoTexto}>{evento.local}</span>
            </div>
          </div>
          <p className={estilos.descricao}>{evento.descricao}</p>
        </div>
      </section>

      <div className={estilos.conteudo}>
        <div className={estilos.conteudoInner}>
          {evento.valorAVista !== undefined ? (
            <div className={estilos.cardPreco}>
              <span className={estilos.precoRotulo}>Valor do investimento</span>
              <p className={estilos.precoValor}>
                R$ {evento.valorAVista.toFixed(2).replace(".", ",")}
                <span className={estilos.precoSufixo}> à vista</span>
              </p>
              {evento.parcelamento && (
                <p className={estilos.precoParcelado}>
                  ou {evento.parcelamento.vezes}x de R${" "}
                  {evento.parcelamento.valor.toFixed(2).replace(".", ",")}
                </p>
              )}
            </div>
          ) : precoUnico !== null ? (
            <div className={estilos.cardPreco}>
              <span className={estilos.precoRotulo}>Valor por pessoa</span>
              <p className={estilos.precoValor}>
                R$ {precoUnico.toFixed(2).replace(".", ",")}
              </p>
            </div>
          ) : (
            evento.lotes.length > 1 && (
              <div className={estilos.secaoLotes}>
                <div className={estilos.secaoTituloWrapper}>
                  <span className={estilos.secaoTitulo}>Lotes</span>
                  <div className={estilos.linha} />
                </div>
                <div className={estilos.gridLotes}>
                  {evento.lotes.map((lote) => (
                    <div
                      key={lote.id}
                      className={`${estilos.cardLote} ${lote.status === "esgotado" ? estilos.cardLoteEsgotado : ""}`}
                    >
                      <span className={estilos.loteMes}>{lote.mes}</span>
                      <p className={estilos.loteValor}>
                        R$ {lote.valor.toFixed(2).replace(".", ",")}
                      </p>
                      <span
                        className={`${estilos.loteStatus} ${lote.status === "esgotado" ? estilos.loteStatusEsgotado : lote.status === "proximo" ? estilos.loteStatusProximo : estilos.loteStatusDisponivel}`}
                      >
                        {lote.status === "esgotado"
                          ? "Esgotado"
                          : lote.status === "proximo"
                            ? "Em breve"
                            : "Disponível"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}

          {evento.pagamento && (
            <div className={estilos.secaoPagamento}>
              <div className={estilos.secaoTituloWrapper}>
                <span className={estilos.secaoTitulo}>Pagamento</span>
                <div className={estilos.linha} />
              </div>
              <div className={estilos.cardPix}>
                <div className={estilos.pixTopo}>
                  <span className={estilos.pixBanco}>{evento.pagamento.banco}</span>
                  <span className={estilos.pixRotulo}>Chave PIX</span>
                </div>
                <p className={estilos.pixChave}>{evento.pagamento.pix}</p>
                <button
                  type="button"
                  className={`${estilos.botaoCopiar} ${copiado ? estilos.botaoCopiarCopiado : ""}`}
                  onClick={copiarPix}
                >
                  {copiado ? (
                    <>
                      <Check size={15} />
                      Copiado!
                    </>
                  ) : (
                    <>
                      <Copy size={15} />
                      Copiar chave PIX
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {evento.whatsapp && (
            <div className={estilos.secaoContato}>
              <div className={estilos.secaoTituloWrapper}>
                <span className={estilos.secaoTitulo}>
                  Inscrições e mais informações
                </span>
                <div className={estilos.linha} />
              </div>
              <a
                href={`https://wa.me/${evento.whatsapp}?text=${encodeURIComponent(
                  `Olá! Quero saber mais sobre o ${evento.nome}.`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={estilos.botaoSaibaMais}
              >
                <MessageCircle size={17} />
                Saiba mais no WhatsApp
              </a>
            </div>
          )}

          {evento.observacoes.length > 0 && (
            <div className={estilos.secaoObs}>
              <div className={estilos.secaoTituloWrapper}>
                <span className={estilos.secaoTitulo}>Observações</span>
                <div className={estilos.linha} />
              </div>
              <ul className={estilos.listaObs}>
                {evento.observacoes.map((obs, i) => (
                  <li key={i} className={estilos.itemObs}>
                    <div className={estilos.itemObsPonto} />
                    {obs}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <Rodape />
    </div>
  );
}
