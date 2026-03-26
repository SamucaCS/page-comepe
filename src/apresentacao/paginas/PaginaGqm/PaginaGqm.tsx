import { eventos } from "../../../dados/eventos";
import { Cabecalho } from "../../componentes/Cabecalho/Cabecalho";
import { Rodape } from "../../componentes/Rodape/Rodape";
import { HeroGqm } from "./componentes/HeroGqm";
import { LotesGqm } from "./componentes/LotesGqm";
import { PagamentoGqm } from "./componentes/PagamentoGqm";
import estilos from "./PaginaGqm.module.css";

export function PaginaGqm() {
  const evento = eventos.find((e) => e.slug === "gqm");

  if (!evento) {
    return null;
  }

  return (
    <div className={estilos.pagina}>
      <Cabecalho />
      <HeroGqm evento={evento} />
      <LotesGqm evento={evento} />
      <PagamentoGqm evento={evento} />
      <Rodape />
    </div>
  );
}
