import { useEffect, useState } from "react";
import type { RankedIdea, IdeaInteraction, UserStatus } from "../types";
import { STATUS_COLORS, STATUS_LABELS } from "../types";
import { fetchBrief } from "../hooks/useData";
import { BriefReader } from "./BriefReader";

interface IdeaDetailProps {
  idea: RankedIdea;
  interaction: IdeaInteraction;
  onToggleStar: () => void;
  onSetStatus: (status: UserStatus) => void;
  onSetNotes: (notes: string) => void;
}

type DetailTab = "brief" | "notes";

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
  const [tab, setTab] = useState<DetailTab>("brief");

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
    <div className="h-full flex flex-col min-h-0">
      <header className="flex-shrink-0 border-b border-[var(--color-border)] pb-4 mb-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-xs font-mono text-emerald-400">#{idea.rank}</span>
              <span className="text-xs font-mono text-emerald-400">
                MOVS {idea.score.toFixed(1)}
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
                  {idea.revenuePotentialCAD.high.toLocaleString()}/mo
                </span>
              )}
            </div>
            <h1 className="text-xl font-bold text-white leading-tight">{idea.title}</h1>
            <p className="text-sm text-zinc-400 mt-0.5">{idea.tagline}</p>
          </div>
          <button
            type="button"
            onClick={onToggleStar}
            className="flex-shrink-0 text-2xl hover:scale-110 transition-transform"
            aria-label={interaction.starred ? "Unstar" : "Star"}
          >
            {interaction.starred ? "★" : "☆"}
          </button>
        </div>

        <div className="flex gap-1 mt-4">
          {(["brief", "notes"] as DetailTab[]).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`px-3 py-1.5 rounded-lg text-sm capitalize ${
                tab === t
                  ? "bg-emerald-900/40 text-emerald-300"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {t === "brief" ? "Full brief" : "Your notes"}
            </button>
          ))}
        </div>
      </header>

      <div className="flex-1 min-h-0 overflow-hidden">
        {tab === "brief" ? (
          <div className="h-full min-h-0">
            {loading && <p className="text-zinc-500 text-sm">Loading brief...</p>}
            {briefError && (
              <p className="text-red-400 text-sm">
                {briefError}
                {!idea.briefPath && " — no brief path set."}
              </p>
            )}
            {brief && <BriefReader markdown={brief} />}
            {!loading && !brief && !briefError && (
              <p className="text-zinc-500 text-sm">No brief available for this idea.</p>
            )}
          </div>
        ) : (
          <div className="overflow-y-auto h-full space-y-5 pr-2">
            {idea.scoreBreakdown && Object.keys(idea.scoreBreakdown).length > 0 && (
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-wide mb-2">
                  Score breakdown
                </p>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(idea.scoreBreakdown).map(([key, val]) => (
                    <span
                      key={key}
                      className="text-xs px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300"
                    >
                      {key}: <span className="text-emerald-400 font-mono">{val}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label className="text-sm text-zinc-400 block mb-2">Your status</label>
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

            <div>
              <label htmlFor="notes" className="text-sm text-zinc-400 block mb-2">
                Your notes
              </label>
              <textarea
                id="notes"
                value={interaction.notes}
                onChange={(e) => onSetNotes(e.target.value)}
                placeholder="Thoughts, concerns, next steps..."
                rows={8}
                className="w-full rounded-lg border border-[var(--color-border)] bg-zinc-900/50 px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-700 resize-y"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
