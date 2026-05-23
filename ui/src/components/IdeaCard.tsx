import type { RankedIdea, IdeaInteraction, UserStatus } from "../types";
import { STATUS_COLORS, STATUS_LABELS } from "../types";

interface IdeaCardProps {
  idea: RankedIdea;
  interaction: IdeaInteraction;
  selected: boolean;
  onSelect: () => void;
  onToggleStar: () => void;
}

export function IdeaCard({
  idea,
  interaction,
  selected,
  onSelect,
  onToggleStar,
}: IdeaCardProps) {
  const status = interaction.status as UserStatus;

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full text-left rounded-xl border p-4 transition-all hover:border-emerald-700/50 ${
        selected
          ? "border-emerald-500/60 bg-emerald-950/20 ring-1 ring-emerald-500/30"
          : "border-[var(--color-border)] bg-[var(--color-panel)]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-sm font-semibold text-emerald-400">
            #{idea.rank}
          </span>
          <div className="min-w-0">
            <h3 className="font-semibold text-white truncate">{idea.title}</h3>
            <p className="text-sm text-zinc-400 truncate mt-0.5">{idea.tagline}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleStar();
          }}
          className="flex-shrink-0 text-lg leading-none hover:scale-110 transition-transform"
          aria-label={interaction.starred ? "Unstar" : "Star"}
        >
          {interaction.starred ? "★" : "☆"}
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2 mt-3">
        <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800 text-emerald-400">
          {idea.score.toFixed(1)}
        </span>
        {idea.category && (
          <span className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
            {idea.category}
          </span>
        )}
        {idea.buildDays != null && (
          <span className="text-xs text-zinc-500">{idea.buildDays}d build</span>
        )}
        {idea.revenuePotentialCAD && (
          <span className="text-xs text-zinc-500">
            ${idea.revenuePotentialCAD.low.toLocaleString()}–$
            {idea.revenuePotentialCAD.high.toLocaleString()} CAD/mo
          </span>
        )}
        {status !== "new" && (
          <span className={`text-xs px-2 py-0.5 rounded ${STATUS_COLORS[status]}`}>
            {STATUS_LABELS[status]}
          </span>
        )}
      </div>
    </button>
  );
}
