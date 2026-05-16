"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, BookOpen, ShieldCheck } from "lucide-react";

const navLinks = [
  { href: "/sessions", label: "Free Sessions" },
  { href: "/vault", label: "2026 Vault" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0f2744]">
              <BookOpen className="w-5 h-5 text-white" strokeWidth={1.75} />
            </div>
            <div className="leading-tight">
              <span className="block text-base font-bold tracking-tight text-[#0f2744]">
                FEXnet
              </span>
              <span className="block text-[10px] font-medium text-slate-500 -mt-0.5 tracking-wide uppercase">
                ACEM Fellowship Revision
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 rounded-md hover:text-[#0f2744] hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/vault"
              className="ml-3 flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-[#d97706] rounded-lg hover:bg-[#b45309] transition-colors shadow-sm"
            >
              <ShieldCheck className="w-4 h-4" strokeWidth={2} />
              Access Vault
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-md text-slate-500 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-50 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/vault"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 mt-2 px-3 py-2 text-sm font-semibold text-white bg-[#d97706] rounded-lg hover:bg-[#b45309] transition-colors"
          >
            <ShieldCheck className="w-4 h-4" />
            Access Vault
          </Link>
        </div>
      )}
    </header>
  );
}
