import { useState } from "react"
import { ChevronDown } from "lucide-react"
import SectionTitle from "./SectionTitle"

export default function Duvidas() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const duvidas = [
    {
      pergunta: "Você atende de onde?",
      resposta:
        "Atendo 100% online, negócios de qualquer lugar do Brasil.",
    },
    {
      pergunta: "Preciso ter CNPJ?",
      resposta:
        "Não. Atendo empresas, MEIs e também autônomos pessoa física.",
    },
    {
      pergunta: "Você substitui o meu contador?",
      resposta:
        "Não. Notas fiscais e impostos ficam com a contabilidade. Eu organizo a rotina financeira e trabalho junto com ela.",
    },
    {
      pergunta: "Como ficam os meus dados?",
      resposta:
        "Todo trabalho é feito com contrato, que inclui cláusula de confidencialidade. O acesso a sistemas e informações é combinado de acordo com o serviço.",
    },
    {
      pergunta: "Quanto custa?",
      resposta:
        "Cada proposta é montada de acordo com o que o seu negócio precisa. O diagnóstico inicial é sem custo.",
    },
    {
      pergunta: "Como a gente começa?",
      resposta:
        "Com uma conversa pelo WhatsApp. Você me conta a situação e eu explico como posso ajudar.",
    },
  ]

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="duvidas"
      className="bg-papel py-20 px-6 border-y-[1.5px] border-bordo"
    >
      <div className="max-w-4xl mx-auto">
        <SectionTitle accent="Dúvidas" title="frequentes" align="center" className="mb-12 w-fit mx-auto reveal" />

        <div className="space-y-4">
          {duvidas.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="border-[1.5px] border-bordo rounded-[10px] bg-papel overflow-hidden reveal hover:bg-white transition-colors"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-rosa/10 transition-colors min-h-[44px]"
                >
                  <span className="font-sans font-medium text-lg text-bordo pr-8">
                    {item.pergunta}
                  </span>
                  <span
                    className={`text-bordo flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown size={24} strokeWidth={1.5} />
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 pt-0 font-sans text-cafe border-t-[1.5px] border-bordo/20">
                    {item.resposta}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
