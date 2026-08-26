import {
  ArrowLeft,
  Baby,
  BookOpen,
  Camera,
  Car,
  Crown,
  Eye,
  Flame,
  Handshake,
  Heart,
  Music,
  Star,
  Users,
  Video,
  Volume2,
} from "lucide-react";
import type { JSX } from "react";
import { Link, useParams } from "react-router-dom";
import { ministerios } from "../../../dados/ministerios";
import { Cabecalho } from "../../componentes/Cabecalho/Cabecalho";
import { Rodape } from "../../componentes/Rodape/Rodape";
import estilos from "./PaginaMinisterio.module.css";

const mapaIcones: Record<string, JSX.Element> = {
  Music: <Music size={28} color="#0a1f44" />,
  Video: <Video size={28} color="#0a1f44" />,
  Heart: <Heart size={28} color="#0a1f44" />,
  Star: <Star size={28} color="#0a1f44" />,
  Users: <Users size={28} color="#0a1f44" />,
  HandHeart: <Handshake size={28} color="#0a1f44" />,
  HandsClapping: <Flame size={28} color="#0a1f44" />,
  BookOpen: <BookOpen size={28} color="#0a1f44" />,
  Crown: <Crown size={28} color="#0a1f44" />,
  Baby: <Baby size={28} color="#0a1f44" />,
  Eye: <Eye size={28} color="#0a1f44" />,
  Camera: <Camera size={28} color="#0a1f44" />,
  Volume2: <Volume2 size={28} color="#0a1f44" />,
  Car: <Car size={28} color="#0a1f44" />,
};

function iniciais(nome: string) {
  if (nome === "A definir") return "?";
  const partes = nome.trim().split(" ");
  return partes[0].charAt(0).toUpperCase();
}

export function PaginaMinisterio() {
  const { slug } = useParams<{ slug: string }>();
  const ministerio = ministerios.find((m) => m.slug === slug);

  if (!ministerio) {
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
          ← Ministério não encontrado. Voltar ao início
        </Link>
      </div>
    );
  }

  return (
    <div className={estilos.pagina}>
      <Cabecalho />

      <section className={`${estilos.hero} ${ministerio.foto ? estilos.heroComFoto : ""}`}>
        {ministerio.foto ? (
          <>
            <img
              src={ministerio.foto}
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
          <Link to="/#ministerios" className={estilos.botaoVoltar}>
            <ArrowLeft size={14} />
            Voltar aos ministérios
          </Link>

          <div className={estilos.heroTopo}>
            <div className={estilos.iconeWrapper}>
              {mapaIcones[ministerio.icone]}
            </div>
            <div className={estilos.heroTexto}>
              <span className={estilos.rotulo}>Ministério</span>
              <h1 className={estilos.titulo}>{ministerio.nome}</h1>
              <div className={estilos.badge}>
                <span className={estilos.badgeTexto}>{ministerio.publico}</span>
              </div>
            </div>
          </div>

          <p className={estilos.descricao}>{ministerio.descricao}</p>
        </div>
      </section>

      <div className={estilos.conteudo}>
        <div className={estilos.conteudoInner}>
          <div className={estilos.secaoTexto}>
            <span className={estilos.secaoTitulo}>Sobre o Ministério</span>
            <div className={estilos.linha} />
            <p className={estilos.secaoConteudo}>
              {ministerio.descricaoCompleta}
            </p>
          </div>

          <div className={estilos.cardResponsavel}>
            <div className={estilos.responsavelAvatar}>
              {iniciais(ministerio.responsavel.nome)}
            </div>
            <div className={estilos.responsavelInfo}>
              <span className={estilos.responsavelRotulo}>Responsável</span>
              <p className={estilos.responsavelNome}>
                {ministerio.responsavel.nome}
              </p>
              <p className={estilos.responsavelFuncao}>
                {ministerio.responsavel.funcao}
              </p>
            </div>
          </div>

          {ministerio.equipes && ministerio.equipes.length > 0 ? (
            <div className={estilos.secaoEquipes}>
              {ministerio.equipes.map((equipe) => (
                <div key={equipe.id} className={estilos.blocoEquipe}>
                  <div className={estilos.equipeHeader}>
                    <h3 className={estilos.equipeNome}>{equipe.nome}</h3>
                    <span className={estilos.equipeTotal}>
                      {equipe.membros.length} membros
                    </span>
                  </div>
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
          ) : (
            <div>
              <div
                className={estilos.secaoTexto}
                style={{ marginBottom: "1.25rem" }}
              >
                <span className={estilos.secaoTitulo}>Equipe</span>
                <div className={estilos.linha} />
              </div>
              <div className={estilos.gridMembros}>
                {ministerio.membros.map((membro) => (
                  <div key={membro.id} className={estilos.cardMembro}>
                    <div className={estilos.membroAvatar}>
                      {iniciais(membro.nome)}
                    </div>
                    <div className={estilos.membroInfo}>
                      <p className={estilos.membroNome}>{membro.nome}</p>
                      <p className={estilos.membroFuncao}>{membro.funcao}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Rodape />
    </div>
  );
}
