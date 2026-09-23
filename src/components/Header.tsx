import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { CONTACTS } from "../constants"
import WhatsAppIcon from "./WhatsAppIcon"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const links = [
    { label: "Serviços", href: "#servicos" },
    { label: "Como funciona", href: "#comofunciona" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Dúvidas", href: "#duvidas" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`header-safe fixed top-0 left-0 right-0 z-50 border-b interactive ${
        scrolled ? "bg-papel border-bordo" : "bg-transparent border-transparent"
      }`}
    >
      {/* No topo o conteúdo desce 8px; ao rolar, sobe (transform, pra poder animar). */}
      <div
        className="max-w-6xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between interactive"
        style={{ transform: scrolled ? undefined : "translateY(8px)" }}
      >
        <a
          href="#"
          className="flex items-baseline gap-1 text-bordo no-underline"
        >
          <span className="font-script text-3xl md:text-4xl">Helena</span>
          <span className="font-sans font-medium text-xl md:text-2xl tracking-[-0.02em]">
            Lima
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-cafe hover:text-bordo interactive font-sans"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CONTACTS.WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bordo text-papel px-6 py-2 rounded-full font-sans font-medium hover:bg-bordo-escuro btn flex items-center gap-2"
          >
            <WhatsAppIcon size={16} />
            Conversar
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-bordo p-2 btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        id="menu-mobile"
        data-open={isOpen}
        inert={!isOpen}
        className="mobile-menu md:hidden absolute top-full left-0 right-0 bg-papel border-b border-bordo p-6 flex flex-col gap-6"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-cafe hover:text-bordo interactive font-sans text-lg"
          >
            {link.label}
          </a>
        ))}
        <a
          href={CONTACTS.WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="bg-bordo text-papel px-6 py-3 rounded-full font-sans font-medium text-center w-full hover:bg-bordo-escuro btn flex items-center justify-center gap-2"
        >
          <WhatsAppIcon size={18} />
          Conversar
        </a>
      </div>
    </header>
  )
}
