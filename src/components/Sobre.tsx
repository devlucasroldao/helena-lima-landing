import SectionTitle from "./SectionTitle"

export default function Sobre() {
  return (
    <div className="bg-blush border-t-[1.5px] border-bordo">
      <section className="py-20 px-6 max-w-6xl mx-auto flex flex-col gap-8 md:grid md:grid-cols-2 md:grid-rows-[1fr_auto] md:gap-x-12 md:gap-y-8">
        <SectionTitle
          accent="Prazer,"
          title="Helena Lima"
          className="w-full md:col-start-2 md:row-start-1 md:self-end reveal"
        />
        <div className="flex justify-center md:col-start-1 md:row-start-1 md:row-span-2 md:self-center reveal">
          <div className="w-full max-w-[18rem] md:max-w-md aspect-square bg-rosa/30 rounded-full flex items-center justify-center border-[1.5px] border-bordo border-dashed overflow-hidden">
            <span className="text-bordo font-medium font-sans uppercase tracking-widest text-sm">
              [foto da Helena]
            </span>
          </div>
        </div>
        <div className="md:col-start-2 md:row-start-2 reveal reveal-delay-1">
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
