import Link from "next/link";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-sm">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mx-auto mb-5">
          <FileQuestion className="w-8 h-8 text-slate-400" strokeWidth={1.5} />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Page not found</h1>
        <p className="text-slate-500 text-sm mb-8">
          This page doesn&apos;t exist. Try navigating back to the homepage or browsing
          the free teaching sessions.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-5 py-2.5 rounded-lg bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition-colors"
          >
            Go home
          </Link>
          <Link
            href="/sessions"
            className="px-5 py-2.5 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors"
          >
            Browse sessions
          </Link>
        </div>
      </div>
    </div>
  );
}
