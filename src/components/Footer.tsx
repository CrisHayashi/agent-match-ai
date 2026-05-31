export function Footer() {
  return (
    <footer className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-t border-white/10 pt-8 text-sm text-gray-400 md:flex-row">
        <div>
          <p className="font-semibold text-white">Agent Match AI</p>
          <p className="mt-2 max-w-xl">Sistema recomendador de ferramentas de IA agenticas desenvolvido com Next.js, TypeScript, Tailwind CSS, OpenAI Responses API e SDD.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="https://github.com/CrisHayashi/agent-match-ai" className="hover:text-white">GitHub placeholder</a>
          <a href="#diagnostico" className="hover:text-white">Diagnostico</a>
          <a href="#sdd" className="hover:text-white">Documentacao SDD</a>
        </div>
      </div>
    </footer>
  );
}
