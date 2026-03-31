import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./ScrollToTop";
import { PaginaInicial } from "../apresentacao/paginas/PaginaInicial/PaginaInicial";
import { PaginaEvento } from "../apresentacao/paginas/PaginaEvento/PaginaEvento";
import { PaginaGqm } from "../apresentacao/paginas/PaginaGqm/PaginaGqm";
import { PaginaAdmin } from "../apresentacao/paginas/PaginaAdmin/PaginaAdmin";
import { PaginaMinisterio } from "../apresentacao/paginas/PaginaMinisterio/PaginaMinisterio";
import { PaginaCulto } from "../apresentacao/paginas/PaginaCulto/PaginaCulto";
import { Pagina404 } from "../apresentacao/paginas/Pagina404/Pagina404";

export function Rotas() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/eventos/gqm" element={<PaginaGqm />} />
        <Route path="/eventos/:slug" element={<PaginaEvento />} />
        <Route path="/ministerios/:slug" element={<PaginaMinisterio />} />
        <Route path="/cultos/:slug" element={<PaginaCulto />} />
        <Route path="/admin" element={<PaginaAdmin />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  );
}
