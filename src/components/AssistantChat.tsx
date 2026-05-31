"use client";

import { Bot, Loader2, Send, X } from "lucide-react";
import { FormEvent, useState } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function AssistantChat({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Olá! Sou o Guia IA. Pergunte sobre controle, licenca, nivel de habilidade ou ferramentas recomendadas."
    }
  ]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const trimmed = question.trim();
    if (!trimmed || loading) return;

    setMessages((current) => [...current, { role: "user", content: trimmed }]);
    setQuestion("");
    setLoading(true);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: trimmed })
      });
      const data = (await response.json()) as { answer?: string; error?: string };
      setMessages((current) => [
        ...current,
        { role: "assistant", content: data.answer ?? data.error ?? "Nao consegui responder agora." }
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        { role: "assistant", content: "Nao consegui conectar ao Guia IA agora. Tente novamente em instantes." }
      ]);
    } finally {
      setLoading(false);
    }
  }

  if (!open) return null;

  return (
    <aside className="fixed bottom-4 right-4 z-50 flex h-[min(680px,calc(100vh-2rem))] w-[calc(100vw-2rem)] max-w-md flex-col rounded-2xl border border-white/15 bg-night shadow-2xl shadow-black/50">
      <header className="flex items-center justify-between border-b border-white/10 p-4">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-cyan/15 text-cyan">
            <Bot size={20} />
          </span>
          <div>
            <h3 className="font-semibold">Guia IA</h3>
            <p className="text-xs text-gray-400">Ajuda curta e didatica durante a escolha</p>
          </div>
        </div>
        <button type="button" onClick={onClose} className="focus-ring rounded-lg p-2 text-gray-300 hover:bg-white/8" aria-label="Fechar Guia IA">
          <X size={19} />
        </button>
      </header>

      <div className="flex-1 space-y-3 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`rounded-xl px-4 py-3 text-sm leading-6 ${
              message.role === "user" ? "ml-8 bg-electric text-white" : "mr-8 bg-white/8 text-gray-100"
            }`}
          >
            {message.content}
          </div>
        ))}
        {loading ? (
          <div className="mr-8 flex items-center gap-2 rounded-xl bg-white/8 px-4 py-3 text-sm text-gray-300">
            <Loader2 className="h-4 w-4 animate-spin" /> Pensando...
          </div>
        ) : null}
      </div>

      <form onSubmit={handleSubmit} className="border-t border-white/10 p-4">
        <div className="flex gap-2">
          <input
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            maxLength={700}
            placeholder="Ex.: O que significa controle?"
            className="focus-ring min-w-0 flex-1 rounded-lg border border-white/10 bg-white/8 px-3 py-3 text-sm text-white placeholder:text-gray-500"
          />
          <button type="submit" className="focus-ring grid h-11 w-11 place-items-center rounded-lg bg-cyan text-night disabled:opacity-60" disabled={loading} aria-label="Enviar pergunta">
            <Send size={18} />
          </button>
        </div>
      </form>
    </aside>
  );
}
