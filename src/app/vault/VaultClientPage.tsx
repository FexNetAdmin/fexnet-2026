"use client";

import { useState, useCallback } from "react";
import AccessGate from "@/components/vault/AccessGate";
import CategoryCard from "@/components/vault/CategoryCard";
import FACEMSeal from "@/components/vault/FACEMSeal";
import { vaultTopics } from "@/lib/content/workbooks";
import { revokeVaultAccess } from "@/lib/vault/auth";
import { LogOut, Search } from "lucide-react";

export default function VaultClientPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [query, setQuery] = useState("");

  const handleUnlocked = useCallback(() => setUnlocked(true), []);

  function handleRevoke() {
    revokeVaultAccess();
    setUnlocked(false);
  }

  const filtered = vaultTopics.filter((t) => {
    const q = query.toLowerCase();
    return (
      t.title.toLowerCase().includes(q) ||
      t.tags.some((tag) => tag.toLowerCase().includes(q)) ||
      t.description.toLowerCase().includes(q)
    );
  });

  if (!unlocked) {
    return <AccessGate onUnlocked={handleUnlocked} />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <FACEMSeal size="sm" className="mb-3" />
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            2026 Revision Vault
          </h1>
          <p className="text-slate-500 mt-1 text-sm">
            {vaultTopics.length} modules · 700+ questions · NZ/AU verified
          </p>
        </div>
        <button
          onClick={handleRevoke}
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-700 transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          Sign out
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-8 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search modules, topics, tags…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400 transition"
        />
      </div>

      {/* Topic grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((topic) => (
            <CategoryCard key={topic.slug} topic={topic} isUnlocked={true} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-slate-400">
          <p className="text-lg font-medium">No modules match &ldquo;{query}&rdquo;</p>
          <button
            onClick={() => setQuery("")}
            className="mt-3 text-sm text-teal-600 hover:underline"
          >
            Clear search
          </button>
        </div>
      )}

      {/* Footer note */}
      <div className="mt-12 p-5 rounded-xl bg-amber-50 border border-amber-100 text-sm text-amber-800">
        <strong>Content protection notice:</strong> These modules are for your personal exam
        preparation only. Screenshots, redistribution, and bulk data extraction are prohibited.
        Content is verified by practising FACEMs and reflects NZ/AU clinical guidelines.
      </div>
    </div>
  );
}
