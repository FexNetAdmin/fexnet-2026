import { ShieldCheck } from "lucide-react";

interface FACEMSealProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { wrapper: "px-2 py-1 gap-1 text-xs", icon: "w-3 h-3" },
  md: { wrapper: "px-3 py-1.5 gap-1.5 text-sm", icon: "w-4 h-4" },
  lg: { wrapper: "px-4 py-2 gap-2 text-base", icon: "w-5 h-5" },
};

export default function FACEMSeal({ size = "md", className = "" }: FACEMSealProps) {
  const s = sizeMap[size];
  return (
    <span
      className={`inline-flex items-center ${s.wrapper} font-semibold rounded-full border border-amber-300 bg-amber-50 text-amber-800 ${className}`}
    >
      <ShieldCheck className={`${s.icon} text-amber-600`} strokeWidth={2} />
      Verified by FACEM 2026
    </span>
  );
}
