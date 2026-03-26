import { MessageCircle, MapPin, Play, Camera } from "lucide-react";
import estilos from "./SecaoContato.module.css";

const redesSociais = [
  {
    id: "whatsapp",
    titulo: "WhatsApp",
    texto:
      "Entre em contato direto com a nossa equipe para tirar dúvidas e receber informações.",
    link: "https://wa.me/5511999999999",
    rotulo: "Enviar mensagem",
    estiloCard: estilos.cardWhatsApp,
    estiloIcone: estilos.iconeWhatsApp,
    icone: <MessageCircle size={28} color="#25d366" />,
  },
  {
    id: "instagram",
    titulo: "Instagram",
    texto:
      "Acompanhe nossa programação, eventos e momentos especiais da comunidade.",
    link: "https://instagram.com/comepe",
    rotulo: "Seguir no Instagram",
    estiloCard: estilos.cardInstagram,
    estiloIcone: estilos.iconeInstagram,
    icone: <Camera size={28} color="#e1306c" />,
  },
  {
    id: "youtube",
    titulo: "YouTube",
    texto: "Assista aos cultos, pregações e eventos especiais no nosso canal.",
    link: "https://youtube.com/@comepe",
    rotulo: "Assistir no YouTube",
    estiloCard: estilos.cardYoutube,
    estiloIcone: estilos.iconeYoutube,
    icone: <Play size={28} color="#ff0000" />,
  },
];

export function SecaoContato() {
  return (
    <section id="contato" className={estilos.secao}>
      <div className={estilos.fundoDecorado}>
        <div className={estilos.bolha1} />
        <div className={estilos.bolha2} />
      </div>

      <div className={estilos.inner}>
        <div className={estilos.cabecalhoSecao}>
          <span className={estilos.rotulo}>Fale Conosco</span>
          <h2 className={estilos.titulo}>Entre em Contato</h2>
          <div className={estilos.linha} />
          <p className={estilos.subtitulo}>
            Estamos presentes nas redes sociais e prontos para receber você.
            Escolha o canal de sua preferência.
          </p>
        </div>

        <div className={estilos.grid}>
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
              <p className={estilos.cardTexto}>{rede.texto}</p>
              <span className={estilos.cardLink}>{rede.rotulo}</span>
            </a>
          ))}
        </div>

        <div className={estilos.painelEndereco}>
          <div className={estilos.enderecoIcone}>
            <MapPin size={22} color="#0a1f44" />
          </div>
          <div className={estilos.enderecoTexto}>
            <span className={estilos.enderecoRotulo}>Nossa localização</span>
            <span className={estilos.enderecoValor}>
              Suzano — São Paulo, SP
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
