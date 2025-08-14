// homepage
import HeroVisualization from "../components/HeroVisualization";
import HotkeyContact from "../components/HotkeyContact";
import Header from "../components/Header";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { Waypoints, Monitor, AppWindowMac } from "lucide-react";

export default function Home() {
  const teamMembers = [
    {
      name: "Reza Rahmanzadeh, MD, PhD",
      role: "CEO/CTO",
      linkedin: "",
      image: "/reza.jpeg",
    },
    {
      name: "Nima Akhlaghi, PhD",
      role: "Research, Compliance & Regulatory Lead",
      linkedin: "",
      image: "/nima.jpeg",
    },
    {
      name: "Hedi Razavi, PhD",
      role: "Operations Lead",
      linkedin: "",
      image: "/hedi.png",
    },
    {
      name: "Amir Ameri",
      role: "Business Development Lead",
      linkedin: "",
      image: "/amir.jpeg",
    },
    {
      name: "Amir Tehrani",
      role: "Senior Executive Advisor",
      linkedin: "",
      image: "/amir-tehrani.jpeg",
    },
    {
      name: "Naz Moini",
      role: "Regulatory Advisor",
      linkedin: "",
      image: "/naz.jpeg",
    },
  ];

  const getInitials = (fullName: string) => {
    const parts = fullName.replace(/[,]/g, " ").split(/\s+/).filter(Boolean);
    const initials = parts
      .filter((p) => /[A-Za-z]/.test(p))
      .slice(0, 3)
      .map((p) => p[0]?.toUpperCase() ?? "")
      .join("")
      .slice(0, 3);
    return initials || "U";
  };
  // Single marquee: 9 logo filenames stored in `public/`
  const partnerLogos = [
    "stanford.svg",
    "berkeley.svg",
    "insel.png",
    "abbot.svg",
    "deerfield.png",
    "st-jude.svg",
    "stryker.png",
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white overflow-x-hidden">
      <HotkeyContact />
      <Header onHome />

      <main className="relative isolate">
        {/* Glow background */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[1200px] bg-[radial-gradient(closest-side,rgba(56,189,248,.25),transparent_70%)]"
        />
        {/* Hidden SVG defs for gradient-stroked icons */}
        <svg aria-hidden className="absolute h-0 w-0">
          <defs>
            <linearGradient
              id="ultraIconGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#3B0764" />
              <stop offset="100%" stopColor="#FBCFE8" />
            </linearGradient>
          </defs>
        </svg>

        {/* Section with Hero Visualization */}
        <section className="pt-16 md:pt-44 mb-16 md:mb-24">
          <div className="mx-auto max-w-7xl px-6">
            {/* Mobile 3D hero visual: full-bleed short background with overlay */}
            <div className="relative md:hidden -mx-6 mb-6">
              <div className="h-64 w-full overflow-hidden">
                <div className="absolute inset-0">
                  <HeroVisualization />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>
            </div>

            <div className="grid items-center gap-10 md:grid-cols-2">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-purple-500/60 bg-black/60 px-3 py-1 text-xs text-white/80">
                  <span>Radiology 2.0</span>
                </div>
                <h1 className="text-4xl md:text-6xl leading-tight break-words">
                  Agentic AI Radiology - A New Era of Optimized Workflow
                </h1>
                <p className="text-white/70 max-w-xl">
                  Everything in One End-to-End Solution, from Image Quality
                  Control to Diagnosis and Report Generation
                </p>
                <div className="flex min-w-0">
                  <a
                    href="#how"
                    className="inline-flex items-center justify-center rounded-full bg-black text-white text-sm font-medium px-5 py-3 border border-purple-500/60 shadow-[0_0_24px_rgba(168,85,247,0.35)] hover:shadow-[0_0_32px_rgba(168,85,247,0.5)] hover:border-purple-400 transition w-full sm:w-auto text-center sm:whitespace-nowrap"
                  >
                    Why Is Radiology 2.0 The Future of Radiology?
                  </a>
                </div>
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden hidden md:block">
                {/* <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-tr from-cyan-400/10 via-fuchsia-500/10 to-indigo-500/10" /> */}
                <div className="absolute inset-0 pointer-events-none rounded-2xl" />

                <div className="absolute inset-0">
                  <HeroVisualization />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="pt-24 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-3">
            <div className="md:col-span-1">
              <h2 className="text-xl font-semibold mb-3">Why Radiology 2.0?</h2>
            </div>
            <div className="md:col-span-2">
              <ul className="grid gap-6">
                <li className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 flex gap-4">
                  <span className="h-3 w-3 mt-1.5 rounded-full " />
                  <div>
                    <h3 className="font-medium bg-gradient-to-r from-violet-400 to-white bg-clip-text text-transparent">
                      End-to-end solution:
                    </h3>
                    <p className="text-white/80 text-sm">
                      Maximum automation to address fragmented radiology
                      workflows that drive radiologist burnout, prolong patient
                      wait times, increase misdiagnosis rates, and limit revenue
                      potential.
                    </p>
                  </div>
                </li>
                <li className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex gap-4">
                  <span className="h-3 w-3 mt-1.5 rounded-full " />
                  <div>
                    <h3 className="font-medium bg-gradient-to-r from-violet-400 to-white bg-clip-text text-transparent">
                      Extremely accurate and robust AI:
                    </h3>
                    <p className="text-white/80 text-sm">
                      An AI solution trained on the most heterogeneous,
                      multimodal dataset containing billions of images.
                    </p>
                  </div>
                </li>
                <li className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex gap-4">
                  <span className="h-3 w-3 mt-1.5 rounded-full " />
                  <div>
                    <h3 className="font-medium bg-gradient-to-r from-violet-400 to-white bg-clip-text text-transparent">
                      Explainable AI:
                    </h3>
                    <p className="text-white/80 text-sm">
                      AI that reasons like a radiologist.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-6 pt-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  stat: "−85%",
                  label: "Time per case",
                  note: "Target reduction with assistive automation",
                },
                {
                  stat: "+20%",
                  label: "Productivity",
                  note: "Throughput uplift",
                },

                {
                  stat: "15%",
                  label: "Fewer misdiagnoses",
                  note: "Improving diagnostic accuracy",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                >
                  <div className="text-3xl font-semibold">{item.stat}</div>
                  <div className="text-white/70 text-sm mt-1">{item.label}</div>
                  <div className="text-white/50 text-xs mt-2">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="pt-6 pb-24 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "UltraRad — Radiology AI Foundation Model",
                  desc: "Assists anatomy segmentation, on‑click pathology segmentation, Image quality control, and structured report drafting. Built for explainability and modular indications.",
                  Icon: Waypoints,
                },
                {
                  title: "UltraViewer — Next‑gen AI Image Viewer",
                  desc: "AR‑ready viewing with embedded AI assistance for analysis, summarization, and PACS/EHR integrity.",
                  Icon: Monitor,
                },
                {
                  title: "Radiology 2.0 — AI‑native OS",
                  desc: "Combines UltraRad + UltraViewer into an agentic layer to streamline intake → reading → reporting.",
                  Icon: AppWindowMac,
                },
              ].map(({ title, desc, Icon }) => (
                <div
                  key={title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_60%_at_50%_-20%,rgba(168,85,247,0.18),rgba(0,0,0,0)_60%)]"
                  />
                  <div className="relative">
                    <span className="mb-4 inline-block">
                      <Icon className="h-6 w-6" stroke="#fff" fill="none" />
                    </span>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                      {title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For centers */}
        <section id="centers" className="py-24 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold mb-3">
                For Radiology Centers
              </h2>
              <ul className="text-white/70 text-sm space-y-2 list-disc pl-5">
                <li>
                  Deploy light: cloud or hybrid, fast onboarding, minimal IT
                  lift
                </li>
                <li>
                  Works with your stack: standards‑based DICOM/PACS/EHR
                  connectors
                </li>
                <li>
                  Security: HIPAA‑aligned controls, audit trails, role‑based
                  access
                </li>
                <li>
                  Flexible commercial model: subscription and pay‑as‑you‑go
                </li>
              </ul>
            </div>
            <div
              id="roi"
              className="md:border-l md:border-white/10 md:pl-10 flex items-center justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-black text-white text-sm font-medium px-5 py-3 whitespace-nowrap border border-purple-500/60 shadow-[0_0_24px_rgba(168,85,247,0.35)] hover:shadow-[0_0_32px_rgba(168,85,247,0.5)] hover:border-purple-400 transition min-w-[12rem] text-center"
              >
                Get in touch with us
              </Link>
            </div>
          </div>
        </section>

        {/* For OEMs */}
        <section id="oems" className="py-24 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold mb-3">
                For OEMs and PACS vendors
              </h2>
              <ul className="text-white/70 text-sm space-y-2 list-disc pl-5">
                <li>
                  IP/OEM licensing: integrate UltraRad capabilities or embed
                  UltraViewer features
                </li>
                <li>
                  SDK & APIs: modular components to accelerate your roadmap
                </li>
                <li>
                  Co‑marketing: joint solutions for enterprise deployments
                </li>
              </ul>
            </div>
            <div className="md:border-l md:border-white/10 md:pl-10 flex items-center justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-black text-white text-sm font-medium px-5 py-3 whitespace-nowrap border border-purple-500/60 shadow-[0_0_24px_rgba(168,85,247,0.35)] hover:shadow-[0_0_32px_rgba(168,85,247,0.5)] hover:border-purple-400 transition min-w-[12rem] text-center"
              >
                Get in touch with us
              </Link>
            </div>
          </div>
        </section>

        <section id="company" className="py-24 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold mb-4">Leadership</h2>
              <p className="text-white/70">
                Ultra AI is led by a radiologist and an AI engineer. We build an
                AI‑native operating system for radiology with a capital‑light
                model, strong ecosystem partnerships, and a design aligned with
                regulatory pathways.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["2024", "Incorporated"],
                ["5", "Patents filed"],
                ["HIPAA", "Aligned"],
                ["SOC 2", "In progress"],
              ].map(([stat, label]) => (
                <div
                  key={label}
                  className="rounded-xl bg-white/[0.03] border border-white/10 p-4"
                >
                  <div className="text-2xl font-semibold">{stat}</div>
                  <div className="text-white/60 text-xs mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div
            id="team"
            className="mx-auto max-w-7xl px-6 mt-12 pt-6 overflow-x-hidden"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 min-w-0">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex items-center gap-4 min-w-0 overflow-hidden"
                >
                  {member.image ? (
                    <div className="h-16 w-16 relative shrink-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="64px"
                        className="rounded-full object-cover ring-1 ring-white/10"
                        priority={false}
                      />
                    </div>
                  ) : (
                    <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-indigo-500 flex items-center justify-center text-black font-semibold shrink-0">
                      <span className="text-lg">
                        {getInitials(member.name)}
                      </span>
                    </div>
                  )}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 min-w-0">
                      <p className="font-medium truncate">{member.name}</p>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          aria-label={`${member.name} on LinkedIn`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center h-5 w-5 rounded bg-[#0A66C2] text-white text-[10px] font-bold shrink-0"
                        >
                          in
                        </a>
                      )}
                    </div>
                    <p className="text-white/70 text-sm">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 mt-12 pt-6">
            <div className="relative overflow-hidden">
              <div aria-hidden className="absolute inset-0 -z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0b0b0c] to-transparent" />
              <Marquee
                direction="left"
                speed={28}
                gradient
                gradientColor="rgba(11,11,12,1)"
                gradientWidth={80}
                className="py-6"
              >
                {partnerLogos.map((src, idx) => {
                  const marginClass = idx === 0 ? "mr-20" : "mr-20";
                  const isEmphasized =
                    src === "insel.png" || src === "stryker.png";
                  const heightClass = isEmphasized
                    ? "h-[62px] md:h-[72px]"
                    : "h-10 md:h-12";
                  const widthClass = isEmphasized
                    ? "w-[208px] md:w-[260px]"
                    : "w-[160px] md:w-[200px]";
                  const sizesAttr = isEmphasized
                    ? "(min-width: 768px) 260px, 208px"
                    : "(min-width: 768px) 200px, 160px";
                  return (
                    <div
                      key={`rfm-${idx}-${src}`}
                      className={`${marginClass} ${heightClass} ${widthClass} relative opacity-80 hover:opacity-100 transition-opacity align-middle`}
                    >
                      <Image
                        src={`/${src}`}
                        alt={src}
                        fill
                        sizes={sizesAttr}
                        className="object-contain"
                        priority={false}
                      />
                    </div>
                  );
                })}
              </Marquee>
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-[radial-gradient(140%_120%_at_50%_-20%,rgba(168,85,247,0.18),rgba(0,0,0,0)_60%)] p-10 md:p-20 text-center">
              <h2 className="text-3xl md:text-6xl leading-tight">
                Your radiology workflow, on autopilot
              </h2>
              <p className="text-white/70 mt-6 text-base md:text-lg">
                Free radiologists from busywork with agentic automation, end to
                end.
              </p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-black text-white text-base font-medium px-6 md:px-8 py-3 md:py-4 border border-purple-500/60 shadow-[0_0_32px_rgba(168,85,247,0.35)] hover:shadow-[0_0_48px_rgba(168,85,247,0.5)] hover:border-purple-400 transition"
                >
                  Contact Us{" "}
                  <span className="ml-2 text-white/70 text-sm hidden sm:inline">
                    ⌘D
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/10 overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <Image
            src="/chips-transparent-1696x536.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-bottom"
            priority={false}
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 bg-black/80 pointer-events-none"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-24 pb-28 md:pb-40">
          {/* Mobile-first layout: logo + visible link sections (no accordions) */}
          <div className="md:hidden">
            <div className="space-y-4 flex flex-col items-center text-center">
              <Image
                src="/ultra-white-transparent.png"
                alt="Ultra AI logo"
                width={140}
                height={36}
                className="h-8 w-auto"
              />
              <p className="text-xs text-white/70">
                © 2024 Ultra AI ® All Rights Reserved
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8">
              <div>
                <h4 className="text-xs font-semibold tracking-wider uppercase text-white/80 mb-3">
                  Solutions
                </h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>
                    <a href="#how" className="hover:text-white">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a href="#centers" className="hover:text-white">
                      For Centers
                    </a>
                  </li>
                  <li>
                    <a href="#oems" className="hover:text-white">
                      For OEMs
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold tracking-wider uppercase text-white/80 mb-3">
                  People
                </h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>
                    <a href="#company" className="hover:text-white">
                      Company
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold tracking-wider uppercase text-white/80 mb-3">
                  Company
                </h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>
                    <Link href="/news" className="hover:text-white">
                      News
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Desktop/tablet grid */}
          <div className="hidden md:grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <Image
                src="/ultra-white-transparent.png"
                alt="Ultra AI logo"
                width={140}
                height={36}
                className="h-8 w-auto"
              />
              <p className="text-xs text-white/60">
                © 2024 Ultra AI ® All Rights Reserved
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold tracking-wider uppercase text-white/80 mb-3">
                Solutions
              </h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#how" className="hover:text-white">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#centers" className="hover:text-white">
                    For Centers
                  </a>
                </li>
                <li>
                  <a href="#oems" className="hover:text-white">
                    For OEMs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold tracking-wider uppercase text-white/80 mb-3">
                People
              </h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#company" className="hover:text-white">
                    Company
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold tracking-wider uppercase text-white/80 mb-3">
                Company
              </h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link href="/news" className="hover:text-white">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
