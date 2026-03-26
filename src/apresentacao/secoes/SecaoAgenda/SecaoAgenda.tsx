import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowRight, CalendarX } from "lucide-react";
import { eventos } from "../../../dados/eventos";
import estilos from "./SecaoAgenda.module.css";

export function SecaoAgenda() {
  return (
    <section id="agenda" className={estilos.secao}>
      <div className={estilos.inner}>
        <div className={estilos.cabecalhoSecao}>
          <span className={estilos.rotulo}>Programação</span>
          <h2 className={estilos.titulo}>Agenda de Eventos</h2>
          <div className={estilos.linha} />
        </div>

        {eventos.length === 0 ? (
          <div className={estilos.semEventos}>
            <div className={estilos.semEventosIcone}>
              <CalendarX size={28} color="#4a5568" />
            </div>
            <p className={estilos.semEventosTitulo}>Nenhum evento no momento</p>
            <p className={estilos.semEventosTexto}>
              Fique atento às nossas redes sociais para não perder as novidades.
            </p>
          </div>
        ) : (
          <div className={estilos.grid}>
            {eventos.map((evento) => (
              <Link
                key={evento.id}
                to={`/eventos/${evento.slug}`}
                className={estilos.card}
              >
                <div className={estilos.cardImagem}>
                  <div className={estilos.cardImagemDecorado}>
                    <div className={estilos.cardImagemCirculo1} />
                    <div className={estilos.cardImagemCirculo2} />
                  </div>

                  <span className={estilos.cardImagemNome}>{evento.nome}</span>
                  <div className={estilos.cardImagemOverlay} />

                  {evento.destaque && (
                    <div className={estilos.badgeDestaque}>
                      <div className={estilos.badgeDestaquePonto} />
                      <span className={estilos.badgeDestaqueTexto}>
                        Em destaque
                      </span>
                    </div>
                  )}
                </div>

                <div className={estilos.cardCorpo}>
                  <h3 className={estilos.cardNome}>{evento.nome}</h3>
                  <p className={estilos.cardDescricao}>{evento.descricao}</p>

                  <div className={estilos.cardMeta}>
                    <div className={estilos.metaItem}>
                      <Calendar size={14} color="#4a5568" />
                      <span className={estilos.metaTexto}>{evento.data}</span>
                    </div>
                    <div className={estilos.metaItem}>
                      <MapPin size={14} color="#4a5568" />
                      <span className={estilos.metaTexto}>{evento.local}</span>
                    </div>
                  </div>

                  <div className={estilos.cardRodape}>
                    <div className={estilos.vagasInfo}>
                      <span className={estilos.vagasNumero}>
                        {evento.vagas}
                      </span>
                      <span className={estilos.vagasLabel}>
                        vagas restantes
                      </span>
                    </div>
                    <div className={estilos.cardSeta}>
                      <ArrowRight size={18} color="#ffffff" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
