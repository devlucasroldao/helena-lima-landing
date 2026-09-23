import type { CSSProperties } from "react"
import SectionTitle from "./SectionTitle"

export default function ComoFunciona() {
  const passos = [
    {
      num: "01",
      titulo: "Conversa inicial",
      texto:
        "Você me conta como o negócio funciona hoje e o que mais está pesando.",
    },
    {
      num: "02",
      titulo: "Diagnóstico sem custo",
      texto: "Eu olho a sua rotina e identifico onde está o nó.",
    },
    {
      num: "03",
      titulo: "Organização",
      texto: "Organizo começando pelo que mais trava.",
    },
    {
      num: "04",
      titulo: "Acompanhamento",
      texto: "Se fizer sentido pra você, sigo junto, mês a mês.",
    },
  ]

  return (
    <section
      id="comofunciona"
      className="py-20 px-6 max-w-6xl mx-auto bg-papel"
    >
      <SectionTitle accent="Como" title="funciona?" className="mb-16 reveal" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-4">
        {passos.map((passo, index) => (
          <div
            key={index}
            className="relative border-[1.5px] border-bordo rounded-[10px] p-6 bg-papel reveal hover:bg-white"
            style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
          >
            <h3 className="font-sans font-medium text-lg text-bordo tracking-[-0.02em] mb-2">
              {passo.titulo}
            </h3>
            <p className="font-sans text-cafe mb-8">{passo.texto}</p>
            <div className="absolute -bottom-4 right-4 md:-bottom-5 md:-right-3 text-[56px] md:text-7xl font-sans font-medium text-bordo bg-papel px-1 leading-none">
              {passo.num}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
