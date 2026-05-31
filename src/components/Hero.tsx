import { ArrowRight, Cpu, Sparkles, WandSparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 text-sm text-cyan">
            <Sparkles size={16} /> Recomendador inteligente de IA agentica
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Descubra a ferramenta de IA agentica ideal para o seu projeto
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Um sistema inteligente que analisa seu perfil, necessidades e objetivos para recomendar as melhores ferramentas de IA.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#diagnostico" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-electric to-violet px-5 py-3 font-semibold text-white shadow-glow transition hover:scale-[1.01]">
              Comecar diagnostico <ArrowRight size={18} />
            </a>
            <a href="#como-funciona" className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-3 font-semibold text-gray-100 transition hover:bg-white/8">
              Ver como funciona
            </a>
          </div>
        </div>

        <div className="glass relative overflow-hidden rounded-2xl p-5">
          <div className="absolute inset-0 bg-gradient-to-br from-electric/10 via-transparent to-violet/20" />
          <div className="relative rounded-xl border border-white/10 bg-night/70 p-4">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-cyan">Match engine</p>
                <h2 className="mt-1 text-xl font-semibold">Diagnostico ativo</h2>
              </div>
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-electric/15 text-cyan">
                <Cpu />
              </div>
            </div>
            <div className="space-y-3">
              {[
                ["Perfil", "Tecnico com foco em prototipagem", "92%"],
                ["Controle", "Equilibrio entre pronto e customizavel", "86%"],
                ["Custo", "Open-source ou freemium", "78%"]
              ].map(([label, value, score]) => (
                <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-gray-400">{label}</p>
                      <p className="mt-1 text-sm font-medium text-white">{value}</p>
                    </div>
                    <span className="rounded-full bg-cyan/10 px-3 py-1 text-sm font-semibold text-cyan">{score}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl border border-violet/30 bg-violet/10 p-4">
              <div className="mb-3 flex items-center gap-2 text-violet-200">
                <WandSparkles size={18} />
                <span className="font-medium">Top recomendacoes</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {["Cursor", "LangGraph", "Dify"].map((tool) => (
                  <div key={tool} className="rounded-lg bg-night/80 px-3 py-3 text-sm text-gray-200">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
