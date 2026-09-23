import SectionTitle from "./SectionTitle"

export default function Experiencia() {
  const colunas = [
    {
      etiqueta: "O CENÁRIO",
      texto:
        "O setor financeiro não tinha uma estrutura organizada. A cobrança dos clientes em dia já tinha data fixa, mas a cobrança de inadimplentes não seguia nenhuma rotina.",
    },
    {
      etiqueta: "O QUE EU FIZ",
      texto:
        "Organizei contas a pagar e a receber, montei a planilha de controle, defini uma forma mais adequada de registrar despesas e organizei o uso do sistema. Também criei uma régua de cobrança para inadimplentes, com etapas de aviso antes do bloqueio, da retirada de equipamentos e da negativação, e defini o que cobrar em cada situação.",
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
            className="flex flex-col items-start border-[1.5px] border-bordo rounded-[10px] p-6 bg-papel reveal hover:bg-white transition-colors"
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <span className="bg-rosa border-[1.5px] border-bordo rounded-full px-3 py-1 font-sans font-bold text-[13px] uppercase tracking-[0.16em] text-bordo mb-6 inline-block">
              {col.etiqueta}
            </span>
            <p className="font-sans text-cafe mb-0 leading-relaxed">
              {col.texto}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
