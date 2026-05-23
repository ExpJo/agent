import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import type { RankedIdea, IdeaInteraction, UserStatus } from "../types";
import { STATUS_COLORS, STATUS_LABELS } from "../types";
import { fetchBrief } from "../hooks/useData";

interface IdeaDetailProps {
  idea: RankedIdea;
  interaction: IdeaInteraction;
  onToggleStar: () => void;
  onSetStatus: (status: UserStatus) => void;
  onSetNotes: (notes: string) => void;
}

export function IdeaDetail({
  idea,
  interaction,
  onToggleStar,
  onSetStatus,
  onSetNotes,
}: IdeaDetailProps) {
  const [brief, setBrief] = useState<string | null>(null);
  const [briefError, setBriefError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!idea.briefPath) {
      setBrief(null);
      return;
    }
    setLoading(true);
    setBriefError(null);
    fetchBrief(idea.briefPath)
      .then(setBrief)
      .catch((err) => setBriefError(err.message))
      .finally(() => setLoading(false));
  }, [idea.id, idea.briefPath]);

  const statuses: UserStatus[] = ["new", "interested", "maybe", "dismissed"];

  return (
    <div className="h-full flex flex-col">
      <header className="border-b border-[var(--color-border)] pb-5 mb-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-mono text-emerald-400">Rank #{idea.rank}</span>
              <span className="text-sm font-mono text-zinc-500">·</span>
              <span className="text-sm font-mono text-emerald-400">
                Score {idea.score.toFixed(1)}
              </span>
            </div>
            <h1 className="text-2xl font-bold text-white">{idea.title}</h1>
            <p className="text-zinc-400 mt-1">{idea.tagline}</p>
          </div>
          <button
            type="button"
            onClick={onToggleStar}
            className="text-2xl hover:scale-110 transition-transform"
          >
            {interaction.starred ? "★" : "☆"}
          </button>
        </div>

        {idea.scoreBreakdown && Object.keys(idea.scoreBreakdown).length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {Object.entries(idea.scoreBreakdown).map(([key, val]) => (
              <span
                key={key}
                className="text-xs px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300"
              >
                {key}: <span className="text-emerald-400 font-mono">{val}</span>
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="rounded-lg border border-[var(--color-border)] bg-zinc-900/50 p-3">
          <p className="text-xs text-zinc-500 uppercase tracking-wide">Build time</p>
          <p className="text-lg font-semibold mt-1">
            {idea.buildDays != null ? `${idea.buildDays} days` : "—"}
          </p>
        </div>
        <div className="rounded-lg border border-[var(--color-border)] bg-zinc-900/50 p-3">
          <p className="text-xs text-zinc-500 uppercase tracking-wide">Revenue potential</p>
          <p className="text-lg font-semibold mt-1">
            {idea.revenuePotentialCAD
              ? `$${idea.revenuePotentialCAD.low.toLocaleString()}–$${idea.revenuePotentialCAD.high.toLocaleString()}`
              : "—"}
          </p>
        </div>
        <div className="rounded-lg border border-[var(--color-border)] bg-zinc-900/50 p-3">
          <p className="text-xs text-zinc-500 uppercase tracking-wide">Category</p>
          <p className="text-lg font-semibold mt-1">{idea.category ?? "—"}</p>
        </div>
      </div>

      <div className="mb-6 space-y-3">
        <label className="text-sm text-zinc-400">Your status</label>
        <div className="flex flex-wrap gap-2">
          {statuses.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => onSetStatus(s)}
              className={`text-sm px-3 py-1.5 rounded-lg border transition-colors ${
                interaction.status === s
                  ? `${STATUS_COLORS[s]} border-current`
                  : "border-[var(--color-border)] text-zinc-400 hover:border-zinc-600"
              }`}
            >
              {STATUS_LABELS[s]}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="notes" className="text-sm text-zinc-400 block mb-2">
          Your notes
        </label>
        <textarea
          id="notes"
          value={interaction.notes}
          onChange={(e) => onSetNotes(e.target.value)}
          placeholder="Thoughts, concerns, next steps..."
          rows={3}
          className="w-full rounded-lg border border-[var(--color-border)] bg-zinc-900/50 px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-700 resize-y"
        />
      </div>

      <div className="flex-1 overflow-y-auto min-h-0">
        <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wide mb-3">
          Full brief
        </h2>
        {loading && <p className="text-zinc-500 text-sm">Loading brief...</p>}
        {briefError && (
          <p className="text-red-400 text-sm">
            {briefError}
            {!idea.briefPath && " — no brief path set for this idea."}
          </p>
        )}
        {brief && (
          <article className="markdown-body prose-invert max-w-none">
            <ReactMarkdown>{brief}</ReactMarkdown>
          </article>
        )}
        {!loading && !brief && !briefError && (
          <p className="text-zinc-500 text-sm">
            No brief available yet. Run the ranking pipeline to generate detailed briefs.
          </p>
        )}
      </div>
    </div>
  );
}
