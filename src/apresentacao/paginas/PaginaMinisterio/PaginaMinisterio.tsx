import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Music,
  Video,
  Heart,
  Star,
  Users,
  Handshake,
} from "lucide-react";
import { ministerios } from "../../../dados/ministerios";
import { Cabecalho } from "../../componentes/Cabecalho/Cabecalho";
import { Rodape } from "../../componentes/Rodape/Rodape";
import estilos from "./PaginaMinisterio.module.css";
import type { JSX } from "react";

const mapaIcones: Record<string, JSX.Element> = {
  Music: <Music size={28} color="#0a1f44" />,
  Video: <Video size={28} color="#0a1f44" />,
  Heart: <Heart size={28} color="#0a1f44" />,
  Star: <Star size={28} color="#0a1f44" />,
  Users: <Users size={28} color="#0a1f44" />,
  HandHeart: <Handshake size={28} color="#0a1f44" />,
};

function iniciais(nome: string) {
  return nome === "A definir" ? "?" : nome.charAt(0).toUpperCase();
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

      <section className={estilos.hero}>
        <div className={estilos.heroDecorado}>
          <div className={estilos.heroCirculo1} />
          <div className={estilos.heroCirculo2} />
        </div>

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
        </div>
      </div>

      <Rodape />
    </div>
  );
}
