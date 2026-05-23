import { useState, useEffect, useCallback } from "react";
import type { Interactions, IdeaInteraction, UserStatus } from "../types";

const STORAGE_KEY = "mtl-idea-engine-interactions";

const defaultInteraction = (): IdeaInteraction => ({
  starred: false,
  status: "new",
  notes: "",
  updatedAt: new Date().toISOString(),
});

export function useInteractions() {
  const [interactions, setInteractions] = useState<Interactions>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(interactions));
  }, [interactions]);

  const get = useCallback(
    (id: string): IdeaInteraction => interactions[id] ?? defaultInteraction(),
    [interactions],
  );

  const update = useCallback((id: string, patch: Partial<IdeaInteraction>) => {
    setInteractions((prev) => ({
      ...prev,
      [id]: {
        ...(prev[id] ?? defaultInteraction()),
        ...patch,
        updatedAt: new Date().toISOString(),
      },
    }));
  }, []);

  const toggleStar = useCallback(
    (id: string) => {
      const current = get(id);
      update(id, { starred: !current.starred });
    },
    [get, update],
  );

  const setStatus = useCallback(
    (id: string, status: UserStatus) => update(id, { status }),
    [update],
  );

  const setNotes = useCallback(
    (id: string, notes: string) => update(id, { notes }),
    [update],
  );

  return { get, toggleStar, setStatus, setNotes, interactions };
}

export async function fetchRankedIndex() {
  const res = await fetch("/data/ranked/index.json");
  if (!res.ok) throw new Error("Failed to load ranked ideas");
  return res.json();
}

export async function fetchBrief(path: string): Promise<string> {
  const res = await fetch(`/data/ranked/${path}`);
  if (!res.ok) throw new Error(`Failed to load brief: ${path}`);
  return res.text();
}

export async function fetchFrameworkFiles(): Promise<{ name: string; content: string }[]> {
  const manifest = [
    "README.md",
    "methodology.md",
    "evaluation-system.md",
    "data-sources.md",
    "mvp-criteria.md",
  ];
  const results: { name: string; content: string }[] = [];
  for (const name of manifest) {
    try {
      const res = await fetch(`/data/framework/${name}`);
      if (res.ok) {
        results.push({ name, content: await res.text() });
      }
    } catch {
      // file may not exist yet
    }
  }
  return results;
}
