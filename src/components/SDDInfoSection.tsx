import { FileText, GitBranch, ScanSearch } from "lucide-react";

const items = [
  {
    icon: FileText,
    title: "Entradas",
    text: "O usuario informa perfil, objetivo, custo, controle, area, resultado esperado e integracao por cards guiados."
  },
  {
    icon: ScanSearch,
    title: "Processamento",
    text: "O motor compara respostas com atributos das ferramentas e calcula compatibilidade percentual por score."
  },
  {
    icon: GitBranch,
    title: "Saidas",
    text: "O sistema entrega recomendacoes, justificativas, comparacao e apoio do Guia IA para decisao."
  }
];

export function SDDInfoSection() {
  return (
    <section id="sdd" className="border-y border-white/10 bg-white/[0.025] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">SDD</p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Como o sistema funciona</h2>
        <p className="mt-4 max-w-3xl text-gray-400">
          O Agent Match AI segue Specification Driven Development: antes da interface final, o comportamento, os requisitos, as regras de recomendacao e o fluxo do usuario ficam documentados em `/docs`.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="glass rounded-xl p-5">
              <item.icon className="h-7 w-7 text-cyan" />
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-400">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
