"use client";

import { useState, useEffect } from "react";
import {
  ChevronDown, ChevronUp, CheckSquare, Square,
  BookOpen, Sparkles, Loader2, AlertCircle,
} from "lucide-react";
import type { SAQ } from "@/types";

const CRITIQUE_WORKER_URL =
  process.env.NEXT_PUBLIC_CRITIQUE_WORKER_URL ?? "";

const STORAGE_KEY = "fexnet-saq-answers";

function loadStoredAnswers(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
  } catch {
    return {};
  }
}

function saveAnswers(answers: Record<string, string>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  } catch {
    // storage full or unavailable — silently ignore
  }
}

interface Props {
  saqs: SAQ[];
}

interface Feedback {
  status: "idle" | "loading" | "done" | "error";
  text?: string;
}

export default function SAQViewer({ saqs }: Props) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [selfMarked, setSelfMarked] = useState<Record<string, boolean>>({});
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [feedbacks, setFeedbacks] = useState<Record<string, Feedback>>({});

  // Load persisted answers on mount
  useEffect(() => {
    setUserAnswers(loadStoredAnswers());
  }, []);

  if (saqs.length === 0) {
    return (
      <div className="text-center py-20">
        <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-4" />
        <p className="text-slate-500 text-sm">
          SAQ content for this module is being finalised and will be available shortly.
        </p>
      </div>
    );
  }

  const saq = saqs[currentIdx];

  function revealKey(partLabel: string) {
    return `${saq.id}-${partLabel}`;
  }

  function toggleReveal(label: string) {
    const key = revealKey(label);
    setRevealed((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function toggleMark(label: string) {
    const key = revealKey(label);
    setSelfMarked((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function updateAnswer(key: string, value: string) {
    const next = { ...userAnswers, [key]: value };
    setUserAnswers(next);
    saveAnswers(next);
  }

  function resetQuestion() {
    const keys = saq.parts.map((p) => revealKey(p.label));
    setRevealed((prev) => {
      const next = { ...prev };
      keys.forEach((k) => delete next[k]);
      return next;
    });
    setSelfMarked((prev) => {
      const next = { ...prev };
      keys.forEach((k) => delete next[k]);
      return next;
    });
    setFeedbacks((prev) => {
      const next = { ...prev };
      keys.forEach((k) => delete next[k]);
      return next;
    });
    // Answers are intentionally preserved across reset so users don't lose work
  }

  async function requestFeedback(label: string, part: { question: string; marks: number; modelAnswer: string[] }) {
    const key = revealKey(label);
    const userAnswer = userAnswers[key] ?? "";
    if (!userAnswer.trim() || !CRITIQUE_WORKER_URL) return;

    setFeedbacks((prev) => ({ ...prev, [key]: { status: "loading" } }));

    try {
      const res = await fetch(CRITIQUE_WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: part.question,
          marks: part.marks,
          modelAnswer: part.modelAnswer.join("\n"),
          userAnswer,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as { feedback: string };
      setFeedbacks((prev) => ({ ...prev, [key]: { status: "done", text: data.feedback } }));
    } catch {
      setFeedbacks((prev) => ({ ...prev, [key]: { status: "error" } }));
    }
  }

  const markedMarks = saq.parts
    .filter((p) => selfMarked[revealKey(p.label)])
    .reduce((sum, p) => sum + p.marks, 0);
  const markedCount = saq.parts.filter((p) => selfMarked[revealKey(p.label)]).length;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Question selector */}
      {saqs.length > 1 && (
        <div className="flex gap-2 mb-6 flex-wrap">
          {saqs.map((s, i) => (
            <button
              key={s.id}
              onClick={() => { setCurrentIdx(i); resetQuestion(); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                i === currentIdx
                  ? "bg-[#0f2744] text-white border-[#0f2744]"
                  : "bg-white text-slate-600 border-slate-200 hover:border-teal-300"
              }`}
            >
              SAQ {i + 1}
            </button>
          ))}
        </div>
      )}

      {/* Scenario */}
      <div className="bg-[#0f2744] text-white rounded-2xl p-6 mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-teal-300 uppercase tracking-wide">
            Clinical Scenario — {saq.totalMarks} marks
          </span>
          {saq.tags && (
            <div className="flex gap-1.5 flex-wrap justify-end">
              {saq.tags.map((t) => (
                <span key={t} className="px-2 py-0.5 rounded-full bg-white/10 text-white/70 text-xs">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
        <p className="text-sm leading-relaxed text-white/90">{saq.scenario}</p>
      </div>

      {/* Running total */}
      {markedCount > 0 && (
        <div className="flex items-center justify-between bg-teal-50 border border-teal-200 rounded-xl px-4 py-3 mb-4 text-sm">
          <span className="text-teal-800 font-medium">Self-mark running total</span>
          <span className="text-teal-700 font-bold">
            {markedMarks} / {saq.totalMarks} marks
          </span>
        </div>
      )}

      {/* Parts */}
      <div className="space-y-4 mb-6">
        {saq.parts.map((part) => {
          const key = revealKey(part.label);
          const isRevealed = !!revealed[key];
          const isMarked = !!selfMarked[key];
          const userAnswer = userAnswers[key] ?? "";
          const fb = feedbacks[key] ?? { status: "idle" };
          const canGetFeedback = CRITIQUE_WORKER_URL && userAnswer.trim().length > 0;

          return (
            <div key={part.label} className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              {/* Part header */}
              <div className="px-5 py-4">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex-1">
                    <span className="inline-block text-xs font-bold text-teal-700 uppercase mb-1">
                      Part {part.label} — {part.marks} {part.marks === 1 ? "mark" : "marks"}
                    </span>
                    <p className="text-sm text-slate-800 leading-relaxed font-medium">
                      {part.question}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleReveal(part.label)}
                    className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-600 text-white text-xs font-semibold hover:bg-teal-700 transition-colors"
                  >
                    {isRevealed ? (
                      <><ChevronUp className="w-3.5 h-3.5" /> Hide</>
                    ) : (
                      <><ChevronDown className="w-3.5 h-3.5" /> Reveal</>
                    )}
                  </button>
                </div>

                {/* User answer — textarea before reveal, read-only summary after */}
                {!isRevealed ? (
                  <textarea
                    value={userAnswer}
                    onChange={(e) => updateAnswer(key, e.target.value)}
                    placeholder="Type your answer here before revealing the model answer…"
                    rows={4}
                    className="w-full text-sm text-slate-800 placeholder-slate-400 border border-slate-200 rounded-xl px-3 py-2.5 resize-y focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent leading-relaxed"
                  />
                ) : userAnswer.trim() ? (
                  <div className="mb-1 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
                    <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1.5">
                      Your answer
                    </p>
                    <p className="text-sm text-blue-900 leading-relaxed whitespace-pre-wrap">
                      {userAnswer}
                    </p>
                  </div>
                ) : (
                  <p className="text-xs text-slate-400 italic mb-1">No answer recorded for this part.</p>
                )}

                {/* AI feedback button (only when worker URL configured) */}
                {canGetFeedback && isRevealed && (
                  <div className="mt-2">
                    {fb.status === "idle" && (
                      <button
                        onClick={() => requestFeedback(part.label, part)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0f2744] text-white text-xs font-semibold hover:bg-[#1a3a5c] transition-colors"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        Get AI feedback
                      </button>
                    )}
                    {fb.status === "loading" && (
                      <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        Marking…
                      </span>
                    )}
                    {fb.status === "error" && (
                      <span className="inline-flex items-center gap-1.5 text-xs text-red-500">
                        <AlertCircle className="w-3.5 h-3.5" />
                        Could not connect. Check worker URL.
                        <button
                          onClick={() => requestFeedback(part.label, part)}
                          className="underline ml-1"
                        >
                          Retry
                        </button>
                      </span>
                    )}
                  </div>
                )}

                {/* AI feedback result */}
                {fb.status === "done" && fb.text && (
                  <div className="mt-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span className="text-xs font-semibold text-amber-800 uppercase tracking-wide">
                        AI Feedback
                      </span>
                    </div>
                    <p className="text-sm text-amber-900 leading-relaxed whitespace-pre-wrap">
                      {fb.text}
                    </p>
                    <button
                      onClick={() => requestFeedback(part.label, part)}
                      className="mt-2 text-xs text-amber-700 underline"
                    >
                      Re-submit
                    </button>
                  </div>
                )}
              </div>

              {/* Model answer (revealed) */}
              {isRevealed && (
                <div className="border-t border-slate-100 bg-slate-50 px-5 py-4">
                  <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Model Answer</p>
                  <ul className="space-y-1.5 mb-3">
                    {part.modelAnswer.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  {part.examinerNotes && (
                    <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mb-3">
                      <span className="font-semibold">Examiner note: </span>
                      {part.examinerNotes}
                    </p>
                  )}
                  <button
                    onClick={() => toggleMark(part.label)}
                    className={`inline-flex items-center gap-2 text-xs font-semibold transition-colors ${
                      isMarked ? "text-green-700" : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    {isMarked ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4" />}
                    {isMarked ? `Marked — +${part.marks} marks` : `Mark as correct (+${part.marks} marks)`}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {saq.reference && (
        <p className="text-xs text-slate-400 mb-6">Ref: {saq.reference}</p>
      )}

      {/* Nav */}
      <div className="flex gap-3">
        <button
          disabled={currentIdx === 0}
          onClick={() => { setCurrentIdx((n) => n - 1); resetQuestion(); }}
          className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-600 hover:bg-slate-50 disabled:opacity-40 transition-colors"
        >
          ← Previous SAQ
        </button>
        <button
          onClick={resetQuestion}
          className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-500 hover:bg-slate-50 transition-colors"
        >
          Reset
        </button>
        {currentIdx < saqs.length - 1 && (
          <button
            onClick={() => { setCurrentIdx((n) => n + 1); resetQuestion(); }}
            className="flex-1 py-2.5 rounded-xl bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition-colors"
          >
            Next SAQ →
          </button>
        )}
      </div>
    </div>
  );
}
