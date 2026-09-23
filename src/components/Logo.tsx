// Logo: "Helena Lima" inteiro em Pinyon Script, como uma assinatura.
// O tamanho vem de quem usa (header e rodapé).
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-script text-bordo leading-none whitespace-nowrap ${className}`}
    >
      Helena Lima
    </span>
  )
}
