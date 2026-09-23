import { TESTIMONIALS } from "../constants"
import SectionTitle from "./SectionTitle"

export default function Depoimentos() {
  if (TESTIMONIALS.length === 0) return null

  const unico = TESTIMONIALS.length === 1

  return (
    <section className="bg-blush py-20 px-6 border-t-[1.5px] border-bordo">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          accent="Quem"
          title="já trabalhou comigo"
          className="mb-12 reveal"
        />

        <div
          className={
            unico
              ? "max-w-2xl mx-auto"
              : `grid grid-cols-1 md:grid-cols-2 gap-6 ${
                  TESTIMONIALS.length >= 3 ? "lg:grid-cols-3" : ""
                }`
          }
        >
          {TESTIMONIALS.map((depoimento, index) => (
            <figure
              key={index}
              className="flex flex-col border-[1.5px] border-bordo rounded-[10px] p-6 md:p-8 bg-papel reveal"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span
                className="font-script text-bordo text-7xl leading-[0.6] h-8 block"
                aria-hidden="true"
              >
                “
              </span>
              <blockquote className="font-sans text-cafe text-lg leading-relaxed mb-6 flex-1">
                {depoimento.texto}
              </blockquote>
              <figcaption className="flex flex-col items-start gap-2">
                <span className="font-sans font-semibold text-bordo">
                  {depoimento.nome}
                </span>
                <span className="border-[1.5px] border-bordo rounded-full px-3 py-1 font-sans font-bold text-xs uppercase tracking-[0.16em] text-bordo">
                  {[depoimento.cargo, depoimento.empresa]
                    .filter(Boolean)
                    .join(" · ")}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
