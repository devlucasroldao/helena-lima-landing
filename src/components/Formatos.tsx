import { CONTACTS } from "../constants"
import WhatsAppIcon from "./WhatsAppIcon"
import SectionTitle from "./SectionTitle"

export default function Formatos() {
  return (
    <section className="bg-blush py-20 px-6 border-y-[1.5px] border-bordo">
      <div className="max-w-6xl mx-auto">
        <SectionTitle accent="Formas" title="de trabalhar comigo" className="mb-16 reveal" />

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Cartão Pontual */}
          <div className="flex-1 border-[1.5px] border-bordo rounded-[10px] p-8 bg-papel reveal hover:bg-white transition-colors delay-100">
            <span className="font-sans font-bold text-[13px] text-bordo uppercase tracking-[0.16em] mb-4 block">
              PONTUAL
            </span>
            <p className="font-sans text-cafe text-lg">
              Pra organizar uma área específica: estruturar o financeiro, montar
              planilhas, arrumar o atendimento.
            </p>
          </div>

          {/* Cartão Acompanhamento Mensal */}
          <div className="flex-1 rounded-[10px] p-8 bg-bordo text-papel border-[1.5px] border-bordo reveal hover:bg-[#5A1926] transition-colors delay-200">
            <span className="font-sans font-bold text-[13px] uppercase tracking-[0.16em] mb-4 block text-papel">
              ACOMPANHAMENTO MENSAL
            </span>
            <p className="font-sans text-papel/90 text-lg">
              Eu cuido da rotina que a gente combinar e acompanho o seu negócio
              todo mês.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 reveal delay-300">
          <p className="font-sans text-cafe flex-1 max-w-2xl mb-0">
            Cada proposta é montada de acordo com o que o seu negócio precisa.
            Todo trabalho é feito com contrato.
          </p>
          <a
            href={CONTACTS.WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bordo text-papel px-8 py-4 rounded-full font-sans font-medium hover:bg-[#5A1926] hover:-translate-y-[1px] transition-all text-center w-full md:w-auto whitespace-nowrap min-h-[44px] flex items-center justify-center gap-2"
          >
            <WhatsAppIcon size={18} />
            Conversar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
