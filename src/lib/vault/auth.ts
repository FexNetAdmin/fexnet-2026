"use client";

const STORAGE_KEY = "fexnet_vault_token";
const VALID_TOKENS = new Set([
  // SHA-256 hashes of valid access codes — never store plaintext codes here.
  // Populated at build time from environment or managed separately.
  // Example placeholder — replace with real hashed tokens before launch.
  "8d90310cf261ba8e335ff57ddb0b26f7833ba6aa3cfc6eecdb9b267af8bd1ce6",
]);
const TOKEN_TTL_MS = 365 * 24 * 60 * 60 * 1000; // 1 year

async function sha256(input: string): Promise<string> {
  const encoded = new TextEncoder().encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function attemptUnlock(code: string): Promise<boolean> {
  const hash = await sha256(code.trim().toLowerCase());
  if (!VALID_TOKENS.has(hash)) return false;

  const payload = { hash, expiresAt: Date.now() + TOKEN_TTL_MS };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  return true;
}

export function checkVaultAccess(): { isUnlocked: boolean; expiresAt?: number } {
  if (typeof window === "undefined") return { isUnlocked: false };

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { isUnlocked: false };

    const { hash, expiresAt } = JSON.parse(raw) as {
      hash: string;
      expiresAt: number;
    };
    if (Date.now() > expiresAt) {
      localStorage.removeItem(STORAGE_KEY);
      return { isUnlocked: false };
    }
    if (!VALID_TOKENS.has(hash)) return { isUnlocked: false };

    return { isUnlocked: true, expiresAt };
  } catch {
    return { isUnlocked: false };
  }
}

export function revokeVaultAccess(): void {
  localStorage.removeItem(STORAGE_KEY);
}
