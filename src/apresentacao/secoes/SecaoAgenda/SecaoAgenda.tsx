import {
  ArrowRight,
  Calendar,
  CalendarX,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { eventos } from "../../../dados/eventos";
import { useAnimacaoScroll } from "../../hooks/useAnimacaoScroll";
import estilos from "./SecaoAgenda.module.css";

const NOMES_MESES = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];

const DIAS_SEMANA = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

export function SecaoAgenda() {
  const { ref: refCabecalho, visivel: visivelCabecalho } = useAnimacaoScroll();
  const { ref: refGrid, visivel: visivelGrid } = useAnimacaoScroll();

  const agora = new Date();
  const [visaoCalendario, setVisaoCalendario] = useState(false);
  const [mesVisto, setMesVisto] = useState({
    mes: agora.getMonth(),
    ano: agora.getFullYear(),
  });

  function navMes(delta: number) {
    setMesVisto((prev) => {
      let m = prev.mes + delta;
      let a = prev.ano;
      if (m < 0) { m = 11; a--; }
      if (m > 11) { m = 0; a++; }
      return { mes: m, ano: a };
    });
  }

  function renderCalendario() {
    const { mes, ano } = mesVisto;
    const totalDias = new Date(ano, mes + 1, 0).getDate();
    const primeiroDia = new Date(ano, mes, 1).getDay();

    const hoje = new Date();
    const hojeStr = `${hoje.getFullYear()}-${String(hoje.getMonth() + 1).padStart(2, "0")}-${String(hoje.getDate()).padStart(2, "0")}`;

    const cells: (number | null)[] = [];
    for (let i = 0; i < primeiroDia; i++) cells.push(null);
    for (let d = 1; d <= totalDias; d++) cells.push(d);

    const eventosSemData = eventos.filter((e) => !e.dataCalendario);

    return (
      <div className={estilos.calendario}>
        <div className={estilos.calNavBar}>
          <button type="button" aria-label="Mês anterior" onClick={() => navMes(-1)} className={estilos.calNavBtn}>
            <ChevronLeft size={18} />
          </button>
          <span className={estilos.calMesTitulo}>
            {NOMES_MESES[mes]} {ano}
          </span>
          <button type="button" aria-label="Próximo mês" onClick={() => navMes(1)} className={estilos.calNavBtn}>
            <ChevronRight size={18} />
          </button>
        </div>

        <div className={estilos.calSemanaHeader}>
          {DIAS_SEMANA.map((d) => (
            <span key={d} className={estilos.calDiaSemana}>{d}</span>
          ))}
        </div>

        <div className={estilos.calGrid}>
          {cells.map((dia, idx) => {
            if (dia === null) {
              return <div key={`v-${idx}`} className={estilos.calCelulaVazia} />;
            }
            const dataStr = `${ano}-${String(mes + 1).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
            const evs = eventos.filter((e) => e.dataCalendario === dataStr);
            const eHoje = dataStr === hojeStr;
            return (
              <div
                key={dia}
                className={`${estilos.calCelula} ${eHoje ? estilos.calCelulaHoje : ""} ${evs.length > 0 ? estilos.calCelulaComEvento : ""}`}
              >
                <span className={estilos.calDia}>{dia}</span>
                {evs.length > 0 && (
                  <Link to={`/eventos/${evs[0].slug}`} className={estilos.calEventoLink}>
                    <span className={estilos.calEventoPonto} />
                    <span className={estilos.calEventoNome}>{evs[0].nome}</span>
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {eventosSemData.length > 0 && (
          <div className={estilos.calEventosSemData}>
            <span className={estilos.calSemDataTitulo}>Eventos em andamento</span>
            {eventosSemData.map((ev) => (
              <Link key={ev.id} to={`/eventos/${ev.slug}`} className={estilos.calSemDataCard}>
                <div>
                  <p className={estilos.calSemDataNome}>{ev.nome}</p>
                  <p className={estilos.calSemDataData}>{ev.data}</p>
                </div>
                <ArrowRight size={16} color="#4a5568" />
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <section id="agenda" className={estilos.secao}>
      <div className={estilos.inner}>
        <div
          ref={refCabecalho as React.RefObject<HTMLDivElement>}
          className={`${estilos.cabecalhoSecao} animavel ${visivelCabecalho ? "visivel" : ""}`}
        >
          <span className={estilos.rotulo}>Programação</span>
          <h2 className={estilos.titulo}>Agenda de Eventos</h2>
          <div className={estilos.linha} />
        </div>

        {eventos.length > 0 && (
          <div className={estilos.toggleVisao}>
            <button
              type="button"
              className={`${estilos.toggleBtn} ${!visaoCalendario ? estilos.toggleBtnAtivo : ""}`}
              onClick={() => setVisaoCalendario(false)}
            >
              <LayoutGrid size={15} />
              Cards
            </button>
            <button
              type="button"
              className={`${estilos.toggleBtn} ${visaoCalendario ? estilos.toggleBtnAtivo : ""}`}
              onClick={() => setVisaoCalendario(true)}
            >
              <Calendar size={15} />
              Calendário
            </button>
          </div>
        )}

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
        ) : visaoCalendario ? (
          renderCalendario()
        ) : (
          <div
            ref={refGrid as React.RefObject<HTMLDivElement>}
            className={`${estilos.grid} animavel atraso-2 ${visivelGrid ? "visivel" : ""}`}
          >
            {eventos.map((evento) => (
              <Link
                key={evento.id}
                to={`/eventos/${evento.slug}`}
                className={estilos.card}
              >
                <div
                  className={`${estilos.cardImagem} ${evento.realizado ? estilos.cardImagemRealizada : ""}`}
                >
                  <div className={estilos.cardImagemDecorado}>
                    <div className={estilos.cardImagemCirculo1} />
                    <div className={estilos.cardImagemCirculo2} />
                  </div>
                  <span className={estilos.cardImagemNome}>{evento.nome}</span>
                  <div className={estilos.cardImagemOverlay} />
                  {evento.realizado ? (
                    <div className={estilos.badgeRealizado}>
                      <span className={estilos.badgeRealizadoTexto}>Realizado</span>
                    </div>
                  ) : (
                    evento.destaque && (
                      <div className={estilos.badgeDestaque}>
                        <div className={estilos.badgeDestaquePonto} />
                        <span className={estilos.badgeDestaqueTexto}>Em destaque</span>
                      </div>
                    )
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
                  <div
                    className={`${estilos.cardRodape} ${evento.realizado || evento.vagas === undefined ? estilos.cardRodapeSemVagas : ""}`}
                  >
                    {evento.realizado ? (
                      <span className={estilos.vagasLabel}>Evento realizado</span>
                    ) : (
                      evento.vagas !== undefined && (
                        <div className={estilos.vagasInfo}>
                          <span className={estilos.vagasNumero}>{evento.vagas}</span>
                          <span className={estilos.vagasLabel}>vagas restantes</span>
                        </div>
                      )
                    )}
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
