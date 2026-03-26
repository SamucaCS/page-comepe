import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { cultos } from "../../../dados/cultos";
import { Cabecalho } from "../../componentes/Cabecalho/Cabecalho";
import { Rodape } from "../../componentes/Rodape/Rodape";
import estilos from "./PaginaCulto.module.css";

function iniciais(nome: string) {
  return nome === "A definir" ? "?" : nome.charAt(0).toUpperCase();
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

      <section className={estilos.hero}>
        <div className={estilos.heroDecorado}>
          <div className={estilos.heroCirculo1} />
          <div className={estilos.heroCirculo2} />
        </div>

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

          <div>
            <div
              className={estilos.secaoTexto}
              style={{ marginBottom: "1.25rem" }}
            >
              <span className={estilos.secaoTitulo}>Equipe</span>
              <div className={estilos.linha} />
            </div>
            <div className={estilos.gridMembros}>
              {culto.membros.map((membro) => (
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
