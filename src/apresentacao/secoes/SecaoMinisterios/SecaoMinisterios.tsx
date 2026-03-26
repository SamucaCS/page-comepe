import { Link } from "react-router-dom";
import { Music, Video, Heart, Star, Users, Handshake } from "lucide-react";
import { ministerios } from "../../../dados/ministerios";
import estilos from "./SecaoMinisterios.module.css";
import type { JSX } from "react";

const mapaIcones: Record<string, JSX.Element> = {
  Music: <Music size={24} color="#ffffff" />,
  Video: <Video size={24} color="#ffffff" />,
  Heart: <Heart size={24} color="#ffffff" />,
  Star: <Star size={24} color="#ffffff" />,
  Users: <Users size={24} color="#ffffff" />,
  HandHeart: <Handshake size={24} color="#ffffff" />,
};

export function SecaoMinisterios() {
  return (
    <section id="ministerios" className={estilos.secao}>
      <div className={estilos.inner}>
        <div className={estilos.cabecalhoSecao}>
          <span className={estilos.rotulo}>Áreas de Atuação</span>
          <h2 className={estilos.titulo}>Nossos Ministérios</h2>
          <div className={estilos.linha} />
        </div>

        <div className={estilos.grid}>
          {ministerios.map((ministerio) => (
            <Link
              key={ministerio.id}
              to={`/ministerios/${ministerio.slug}`}
              className={estilos.card}
            >
              <div className={estilos.iconeWrapper}>
                {mapaIcones[ministerio.icone]}
              </div>
              <div className={estilos.publico}>
                <span className={estilos.publicoTexto}>
                  {ministerio.publico}
                </span>
              </div>
              <h3 className={estilos.cardNome}>{ministerio.nome}</h3>
              <p className={estilos.cardDescricao}>{ministerio.descricao}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
