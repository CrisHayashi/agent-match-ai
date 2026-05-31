"use client";

import { Icon } from "./Icon";

export function OptionCard({
  icon,
  title,
  description,
  selected,
  onClick
}: {
  icon: string;
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`focus-ring min-h-[132px] rounded-xl border p-4 text-left transition ${
        selected
          ? "border-cyan bg-cyan/12 shadow-glow"
          : "border-white/10 bg-white/[0.035] hover:border-white/25 hover:bg-white/[0.06]"
      }`}
    >
      <div className="mb-4 flex items-center justify-between">
        <span className={`grid h-11 w-11 place-items-center rounded-lg ${selected ? "bg-cyan/20 text-cyan" : "bg-white/8 text-gray-200"}`}>
          <Icon name={icon} className="h-5 w-5" />
        </span>
        <span className={`h-3 w-3 rounded-full ${selected ? "bg-cyan" : "bg-white/20"}`} />
      </div>
      <h4 className="text-base font-semibold text-white">{title}</h4>
      <p className="mt-2 text-sm leading-6 text-gray-400">{description}</p>
    </button>
  );
}
