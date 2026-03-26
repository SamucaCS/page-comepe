import { Cross } from "lucide-react";
import { Link } from "react-router-dom";
import estilos from "./Rodape.module.css";

const linksNavegacao = [
  { rotulo: "Início", ancora: "#" },
  { rotulo: "Sobre", ancora: "#sobre" },
  { rotulo: "Cultos", ancora: "#cultos" },
  { rotulo: "Ministérios", ancora: "#ministerios" },
  { rotulo: "Agenda", ancora: "#agenda" },
  { rotulo: "Contato", ancora: "#contato" },
];
const linksRedes = [
  { rotulo: "Instagram", link: "https://www.instagram.com/comepe.m12/" },
  { rotulo: "YouTube", link: "https://www.youtube.com/@igrejacomepe" },
];

export function Rodape() {
  const ano = new Date().getFullYear();

  return (
    <footer className={estilos.rodape}>
      <div className={estilos.inner}>
        <div className={estilos.colLogo}>
          <Link to="/" className={estilos.logo}>
            <div className={estilos.logoIcone}>
              <Cross size={20} color="#0a1f44" strokeWidth={2.5} />
            </div>
            <div className={estilos.logoTexto}>
              <span className={estilos.logoNome}>COMEPE</span>
              <span className={estilos.logoSubtitulo}>
                Av. Antônio Marques Figueira, 493 — Suzano, SP
              </span>
            </div>
          </Link>

          <p className={estilos.descricao}>
            Comunidade Evangélica Pentecostal de Suzano, SP. Um lugar de fé,
            esperança e amor para toda a família.
          </p>

          <p className={estilos.versiculo}>
            "Porque Deus amou o mundo de tal maneira..."
            <span className={estilos.versiculoRef}> João 3:16</span>
          </p>
        </div>

        <div>
          <p className={estilos.colTitulo}>Navegação</p>
          <div className={estilos.colLinks}>
            {linksNavegacao.map((item) => (
              <a
                key={item.ancora}
                href={item.ancora}
                className={estilos.colLink}
              >
                {item.rotulo}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className={estilos.colTitulo}>Redes Sociais</p>
          <div className={estilos.colLinks}>
            {linksRedes.map((item) => (
              <a
                key={item.rotulo}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={estilos.colLink}
              >
                {item.rotulo}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={estilos.rodapeBase}>
        <p className={estilos.direitos}>
          © {ano} COMEPE Suzano. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
