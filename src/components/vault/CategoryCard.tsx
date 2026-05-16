import Link from "next/link";
import { Lock, ArrowRight } from "lucide-react";
import type { VaultTopic } from "@/types";

interface CategoryCardProps {
  topic: VaultTopic;
  isUnlocked?: boolean;
}

export default function CategoryCard({ topic, isUnlocked = false }: CategoryCardProps) {
  return (
    <article
      className={`group relative flex flex-col rounded-xl border shadow-sm p-5 transition-all ${
        isUnlocked
          ? "bg-white border-slate-200 hover:border-amber-300 hover:shadow-md"
          : "bg-[#0f2744]/95 border-[#1e3a5f] hover:border-amber-500/40"
      }`}
    >
      {/* Lock overlay indicator */}
      {!isUnlocked && (
        <div className="absolute top-3 right-3">
          <Lock className="w-3.5 h-3.5 text-amber-400/70" strokeWidth={2} />
        </div>
      )}

      {/* Question count badge */}
      <span
        className={`self-start text-xs font-semibold px-2 py-0.5 rounded-full mb-3 ${
          isUnlocked
            ? "bg-amber-50 text-amber-700 border border-amber-100"
            : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
        }`}
      >
        {topic.questionCount} questions
      </span>

      <h3
        className={`text-sm font-bold leading-snug mb-2 ${
          isUnlocked ? "text-slate-900" : "text-white"
        }`}
      >
        {topic.title}
      </h3>

      <p
        className={`text-xs leading-relaxed mb-4 line-clamp-2 flex-1 ${
          isUnlocked ? "text-slate-500" : "text-slate-400"
        }`}
      >
        {topic.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-4">
        {topic.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className={`text-xs px-1.5 py-0.5 rounded ${
              isUnlocked
                ? "bg-slate-100 text-slate-500"
                : "bg-white/10 text-slate-400"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      {isUnlocked ? (
        <Link
          href={`/vault/${topic.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 hover:text-amber-800 transition-colors"
        >
          Start module
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      ) : (
        <Link
          href="/vault"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-200 transition-colors"
        >
          Unlock to access
          <Lock className="w-3 h-3" />
        </Link>
      )}
    </article>
  );
}
