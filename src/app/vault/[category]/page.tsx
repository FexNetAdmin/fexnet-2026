import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vaultTopics, getTopicBySlug } from "@/lib/content/workbooks";
import VaultModuleClient from "./VaultModuleClient";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return vaultTopics.map((t) => ({ category: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const topic = getTopicBySlug(category);
  if (!topic) return {};
  return {
    title: `${topic.title} — 2026 Vault`,
    description: topic.description,
  };
}

export default async function VaultCategoryPage({ params }: Props) {
  const { category } = await params;
  const topic = getTopicBySlug(category);
  if (!topic) notFound();

  return <VaultModuleClient topic={topic} />;
}
