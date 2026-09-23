import { useEffect, useRef, useState } from "react"
import { CONTACTS, CONTACT_ICONS, MONOGRAM_URL, NAV_LINKS } from "../constants"
import Logo from "./Logo"
import Tag from "./Tag"

// Item de contato: ícone bordô + texto com sublinhado no hover (nav-link).
const itemClass =
  "flex items-center gap-3 min-h-[44px] font-sans text-cafe hover:text-bordo interactive text-left"

export default function Footer() {
  const [copiado, setCopiado] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  // Copia o e-mail; se o navegador não deixar, abre o app de e-mail.
  const copiarEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACTS.EMAIL)
      setCopiado(true)
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => setCopiado(false), 2000)
    } catch {
      window.location.href = `mailto:${CONTACTS.EMAIL}`
    }
  }

  const { INSTAGRAM, WHATSAPP, EMAIL } = CONTACT_ICONS

  return (
    <footer className="bg-papel px-6 pt-16 pb-[calc(2rem+env(safe-area-inset-bottom))]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Marca */}
          <div className="flex flex-col items-start">
            <img
              src={MONOGRAM_URL}
              alt=""
              width={44}
              height={44}
              className="w-11 h-11 mb-4"
            />
            <Logo className="text-4xl" />
            <p className="font-sans text-cafe text-sm mt-3">
              Gestão pra negócios
            </p>
          </div>

          {/* Navegação */}
          <nav aria-labelledby="rodape-navegacao">
            <Tag className="mb-4">
              <span id="rodape-navegacao">Navegação</span>
            </Tag>
            <ul className="list-none p-0 m-0">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center min-h-[44px] font-sans text-cafe hover:text-bordo interactive"
                  >
                    <span className="nav-link">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div>
            <Tag className="mb-4">Contato</Tag>
            <ul className="list-none p-0 m-0">
              <li>
                <a
                  href={CONTACTS.INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={itemClass}
                >
                  <span className="text-bordo">
                    <INSTAGRAM size={20} />
                  </span>
                  <span className="nav-link">{CONTACTS.INSTAGRAM_HANDLE}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACTS.WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={itemClass}
                >
                  <span className="text-bordo">
                    <WHATSAPP size={20} />
                  </span>
                  <span className="nav-link">{CONTACTS.WHATSAPP_DISPLAY}</span>
                </a>
              </li>
              <li className="relative">
                <button
                  type="button"
                  onClick={copiarEmail}
                  aria-label="Copiar e-mail"
                  className={itemClass}
                >
                  <EMAIL
                    size={20}
                    strokeWidth={1.5}
                    className="text-bordo flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="nav-link">{CONTACTS.EMAIL}</span>
                </button>
                <span
                  aria-live="polite"
                  className="absolute left-8 top-full font-sans text-sm font-medium text-bordo"
                >
                  {copiado ? "E-mail copiado" : ""}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-bordo">
          <p className="font-sans text-xs text-cafe">© 2026 Helena Lima</p>
        </div>
      </div>
    </footer>
  )
}
