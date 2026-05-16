import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, MapPin, BookOpen, Heart } from "lucide-react";
import FACEMSeal from "@/components/vault/FACEMSeal";

export const metadata: Metadata = {
  title: "About FEXnet",
  description:
    "Senior FACEM-led emergency medicine education based in Christchurch, NZ. Our mission, our people, and our commitment to Māori health equity.",
};

const principles = [
  {
    icon: ShieldCheck,
    title: "Human-in-the-Loop verified",
    body: "Every piece of content in the 2026 Vault has been written and reviewed by a practising FACEM. We do not publish AI-generated clinical content. Where AI tools assist with formatting or structure, a FACEM verifies the clinical accuracy before publication.",
  },
  {
    icon: BookOpen,
    title: "Australasian context, always",
    body: "NZ and Australian practice diverges from UK/US guidelines in ways that matter for the exam and for patients. We use PHARMAC-funded drugs, CDHB/WDHB protocols, ANZICS guidelines, and ACC-aware medicolegal framing throughout.",
  },
  {
    icon: Heart,
    title: "Māori health equity integrated",
    body: "Te Tiriti o Waitangi obligations shape NZ emergency medicine practice. Our content acknowledges equity gaps in ED presentations, culturally safe history-taking, and obligations under the Pae Ora (Healthy Futures) Act 2022.",
  },
  {
    icon: MapPin,
    title: "Free teaching from Christchurch",
    body: "The weekly session programme has run from Christchurch Hospital since 2018. It is deliberately free and open-access. The 2026 Vault funds its continuation — premium revenue directly supports the free teaching mission.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <FACEMSeal size="lg" className="mx-auto mb-5" />
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
          About FEXnet
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
          FEXnet is a senior FACEM-led resource for Australasian emergency medicine education.
          We run free weekly teaching from Christchurch Hospital ED and maintain the 2026
          Revision Vault for Fellowship candidates.
        </p>
      </div>

      {/* Mission statement */}
      <div className="bg-[#0f2744] rounded-2xl p-8 mb-12 text-center">
        <p className="text-lg font-semibold text-white leading-relaxed">
          &ldquo;The mission is to make senior FACEM-level thinking accessible to every registrar
          preparing for the Fellowship exam — regardless of whether they train in Auckland,
          Christchurch, Dunedin, or a rural base hospital.&rdquo;
        </p>
        <p className="mt-4 text-slate-400 text-sm">— FEXnet founding FACEM, 2018</p>
      </div>

      {/* Principles grid */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Our principles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {principles.map(({ icon: Icon, title, body }) => (
            <div key={title} className="p-6 rounded-xl border border-slate-200 bg-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-teal-600" strokeWidth={1.75} />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">{title}</h3>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ACEM curriculum alignment */}
      <section className="mb-12 p-6 rounded-xl bg-slate-50 border border-slate-100">
        <h2 className="text-lg font-bold text-slate-900 mb-3">ACEM Curriculum 2026</h2>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          All 2026 Vault content is mapped to the current ACEM Fellowship curriculum. Module
          tags include the relevant curriculum section references (e.g., 2.1 — Cardiovascular
          Emergencies). Content is updated when ACEM revises the curriculum and when major
          Australasian guideline bodies (ANZICS, NICE-NZ, NZ Formulary, MEDSAFE) publish
          significant updates.
        </p>
        <a
          href="https://acem.org.au/Fellowship"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-teal-600 hover:underline"
        >
          ACEM Fellowship information ↗
        </a>
      </section>

      {/* Contact / CTA */}
      <section className="text-center">
        <h2 className="text-lg font-bold text-slate-900 mb-2">Get in touch</h2>
        <p className="text-slate-500 text-sm mb-6">
          Questions about the Vault, the weekly sessions, or Australasian EM education more
          broadly — we&apos;d like to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="mailto:teaching@fexnet.org"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition-colors"
          >
            teaching@fexnet.org
          </a>
          <Link
            href="/sessions"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors"
          >
            View free sessions
          </Link>
        </div>
      </section>
    </div>
  );
}
