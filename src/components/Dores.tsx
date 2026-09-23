export default function Dores() {
  const dores = [
    "Você não sabe direito quanto entrou e quanto saiu esse mês.",
    "Uma conta foi paga com juros porque ninguém lembrou do vencimento.",
    "Tem cliente te devendo e você nem tem certeza de quem.",
    "O WhatsApp acumula mensagem enquanto você tenta trabalhar.",
    "A agenda do negócio vive na sua cabeça, e às vezes ela falha.",
    "Tudo depende de você. Se você para, o negócio para.",
  ]

  return (
    <section className="bg-blush py-20 px-6 border-y-[1.5px] border-bordo">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-bordo flex flex-col mb-12 reveal">
          <span className="font-script text-6xl md:text-7xl leading-none">
            Talvez
          </span>
          <span className="font-sans font-medium text-3xl md:text-4xl tracking-[-0.02em] pb-4 border-b-[1.5px] border-bordo inline-block w-full max-w-2xl mt-2">
            você se reconheça aqui
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {dores.map((dor, index) => (
            <div
              key={index}
              className={`border-[1.5px] border-bordo rounded-[10px] p-6 bg-papel reveal hover:bg-white transition-colors delay-${
                index % 3 === 0 ? "100" : index % 3 === 1 ? "200" : "300"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <p className="font-sans text-cafe">{dor}</p>
            </div>
          ))}
        </div>

        <p className="font-sans text-cafe text-lg md:text-xl font-medium max-w-3xl reveal">
          Você não precisa resolver tudo de uma vez. A gente começa pelo que
          mais trava.
        </p>
      </div>
    </section>
  )
}
