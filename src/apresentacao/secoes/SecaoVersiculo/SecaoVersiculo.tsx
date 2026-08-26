import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { versiculos } from "../../../dados/versiculos";
import { useAnimacaoScroll } from "../../hooks/useAnimacaoScroll";
import estilos from "./SecaoVersiculo.module.css";

function indiceDoDia(): number {
  const hoje = new Date();
  const diaDoAno = Math.floor(
    (hoje.getTime() - new Date(hoje.getFullYear(), 0, 0).getTime()) / 86400000,
  );
  return diaDoAno % versiculos.length;
}

export function SecaoVersiculo() {
  const [indice, setIndice] = useState(indiceDoDia);
  const [trocando, setTrocando] = useState(false);
  const { ref, visivel } = useAnimacaoScroll();

  const trocar = useCallback((novoIndice: number) => {
    setTrocando(true);
    setTimeout(() => {
      setIndice(novoIndice);
      setTrocando(false);
    }, 300);
  }, []);

  function anterior() {
    trocar((indice - 1 + versiculos.length) % versiculos.length);
  }

  function proximo() {
    trocar((indice + 1) % versiculos.length);
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      trocar((indice + 1) % versiculos.length);
    }, 12000);
    return () => clearInterval(intervalo);
  }, [indice, trocar]);

  const versiculo = versiculos[indice];
  const pontosVisiveis = 5;
  const inicio = Math.max(
    0,
    Math.min(indice - 2, versiculos.length - pontosVisiveis),
  );

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${estilos.secao} animavel ${visivel ? "visivel" : ""}`}
    >
      <div className={estilos.fundoDecorado}>
        <div className={estilos.linhaHorizontal} />
        <div className={estilos.bolha} />
      </div>

      <div className={estilos.inner}>
        <div className={estilos.aspas}>"</div>

        <p className={`${estilos.texto} ${trocando ? estilos.trocando : ""}`}>
          {versiculo.texto}
        </p>

        <div className={estilos.referencia}>
          <div className={estilos.referenciaLinha} />
          <span className={estilos.referenciaTexto}>
            {versiculo.referencia}
          </span>
          <div className={estilos.referenciaLinha} />
        </div>

        <div className={estilos.botoes}>
          <button aria-label="Versículo anterior" onClick={anterior} className={estilos.botao}>
            <ChevronLeft size={18} />
          </button>

          <div className={estilos.navegacao}>
            {versiculos.slice(inicio, inicio + pontosVisiveis).map((_, i) => (
              <button
                key={inicio + i}
                aria-label={`Ir para versículo ${inicio + i + 1}`}
                onClick={() => trocar(inicio + i)}
                className={`${estilos.ponto} ${indice === inicio + i ? estilos.pontoAtivo : ""}`}
              />
            ))}
          </div>

          <button aria-label="Próximo versículo" onClick={proximo} className={estilos.botao}>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
