import { useEffect, useState } from "react"
import { CONTACTS } from "../constants"
import WhatsAppIcon from "./WhatsAppIcon"

// Botão flutuante (só mobile). Aparece depois que o hero sai da tela e some
// quando o CTA final está visível, pra não duplicar o botão. Também some no
// rodapé, pra não cobrir os contatos.
export default function WhatsAppFlutuante() {
  const [heroVisivel, setHeroVisivel] = useState(true)
  const [ctaVisivel, setCtaVisivel] = useState(false)
  const [rodapeVisivel, setRodapeVisivel] = useState(false)

  useEffect(() => {
    const hero = document.getElementById("inicio")
    const cta = document.getElementById("contato")
    const rodape = document.querySelector("footer")
    if (!hero || !cta || !rodape) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === hero) setHeroVisivel(entry.isIntersecting)
        if (entry.target === cta) setCtaVisivel(entry.isIntersecting)
        if (entry.target === rodape) setRodapeVisivel(entry.isIntersecting)
      })
    })
    observer.observe(hero)
    observer.observe(cta)
    observer.observe(rodape)
    return () => observer.disconnect()
  }, [])

  const visivel = !heroVisivel && !ctaVisivel && !rodapeVisivel

  return (
    <a
      href={CONTACTS.WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      data-visible={visivel}
      aria-hidden={!visivel}
      tabIndex={visivel ? undefined : -1}
      className="whatsapp-flutuante md:hidden fixed z-40 w-14 h-14 rounded-full bg-bordo text-papel flex items-center justify-center hover:bg-bordo-escuro btn"
    >
      <WhatsAppIcon size={28} />
    </a>
  )
}
