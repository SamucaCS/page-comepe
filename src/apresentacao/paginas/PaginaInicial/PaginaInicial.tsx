import { Cabecalho } from "../../componentes/Cabecalho/Cabecalho";
import { Rodape } from "../../componentes/Rodape/Rodape";
import { SecaoHero } from "../../secoes/SecaoHero/SecaoHero";
import { SecaoSobre } from "../../secoes/SecaoSobre/SecaoSobre";
import { SecaoCultos } from "../../secoes/SecaoCultos/SecaoCultos";
import { SecaoMinisterios } from "../../secoes/SecaoMinisterios/SecaoMinisterios";
import { SecaoAgenda } from "../../secoes/SecaoAgenda/SecaoAgenda";
import { SecaoVersiculo } from "../../secoes/SecaoVersiculo/SecaoVersiculo";
import { SecaoContato } from "../../secoes/SecaoContato/SecaoContato";
import estilos from "./PaginaInicial.module.css";

export function PaginaInicial() {
  return (
    <div className={estilos.pagina}>
      <Cabecalho />
      <SecaoHero />
      <SecaoSobre />
      <SecaoCultos />
      <SecaoMinisterios />
      <SecaoAgenda />
      <SecaoVersiculo />
      <SecaoContato />
      <Rodape />
    </div>
  );
}
