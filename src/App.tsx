import { useEffect } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Dores from "./components/Dores"
import Servicos from "./components/Servicos"
import ComoFunciona from "./components/ComoFunciona"
import Formatos from "./components/Formatos"
import Experiencia from "./components/Experiencia"
import Depoimentos from "./components/Depoimentos"
import Sobre from "./components/Sobre"
import Duvidas from "./components/Duvidas"
import CtaFinal from "./components/CtaFinal"
import Footer from "./components/Footer"

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Dores />
        <Servicos />
        <ComoFunciona />
        <Formatos />
        <Experiencia />
        <Depoimentos />
        <Sobre />
        <Duvidas />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  )
}
