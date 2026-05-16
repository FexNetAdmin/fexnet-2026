import type { Session } from "@/types";

export const sessions: Session[] = [
  {
    slug: "toxicology-tca-overdose-2026-05",
    title: "TCA Overdose: Recognition & Resuscitation",
    date: "2026-05-21",
    presenter: "Dr. Sarah Chen, FACEM",
    topic: "Toxicology",
    description:
      "Sodium channel blockade physiology, QRS widening interpretation, sodium bicarb dosing in NZ context, and MDAC timing. Case-based with real ECGs.",
    tags: ["Toxicology", "ECG", "Resuscitation", "NZ Formulary"],
  },
  {
    slug: "paediatric-fever-workup-2026-05",
    title: "The Febrile Child: Risk Stratification in 2026",
    date: "2026-05-28",
    presenter: "Dr. James Ngata, FACEM",
    topic: "Paediatrics",
    description:
      "Updated NICE/PREDICT guidelines, lumbar puncture thresholds, antipyretic equivalence, and Māori health equity in febrile illness recognition.",
    tags: ["Paediatrics", "Fever", "Māori Health", "Risk Stratification"],
  },
  {
    slug: "aortic-dissection-imaging-2026-06",
    title: "Aortic Dissection: Not Missing the Tear",
    date: "2026-06-04",
    presenter: "Dr. Aroha Williams, FACEM",
    topic: "Cardiology",
    description:
      "Stanford A vs B, d-dimer in low-risk presentations, CTA protocols at CDHB, and surgical consultation thresholds for NZ centres.",
    tags: ["Cardiology", "Imaging", "Vascular", "CDHB"],
  },
  {
    slug: "head-injury-ct-rules-2026-06",
    title: "Head CT Rules: CCHR, NOC & the NEXUS Gap",
    date: "2026-06-11",
    presenter: "Dr. Mark Thompson, FACEM",
    topic: "Trauma",
    description:
      "Validation evidence for Canadian CT Head Rule vs New Orleans Criteria, paediatric application, anticoagulant-associated injury decision-making.",
    tags: ["Trauma", "Neuro", "Imaging", "Clinical Decision Rules"],
  },
  {
    slug: "sepsis-bundle-nz-2026-06",
    title: "Sepsis Hour-1 Bundle: NZ ICU Interface",
    date: "2026-06-18",
    presenter: "Dr. Leilani Taufa, FACEM",
    topic: "Critical Care",
    description:
      "Surviving Sepsis 2024 updates, antibiotic stewardship in Australasia, lactate-guided fluid resuscitation, and ICU escalation triggers.",
    tags: ["Sepsis", "Critical Care", "Antibiotics", "ANZICS"],
  },
  {
    slug: "renal-colic-alternatives-2026-06",
    title: "Renal Colic: Beyond Morphine",
    date: "2026-06-25",
    presenter: "Dr. Ben Park, FACEM",
    topic: "Renal / Urology",
    description:
      "IV ketorolac vs IV paracetamol vs intranasal fentanyl, alpha-blocker evidence update, urology admission criteria at NZ district hospitals.",
    tags: ["Renal", "Analgesia", "NZ Formulary", "Urology"],
  },
];

export const upcomingSessions = sessions
  .filter((s) => new Date(s.date) >= new Date("2026-05-16"))
  .slice(0, 4);

export function getSessionBySlug(slug: string): Session | undefined {
  return sessions.find((s) => s.slug === slug);
}
