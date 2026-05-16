import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CalendarDays, User, ArrowLeft, Tag, ExternalLink } from "lucide-react";
import { sessions, getSessionBySlug } from "@/lib/content/sessions";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return sessions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const session = getSessionBySlug(slug);
  if (!session) return {};
  return {
    title: session.title,
    description: session.description,
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-NZ", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function SessionPage({ params }: Props) {
  const { slug } = await params;
  const session = getSessionBySlug(slug);
  if (!session) notFound();

  const isUpcoming = new Date(session.date) >= new Date("2026-05-16");

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back */}
      <Link
        href="/sessions"
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-teal-700 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        All sessions
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100">
            {session.topic}
          </span>
          {isUpcoming && (
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
              Upcoming
            </span>
          )}
        </div>

        <h1 className="text-3xl font-extrabold text-slate-900 leading-tight mb-4">
          {session.title}
        </h1>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
          <span className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4" />
            {formatDate(session.date)} · 6:30 pm NZST
          </span>
          <span className="flex items-center gap-2">
            <User className="w-4 h-4" />
            {session.presenter}
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="prose prose-slate max-w-none mb-8">
        <p className="text-base text-slate-600 leading-relaxed">{session.description}</p>
      </div>

      {/* Venue */}
      <div className="p-5 rounded-xl bg-teal-50 border border-teal-100 mb-8">
        <h2 className="text-sm font-semibold text-teal-800 mb-2">Location</h2>
        <p className="text-sm text-teal-700">
          Christchurch Hospital Emergency Department Teaching Room
          <br />
          2 Riccarton Ave, Christchurch Central City 8011
          <br />
          <span className="text-teal-600">Open access — no registration required</span>
        </p>
      </div>

      {/* Tags */}
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
          <Tag className="w-3.5 h-3.5" />
          Topics covered
        </h2>
        <div className="flex flex-wrap gap-2">
          {session.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Resource link */}
      {session.resourceUrl && (
        <a
          href={session.resourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition-colors mb-8"
        >
          <ExternalLink className="w-4 h-4" />
          Session slides &amp; resources
        </a>
      )}

      {/* Vault upsell */}
      <div className="p-6 rounded-xl bg-[#0f2744] text-white">
        <h3 className="font-bold text-base mb-2">Want more than weekly sessions?</h3>
        <p className="text-slate-300 text-sm mb-4">
          The 2026 Revision Vault gives you 700+ interactive questions across 22 ACEM modules —
          NZ/AU drug protocols, verified by practising FACEMs.
        </p>
        <Link
          href="/vault"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 text-[#0f2744] text-sm font-bold hover:bg-amber-400 transition-colors"
        >
          Explore the Vault — $65 NZD
        </Link>
      </div>
    </div>
  );
}
