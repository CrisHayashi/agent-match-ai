"use client";

import { AlertCircle, ExternalLink, Plus, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { agenticTools } from "@/data/agenticTools";
import { AgenticTool, Recommendation } from "@/lib/types";

const fields: Array<[string, (tool: AgenticTool) => string]> = [
  ["Nome", (tool) => tool.name],
  ["Categoria", (tool) => tool.category],
  ["Facilidade de uso", (tool) => tool.recommendedLevel.join(", ")],
  ["Nivel de controle", (tool) => tool.controlLevel.join(", ")],
  ["Custo/licenca", (tool) => `${tool.price} / ${tool.licenseType}`],
  ["Modelos suportados", (tool) => tool.supportedModels],
  ["Melhor uso", (tool) => tool.bestUse],
  ["Perfil ideal", (tool) => tool.idealProfile.join(", ")],
  ["Diferencial competitivo", (tool) => tool.competitiveDifferential]
];

export function CompareTable({ recommendations }: { recommendations: Recommendation[] }) {
  const initial = recommendations.length >= 2 ? recommendations.slice(0, 3).map((tool) => tool.id) : agenticTools.slice(0, 3).map((tool) => tool.id);
  const [selectedIds, setSelectedIds] = useState<string[]>(initial);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (recommendations.length >= 2) {
      setSelectedIds(recommendations.slice(0, 3).map((tool) => tool.id));
    }
  }, [recommendations]);

  const selectedTools = selectedIds.map((id) => agenticTools.find((tool) => tool.id === id)).filter(Boolean) as AgenticTool[];
  const availableTools = useMemo(() => {
    const term = search.trim().toLowerCase();
    return agenticTools.filter((tool) => `${tool.name} ${tool.company} ${tool.category}`.toLowerCase().includes(term));
  }, [search]);

  function updateTool(position: number, toolId: string) {
    if (selectedIds.includes(toolId) && selectedIds[position] !== toolId) {
      setMessage("Essa ferramenta ja esta na comparacao. Escolha uma opcao diferente.");
      return;
    }
    setMessage("");
    setSelectedIds((current) => current.map((id, index) => (index === position ? toolId : id)));
  }

  function addSlot() {
    if (selectedIds.length >= 3) {
      setMessage("A comparacao permite no maximo 3 ferramentas.");
      return;
    }
    const next = agenticTools.find((tool) => !selectedIds.includes(tool.id));
    if (next) setSelectedIds((current) => [...current, next.id]);
  }

  function removeSlot(position: number) {
    if (selectedIds.length <= 2) {
      setMessage("Mantenha pelo menos 2 ferramentas para comparar.");
      return;
    }
    setMessage("");
    setSelectedIds((current) => current.filter((_, index) => index !== position));
  }

  return (
    <section id="comparacao" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">Comparacao</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Compare ferramentas lado a lado</h2>
            <p className="mt-3 max-w-2xl text-gray-400">A comparacao inicia com as melhores recomendacoes e permite trocar por qualquer ferramenta da base local.</p>
          </div>
          <button type="button" onClick={addSlot} className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-4 py-3 text-sm font-semibold text-white hover:bg-white/8">
            <Plus size={16} /> Adicionar ferramenta
          </button>
        </div>

        <div className="glass rounded-2xl p-4 sm:p-5">
          <div className="mb-5 grid gap-3 md:grid-cols-[260px_1fr]">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar ferramenta"
              className="focus-ring rounded-lg border border-white/10 bg-white/8 px-3 py-3 text-sm text-white placeholder:text-gray-500"
            />
            <div className="grid gap-3 md:grid-cols-3">
              {selectedIds.map((id, index) => (
                <div key={`${id}-${index}`} className="flex gap-2">
                  <select
                    value={id}
                    onChange={(event) => updateTool(index, event.target.value)}
                    className="focus-ring min-w-0 flex-1 rounded-lg border border-white/10 bg-night px-3 py-3 text-sm text-white"
                  >
                    {availableTools.map((tool) => (
                      <option key={tool.id} value={tool.id}>
                        {tool.name}
                      </option>
                    ))}
                  </select>
                  <button type="button" onClick={() => removeSlot(index)} className="focus-ring grid h-11 w-11 place-items-center rounded-lg border border-white/10 text-gray-300 hover:bg-white/8" aria-label="Remover ferramenta">
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {message ? (
            <p className="mb-4 flex items-center gap-2 rounded-lg border border-amber-300/25 bg-amber-300/10 px-3 py-2 text-sm text-amber-100">
              <AlertCircle size={16} /> {message}
            </p>
          ) : null}

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[920px] border-collapse text-left text-sm">
              <tbody>
                {fields.map(([label, getValue]) => (
                  <tr key={label} className="border-t border-white/10">
                    <th className="w-56 py-4 pr-4 font-semibold text-gray-300">{label}</th>
                    {selectedTools.map((tool) => (
                      <td key={`${tool.id}-${label}`} className="py-4 pr-4 text-gray-200">
                        {getValue(tool)}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t border-white/10">
                  <th className="py-4 pr-4 font-semibold text-gray-300">Link de acesso</th>
                  {selectedTools.map((tool) => (
                    <td key={`${tool.id}-link`} className="py-4 pr-4">
                      <a href={tool.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan hover:text-white">
                        Abrir <ExternalLink size={14} />
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid gap-4 md:hidden">
            {selectedTools.map((tool) => (
              <article key={tool.id} className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                <h3 className="text-lg font-semibold">{tool.name}</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  {fields.slice(1).map(([label, getValue]) => (
                    <div key={`${tool.id}-${label}`}>
                      <dt className="text-gray-500">{label}</dt>
                      <dd className="mt-1 text-gray-200">{getValue(tool)}</dd>
                    </div>
                  ))}
                </dl>
                <a href={tool.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-cyan">
                  Link de acesso <ExternalLink size={14} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
