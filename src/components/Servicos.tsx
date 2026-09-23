import type { CSSProperties } from "react"
import { Wallet, MessageCircle, CalendarDays, ListChecks } from "lucide-react"
import SectionTitle from "./SectionTitle"

export default function Servicos() {
  const servicos = [
    {
      titulo: "Organização financeira",
      icon: <Wallet strokeWidth={1.5} size={24} className="text-bordo" />,
      items: [
        "Contas a pagar e a receber",
        "Registro de entradas e despesas",
        "Rotina de cobrança, inclusive de inadimplentes",
        "Planilhas de controle",
        "Organização do sistema que você já usa",
      ],
    },
    {
      titulo: "Atendimento ao cliente",
      icon: (
        <MessageCircle strokeWidth={1.5} size={24} className="text-bordo" />
      ),
      items: [
        "Atendo os seus clientes em nome da empresa",
        "Sigo o jeito que o seu negócio já se comunica",
        "Trabalho dentro do sistema que vocês já usam",
      ],
    },
    {
      titulo: "Agenda do negócio",
      icon: <CalendarDays strokeWidth={1.5} size={24} className="text-bordo" />,
      items: [
        "Prioridades, atividades e eventos da empresa organizados",
        "Rotinas administrativas do dia a dia",
      ],
    },
    {
      titulo: "Organização de processos",
      icon: <ListChecks strokeWidth={1.5} size={24} className="text-bordo" />,
      items: [
        "Estruturar como as tarefas são feitas, pra que não dependam da memória de ninguém",
      ],
    },
  ]

  return (
    <section id="servicos" className="py-20 px-6 max-w-6xl mx-auto bg-papel">
      <SectionTitle accent="Como" title="posso ajudar?" className="mb-16 reveal" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-12 mb-16">
        {servicos.map((servico, index) => (
          <div
            key={index}
            // Linha fina entre serviços: no mobile acima de cada um (menos o
            // primeiro); em 2 colunas, só acima da segunda linha.
            className={`flex flex-col items-start reveal ${
              index === 0
                ? ""
                : index === 1
                  ? "border-t border-bordo/30 pt-10 md:border-t-0 md:pt-0"
                  : "border-t border-bordo/30 pt-10 md:pt-12"
            }`}
            style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-rosa flex items-center justify-center flex-shrink-0">
                {servico.icon}
              </div>
              <h3 className="font-sans font-medium text-2xl text-bordo tracking-[-0.02em]">
                {servico.titulo}
              </h3>
            </div>
            <ul className="list-none space-y-3 p-0 m-0">
              {servico.items.map((item, i) => (
                <li key={i} className="font-sans text-cafe flex items-start">
                  <span className="text-bordo mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-blush p-6 rounded-[10px] border-[1.5px] border-bordo reveal">
        <p className="font-sans text-sm md:text-base text-cafe mb-0">
          <strong>Nota:</strong> Eu não substituo o seu contador. Notas fiscais
          e impostos ficam com a contabilidade; eu organizo a rotina financeira
          pra que o trabalho dele, e o seu, fique mais fácil.
        </p>
      </div>
    </section>
  )
}
