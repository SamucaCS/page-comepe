import { Play } from "lucide-react";
import { transmissao } from "../../../dados/transmissao";
import estilos from "./BannerAoVivo.module.css";

export function BannerAoVivo() {
  if (!transmissao.ativa) return null;

  return (
    <div className={estilos.banner}>
      <div className={estilos.inner}>
        <div className={estilos.badge}>
          <div className={estilos.badgePonto} />
          <span className={estilos.badgeTexto}>Ao Vivo</span>
        </div>
        <div className={estilos.info}>
          <p className={estilos.titulo}>{transmissao.titulo}</p>
          <p className={estilos.descricao}>{transmissao.descricao}</p>
        </div>
        <a
          href={transmissao.url}
          target="_blank"
          rel="noopener noreferrer"
          className={estilos.botao}
        >
          <Play size={15} />
          Assistir agora
        </a>
      </div>
    </div>
  );
}
