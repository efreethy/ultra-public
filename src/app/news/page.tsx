import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link"; // used in inline links below
import Header from "../../components/Header";
import { FileText, Award, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Ultra AI — Newsroom",
  description:
    "Official updates from Ultra AI: publications, programs, and milestones.",
};

type NewsItem = {
  date: string;
  title: string;
  description: string;
  kind: "paper" | "program" | "accelerator";
  links?: { label: string; href: string }[];
};

const newsItems: NewsItem[] = [
  {
    date: "July 11, 2025",
    title:
      "F3-Net: Foundation Model for Full Abnormality Segmentation of Medical Images with Flexible Input Modality Requirement",
    description:
      "Peer‑review preprint describing a foundation model designed for comprehensive abnormality segmentation across modalities.",
    kind: "paper",
    links: [
      { label: "Download PDF", href: "https://arxiv.org/pdf/2507.08460.pdf" },
      { label: "View on arXiv", href: "https://arxiv.org/abs/2507.08460" },
    ],
  },
  {
    date: "June 29, 2025",
    title:
      "Towards Foundation Models for Medical Image Segmentation: Multi‑encoder nnU‑Net outperforms transformer models with self‑supervised pretraining",
    description:
      "MEnnUNet study benchmarking multi‑encoder nnU‑Net against transformer baselines under self‑supervised pretraining.",
    kind: "paper",
    links: [
      { label: "Download PDF", href: "https://arxiv.org/pdf/2504.03474.pdf" },
      { label: "View on arXiv", href: "https://arxiv.org/abs/2504.03474" },
    ],
  },
  {
    date: "March 14, 2025",
    title: "UltraAI is accepted for the NVIDIA Inception Program",
    description:
      "We join NVIDIA Inception to accelerate AI innovation for radiology and clinical imaging.",
    kind: "program",
  },
  {
    date: "June 26, 2025",
    title:
      "UltraAI is accepted for participation in cohort 11 of Launch accelerator",
    description:
      "Backed by a global network of founders and operators to scale Radiology 2.0.",
    kind: "accelerator",
  },
];

function KindIcon({ kind }: { kind: NewsItem["kind"] }) {
  const iconClass = "h-5 w-5";
  if (kind === "paper") return <FileText className={iconClass} />;
  if (kind === "program") return <Award className={iconClass} />;
  return <Rocket className={iconClass} />;
}

export default function NewsPage() {
  const itemsSorted = [...newsItems].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white overflow-x-hidden">
      <Header active="news" />

      <main className="relative isolate pt-24 md:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[1200px] bg-[radial-gradient(closest-side,rgba(56,189,248,.25),transparent_70%)]"
        />

        <section className="mb-10 md:mb-14">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-[radial-gradient(140%_120%_at_50%_-20%,rgba(168,85,247,0.18),rgba(0,0,0,0)_60%)] p-10 md:p-16">
              <h1 className="text-4xl md:text-6xl leading-tight">Newsroom</h1>
              <p className="text-white/70 mt-4 max-w-2xl">
                Official announcements, publications, and milestones from Ultra
                AI.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <ol className="relative border-l border-white/10 ml-4 md:ml-6">
              {itemsSorted.map((item, idx) => (
                <li key={`${item.date}-${idx}`} className="mb-10 ml-6">
                  <span className="absolute -left-[9px] mt-2 flex h-4 w-4 items-center justify-center rounded-full border border-white/20 bg-white/10">
                    <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-indigo-500" />
                  </span>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-7">
                    <div className="flex items-center justify-between gap-4">
                      <div className="inline-flex items-center gap-2 text-white/70 text-xs md:text-sm">
                        <KindIcon kind={item.kind} />
                        <span>
                          {item.kind === "paper"
                            ? "Publication"
                            : item.kind === "program"
                            ? "Program"
                            : "Accelerator"}
                        </span>
                      </div>
                      <time className="text-white/60 text-xs md:text-sm whitespace-nowrap">
                        {item.date}
                      </time>
                    </div>
                    <h2 className="text-lg md:text-xl font-semibold mt-3">
                      {item.title}
                    </h2>
                    {item.description && (
                      <p className="text-white/70 text-sm mt-2">
                        {item.description}
                      </p>
                    )}
                    {item.links && item.links.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-3">
                        {item.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-full bg-black text-white text-xs md:text-sm font-medium px-4 py-2 border border-purple-500/60 shadow-[0_0_16px_rgba(168,85,247,0.35)] hover:shadow-[0_0_24px_rgba(168,85,247,0.5)] hover:border-purple-400 transition"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 text-center">
              <p className="text-white/70 text-sm">
                Press inquiries:{" "}
                <a
                  href="mailto:press@ultra.ai"
                  className="underline decoration-fuchsia-400/60 underline-offset-4 hover:decoration-fuchsia-300"
                >
                  press@ultra.ai
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/ultra-white-transparent.png"
              alt="Ultra AI logo"
              width={110}
              height={30}
              className="h-6 w-auto"
            />
          </div>
          <p className="text-xs text-white/60">
            © 2024 Ultra AI ® All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
