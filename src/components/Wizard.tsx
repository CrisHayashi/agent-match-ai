"use client";

import { ArrowLeft, ArrowRight, Bot, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";
import { getRecommendations } from "@/lib/recommendation";
import { questions } from "@/lib/questions";
import { Recommendation, UserAnswers } from "@/lib/types";
import { OptionCard } from "./OptionCard";
import { ProgressBar } from "./ProgressBar";
import { RecommendationCard } from "./RecommendationCard";

const emptyAnswers: Partial<UserAnswers> = {};

const labels: Record<string, string> = {
  acessivel: "Acessivel",
  desafio: "Desafio",
  complexo: "Complexo",
  colaboracao: "Colaboracao",
  prototipagem: "Prototipagem",
  automacao: "Automacao",
  "open-source": "Open-source",
  proprietario: "Proprietario",
  "tanto-faz": "Tanto faz",
  "solucao-pronta": "Solucao pronta",
  "flexibilidade-total": "Flexibilidade total",
  equilibrio: "Equilibrio",
  desenvolvimento: "Desenvolvimento",
  design: "Design",
  negocios: "Negocios",
  atendimento: "Atendimento",
  pesquisa: "Pesquisa",
  codigo: "Codigo",
  prototipos: "Prototipos",
  textos: "Textos",
  integracoes: "Integracoes",
  analises: "Analises",
  nenhuma: "Nenhuma",
  simples: "Simples",
  apis: "APIs",
  avancada: "Avancada",
  iniciante: "Iniciante",
  intermediario: "Intermediario",
  tecnico: "Tecnico",
  corporativo: "Corporativo"
};

export function Wizard({
  onRecommendations,
  onOpenAssistant
}: {
  onRecommendations: (recommendations: Recommendation[]) => void;
  onOpenAssistant: () => void;
}) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<UserAnswers>>(emptyAnswers);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[step];
  const selectedValue = answers[currentQuestion.key];
  const complete = questions.every((question) => Boolean(answers[question.key]));
  const recommendations = useMemo(() => (complete ? getRecommendations(answers as UserAnswers, 5) : []), [answers, complete]);

  function select(value: string) {
    setAnswers((current) => ({ ...current, [currentQuestion.key]: value }));
  }

  function next() {
    if (!selectedValue) return;
    if (step < questions.length - 1) {
      setStep((current) => current + 1);
      return;
    }
    const result = getRecommendations(answers as UserAnswers, 5);
    onRecommendations(result);
    setShowResults(true);
    setTimeout(() => document.getElementById("resultado")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  }

  function reset() {
    setAnswers({});
    setStep(0);
    setShowResults(false);
    onRecommendations([]);
  }

  return (
    <section id="diagnostico" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">Diagnostico</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Responda perguntas rápidas e receba seu match</h2>
          <p className="mt-3 text-gray-400">As opcoes ficam visiveis em cards para evitar formularios longos e tornar a decisao mais intuitiva.</p>
        </div>

        <div className="glass rounded-2xl p-5 sm:p-7">
          <ProgressBar current={step + 1} total={questions.length} />

          <div className="mt-8">
            <p className="text-sm text-cyan">{currentQuestion.requiredCore ? "Pergunta obrigatoria" : "Pergunta complementar"}</p>
            <h3 className="mt-2 text-2xl font-semibold">{currentQuestion.title}</h3>
            <p className="mt-2 text-gray-400">{currentQuestion.description}</p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {currentQuestion.options.map((option) => (
              <OptionCard
                key={option.value}
                icon={option.icon}
                title={option.title}
                description={option.description}
                selected={selectedValue === option.value}
                onClick={() => select(option.value)}
              />
            ))}
          </div>

          {step === 3 ? (
            <div className="mt-6 rounded-xl border border-cyan/25 bg-cyan/10 p-4">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <h4 className="flex items-center gap-2 font-semibold text-white">
                    <Bot size={18} /> Guia IA disponivel
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-gray-300">
                    As perguntas obrigatorias ja filtram a recomendacao. Agora voce pode tirar duvidas sobre controle, licenca, nivel ou ferramentas antes de continuar.
                  </p>
                </div>
                <button type="button" onClick={onOpenAssistant} className="focus-ring rounded-lg bg-cyan px-4 py-3 text-sm font-semibold text-night">
                  Abrir Guia IA
                </button>
              </div>
            </div>
          ) : null}

          <div className="mt-7 flex flex-col justify-between gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setStep((current) => Math.max(0, current - 1))}
              disabled={step === 0}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-4 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ArrowLeft size={17} /> Voltar
            </button>
            <button
              type="button"
              onClick={next}
              disabled={!selectedValue}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-electric to-violet px-5 py-3 text-sm font-semibold text-white shadow-glow disabled:cursor-not-allowed disabled:opacity-50"
            >
              {step === questions.length - 1 ? "Gerar recomendacoes" : "Proximo"} <ArrowRight size={17} />
            </button>
          </div>
        </div>

        {showResults && complete ? (
          <div id="resultado" className="pt-16">
            <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">Resultado</p>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Suas melhores recomendacoes</h2>
                <p className="mt-3 text-gray-400">Selecionamos as ferramentas com maior compatibilidade para o seu perfil.</p>
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={reset} className="focus-ring inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-3 text-sm font-semibold hover:bg-white/8">
                  <RotateCcw size={16} /> Refazer diagnostico
                </button>
                <a href="#comparacao" className="inline-flex items-center rounded-lg bg-white px-4 py-3 text-sm font-semibold text-night">
                  Comparar ferramentas
                </a>
              </div>
            </div>

            <div className="mb-6 grid gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4 md:grid-cols-4">
              {Object.entries(answers).slice(0, 8).map(([key, value]) => (
                <div key={key}>
                  <p className="text-xs uppercase tracking-[0.16em] text-gray-500">{key}</p>
                  <p className="mt-1 text-sm font-medium text-gray-100">{labels[String(value)] ?? String(value)}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
              {recommendations.map((recommendation) => (
                <RecommendationCard key={recommendation.id} recommendation={recommendation} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
