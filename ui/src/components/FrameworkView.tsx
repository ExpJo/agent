import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { fetchFrameworkFiles } from "../hooks/useData";

export function FrameworkView() {
  const [files, setFiles] = useState<{ name: string; content: string }[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFrameworkFiles()
      .then((f) => {
        setFiles(f);
        if (f.length > 0) setSelected(f[0].name);
      })
      .finally(() => setLoading(false));
  }, []);

  const current = files.find((f) => f.name === selected);

  if (loading) {
    return <p className="text-zinc-500">Loading framework...</p>;
  }

  if (files.length === 0) {
    return (
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel)] p-8 text-center">
        <h2 className="text-lg font-semibold text-white mb-2">No framework yet</h2>
        <p className="text-zinc-400 text-sm max-w-md mx-auto">
          Run the framework phase first. The agent will research and design the methodology,
          then write it here.
        </p>
        <code className="block mt-4 text-sm font-mono text-emerald-400 bg-zinc-900 rounded-lg px-4 py-2 inline-block">
          npm run pipeline:framework
        </code>
      </div>
    );
  }

  return (
    <div className="flex gap-6 h-full min-h-[60vh]">
      <nav className="w-48 flex-shrink-0 space-y-1">
        {files.map((f) => (
          <button
            key={f.name}
            type="button"
            onClick={() => setSelected(f.name)}
            className={`w-full text-left text-sm px-3 py-2 rounded-lg truncate ${
              selected === f.name
                ? "bg-emerald-950/40 text-emerald-300"
                : "text-zinc-400 hover:bg-zinc-800"
            }`}
          >
            {f.name}
          </button>
        ))}
      </nav>
      <article className="flex-1 overflow-y-auto markdown-body">
        {current && <ReactMarkdown>{current.content}</ReactMarkdown>}
      </article>
    </div>
  );
}
