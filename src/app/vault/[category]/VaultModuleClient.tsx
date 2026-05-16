"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";
import { checkVaultAccess } from "@/lib/vault/auth";
import { getQuestionsForTopic } from "@/lib/vault/questions";
import { getSAQsForTopic } from "@/lib/vault/saqs";
import FACEMSeal from "@/components/vault/FACEMSeal";
import SCQQuiz from "@/components/vault/SCQQuiz";
import SAQViewer from "@/components/vault/SAQViewer";
import type { VaultTopic } from "@/types";

interface Props {
  topic: VaultTopic;
}

type Tab = "mcq" | "saq";

export default function VaultModuleClient({ topic }: Props) {
  const [access, setAccess] = useState<"checking" | "granted" | "denied">("checking");
  const [tab, setTab] = useState<Tab>("mcq");

  const questions = useMemo(() => getQuestionsForTopic(topic.slug), [topic.slug]);
  const saqs = useMemo(() => getSAQsForTopic(topic.slug), [topic.slug]);

  useEffect(() => {
    const { isUnlocked } = checkVaultAccess();
    setAccess(isUnlocked ? "granted" : "denied");
  }, []);

  if (access === "checking") return null;

  if (access === "denied") {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-sm">
          <Lock className="w-10 h-10 text-amber-400 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-900 mb-2">Vault access required</h2>
          <p className="text-slate-500 text-sm mb-6">
            This module is part of the 2026 Revision Vault. Unlock all 22 modules for $65 NZD.
          </p>
          <Link
            href="/vault"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 text-[#0f2744] text-sm font-bold hover:bg-amber-400 transition-colors"
          >
            Enter access code
          </Link>
        </div>
      </div>
    );
  }

  const hasSAQs = saqs.length > 0;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back */}
      <Link
        href="/vault"
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-teal-700 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Vault
      </Link>

      {/* Header */}
      <div className="mb-8">
        <FACEMSeal size="sm" className="mb-3" />
        <h1 className="text-2xl font-extrabold text-slate-900 mb-1">{topic.title}</h1>
        <p className="text-slate-500 text-sm">{topic.description}</p>
      </div>

      {/* Tab bar */}
      <div className="flex gap-1 p-1 bg-slate-100 rounded-xl mb-8 w-fit">
        <button
          onClick={() => setTab("mcq")}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
            tab === "mcq"
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          MCQ Practice
          {questions.length > 0 && (
            <span className="ml-2 text-xs text-slate-400">{questions.length}q</span>
          )}
        </button>
        <button
          onClick={() => setTab("saq")}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
            tab === "saq"
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          SAQ Practice
          {hasSAQs && (
            <span className="ml-2 text-xs text-slate-400">{saqs.length}q</span>
          )}
        </button>
      </div>

      {/* Content */}
      {tab === "mcq" ? (
        <SCQQuiz questions={questions} />
      ) : (
        <SAQViewer saqs={saqs} />
      )}

      {/* Footer note */}
      <p className="mt-10 text-xs text-slate-400 text-center">
        Content verified by practising FACEMs · Reflects NZ/AU drug formularies and 2026 ACEM curriculum
      </p>
    </div>
  );
}
