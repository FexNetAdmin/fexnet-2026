export type AccessTier = "free" | "premium";

export interface Session {
  slug: string;
  title: string;
  date: string; // ISO date string
  presenter: string;
  topic: string;
  description: string;
  tags: string[];
  resourceUrl?: string;
}

export interface VaultTopic {
  slug: string;
  title: string;
  shortTitle: string;
  questionCount: number;
  tags: string[];
  acem_sections: string[]; // ACEM curriculum section references
  description: string;
}

export interface VaultAccess {
  isUnlocked: boolean;
  expiresAt?: number; // epoch ms
}
