"use client";

import { useEffect } from "react";

export default function VaultModuleError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Vault module error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-sm font-mono bg-red-50 border border-red-200 rounded-lg p-4 text-red-800 mb-4 text-left break-all">
          {error.message}
        </p>
        <button
          onClick={reset}
          className="px-4 py-2 rounded-lg bg-teal-600 text-white text-sm font-semibold"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
