import {
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
import { Link } from "react-router-dom";
import { ministerios } from "../../../dados/ministerios";
import { useAnimacaoScroll } from "../../hooks/useAnimacaoScroll";
import estilos from "./SecaoMinisterios.module.css";

const mapaIcones: Record<string, JSX.Element> = {
  Music: <Music size={24} color="#ffffff" />,
  Video: <Video size={24} color="#ffffff" />,
  Heart: <Heart size={24} color="#ffffff" />,
  Star: <Star size={24} color="#ffffff" />,
  Users: <Users size={24} color="#ffffff" />,
  HandHeart: <Handshake size={24} color="#ffffff" />,
  HandsClapping: <Flame size={24} color="#ffffff" />,
  BookOpen: <BookOpen size={24} color="#ffffff" />,
  Crown: <Crown size={24} color="#ffffff" />,
  Baby: <Baby size={24} color="#ffffff" />,
  Eye: <Eye size={24} color="#ffffff" />,
  Camera: <Camera size={24} color="#ffffff" />,
  Volume2: <Volume2 size={24} color="#ffffff" />,
  Car: <Car size={24} color="#ffffff" />,
};

export function SecaoMinisterios() {
  const { ref: refCabecalho, visivel: visivelCabecalho } = useAnimacaoScroll();
  const { ref: refGrid, visivel: visivelGrid } = useAnimacaoScroll();

  return (
    <section id="ministerios" className={estilos.secao}>
      <div className={estilos.inner}>
        <div
          ref={refCabecalho as React.RefObject<HTMLDivElement>}
          className={`${estilos.cabecalhoSecao} animavel ${visivelCabecalho ? "visivel" : ""}`}
        >
          <span className={estilos.rotulo}>Áreas de Atuação</span>
          <h2 className={estilos.titulo}>Nossos Ministérios</h2>
          <div className={estilos.linha} />
        </div>

        <div
          ref={refGrid as React.RefObject<HTMLDivElement>}
          className={`${estilos.grid} animavel atraso-2 ${visivelGrid ? "visivel" : ""}`}
        >
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
