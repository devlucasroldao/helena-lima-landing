import type { CSSProperties } from "react"
import SectionTitle from "./SectionTitle"
import Tag from "./Tag"

export default function Experiencia() {
  const colunas: { etiqueta: string; texto?: string; itens?: string[] }[] = [
    {
      etiqueta: "O CENÁRIO",
      texto:
        "O setor financeiro não tinha uma estrutura organizada. A cobrança dos clientes em dia já tinha data fixa, mas a cobrança de inadimplentes não seguia nenhuma rotina.",
    },
    {
      etiqueta: "O QUE EU FIZ",
      itens: [
        "Organizei contas a pagar e a receber",
        "Montei a planilha de controle",
        "Defini uma forma mais adequada de registrar despesas",
        "Organizei o uso do sistema",
        "Criei uma régua de cobrança para inadimplentes, com etapas de aviso antes do bloqueio, da retirada de equipamentos e da negativação",
        "Defini o que cobrar em cada situação",
      ],
    },
    {
      etiqueta: "COMO FICOU",
      texto:
        "O financeiro passou a ter rotina, registro e controle, com processos que não dependem de lembrar tudo de cabeça.",
    },
  ]

  return (
    <section id="experiencia" className="py-20 px-6 max-w-6xl mx-auto bg-papel">
      <SectionTitle accent="Na prática" title="o financeiro da Conecte Telecom" className="mb-16 reveal" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {colunas.map((col, index) => (
          <div
            key={index}
            className="flex flex-col items-start border-[1.5px] border-bordo rounded-[10px] p-6 bg-papel reveal hover:bg-white"
            style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
          >
            <Tag className="mb-6">{col.etiqueta}</Tag>
            {col.itens ? (
              <ul className="list-none space-y-2 p-0 m-0">
                {col.itens.map((item, i) => (
                  <li key={i} className="font-sans text-cafe leading-relaxed flex items-start">
                    <span className="text-bordo mr-2" aria-hidden="true">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="font-sans text-cafe mb-0 leading-relaxed">
                {col.texto}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
