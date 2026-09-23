import type { CSSProperties } from "react"
import {
  ArrowDownUp,
  CalendarX,
  HandCoins,
  MessagesSquare,
  Brain,
  BatteryLow,
} from "lucide-react"
import SectionTitle from "./SectionTitle"

export default function Dores() {
  const dores = [
    { icon: ArrowDownUp, texto: "Você não sabe direito quanto entrou e quanto saiu esse mês." },
    { icon: CalendarX, texto: "Uma conta foi paga com juros porque ninguém lembrou do vencimento." },
    { icon: HandCoins, texto: "Tem cliente te devendo e você nem tem certeza de quem." },
    { icon: MessagesSquare, texto: "O WhatsApp acumula mensagem enquanto você tenta trabalhar." },
    { icon: Brain, texto: "A agenda do negócio vive na sua cabeça, e às vezes ela falha." },
    { icon: BatteryLow, texto: "Tudo depende de você. Se você para, o negócio para." },
  ]

  return (
    <section className="bg-blush py-20 px-6 border-y-[1.5px] border-bordo">
      <div className="max-w-6xl mx-auto">
        <SectionTitle accent="Talvez" title="você se reconheça aqui" className="mb-12 max-w-3xl reveal" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-12">
          {dores.map((dor, index) => (
            <div
              key={index}
              className="flex items-start gap-3 border-[1.5px] border-bordo rounded-[10px] p-4 md:p-5 bg-papel reveal hover:bg-white"
              style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
            >
              <dor.icon
                size={20}
                strokeWidth={1.5}
                className="text-bordo flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <p className="font-sans text-cafe">{dor.texto}</p>
            </div>
          ))}
        </div>

        <p className="font-sans text-cafe text-lg md:text-xl font-medium max-w-3xl reveal">
          Você não precisa resolver tudo de uma vez. A gente começa pelo que
          mais trava.
        </p>
      </div>
    </section>
  )
}
