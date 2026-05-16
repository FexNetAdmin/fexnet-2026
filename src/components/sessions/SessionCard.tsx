import Link from "next/link";
import { CalendarDays, User, ArrowRight } from "lucide-react";
import type { Session } from "@/types";

interface SessionCardProps {
  session: Session;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-NZ", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function SessionCard({ session }: SessionCardProps) {
  const isUpcoming = new Date(session.date) >= new Date();

  return (
    <article className="group flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-200 transition-all p-6">
      {/* Topic pill + upcoming badge */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100">
          {session.topic}
        </span>
        {isUpcoming && (
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
            Upcoming
          </span>
        )}
      </div>

      <h3 className="text-base font-bold text-slate-900 leading-snug mb-2 group-hover:text-teal-700 transition-colors">
        {session.title}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2 flex-1">
        {session.description}
      </p>

      {/* Meta */}
      <div className="space-y-1.5 mb-4">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <CalendarDays className="w-3.5 h-3.5" />
          <span>{formatDate(session.date)}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <User className="w-3.5 h-3.5" />
          <span>{session.presenter}</span>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {session.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-500"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={`/sessions/${session.slug}`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-600 hover:text-teal-800 transition-colors"
      >
        View session
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </article>
  );
}
