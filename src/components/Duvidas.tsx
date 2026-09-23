import { useState, type CSSProperties } from "react"
import { ChevronDown } from "lucide-react"
import SectionTitle from "./SectionTitle"

export default function Duvidas() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const duvidas = [
    {
      pergunta: "Você atende de onde?",
      resposta: "Atendo 100% online, negócios de qualquer lugar do Brasil.",
    },
    {
      pergunta: "Preciso ter CNPJ?",
      resposta: "Não. Atendo empresas, MEIs e também autônomos pessoa física.",
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
      {/* Coluna única de ~768px: título, linha e lista com a mesma largura. */}
      <div className="max-w-3xl mx-auto">
        <SectionTitle
          accent="Dúvidas"
          title="frequentes"
          className="mb-8 reveal"
        />

        <div>
          {duvidas.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="border-b border-bordo/30 reveal"
                style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
              >
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`duvida-${index}`}
                  className="group w-full flex items-center justify-between py-5 text-left min-h-[44px]"
                >
                  <span className="font-sans font-medium text-lg text-bordo pr-8 group-hover:underline underline-offset-4 decoration-1">
                    {item.pergunta}
                  </span>
                  <span
                    className="text-bordo flex-shrink-0 interactive"
                    style={{ transform: isOpen ? "rotate(180deg)" : undefined }}
                  >
                    <ChevronDown size={24} strokeWidth={1.5} />
                  </span>
                </button>
                {isOpen && (
                  <div id={`duvida-${index}`} className="accordion-panel">
                    <div className="pb-5 pr-8 font-sans text-cafe">
                      {item.resposta}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
