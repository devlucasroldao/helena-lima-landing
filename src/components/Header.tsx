import { useState, useEffect } from "react"
import { Menu, X, MessageCircle } from "lucide-react"
import { CONTACTS } from "../constants"

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-papel border-b-[1.5px] border-bordo py-0"
          : "bg-transparent border-transparent py-2"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#"
          className="flex items-baseline gap-1 text-bordo no-underline"
        >
          <span className="font-script text-4xl">Helena</span>
          <span className="font-sans font-medium text-2xl tracking-[-0.02em]">
            Lima
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-cafe hover:text-bordo transition-colors font-sans"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CONTACTS.WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bordo text-papel px-6 py-2 rounded-full font-sans font-medium hover:bg-[#5A1926] transition-all hover:-translate-y-[1px] flex items-center gap-2"
          >
            <MessageCircle size={16} strokeWidth={1.5} />
            Conversar
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-bordo p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-papel border-b-[1.5px] border-bordo p-6 flex flex-col gap-6 shadow-lg">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-cafe font-sans text-lg"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CONTACTS.WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="bg-bordo text-papel px-6 py-3 rounded-full font-sans font-medium text-center w-full flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} strokeWidth={1.5} />
            Conversar
          </a>
        </div>
      )}
    </header>
  )
}
