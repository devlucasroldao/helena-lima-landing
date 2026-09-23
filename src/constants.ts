import { Mail } from "lucide-react"
import InstagramIcon from "./components/InstagramIcon"
import WhatsAppIcon from "./components/WhatsAppIcon"

export const CONTACTS = {
  WHATSAPP_URL:
    "https://wa.me/5551997999008?text=Oi%20Helena!%20Vim%20pelo%20site%20e%20quero%20entender%20como%20voc%C3%AA%20pode%20ajudar%20meu%20neg%C3%B3cio.",
  WHATSAPP_DISPLAY: "(51) 99799-9008",
  EMAIL: "helenalimagestao@gmail.com",
  INSTAGRAM_URL: "https://instagram.com/helenagestao",
  INSTAGRAM_HANDLE: "@helenagestao",
}

// Crédito de quem criou o site (rodapé).
export const CREDIT = {
  NAME: "Lucas Roldão",
  URL: "https://devlucasroldao.vercel.app/",
}

// Ícones de contato usados no rodapé.
export const CONTACT_ICONS = {
  INSTAGRAM: InstagramIcon,
  WHATSAPP: WhatsAppIcon,
  EMAIL: Mail,
}

// Monograma (o mesmo arquivo do favicon).
export const MONOGRAM_URL = "/favicon.svg"

// Links de navegação do rodapé, na ordem da página.
export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#comofunciona" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Sobre", href: "#sobre" },
  { label: "Dúvidas", href: "#duvidas" },
]

export type Testimonial = {
  texto: string
  nome: string
  cargo: string
  empresa: string
}

// Depoimentos reais de clientes. Com o array vazio, a seção não aparece.
export const TESTIMONIALS: Testimonial[] = []
