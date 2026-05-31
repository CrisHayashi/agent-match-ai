"use client";

import { Bot } from "lucide-react";

export function FloatingHelpButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="focus-ring fixed bottom-5 left-5 z-40 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan px-4 py-3 text-sm font-semibold text-night shadow-glow transition hover:scale-[1.02]"
    >
      <Bot size={18} /> Guia IA
    </button>
  );
}
