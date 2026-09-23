// Título de seção: acento (Pinyon Script) + título (Schibsted Grotesk) na
// mesma linha, alinhados pela base. Se não couber, quebra só depois do acento;
// o título nunca quebra no meio. No mobile os tamanhos acompanham a largura da
// tela (vw) pra que o título mais longo caiba, mantendo acento = 2x título.
type Props = {
  accent: string
  title: string
  size?: "md" | "lg"
  align?: "left" | "center"
  className?: string
  accentClassName?: string
  titleClassName?: string
}

const sizes = {
  md: {
    accent: "text-[length:min(3.5rem,11.2vw)] md:text-7xl",
    title: "text-[length:min(1.75rem,5.6vw)] md:text-4xl",
  },
  lg: {
    accent: "text-[length:min(4.5rem,15vw)] md:text-8xl",
    title: "text-[length:min(2.25rem,7.5vw)] md:text-5xl",
  },
}

export default function SectionTitle({
  accent,
  title,
  size = "md",
  align = "left",
  className = "",
  accentClassName = "",
  titleClassName = "",
}: Props) {
  return (
    <h2
      className={`flex flex-wrap items-baseline gap-x-3 md:gap-x-4 text-bordo pb-4 border-b-[1.5px] border-bordo ${
        align === "center" ? "justify-center text-center" : ""
      } ${className}`}
    >
      <span className={`font-script leading-[1.1] ${sizes[size].accent} ${accentClassName}`}>
        {accent}
      </span>{" "}
      <span
        className={`font-sans font-medium tracking-[-0.02em] leading-tight whitespace-nowrap ${sizes[size].title} ${titleClassName}`}
      >
        {title}
      </span>
    </h2>
  )
}
