export interface RankedIdea {
  id: string;
  rank: number;
  title: string;
  tagline: string;
  score: number;
  scoreBreakdown?: Record<string, number>;
  category?: string;
  buildDays?: number;
  revenuePotentialCAD?: { low: number; high: number };
  briefPath?: string;
  status?: string;
}

export interface RankedIndex {
  generatedAt?: string;
  frameworkVersion?: string;
  ideas: RankedIdea[];
}

export type UserStatus = "new" | "interested" | "maybe" | "dismissed";

export interface IdeaInteraction {
  starred: boolean;
  status: UserStatus;
  notes: string;
  updatedAt: string;
}

export type Interactions = Record<string, IdeaInteraction>;

export const STATUS_LABELS: Record<UserStatus, string> = {
  new: "New",
  interested: "Interested",
  maybe: "Maybe",
  dismissed: "Dismissed",
};

export const STATUS_COLORS: Record<UserStatus, string> = {
  new: "bg-zinc-700 text-zinc-300",
  interested: "bg-emerald-900/60 text-emerald-300",
  maybe: "bg-amber-900/60 text-amber-300",
  dismissed: "bg-red-900/40 text-red-300",
};
