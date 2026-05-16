"use client";

import { useState, useEffect } from "react";
import { Lock, Unlock, AlertCircle, Loader2 } from "lucide-react";
import { attemptUnlock, checkVaultAccess } from "@/lib/vault/auth";

interface AccessGateProps {
  onUnlocked: () => void;
}

export default function AccessGate({ onUnlocked }: AccessGateProps) {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<"idle" | "checking" | "error">("idle");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const { isUnlocked } = checkVaultAccess();
    if (isUnlocked) onUnlocked();
  }, [onUnlocked]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!code.trim()) return;

    setStatus("checking");
    const success = await attemptUnlock(code);

    if (success) {
      onUnlocked();
    } else {
      setStatus("error");
    }
  }

  if (!mounted) return null;

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-[#0f2744] rounded-2xl border border-[#1e3a5f] shadow-xl p-8 text-center">
          {/* Icon */}
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/30 mx-auto mb-6">
            <Lock className="w-7 h-7 text-amber-400" strokeWidth={1.75} />
          </div>

          <h2 className="text-xl font-bold text-white mb-2">2026 Revision Vault</h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            Enter your access code to unlock all 22 modules and 700+ exam questions.
            Codes are issued after purchase — one-time, 12-month access.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="access-code" className="sr-only">
                Access code
              </label>
              <input
                id="access-code"
                type="text"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="Enter your access code"
                autoComplete="off"
                spellCheck={false}
                className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-white placeholder-slate-500 text-sm font-mono tracking-wider focus:outline-none focus:ring-2 transition-colors ${
                  status === "error"
                    ? "border-red-500/60 focus:ring-red-500/40"
                    : "border-white/20 focus:ring-amber-500/40 focus:border-amber-500/60"
                }`}
              />
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                Invalid access code. Check your purchase confirmation email.
              </div>
            )}

            <button
              type="submit"
              disabled={!code.trim() || status === "checking"}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 text-[#0f2744] font-bold text-sm hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {status === "checking" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Checking…
                </>
              ) : (
                <>
                  <Unlock className="w-4 h-4" />
                  Unlock Vault
                </>
              )}
            </button>
          </form>

          <p className="mt-6 text-xs text-slate-500">
            Don&apos;t have a code?{" "}
            <a
              href="mailto:teaching@fexnet.org"
              className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
            >
              Contact us
            </a>{" "}
            or{" "}
            <a
              href="mailto:teaching@fexnet.org?subject=Vault Access Purchase"
              className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
            >
              purchase access ($65 NZD)
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
