import estilos from "./SecaoHero.module.css";

export function SecaoHero() {
  return (
    <section className={estilos.hero}>
      <div className={estilos.fundoDecorado}>
        <div className={`${estilos.circulo} ${estilos.circulo1}`} />
        <div className={`${estilos.circulo} ${estilos.circulo2}`} />
        <div className={`${estilos.circulo} ${estilos.circulo3}`} />
        <div className={`${estilos.circulo} ${estilos.circulo4}`} />
        <div className={estilos.linhaVertical} />
      </div>

      <div className={estilos.conteudo}>
        <div className={estilos.etiqueta}>
          <div className={estilos.ponto} />
          <span className={estilos.etiquetaTexto}>Suzano — SP</span>
        </div>

        <h1 className={estilos.titulo}>
          Bem-vindo à<span className={estilos.tituloDestaque}>COMEPE</span>
        </h1>

        <p className={estilos.subtitulo}>Comunidade Evangélica Pentecostal</p>

        <p className={estilos.descricao}>
          Um lugar de fé, esperança e amor. Venha fazer parte da nossa família e
          viver experiências transformadoras com a presença de Deus.
        </p>

        <div className={estilos.acoes}>
          <a href="#agenda" className={estilos.botaoPrimario}>
            Ver agenda
          </a>
          <a href="#sobre" className={estilos.botaoSecundario}>
            Conhecer a igreja
          </a>
        </div>
      </div>

      <div className={estilos.setaBaixo}>
        <div className={estilos.setaLinha} />
        <div className={estilos.setaPonta} />
      </div>
    </section>
  );
}
