import { ArrowLeft, CheckCircle, Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Cabecalho } from "../../componentes/Cabecalho/Cabecalho";
import { Rodape } from "../../componentes/Rodape/Rodape";
import estilos from "./PaginaOracao.module.css";

export function PaginaOracao() {
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({ nome: "", telefone: "", pedido: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.nome.trim() || !form.pedido.trim()) return;
    setEnviado(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className={estilos.pagina}>
      <Cabecalho />

      <section className={estilos.hero}>
        <div className={estilos.heroDecorado}>
          <div className={estilos.heroCirculo1} />
          <div className={estilos.heroCirculo2} />
        </div>
        <div className={estilos.heroInner}>
          <Link to="/" className={estilos.botaoVoltar}>
            <ArrowLeft size={14} />
            Voltar ao início
          </Link>
          <span className={estilos.rotulo}>Intercessão</span>
          <h1 className={estilos.titulo}>Pedidos de Oração</h1>
          <p className={estilos.descricao}>
            Sua oração chega ao nosso ministério de intercessão. Acreditamos
            que Deus ouve e responde a cada pedido feito com fé.
          </p>
        </div>
      </section>

      <div className={estilos.conteudo}>
        <div className={estilos.conteudoInner}>
          {enviado ? (
            <div className={estilos.sucesso}>
              <div className={estilos.sucessoIcone}>
                <CheckCircle size={40} color="#059669" />
              </div>
              <h2 className={estilos.sucessoTitulo}>Pedido recebido!</h2>
              <p className={estilos.sucessoTexto}>
                Sua solicitação foi enviada ao ministério de intercessão da
                COMEPE. Nossa equipe estará orando por você com fé e dedicação.
              </p>
              <button
                type="button"
                className={estilos.botaoNovo}
                onClick={() => {
                  setEnviado(false);
                  setForm({ nome: "", telefone: "", pedido: "" });
                }}
              >
                Enviar outro pedido
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={estilos.form}>
              <div className={estilos.secaoTituloWrapper}>
                <span className={estilos.secaoTitulo}>Envie seu pedido</span>
                <div className={estilos.linha} />
              </div>

              <div className={estilos.campo}>
                <label className={estilos.label} htmlFor="nome">
                  Nome *
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  className={estilos.input}
                  placeholder="Seu nome completo"
                  value={form.nome}
                  onChange={handleChange}
                />
              </div>

              <div className={estilos.campo}>
                <label className={estilos.label} htmlFor="telefone">
                  Telefone{" "}
                  <span className={estilos.opcional}>(opcional)</span>
                </label>
                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  className={estilos.input}
                  placeholder="(11) 99999-9999"
                  value={form.telefone}
                  onChange={handleChange}
                />
              </div>

              <div className={estilos.campo}>
                <label className={estilos.label} htmlFor="pedido">
                  Pedido de oração *
                </label>
                <textarea
                  id="pedido"
                  name="pedido"
                  required
                  rows={6}
                  className={estilos.textarea}
                  placeholder="Descreva seu pedido de oração..."
                  value={form.pedido}
                  onChange={handleChange}
                />
              </div>

              <div className={estilos.aviso}>
                <Heart size={14} color="var(--cor-dourado)" />
                <p className={estilos.avisoTexto}>
                  Seu pedido será recebido com toda a confidencialidade e
                  cuidado pelo ministério de intercessão da COMEPE.
                </p>
              </div>

              <button type="submit" className={estilos.botaoEnviar}>
                Enviar pedido de oração
              </button>
            </form>
          )}
        </div>
      </div>

      <Rodape />
    </div>
  );
}
