import { useState } from "react";
import { Link } from "react-router-dom";
import estilos from "./Cabecalho.module.css";

const links = [
  { rotulo: "Sobre", ancora: "#sobre" },
  { rotulo: "Cultos", ancora: "#cultos" },
  { rotulo: "Ministérios", ancora: "#ministerios" },
  { rotulo: "Agenda", ancora: "#agenda" },
  { rotulo: "Redes Sociais", ancora: "#contato" },
];

export function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <header className={estilos.cabecalho}>
      <div className={estilos.inner}>
        <Link to="/" className={estilos.logo}>
          <img
            src="/logo-comepe.png"
            alt="Logo COMEPE"
            className={estilos.logoImagem}
          />
          <div className={estilos.logoTexto}>
            <span className={estilos.logoNome}>COMEPE</span>
            <span className={estilos.logoSubtitulo}>Suzano — SP</span>
          </div>
        </Link>

        <nav className={estilos.nav}>
          {links.map((link) => (
            <Link key={link.ancora} to={`/${link.ancora}`} className={estilos.navLink}>
              {link.rotulo}
            </Link>
          ))}
        </nav>

        <div
          className={estilos.menuMobile}
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      <nav
        className={`${estilos.navMobile} ${menuAberto ? estilos.navMobileAberto : ""}`}
      >
        {links.map((link) => (
          <Link
            key={link.ancora}
            to={`/${link.ancora}`}
            className={estilos.navLinkMobile}
            onClick={fecharMenu}
          >
            {link.rotulo}
          </Link>
        ))}
      </nav>
    </header>
  );
}
