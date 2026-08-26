import { MapPin, Play, Camera } from "lucide-react";
import { useAnimacaoScroll } from "../../hooks/useAnimacaoScroll";
import estilos from "./SecaoContato.module.css";

const redesSociais = [
  {
    id: "instagram",
    titulo: "Instagram",
    handle: "@comepe.m12",
    texto:
      "Acompanhe nossa programação, eventos e momentos especiais da comunidade.",
    link: "https://www.instagram.com/comepe.m12/",
    rotulo: "Seguir no Instagram",
    estiloCard: estilos.cardInstagram,
    estiloIcone: estilos.iconeInstagram,
    icone: <Camera size={28} color="#e1306c" />,
  },
  {
    id: "youtube",
    titulo: "YouTube",
    handle: "@igrejacomepe",
    texto: "Assista aos cultos, pregações e eventos especiais no nosso canal.",
    link: "https://www.youtube.com/@igrejacomepe",
    rotulo: "Assistir no YouTube",
    estiloCard: estilos.cardYoutube,
    estiloIcone: estilos.iconeYoutube,
    icone: <Play size={28} color="#ff0000" />,
  },
];

export function SecaoContato() {
  const { ref: refCabecalho, visivel: visivelCabecalho } = useAnimacaoScroll();
  const { ref: refGrid, visivel: visivelGrid } = useAnimacaoScroll();
  const { ref: refEndereco, visivel: visivelEndereco } = useAnimacaoScroll();

  return (
    <section id="contato" className={estilos.secao}>
      <div className={estilos.fundoDecorado}>
        <div className={estilos.bolha1} />
        <div className={estilos.bolha2} />
      </div>

      <div className={estilos.inner}>
        <div
          ref={refCabecalho as React.RefObject<HTMLDivElement>}
          className={`${estilos.cabecalhoSecao} animavel ${visivelCabecalho ? "visivel" : ""}`}
        >
          <span className={estilos.rotulo}>Redes Sociais</span>
          <h2 className={estilos.titulo}>Nossas Redes Sociais</h2>
          <div className={estilos.linha} />
          <p className={estilos.subtitulo}>
            Nos siga e fique por dentro de tudo que acontece na COMEPE.
          </p>
        </div>

        <div
          ref={refGrid as React.RefObject<HTMLDivElement>}
          className={`${estilos.grid} animavel atraso-2 ${visivelGrid ? "visivel" : ""}`}
        >
          {redesSociais.map((rede) => (
            <a
              key={rede.id}
              href={rede.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${estilos.card} ${rede.estiloCard}`}
            >
              <div className={`${estilos.iconeWrapper} ${rede.estiloIcone}`}>
                {rede.icone}
              </div>
              <p className={estilos.cardTitulo}>{rede.titulo}</p>
              <p className={estilos.cardHandle}>{rede.handle}</p>
              <p className={estilos.cardTexto}>{rede.texto}</p>
              <span className={estilos.cardLink}>{rede.rotulo}</span>
            </a>
          ))}
        </div>

        <div
          ref={refEndereco as React.RefObject<HTMLDivElement>}
          className={`${estilos.painelEndereco} animavel atraso-3 ${visivelEndereco ? "visivel" : ""}`}
        >
          <div className={estilos.enderecoIcone}>
            <MapPin size={22} color="#0a1f44" />
          </div>
          <div className={estilos.enderecoTexto}>
            <span className={estilos.enderecoRotulo}>Nossa localização</span>
            <span className={estilos.enderecoValor}>
              Av. Antônio Marques Figueira, 953 — Vila Costa, Suzano - SP, 08675-023
            </span>
            <a
              href="https://maps.google.com/?q=Av.+Antônio+Marques+Figueira,+953,+Vila+Costa,+Suzano,+SP,+08675-023"
              target="_blank"
              rel="noopener noreferrer"
              className={estilos.enderecoLink}
            >
              Ver no Google Maps →
            </a>
          </div>
        </div>

        <div className={estilos.mapaWrapper}>
          <iframe
            title="Localização COMEPE"
            src="https://maps.google.com/maps?q=Av.+Ant%C3%B4nio+Marques+Figueira,+953,+Vila+Costa,+Suzano,+SP,+08675-023,+Brasil&output=embed"
            className={estilos.mapa}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
