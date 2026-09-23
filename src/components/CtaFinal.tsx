import { MessageCircle } from "lucide-react"
import { CONTACTS } from "../constants"

export default function CtaFinal() {
  return (
    <section className="bg-bordo py-24 px-6 border-b-[1.5px] border-bordo">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center reveal">
        <h2 className="text-papel flex flex-col mb-8 w-full max-w-md">
          <span className="font-script text-7xl md:text-8xl text-rosa leading-none">
            Vamos
          </span>
          <span className="font-sans font-medium text-4xl md:text-5xl tracking-[-0.02em] pb-6 border-b-[1.5px] border-rosa/30 inline-block w-full mt-2">
            conversar?
          </span>
        </h2>

        <p className="font-sans text-papel text-xl md:text-2xl mb-10 max-w-2xl">
          Me conta como está o seu negócio hoje.
        </p>

        <a
          href={CONTACTS.WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-papel text-bordo px-10 py-5 rounded-full font-sans font-medium text-lg hover:bg-rosa hover:-translate-y-[1px] transition-all min-h-[44px] flex items-center justify-center gap-2 shadow-lg"
        >
          <MessageCircle size={20} strokeWidth={1.5} />
          Conversar no WhatsApp
        </a>
      </div>
    </section>
  )
}
