import { CONTACTS } from "../constants"

export default function Footer() {
  return (
    <footer className="bg-papel py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-sans font-medium text-bordo text-lg mb-1">
            Helena Lima
          </p>
          <p className="font-sans text-cafe text-sm">
            Gestão pra negócios
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <a
            href={CONTACTS.INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-cafe hover:text-bordo interactive text-sm font-medium"
          >
            Instagram: @helenagestao
          </a>
          <a
            href={CONTACTS.WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-cafe hover:text-bordo interactive text-sm font-medium"
          >
            WhatsApp: {CONTACTS.WHATSAPP_DISPLAY}
          </a>
          <a
            href={`mailto:${CONTACTS.EMAIL}`}
            className="font-sans text-cafe hover:text-bordo interactive text-sm font-medium"
          >
            E-mail: {CONTACTS.EMAIL}
          </a>
        </div>
      </div>
    </footer>
  )
}
