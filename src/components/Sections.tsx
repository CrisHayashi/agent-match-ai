import { Bot, CheckCircle2, GitCompare, Layers3, Route, ShieldCheck, Sparkles, WandSparkles } from "lucide-react";
import { agenticTools } from "@/data/agenticTools";
import { AgenticTool } from "@/lib/types";

const steps = [
  { icon: CheckCircle2, title: "Responda perguntas rapidas", text: "Cards objetivos coletam perfil, custo, controle e contexto." },
  { icon: Route, title: "O sistema interpreta seu perfil", text: "O motor de score compara suas respostas com a base local." },
  { icon: WandSparkles, title: "Receba recomendacoes inteligentes", text: "Veja matches com score, justificativas e links oficiais." }
];

const benefits = [
  "Recomendacao personalizada",
  "Interface intuitiva",
  "Assistente IA integrado",
  "Comparacao de ferramentas",
  "Sistema baseado em SDD",
  "Experiencia moderna"
];

const featuredIds = ["chatgpt", "cursor", "claude-code", "github-copilot", "crewai", "langgraph"];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">Como funciona</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Uma escolha complexa em tres etapas</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="glass relative rounded-xl p-6">
              <span className="absolute right-5 top-5 text-5xl font-black text-white/5">0{index + 1}</span>
              <step.icon className="h-8 w-8 text-cyan" />
              <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-400">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Benefits() {
  const icons = [Sparkles, Layers3, Bot, GitCompare, ShieldCheck, WandSparkles];

  return (
    <section className="border-y border-white/10 bg-white/[0.025] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">Por que usar</p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Menos ruido, mais decisao</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = icons[index];
            return (
              <article key={benefit} className="rounded-xl border border-white/10 bg-panel/70 p-5">
                <Icon className="h-7 w-7 text-cyan" />
                <h3 className="mt-5 text-lg font-semibold">{benefit}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">Projetado para apresentar resultados claros sem esconder a logica de recomendacao.</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ToolsPreview() {
  const tools = featuredIds
    .map((id) => agenticTools.find((tool) => tool.id === id))
    .filter((tool): tool is AgenticTool => Boolean(tool));

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">Ecossistema</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Ferramentas em destaque</h2>
          </div>
          <p className="max-w-xl text-gray-400">A base local inclui assistentes gerais, IDEs com IA, frameworks de agentes, automacao e app builders.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <article key={tool.id} className="rounded-xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-cyan/40">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br from-electric/30 to-violet/30 font-bold text-cyan">
                  {tool.name.slice(0, 2)}
                </span>
                <div>
                  <h3 className="font-semibold">{tool.name}</h3>
                  <p className="text-sm text-gray-500">{tool.company}</p>
                </div>
              </div>
              <p className="text-sm text-cyan">{tool.category}</p>
              <p className="mt-3 text-sm leading-6 text-gray-400">{tool.shortDescription}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-2xl border border-cyan/25 bg-gradient-to-r from-electric/20 via-violet/20 to-cyan/10 p-8 text-center shadow-glow sm:p-12">
        <h2 className="text-3xl font-semibold sm:text-4xl">Pronto para descobrir sua IA ideal?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-300">Use o diagnostico para transformar preferencias em recomendacoes comparaveis e justificadas.</p>
        <a href="#diagnostico" className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-night">
          Comecar diagnostico agora
        </a>
      </div>
    </section>
  );
}
