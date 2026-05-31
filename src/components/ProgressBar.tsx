export function ProgressBar({ current, total }: { current: number; total: number }) {
  const progress = Math.round((current / total) * 100);

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm text-gray-400">
        <span>Etapa {current} de {total}</span>
        <span>{progress}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full bg-gradient-to-r from-electric via-violet to-cyan transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
