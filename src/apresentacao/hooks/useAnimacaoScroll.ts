import { useEffect, useRef, useState } from "react";

interface OpcoesAnimacao {
  threshold?: number;
  rootMargin?: string;
  umaVez?: boolean;
}

export function useAnimacaoScroll(opcoes: OpcoesAnimacao = {}) {
  const { threshold = 0.15, rootMargin = "0px", umaVez = true } = opcoes;
  const ref = useRef<HTMLElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const elemento = ref.current;
    if (!elemento) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true);
          if (umaVez) observer.unobserve(elemento);
        } else {
          if (!umaVez) setVisivel(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(elemento);
    return () => observer.disconnect();
  }, [threshold, rootMargin, umaVez]);

  return { ref, visivel };
}
