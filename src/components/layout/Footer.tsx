import Link from "next/link";
import { MapPin, Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f2744] text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg tracking-tight mb-2">FEXnet</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Senior FACEM-led emergency medicine education for the Australasian
              Fellowship exam. Free weekly teaching from Christchurch. Premium
              2026 Vault for serious candidates.
            </p>
            <div className="flex items-center gap-2 mt-4 text-xs text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d97706]" />
              <span>All premium content verified by practising FACEMs</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sessions" className="hover:text-white transition-colors">
                  Free Teaching Sessions
                </Link>
              </li>
              <li>
                <Link href="/vault" className="hover:text-white transition-colors">
                  2026 Revision Vault
                </Link>
              </li>
              <li>
                <a
                  href="https://acem.org.au/Fellowship"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  ACEM Fellowship Info ↗
                </a>
              </li>
              <li>
                <a
                  href="https://fexnet.org/lifelonglearning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  FEXnet Reference Site ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                <span>Christchurch Hospital ED, Canterbury DHB</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                <a
                  href="mailto:teaching@fexnet.org"
                  className="hover:text-white transition-colors"
                >
                  teaching@fexnet.org
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-slate-500 leading-relaxed">
              Content reflects NZ and Australian clinical practice guidelines.
              Māori health equity principles are integrated throughout.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} FEXnet. Educational use only. Not a substitute for clinical judgement.</p>
          <p>ACEM curriculum 2026 edition · NZ/AU drug protocols</p>
        </div>
      </div>
    </footer>
  );
}
