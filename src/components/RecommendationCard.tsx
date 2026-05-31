import { ExternalLink, Star } from "lucide-react";
import { Recommendation } from "@/lib/types";

export function RecommendationCard({ recommendation }: { recommendation: Recommendation }) {
  return (
    <article className="glass flex h-full flex-col rounded-xl p-5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-cyan">{recommendation.company}</p>
          <h3 className="mt-1 text-xl font-semibold text-white">{recommendation.name}</h3>
          <p className="mt-2 text-sm leading-6 text-gray-400">{recommendation.shortDescription}</p>
        </div>
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-electric/25 to-violet/25 text-cyan">
          <Star size={22} />
        </div>
      </div>

      <div className="mb-4">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-gray-400">Compatibilidade</span>
          <span className="font-semibold text-cyan">{recommendation.matchScore}%</span>
        </div>
        <div className="h-2 rounded-full bg-white/10">
          <div className="h-full rounded-full bg-gradient-to-r from-electric to-cyan" style={{ width: `${recommendation.matchScore}%` }} />
        </div>
      </div>

      <dl className="space-y-3 text-sm">
        <div>
          <dt className="text-gray-500">Categoria</dt>
          <dd className="mt-1 text-gray-200">{recommendation.category}</dd>
        </div>
        <div>
          <dt className="text-gray-500">Modelos suportados</dt>
          <dd className="mt-1 text-gray-200">{recommendation.supportedModels}</dd>
        </div>
        <div>
          <dt className="text-gray-500">Preco</dt>
          <dd className="mt-1 text-gray-200">{recommendation.price}</dd>
        </div>
        <div>
          <dt className="text-gray-500">Diferencial</dt>
          <dd className="mt-1 text-gray-200">{recommendation.competitiveDifferential}</dd>
        </div>
        <div>
          <dt className="text-gray-500">Melhor uso</dt>
          <dd className="mt-1 text-gray-200">{recommendation.bestUse}</dd>
        </div>
      </dl>

      <div className="mt-5 flex flex-wrap gap-2">
        {recommendation.tags.slice(0, 5).map((tag) => (
          <span key={tag} className="rounded-full bg-white/8 px-3 py-1 text-xs text-gray-300">
            {tag}
          </span>
        ))}
      </div>

      <a href={recommendation.link} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/8">
        Acessar ferramenta <ExternalLink size={16} />
      </a>
    </article>
  );
}
