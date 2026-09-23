import { CONTACTS } from "../constants"
import WhatsAppIcon from "./WhatsAppIcon"

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-6 max-w-6xl mx-auto min-h-[90vh] flex flex-col md:flex-row items-center gap-12 bg-papel">
      <div className="flex-1 flex flex-col items-start reveal">
        <h1 className="text-bordo flex flex-col mb-6">
          <span className="font-script text-7xl md:text-8xl leading-none">
            Olá,
          </span>
          <span className="font-sans font-medium text-4xl md:text-5xl tracking-[-0.02em] mt-2">
            eu organizo o financeiro e o atendimento do seu negócio.
          </span>
        </h1>
        <p className="text-cafe text-lg md:text-xl font-sans mb-8 max-w-xl">
          Pra MEIs, autônomos e empresas, 100% online. Antes de
          organizar qualquer coisa, eu entendo como o seu negócio funciona.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href={CONTACTS.WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bordo text-papel px-8 py-4 rounded-full font-sans font-medium text-center hover:bg-[#5A1926] hover:-translate-y-[1px] transition-all min-h-[44px] flex items-center justify-center gap-2"
          >
            <WhatsAppIcon size={18} />
            Conversar no WhatsApp
          </a>
          <a
            href="#comofunciona"
            className="border-[1.5px] border-bordo text-bordo bg-transparent px-8 py-4 rounded-full font-sans font-medium text-center hover:bg-bordo hover:text-papel hover:-translate-y-[1px] transition-all min-h-[44px] flex items-center justify-center"
          >
            Ver como funciona
          </a>
        </div>
      </div>
      <div className="flex-1 w-full max-w-md mx-auto aspect-[4/5] bg-rosa/30 rounded-2xl flex items-center justify-center border-[1.5px] border-bordo border-dashed overflow-hidden reveal delay-100">
        {/* Placeholder image block */}
        <span className="text-bordo font-medium font-sans uppercase tracking-widest text-sm">
          [foto da Helena]
        </span>
      </div>
    </section>
  )
}
