"use client";

import { useState } from "react";
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  BookOpen,
  Trophy,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { Question } from "@/lib/vault/questions";
import MedicalImage from "./MedicalImage";

interface Props {
  questions: Question[];
}

type AnswerState = { selected: number | null; revealed: boolean };
type Phase = "quiz" | "results" | "review";

export default function SCQQuiz({ questions }: Props) {
  const [answers, setAnswers] = useState<Record<string, AnswerState>>({});
  const [currentQ, setCurrentQ] = useState(0);
  const [phase, setPhase] = useState<Phase>("quiz");
  const [reviewQ, setReviewQ] = useState(0);

  if (questions.length === 0) {
    return (
      <div className="text-center py-20">
        <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-4" />
        <p className="text-slate-500 text-sm">
          Questions for this module are being finalised and will be available shortly.
        </p>
      </div>
    );
  }

  function reset() {
    setAnswers({});
    setCurrentQ(0);
    setPhase("quiz");
    setReviewQ(0);
  }

  // ── RESULTS SCREEN ──────────────────────────────────────────────────────────
  if (phase === "results") {
    const correct = questions.filter(
      (q) => answers[q.id]?.selected === q.correct
    ).length;
    const pct = Math.round((correct / questions.length) * 100);
    const colour =
      pct >= 70 ? "text-green-600" : pct >= 50 ? "text-amber-600" : "text-red-600";

    return (
      <div className="max-w-2xl mx-auto">
        {/* Score card */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 mb-6 text-center">
          <Trophy className="w-12 h-12 text-amber-400 mx-auto mb-3" />
          <p className="text-sm text-slate-500 mb-1">Module complete</p>
          <p className={`text-5xl font-extrabold mb-1 ${colour}`}>{pct}%</p>
          <p className="text-slate-500 text-sm">
            {correct} / {questions.length} correct
          </p>
        </div>

        {/* Per-question summary */}
        <div className="space-y-2 mb-6">
          {questions.map((q, i) => {
            const ans = answers[q.id];
            const isCorrect = ans?.selected === q.correct;
            return (
              <button
                key={q.id}
                onClick={() => {
                  setReviewQ(i);
                  setPhase("review");
                }}
                className="w-full flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3 hover:border-teal-300 transition-colors text-left"
              >
                {isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                )}
                <span className="text-sm text-slate-700 line-clamp-1 flex-1">
                  Q{i + 1}. {q.stem}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
              </button>
            );
          })}
        </div>

        <button
          onClick={reset}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-teal-600 text-white text-sm font-bold hover:bg-teal-700 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Restart module
        </button>
      </div>
    );
  }

  // ── REVIEW SCREEN ───────────────────────────────────────────────────────────
  if (phase === "review") {
    const q = questions[reviewQ];
    const ans = answers[q.id];
    const isCorrect = ans?.selected === q.correct;

    return (
      <div className="max-w-2xl mx-auto">
        {/* Nav */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setPhase("results")}
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-teal-700 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Back to results
          </button>
          <span className="text-xs text-slate-400">
            Q{reviewQ + 1} of {questions.length}
          </span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 mb-4">
          <p className="text-base font-medium text-slate-900 leading-relaxed mb-4">
            {q.stem}
          </p>
          {q.image && (
            <MedicalImage image={q.image} className="mb-5" />
          )}
          <div className="space-y-3">
            {q.options.map((opt, idx) => {
              let cls =
                "w-full text-left px-4 py-3 rounded-xl border text-sm font-medium";
              if (idx === q.correct) {
                cls += " border-green-400 bg-green-50 text-green-800";
              } else if (ans?.selected === idx) {
                cls += " border-red-400 bg-red-50 text-red-800";
              } else {
                cls += " border-slate-100 bg-slate-50 text-slate-400";
              }
              return (
                <div key={idx} className={cls}>
                  <span className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs font-bold">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    {opt}
                    {idx === q.correct && (
                      <CheckCircle2 className="ml-auto w-4 h-4 text-green-600" />
                    )}
                    {ans?.selected === idx && idx !== q.correct && (
                      <XCircle className="ml-auto w-4 h-4 text-red-500" />
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={`p-5 rounded-xl border text-sm leading-relaxed mb-6 ${
            isCorrect
              ? "bg-green-50 border-green-200 text-green-900"
              : "bg-red-50 border-red-200 text-red-900"
          }`}
        >
          <p className="font-semibold mb-1">{isCorrect ? "Correct." : "Incorrect."}</p>
          <p>{q.explanation}</p>
          {q.reference && (
            <p className="mt-2 text-xs opacity-70">Ref: {q.reference}</p>
          )}
        </div>

        <div className="flex gap-3">
          <button
            disabled={reviewQ === 0}
            onClick={() => setReviewQ((n) => n - 1)}
            className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-600 hover:bg-slate-50 disabled:opacity-40 transition-colors"
          >
            ← Previous
          </button>
          {reviewQ < questions.length - 1 ? (
            <button
              onClick={() => setReviewQ((n) => n + 1)}
              className="flex-1 py-2.5 rounded-xl bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition-colors"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={() => setPhase("results")}
              className="flex-1 py-2.5 rounded-xl bg-amber-500 text-[#0f2744] text-sm font-bold hover:bg-amber-400 transition-colors"
            >
              Back to results
            </button>
          )}
        </div>
      </div>
    );
  }

  // ── QUIZ SCREEN ─────────────────────────────────────────────────────────────
  const question = questions[currentQ];
  const state = answers[question.id] ?? { selected: null, revealed: false };
  const isCorrect = state.selected === question.correct;
  const total = questions.length;
  const isLastQuestion = currentQ === total - 1;
  const allAnswered = isLastQuestion && state.revealed;

  function select(idx: number) {
    if (state.revealed) return;
    setAnswers((prev) => ({
      ...prev,
      [question.id]: { selected: idx, revealed: false },
    }));
  }

  function reveal() {
    setAnswers((prev) => ({
      ...prev,
      [question.id]: { ...state, revealed: true },
    }));
  }

  return (
    <div>
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
        <p className="text-base font-medium text-slate-900 leading-relaxed mb-4">
          {question.stem}
        </p>
        {question.image && (
          <MedicalImage image={question.image} className="mb-5" />
        )}
        <div className="space-y-3">
          {question.options.map((option, idx) => {
            let cls =
              "w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-colors";
            if (!state.revealed) {
              cls +=
                state.selected === idx
                  ? " border-teal-400 bg-teal-50 text-teal-800"
                  : " border-slate-200 bg-slate-50 text-slate-700 hover:border-teal-300 hover:bg-teal-50/50";
            } else {
              if (idx === question.correct) {
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
                  {state.revealed && idx === question.correct && (
                    <CheckCircle2 className="ml-auto w-4 h-4 text-green-600" />
                  )}
                  {state.revealed && state.selected === idx && idx !== question.correct && (
                    <XCircle className="ml-auto w-4 h-4 text-red-500" />
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* Actions */}
        <div className="mt-5 flex items-center gap-3">
          {!state.revealed && state.selected !== null && (
            <button
              onClick={reveal}
              className="px-4 py-2 rounded-lg bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition-colors"
            >
              Reveal answer
            </button>
          )}
          {state.revealed && !isLastQuestion && (
            <button
              onClick={() => setCurrentQ((q) => q + 1)}
              className="px-4 py-2 rounded-lg bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition-colors"
            >
              Next question →
            </button>
          )}
          {allAnswered && (
            <button
              onClick={() => setPhase("results")}
              className="px-4 py-2 rounded-lg bg-amber-500 text-[#0f2744] text-sm font-bold hover:bg-amber-400 transition-colors"
            >
              See results →
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
          <p>{question.explanation}</p>
          {question.reference && (
            <p className="mt-2 text-xs opacity-70">Ref: {question.reference}</p>
          )}
        </div>
      )}
    </div>
  );
}
