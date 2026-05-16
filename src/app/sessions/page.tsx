import type { Metadata } from "next";
import { CalendarDays, Globe } from "lucide-react";
import SessionCard from "@/components/sessions/SessionCard";
import { sessions } from "@/lib/content/sessions";

export const metadata: Metadata = {
  title: "Free Teaching Sessions",
  description:
    "Open-access ACEM Fellowship teaching sessions from Christchurch Hospital ED. Senior FACEM-led, every Wednesday.",
};

const allTopics = Array.from(new Set(sessions.map((s) => s.topic))).sort();

export default function SessionsPage() {
  const upcoming = sessions.filter((s) => new Date(s.date) >= new Date("2026-05-16"));
  const past = sessions.filter((s) => new Date(s.date) < new Date("2026-05-16"));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page header */}
      <div className="mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-teal-50 text-teal-700 border border-teal-200 mb-4">
          <Globe className="w-3.5 h-3.5" />
          Always Free · No Login Required
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Teaching Sessions
        </h1>
        <p className="text-slate-500 max-w-2xl">
          Senior FACEM-led emergency medicine tutorials from Christchurch Hospital ED.
          Every Wednesday evening, 6:30 pm NZST. Slides published after each session.
        </p>

        {/* Schedule info strip */}
        <div className="mt-6 flex items-center gap-3 p-4 rounded-xl bg-teal-50 border border-teal-100">
          <CalendarDays className="w-5 h-5 text-teal-600 flex-shrink-0" />
          <div className="text-sm">
            <span className="font-semibold text-teal-800">Next session:</span>{" "}
            <span className="text-teal-700">
              Wednesday 21 May 2026 · TCA Overdose: Recognition &amp; Resuscitation ·
              Christchurch Hospital ED Teaching Room
            </span>
          </div>
        </div>
      </div>

      {/* Upcoming */}
      {upcoming.length > 0 && (
        <section className="mb-14">
          <h2 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
            Upcoming Sessions
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
              {upcoming.length} scheduled
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {upcoming.map((session) => (
              <SessionCard key={session.slug} session={session} />
            ))}
          </div>
        </section>
      )}

      {/* Past sessions */}
      {past.length > 0 && (
        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-5">Past Sessions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {past.map((session) => (
              <SessionCard key={session.slug} session={session} />
            ))}
          </div>
        </section>
      )}

      {/* Topics taxonomy */}
      <div className="mt-14 p-6 rounded-xl bg-slate-50 border border-slate-100">
        <h3 className="text-sm font-semibold text-slate-700 mb-3">Topics covered</h3>
        <div className="flex flex-wrap gap-2">
          {allTopics.map((topic) => (
            <span
              key={topic}
              className="text-xs px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
