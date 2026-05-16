"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, Lock, CheckCircle2, XCircle, RotateCcw, BookOpen } from "lucide-react";
import { checkVaultAccess } from "@/lib/vault/auth";
import { getQuestionsForTopic } from "@/lib/vault/questions";
import FACEMSeal from "@/components/vault/FACEMSeal";
import type { VaultTopic } from "@/types";

interface Props {
  topic: VaultTopic;
}

type AnswerState = { selected: number | null; revealed: boolean };

export default function VaultModuleClient({ topic }: Props) {
  const [access, setAccess] = useState<"checking" | "granted" | "denied">("checking");
  const [answers, setAnswers] = useState<Record<string, AnswerState>>({});
  const [currentQ, setCurrentQ] = useState(0);

  const questions = useMemo(() => getQuestionsForTopic(topic.slug), [topic.slug]);

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

  const hasQuestions = questions.length > 0;
  const question = hasQuestions ? questions[currentQ] : null;
  const state = question ? (answers[question.id] ?? { selected: null, revealed: false }) : { selected: null, revealed: false };
  const isCorrect = state.selected === question?.correct;
  const total = questions.length;

  function select(idx: number) {
    if (!question || state.revealed) return;
    setAnswers((prev) => ({
      ...prev,
      [question.id]: { selected: idx, revealed: false },
    }));
  }

  function reveal() {
    if (!question) return;
    setAnswers((prev) => ({
      ...prev,
      [question.id]: { ...state, revealed: true },
    }));
  }

  function reset() {
    setAnswers({});
    setCurrentQ(0);
  }

  if (!hasQuestions) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/vault" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-teal-700 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Vault
        </Link>
        <div className="text-center py-20">
          <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-4" />
          <h2 className="text-lg font-bold text-slate-900 mb-2">{topic.title}</h2>
          <p className="text-slate-500 text-sm">Questions for this module are being finalised and will be available shortly.</p>
        </div>
      </div>
    );
  }

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

      {/* Progress */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-medium text-slate-500">
          Question {currentQ + 1} of {total}
        </span>
        <div className="flex items-center gap-2">
          <div className="h-2 w-48 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-teal-500 rounded-full transition-all"
              style={{ width: `${((currentQ + 1) / total) * 100}%` }}
            />
          </div>
          <button
            onClick={reset}
            className="p-1.5 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            title="Restart"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Question card */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 mb-6">
        <p className="text-base font-medium text-slate-900 leading-relaxed mb-6">
          {question!.stem}
        </p>

        <div className="space-y-3">
          {question!.options.map((option, idx) => {
            let cls =
              "w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-colors";

            if (!state.revealed) {
              cls +=
                state.selected === idx
                  ? " border-teal-400 bg-teal-50 text-teal-800"
                  : " border-slate-200 bg-slate-50 text-slate-700 hover:border-teal-300 hover:bg-teal-50/50";
            } else {
              if (idx === question!.correct) {
                cls += " border-green-400 bg-green-50 text-green-800";
              } else if (state.selected === idx) {
                cls += " border-red-400 bg-red-50 text-red-800";
              } else {
                cls += " border-slate-100 bg-slate-50 text-slate-400";
              }
            }

            return (
              <button key={idx} className={cls} onClick={() => select(idx)}>
                <span className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs font-bold">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  {option}
                  {state.revealed && idx === question!.correct && (
                    <CheckCircle2 className="ml-auto w-4 h-4 text-green-600" />
                  )}
                  {state.revealed && state.selected === idx && idx !== question!.correct && (
                    <XCircle className="ml-auto w-4 h-4 text-red-500" />
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* Action row */}
        <div className="mt-5 flex items-center gap-3">
          {!state.revealed && state.selected !== null && (
            <button
              onClick={reveal}
              className="px-4 py-2 rounded-lg bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition-colors"
            >
              Reveal answer
            </button>
          )}
          {state.revealed && currentQ < total - 1 && (
            <button
              onClick={() => setCurrentQ((q) => q + 1)}
              className="px-4 py-2 rounded-lg bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition-colors"
            >
              Next question →
            </button>
          )}
          {state.revealed && currentQ === total - 1 && (
            <button
              onClick={reset}
              className="px-4 py-2 rounded-lg bg-amber-500 text-[#0f2744] text-sm font-bold hover:bg-amber-400 transition-colors"
            >
              Restart module
            </button>
          )}
        </div>
      </div>

      {/* Explanation */}
      {state.revealed && (
        <div
          className={`p-5 rounded-xl border text-sm leading-relaxed ${
            isCorrect
              ? "bg-green-50 border-green-200 text-green-900"
              : "bg-red-50 border-red-200 text-red-900"
          }`}
        >
          <p className="font-semibold mb-1">{isCorrect ? "Correct." : "Incorrect."}</p>
          <p>{question!.explanation}</p>
          {question!.reference && (
            <p className="mt-2 text-xs opacity-70">Ref: {question!.reference}</p>
          )}
        </div>
      )}

      {/* FACEM note */}
      <p className="mt-8 text-xs text-slate-400 text-center">
        Content verified by practising FACEMs · Reflects NZ/AU drug formularies and 2026 ACEM curriculum
      </p>
    </div>
  );
}
