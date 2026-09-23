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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {dores.map((dor, index) => (
            <div
              key={index}
              className={`border-[1.5px] border-bordo rounded-[10px] p-6 bg-papel reveal hover:bg-white transition-colors delay-${
                index % 3 === 0 ? "100" : index % 3 === 1 ? "200" : "300"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <dor.icon
                size={20}
                strokeWidth={1.5}
                className="text-bordo mb-3"
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
