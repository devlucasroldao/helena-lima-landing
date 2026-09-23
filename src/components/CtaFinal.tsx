import { CONTACTS } from "../constants"
import WhatsAppIcon from "./WhatsAppIcon"
import SectionTitle from "./SectionTitle"

export default function CtaFinal() {
  return (
    <section className="bg-bordo py-24 px-6 border-b-[1.5px] border-bordo">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center reveal">
        <SectionTitle accent="Vamos" title="conversar?" size="lg" align="center" className="mb-8 w-fit mx-auto text-papel border-rosa/30" accentClassName="text-rosa" />

        <p className="font-sans text-papel text-xl md:text-2xl mb-10 max-w-2xl">
          Me conta como está o seu negócio hoje.
        </p>

        <a
          href={CONTACTS.WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-papel text-bordo px-10 py-5 rounded-full font-sans font-medium text-lg hover:bg-rosa hover:-translate-y-[1px] transition-all min-h-[44px] flex items-center justify-center gap-2 shadow-lg"
        >
          <WhatsAppIcon size={20} />
          Conversar no WhatsApp
        </a>
      </div>
    </section>
  )
}
