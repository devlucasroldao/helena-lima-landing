import type { ReactNode } from "react"

// Etiqueta: estilo único do site (pílula rosa antigo, texto bordô em caixa alta).
export default function Tag({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={`inline-block rounded-full bg-rosa px-3 py-1 font-sans font-bold text-xs uppercase tracking-[0.16em] text-bordo ${className}`}
    >
      {children}
    </span>
  )
}
