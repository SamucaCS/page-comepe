import { Link } from "react-router-dom";
import estilos from "./Rodape.module.css";

const linksNavegacao = [
  { rotulo: "Início", href: "/" },
  { rotulo: "Sobre", href: "/#sobre" },
  { rotulo: "Cultos", href: "/#cultos" },
  { rotulo: "Ministérios", href: "/#ministerios" },
  { rotulo: "Agenda", href: "/#agenda" },
  { rotulo: "Contato", href: "/#contato" },
  { rotulo: "Pedidos de Oração", href: "/oracao" },
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
            <img
              src="/logo-comepe.png"
              alt="Logo COMEPE"
              className={estilos.logoImagem}
            />
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
              <Link
                key={item.href}
                to={item.href}
                className={estilos.colLink}
              >
                {item.rotulo}
              </Link>
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
