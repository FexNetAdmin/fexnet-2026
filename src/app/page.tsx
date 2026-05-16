import Link from "next/link";
import { ArrowRight, Stethoscope, BookOpen, Trophy } from "lucide-react";
import HeroSplit from "@/components/home/HeroSplit";
import SessionCard from "@/components/sessions/SessionCard";
import CategoryCard from "@/components/vault/CategoryCard";
import FACEMSeal from "@/components/vault/FACEMSeal";
import { upcomingSessions } from "@/lib/content/sessions";
import { vaultTopics } from "@/lib/content/workbooks";

const stats = [
  { icon: Stethoscope, value: "8+", label: "Years of Christchurch EM teaching" },
  { icon: BookOpen, value: "700+", label: "Vault questions across 22 modules" },
  { icon: Trophy, value: "2026", label: "ACEM curriculum edition, verified" },
];

export default function HomePage() {
  const previewTopics = vaultTopics.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <HeroSplit />

      {/* Stats strip */}
      <section className="bg-slate-900 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 mb-1">
                  <Icon className="w-5 h-5 text-teal-400" strokeWidth={1.75} />
                </div>
                <dt className="text-3xl font-extrabold text-white">{value}</dt>
                <dd className="text-sm text-slate-400">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Upcoming sessions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Upcoming Sessions</h2>
            <p className="text-slate-500 text-sm mt-1">
              Free, open-access · Christchurch Hospital ED · Every Wednesday
            </p>
          </div>
          <Link
            href="/sessions"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-teal-600 hover:text-teal-800 transition-colors"
          >
            All sessions
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {upcomingSessions.map((session) => (
            <SessionCard key={session.slug} session={session} />
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/sessions"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-600"
          >
            View all sessions <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Vault preview */}
      <section className="bg-[#0a1628] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <FACEMSeal size="sm" className="mb-3 border-amber-400/50 bg-amber-900/30 text-amber-200" />
              <h2 className="text-2xl font-bold text-white">2026 Vault — Topic Modules</h2>
              <p className="text-slate-400 text-sm mt-1">
                22 interactive modules · Unlock all for $65 NZD
              </p>
            </div>
            <Link
              href="/vault"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 hover:text-amber-200 transition-colors"
            >
              View all modules
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {previewTopics.map((topic) => (
              <CategoryCard key={topic.slug} topic={topic} isUnlocked={false} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/vault"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-[#0f2744] font-bold text-sm hover:bg-amber-400 transition-colors shadow-lg"
            >
              Unlock All 22 Modules — $65 NZD
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="mt-3 text-xs text-slate-500">
              Early access pricing · Rises after 1 July 2026
            </p>
          </div>
        </div>
      </section>

      {/* Trust / about strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-teal-50 border border-teal-100 rounded-2xl p-8 lg:p-12 text-center">
          <FACEMSeal size="lg" className="mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-900 mt-2 mb-3">
            Human-in-the-Loop. Senior FACEM verified.
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
            Every question and explanation in the 2026 Vault has been reviewed by a
            practising Fellow of the Australasian College for Emergency Medicine
            (FACEM). Content reflects NZ and Australian drug formularies, Māori
            health equity obligations, and the 2026 ACEM Fellowship curriculum.
            This is not AI-generated content. It is a curated, peer-reviewed resource.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition-colors"
            >
              About FEXnet
            </Link>
            <Link
              href="/sessions"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-teal-200 bg-white text-teal-700 text-sm font-medium hover:bg-teal-50 transition-colors"
            >
              Try a free session first
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
