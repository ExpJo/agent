import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BriefSection {
  id: string;
  title: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function extractSections(markdown: string): BriefSection[] {
  const sections: BriefSection[] = [];
  for (const line of markdown.split("\n")) {
    const match = /^## (.+)$/.exec(line.trim());
    if (match) {
      const title = match[1].replace(/\s*\[.*?\]\s*$/, "").trim();
      sections.push({ id: slugify(title), title });
    }
  }
  return sections;
}

interface BriefReaderProps {
  markdown: string;
}

export function BriefReader({ markdown }: BriefReaderProps) {
  const sections = useMemo(() => extractSections(markdown), [markdown]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex gap-6 h-full min-h-0">
      {sections.length > 0 && (
        <nav className="hidden xl:block w-44 flex-shrink-0">
          <p className="text-xs font-medium text-zinc-500 uppercase tracking-wide mb-3 sticky top-0">
            Sections
          </p>
          <ul className="space-y-1 sticky top-6">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(s.id)}
                  className="text-left text-xs text-zinc-400 hover:text-emerald-400 leading-snug py-1 w-full transition-colors"
                >
                  {s.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <article className="flex-1 overflow-y-auto min-h-0 pr-2 brief-reader">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <h1 className="brief-h1">{children}</h1>
            ),
            h2: ({ children }) => {
              const text = String(children);
              const id = slugify(text.replace(/\[.*?\]/g, "").trim());
              return (
                <h2 id={id} className="brief-h2">
                  {children}
                </h2>
              );
            },
            h3: ({ children }) => <h3 className="brief-h3">{children}</h3>,
            p: ({ children }) => <p className="brief-p">{children}</p>,
            ul: ({ children }) => <ul className="brief-ul">{children}</ul>,
            ol: ({ children }) => <ol className="brief-ol">{children}</ol>,
            li: ({ children }) => <li className="brief-li">{children}</li>,
            hr: () => <hr className="brief-hr" />,
            strong: ({ children }) => <strong className="text-zinc-100">{children}</strong>,
            table: ({ children }) => (
              <div className="brief-table-wrap">
                <table className="brief-table">{children}</table>
              </div>
            ),
            thead: ({ children }) => <thead className="brief-thead">{children}</thead>,
            tbody: ({ children }) => <tbody>{children}</tbody>,
            tr: ({ children }) => <tr className="brief-tr">{children}</tr>,
            th: ({ children }) => <th className="brief-th">{children}</th>,
            td: ({ children }) => <td className="brief-td">{children}</td>,
            pre: ({ children }) => <pre className="brief-pre">{children}</pre>,
            code: ({ className, children }) => {
              const isBlock = className?.includes("language-");
              if (isBlock) {
                return <code className={className}>{children}</code>;
              }
              return <code className="brief-code">{children}</code>;
            },
            a: ({ href, children }) => (
              <a href={href} target="_blank" rel="noopener noreferrer" className="brief-link">
                {children}
              </a>
            ),
          }}
        >
          {markdown}
        </ReactMarkdown>
      </article>
    </div>
  );
}
