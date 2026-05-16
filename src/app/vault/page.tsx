import type { Metadata } from "next";
import VaultClientPage from "./VaultClientPage";

export const metadata: Metadata = {
  title: "2026 Revision Vault",
  description:
    "22 interactive ACEM Fellowship exam modules. NZ/AU-specific, verified by FACEMs. 700+ questions, no PDF downloads.",
};

export default function VaultPage() {
  return <VaultClientPage />;
}
