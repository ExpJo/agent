import { useEffect, useState, useMemo } from "react";
import type { RankedIdea, RankedIndex, UserStatus } from "./types";
import { useInteractions, fetchRankedIndex } from "./hooks/useData";
import { IdeaCard } from "./components/IdeaCard";
import { IdeaDetail } from "./components/IdeaDetail";
import { FrameworkView } from "./components/FrameworkView";

type Tab = "ideas" | "framework";

export default function App() {
  const [tab, setTab] = useState<Tab>("ideas");
  const [ideas, setIdeas] = useState<RankedIdea[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<UserStatus | "all" | "starred">("all");
  const { get, toggleStar, setStatus, setNotes } = useInteractions();

  useEffect(() => {
    fetchRankedIndex()
      .then((data: RankedIndex) => {
        const sorted = [...(data.ideas ?? [])].sort((a, b) => a.rank - b.rank);
        setIdeas(sorted);
        if (sorted.length > 0) setSelectedId(sorted[0].id);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    return ideas.filter((idea) => {
      const interaction = get(idea.id);
      if (filter === "all") return true;
      if (filter === "starred") return interaction.starred;
      return interaction.status === filter;
    });
  }, [ideas, filter, get]);

  const selected = ideas.find((i) => i.id === selectedId) ?? null;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-[var(--color-border)] bg-[var(--color-panel)]/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight">
              Montreal Idea Engine
            </h1>
            <p className="text-xs text-zinc-500 mt-0.5">
              Discover · Evaluate · Rank · Build
            </p>
          </div>
          <nav className="flex gap-1 bg-zinc-900 rounded-lg p-1">
            {(["ideas", "framework"] as Tab[]).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`px-4 py-1.5 rounded-md text-sm capitalize transition-colors ${
                  tab === t
                    ? "bg-emerald-900/50 text-emerald-300"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {t}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-6">
        {tab === "framework" ? (
          <FrameworkView />
        ) : loading ? (
          <p className="text-zinc-500">Loading ideas...</p>
        ) : error ? (
          <EmptyState message={error} />
        ) : ideas.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-7rem)]">
            <aside className="lg:col-span-4 xl:col-span-3 flex flex-col min-h-0">
              <div className="flex flex-wrap gap-2 mb-4">
                {(["all", "starred", "interested", "maybe", "dismissed"] as const).map(
                  (f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFilter(f)}
                      className={`text-xs px-2.5 py-1 rounded-full border capitalize ${
                        filter === f
                          ? "border-emerald-600 text-emerald-300 bg-emerald-950/30"
                          : "border-[var(--color-border)] text-zinc-500 hover:border-zinc-600"
                      }`}
                    >
                      {f}
                    </button>
                  ),
                )}
              </div>
              <div className="flex-1 overflow-y-auto space-y-2 pr-1">
                {filtered.map((idea) => (
                  <IdeaCard
                    key={idea.id}
                    idea={idea}
                    interaction={get(idea.id)}
                    selected={selectedId === idea.id}
                    onSelect={() => setSelectedId(idea.id)}
                    onToggleStar={() => toggleStar(idea.id)}
                  />
                ))}
                {filtered.length === 0 && (
                  <p className="text-zinc-500 text-sm text-center py-8">
                    No ideas match this filter.
                  </p>
                )}
              </div>
            </aside>

            <section className="lg:col-span-8 xl:col-span-9 rounded-xl border border-[var(--color-border)] bg-[var(--color-panel)] p-5 lg:p-6 overflow-hidden min-h-0 flex flex-col">
              {selected ? (
                <IdeaDetail
                  idea={selected}
                  interaction={get(selected.id)}
                  onToggleStar={() => toggleStar(selected.id)}
                  onSetStatus={(s) => setStatus(selected.id, s)}
                  onSetNotes={(n) => setNotes(selected.id, n)}
                />
              ) : (
                <p className="text-zinc-500">Select an idea to view details.</p>
              )}
            </section>
          </div>
        )}
      </main>
    </div>
  );
}

function EmptyState({ message }: { message?: string }) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel)] p-12 text-center max-w-lg mx-auto mt-12">
      <div className="text-4xl mb-4">🔍</div>
      <h2 className="text-xl font-semibold text-white mb-2">No ideas yet</h2>
      <p className="text-zinc-400 text-sm mb-6">
        {message ??
          "Start the pipeline. Agents will research the framework, collect Montreal startup ideas, and rank them."}
      </p>
      <div className="space-y-2 text-left font-mono text-sm bg-zinc-900 rounded-lg p-4">
        <p className="text-emerald-400">npm run pipeline:framework</p>
        <p className="text-emerald-400">npm run pipeline:collect</p>
        <p className="text-emerald-400">npm run pipeline:rank</p>
        <p className="text-zinc-600 pt-2"># or all at once:</p>
        <p className="text-emerald-400">npm run pipeline:all</p>
      </div>
    </div>
  );
}
