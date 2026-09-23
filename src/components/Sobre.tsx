import SectionTitle from "./SectionTitle"

export default function Sobre() {
  return (
    <div className="bg-blush border-t-[1.5px] border-bordo">
      <section className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 flex justify-center order-2 md:order-1 reveal">
          <div className="w-full max-w-md aspect-square bg-rosa/30 rounded-full flex items-center justify-center border-[1.5px] border-bordo border-dashed overflow-hidden">
            <span className="text-bordo font-medium font-sans uppercase tracking-widest text-sm">
              [foto da Helena]
            </span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start order-1 md:order-2 reveal delay-100">
          <SectionTitle accent="Prazer," title="Helena Lima" className="mb-8 w-full" />
          <div className="font-sans text-cafe text-lg space-y-4">
            <p>
              Comecei aos 14 anos, como secretária num salão, cuidando da parte
              administrativa e da cobrança dos serviços. Foi lá que meus antigos
              chefes da Conecte Telecom conheceram meu trabalho e, quando saí,
              me chamaram pra trabalhar com eles. Entrei como secretária e fui
              assumindo o financeiro e a organização de tudo.
            </p>
            <p>
              Hoje atendo negócios de todo o Brasil, online. Gosto de
              entender antes de organizar: cada negócio funciona de um jeito, e
              a solução precisa caber na sua rotina.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
