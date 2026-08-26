import { ArrowLeft, ArrowRight, CalendarHeart } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { cultos } from "../../../dados/cultos";
import { Cabecalho } from "../../componentes/Cabecalho/Cabecalho";
import { Rodape } from "../../componentes/Rodape/Rodape";
import estilos from "./PaginaCulto.module.css";

function iniciais(nome: string) {
  if (nome === "A definir") return "?";
  return nome.charAt(0).toUpperCase();
}

export function PaginaCulto() {
  const { slug } = useParams<{ slug: string }>();
  const culto = cultos.find((c) => c.slug === slug);

  if (!culto) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a1f44",
        }}
      >
        <Link
          to="/"
          style={{ color: "#c9a84c", fontFamily: "Nunito, sans-serif" }}
        >
          ← Culto não encontrado. Voltar ao início
        </Link>
      </div>
    );
  }

  return (
    <div className={estilos.pagina}>
      <Cabecalho />

      <section className={`${estilos.hero} ${culto.foto ? estilos.heroComFoto : ""}`}>
        {culto.foto ? (
          <>
            <img
              src={culto.foto}
              alt=""
              aria-hidden="true"
              className={estilos.heroFotoImg}
            />
            <div className={estilos.heroFotoOverlay} />
          </>
        ) : (
          <div className={estilos.heroDecorado}>
            <div className={estilos.heroCirculo1} />
            <div className={estilos.heroCirculo2} />
          </div>
        )}

        <div className={estilos.heroInner}>
          <Link to="/#cultos" className={estilos.botaoVoltar}>
            <ArrowLeft size={14} />
            Voltar aos cultos
          </Link>

          <span className={estilos.rotulo}>Culto</span>
          <h1 className={estilos.titulo}>{culto.nome}</h1>

          <div className={estilos.painelInfo}>
            <div className={estilos.infoItem}>
              <span className={estilos.infoRotulo}>Dia</span>
              <span className={estilos.infoValor}>{culto.dia}</span>
            </div>
            <div className={estilos.infoItem}>
              <span className={estilos.infoRotulo}>Horário</span>
              <span className={estilos.infoValor}>{culto.horario}</span>
            </div>
          </div>

          <p className={estilos.descricao}>{culto.descricao}</p>
        </div>
      </section>

      <div className={estilos.conteudo}>
        <div className={estilos.conteudoInner}>
          <div className={estilos.secaoTexto}>
            <span className={estilos.secaoTitulo}>Sobre este Culto</span>
            <div className={estilos.linha} />
            <p className={estilos.secaoConteudo}>{culto.descricaoCompleta}</p>
          </div>

          <div className={estilos.cardResponsavel}>
            <div className={estilos.responsavelAvatar}>
              {iniciais(culto.responsavel.nome)}
            </div>
            <div className={estilos.responsavelInfo}>
              <span className={estilos.responsavelRotulo}>Responsável</span>
              <p className={estilos.responsavelNome}>
                {culto.responsavel.nome}
              </p>
              <p className={estilos.responsavelFuncao}>
                {culto.responsavel.funcao}
              </p>
            </div>
          </div>

          {culto.eventoRelacionado && (
            <Link
              to={culto.eventoRelacionado.link}
              className={estilos.cardEventoRelacionado}
            >
              <div className={estilos.eventoRelacionadoIcone}>
                <CalendarHeart size={22} color="#0a1f44" />
              </div>
              <div className={estilos.eventoRelacionadoInfo}>
                <span className={estilos.eventoRelacionadoRotulo}>Evento</span>
                <p className={estilos.eventoRelacionadoNome}>
                  {culto.eventoRelacionado.nome}
                </p>
                <p className={estilos.eventoRelacionadoDescricao}>
                  {culto.eventoRelacionado.descricao}
                </p>
              </div>
              <ArrowRight size={18} color="#c9a84c" />
            </Link>
          )}

          {culto.equipes && culto.equipes.length > 0 && (
            <div className={estilos.secaoEquipes}>
              {culto.equipes.some((e) => e.link) && (
                <>
                  <div
                    className={`${estilos.secaoTexto} ${estilos.secaoTextoEquipes}`}
                  >
                    <span className={estilos.secaoTitulo}>Equipes do Culto</span>
                    <div className={estilos.linha} />
                  </div>
                  <div className={estilos.gridEquipes}>
                    {culto.equipes
                      .filter((e) => e.link)
                      .map((equipe) => (
                        <Link
                          key={equipe.id}
                          to={equipe.link!}
                          className={`${estilos.cardEquipe} ${estilos.cardEquipeLink}`}
                        >
                          <div className={estilos.cardEquipeTopo}>
                            <h3 className={estilos.cardEquipeNome}>
                              {equipe.nome}
                            </h3>
                            <ArrowRight size={16} color="#c9a84c" />
                          </div>
                          <p className={estilos.cardEquipeDescricao}>
                            {equipe.descricao}
                          </p>
                          <span className={estilos.cardEquipeBadge}>
                            Ver página completa
                          </span>
                        </Link>
                      ))}
                  </div>
                </>
              )}

              {culto.equipes
                .filter((e) => !e.link && e.membros.length > 0)
                .map((equipe) => (
                  <div key={equipe.id} className={estilos.blocoEquipe}>
                    {equipe.nome && (
                      <div className={estilos.equipeHeader}>
                        <h3 className={estilos.equipeNome}>{equipe.nome}</h3>
                        <span className={estilos.equipeTotal}>
                          {equipe.membros.length} membros
                        </span>
                      </div>
                    )}
                    <div className={estilos.gridMembros}>
                      {equipe.membros.map((membro) => (
                        <div key={membro.id} className={estilos.cardMembro}>
                          <div className={estilos.membroAvatar}>
                            {iniciais(membro.nome)}
                          </div>
                          <div className={estilos.membroInfo}>
                            <p className={estilos.membroNome}>{membro.nome}</p>
                            <p className={estilos.membroFuncao}>
                              {membro.funcao}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>

      <Rodape />
    </div>
  );
}
