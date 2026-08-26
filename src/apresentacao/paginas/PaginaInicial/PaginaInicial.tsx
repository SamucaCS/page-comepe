import { BannerAoVivo } from "../../componentes/BannerAoVivo/BannerAoVivo";
import { Cabecalho } from "../../componentes/Cabecalho/Cabecalho";
import { Rodape } from "../../componentes/Rodape/Rodape";
import { SecaoAgenda } from "../../secoes/SecaoAgenda/SecaoAgenda";
import { SecaoContato } from "../../secoes/SecaoContato/SecaoContato";
import { SecaoCultos } from "../../secoes/SecaoCultos/SecaoCultos";
import { SecaoHero } from "../../secoes/SecaoHero/SecaoHero";
import { SecaoMinisterios } from "../../secoes/SecaoMinisterios/SecaoMinisterios";
import { SecaoSobre } from "../../secoes/SecaoSobre/SecaoSobre";
import { SecaoTestemunhos } from "../../secoes/SecaoTestemunhos/SecaoTestemunhos";
import estilos from "./PaginaInicial.module.css";

export function PaginaInicial() {
  return (
    <div className={estilos.pagina}>
      <Cabecalho />
      <SecaoHero />
      <BannerAoVivo />
      <SecaoSobre />
      <SecaoCultos />
      <SecaoMinisterios />
      <SecaoAgenda />
      <SecaoTestemunhos />
      <SecaoContato />
      <Rodape />
    </div>
  );
}
