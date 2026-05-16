"use client";

import { useState, useEffect } from "react";
import { ZoomIn, X } from "lucide-react";
import type { QuestionImage } from "@/types";

interface Props {
  image: QuestionImage;
  className?: string;
}

export default function MedicalImage({ image, className = "" }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className={`relative group ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.url}
          alt={image.alt}
          className="w-full rounded-xl border border-slate-200 cursor-zoom-in object-contain max-h-72 bg-slate-900"
          onClick={() => setOpen(true)}
        />
        <button
          onClick={() => setOpen(true)}
          className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Enlarge image"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        {image.caption && (
          <p className="mt-1.5 text-xs text-slate-500 text-center italic">
            {image.caption}
          </p>
        )}
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-5xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.url}
              alt={image.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-xl"
            />
            {image.caption && (
              <p className="mt-2 text-sm text-white/70 text-center italic">
                {image.caption}
              </p>
            )}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-3 -right-3 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
