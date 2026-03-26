import { useState } from "react";
import { Cross } from "lucide-react";
import { Link } from "react-router-dom";
import estilos from "./Cabecalho.module.css";

const links = [
  { rotulo: "Sobre", ancora: "#sobre" },
  { rotulo: "Cultos", ancora: "#cultos" },
  { rotulo: "Ministérios", ancora: "#ministerios" },
  { rotulo: "Agenda", ancora: "#agenda" },
  { rotulo: "Contato", ancora: "#contato" },
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
          <div className={estilos.logoIcone}>
            <Cross size={20} color="#0a1f44" strokeWidth={2.5} />
          </div>
          <div className={estilos.logoTexto}>
            <span className={estilos.logoNome}>COMEPE</span>
            <span className={estilos.logoSubtitulo}>Suzano — SP</span>
          </div>
        </Link>

        <nav className={estilos.nav}>
          {links.map((link) => (
            <a key={link.ancora} href={link.ancora} className={estilos.navLink}>
              {link.rotulo}
            </a>
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
          <a
            key={link.ancora}
            href={link.ancora}
            className={estilos.navLinkMobile}
            onClick={fecharMenu}
          >
            {link.rotulo}
          </a>
        ))}
      </nav>
    </header>
  );
}
