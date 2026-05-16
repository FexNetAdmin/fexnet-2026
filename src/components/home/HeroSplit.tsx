import Link from "next/link";
import {
  CalendarDays,
  Users,
  BookOpenCheck,
  Lock,
  ArrowRight,
  Globe,
} from "lucide-react";
import FACEMSeal from "@/components/vault/FACEMSeal";

function FreeTierPanel() {
  return (
    <div className="flex flex-col h-full bg-white rounded-2xl border border-teal-100 shadow-sm p-8 lg:p-10">
      {/* Badge */}
      <span className="self-start inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-teal-50 text-teal-700 border border-teal-200 mb-6">
        <Globe className="w-3.5 h-3.5" />
        Always Free
      </span>

      <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 leading-tight mb-3">
        Weekly Teaching Sessions
      </h2>
      <p className="text-slate-500 text-base leading-relaxed mb-8">
        Senior FACEM-led emergency medicine tutorials from Christchurch Hospital.
        Open access, no login required. Covering high-yield ACEM exam topics every
        Wednesday evening.
      </p>

      {/* Feature list */}
      <ul className="space-y-3 mb-8">
        {[
          { icon: CalendarDays, text: "Every Wednesday, 6:30 pm NZST" },
          { icon: Users, text: "Christchurch Hospital ED teaching room" },
          { icon: BookOpenCheck, text: "Slides and resources published after each session" },
        ].map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-start gap-3 text-sm text-slate-600">
            <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center">
              <Icon className="w-3 h-3 text-teal-600" strokeWidth={2.5} />
            </div>
            {text}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <Link
          href="/sessions"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition-colors shadow-sm"
        >
          View All Sessions
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

function PremiumTierPanel() {
  return (
    <div className="flex flex-col h-full bg-[#0f2744] rounded-2xl border border-[#1e3a5f] shadow-lg p-8 lg:p-10">
      {/* Badge */}
      <div className="mb-6">
        <FACEMSeal size="sm" className="border-amber-400/50 bg-amber-900/30 text-amber-200" />
      </div>

      <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight mb-3">
        2026 Revision Vault
      </h2>
      <p className="text-slate-300 text-base leading-relaxed mb-8">
        22 interactive ACEM exam modules built directly from the 2026 FEXnet
        Workbooks. NZ/AU drug protocols, Māori health integration, and
        question banks you can&apos;t download or screenshot.
      </p>

      {/* Feature list */}
      <ul className="space-y-3 mb-8">
        {[
          "22 topic modules · 700+ questions",
          "Interactive Q&A — not a PDF download",
          "NZ/AU-specific drug protocols and guidelines",
          "Māori health equity content integrated throughout",
          "12 months of access from purchase",
        ].map((text) => (
          <li key={text} className="flex items-start gap-3 text-sm text-slate-300">
            <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            </div>
            {text}
          </li>
        ))}
      </ul>

      {/* Price */}
      <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-white">$65</span>
          <span className="text-slate-400 text-sm">NZD · one-time · 12-month access</span>
        </div>
        <p className="text-xs text-slate-500 mt-1">Early access pricing · rises after 1 July 2026</p>
      </div>

      <div className="mt-auto flex flex-col sm:flex-row gap-3">
        <Link
          href="/vault"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 text-[#0f2744] text-sm font-bold hover:bg-amber-400 transition-colors shadow-md"
        >
          <Lock className="w-4 h-4" />
          Access the Vault
        </Link>
        <Link
          href="/vault"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-transparent text-slate-300 text-sm font-medium border border-white/20 hover:bg-white/5 transition-colors"
        >
          Preview topics
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export default function HeroSplit() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      {/* Page heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          ACEM Fellowship Revision,{" "}
          <span className="text-teal-600">done right.</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Free weekly teaching from Christchurch Hospital. Premium interactive
          modules for candidates serious about the 2026 exam.
        </p>
      </div>

      {/* Split panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FreeTierPanel />
        <PremiumTierPanel />
      </div>
    </section>
  );
}
