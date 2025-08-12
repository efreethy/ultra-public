// homepage
import BrainModel from "../components/BrainModel";

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
  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-indigo-500" />
            <span className="text-sm font-semibold tracking-wide">
              Ultra AI
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#value" className="hover:text-white">
              Outcomes
            </a>
            <a href="#how" className="hover:text-white">
              How it works
            </a>
            <a href="#centers" className="hover:text-white">
              For centers
            </a>
            <a href="#oems" className="hover:text-white">
              For OEMs
            </a>
            <a href="#team" className="hover:text-white">
              Team
            </a>
            <a href="#company" className="hover:text-white">
              Company
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>
          <a
            href="#demo"
            className="inline-flex items-center rounded-full bg-white text-black text-sm font-medium px-4 py-2 hover:bg-white/90"
          >
            Book a Demo
          </a>
        </div>
      </header>

      <main className="relative isolate">
        {/* Glow background */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[1200px] bg-[radial-gradient(closest-side,rgba(56,189,248,.25),transparent_70%)]"
        />

        <section className="pt-36 md:pt-44">
          <div className="mx-auto max-w-7xl px-6">
            {/* Mobile 3D hero visual: full-bleed short background with overlay */}
            <div className="relative md:hidden -mx-6 mb-6">
              <div className="h-64 w-full overflow-hidden">
                <div className="absolute inset-0">
                  <BrainModel />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>
            </div>

            <div className="grid items-center gap-10 md:grid-cols-2">
              <div className="space-y-6">
                <p className="inline-flex items-center text-xs font-medium uppercase tracking-wider text-white/70">
                  Radiology 2.0
                </p>
                <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                  The AI‑native operating system for radiology
                </h1>
                <p className="text-white/70 max-w-xl">
                  UltraRad + UltraViewer automate radiologist tasks end‑to‑end —
                  assisting segmentation, QC, and report drafting to reduce time
                  per case and expand capacity.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#demo"
                    className="inline-flex items-center justify-center rounded-full bg-white text-black text-sm font-medium px-5 py-3 hover:bg-white/90"
                  >
                    Book a Demo
                  </a>
                  <a
                    href="#value"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 text-white text-sm font-medium px-5 py-3 hover:bg-white/5"
                  >
                    See outcomes
                  </a>
                </div>
              </div>

              <div className="relative aspect-[4/3] w-full rounded-2xl ring-1 ring-white/10 overflow-hidden hidden md:block">
                <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-tr from-cyan-400/10 via-fuchsia-500/10 to-indigo-500/10" />
                <div className="absolute inset-0">
                  <BrainModel />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section id="value" className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-end justify-between gap-6 mb-8">
              <h2 className="text-xl font-semibold">Outcomes</h2>
              <a href="#roi" className="text-sm text-white/70 hover:text-white">
                Estimate your ROI →
              </a>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  stat: "−85%",
                  label: "Time per case",
                  note: "Target reduction with assistive automation",
                },
                {
                  stat: "+20%",
                  label: "Productivity",
                  note: "Throughput uplift in modeled scenarios",
                },
                {
                  stat: "4×",
                  label: "ROI for centers",
                  note: "Based on conservative assumptions",
                },
                {
                  stat: "15%",
                  label: "Fewer errors",
                  note: "Aiming to reduce inconsistencies",
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

        {/* How it works */}
        <section id="how" className="py-24 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-3">
            <div className="md:col-span-1">
              <h2 className="text-xl font-semibold mb-3">How it works</h2>
              <p className="text-white/70 text-sm">
                UltraRad (foundation model) and UltraViewer (next‑gen viewer)
                combine into Radiology 2.0 — an assistive, agentic workflow
                layer that automates radiologist tasks end‑to‑end.
              </p>
            </div>
            <div className="md:col-span-2 grid gap-6">
              {[
                {
                  title: "UltraRad — Radiology Foundation Model",
                  desc: "Assists anatomy segmentation, on‑click pathology segmentation, image QC, and structured report drafting. Built for explainability and modular indications.",
                },
                {
                  title: "UltraViewer — Next‑gen AI Image Viewer",
                  desc: "AR‑ready viewing with embedded AI assistance for analysis, summarization, and PACS/EHR integrity.",
                },
                {
                  title: "Radiology 2.0 — AI‑native OS",
                  desc: "Combines UltraRad + UltraViewer into an agentic layer to streamline intake → reading → reporting.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                >
                  <h3 className="font-medium mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For centers */}
        <section id="centers" className="py-24">
          <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold mb-3">
                For independent and multi‑branch centers
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
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <h3 className="font-medium mb-2">ROI snapshot</h3>
              <p className="text-white/70 text-sm">
                Assuming $1,000/exam and +20% productivity, a single site may
                unlock meaningful incremental revenue. Enter your volume to
                estimate.
              </p>
              <form className="mt-4 grid sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <input
                    aria-label="Monthly exams"
                    placeholder="Monthly exams"
                    className="w-full rounded-lg bg-white/[0.06] border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>
                <button
                  type="button"
                  className="rounded-lg bg-white text-black text-sm font-medium px-4 py-2 hover:bg-white/90"
                >
                  Estimate
                </button>
              </form>
              <div className="mt-3 text-xs text-white/50">
                Illustrative only; results vary by case mix and configuration.
              </div>
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
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="font-medium mb-2">Integration readiness</h3>
              <p className="text-white/70 text-sm">
                Standards‑based interfaces and reference implementations to
                shorten time‑to‑value. Talk to partnerships for details.
              </p>
              <a
                href="#contact"
                className="inline-block mt-4 rounded-full border border-white/20 text-white text-sm font-medium px-5 py-3 hover:bg-white/5"
              >
                Contact partnerships
              </a>
            </div>
          </div>
        </section>

        {/* Regulatory */}
        <section id="regulatory" className="py-24">
          <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold mb-3">
                Built for FDA pathways
              </h2>
              <p className="text-white/70 text-sm">
                Limited intended uses focused on radiologist tasks (image QC,
                detection assistance, report drafting assistance). Explainable
                outputs and proprietary data generation support scalable
                validation. Modular strategy and targeted submissions (Neuro →
                Pediatrics).
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-white/60 text-xs">
              Clinical features are made available in accordance with local
              regulatory status and intended use. Certain capabilities are
              pending regulatory clearance.
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="py-24 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-end justify-between gap-6 mb-8">
              <h2 className="text-xl font-semibold">Team</h2>
              <a
                href="#company"
                className="text-sm text-white/70 hover:text-white"
              >
                About the company →
              </a>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex items-center gap-4"
                >
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-16 w-16 rounded-full object-cover ring-1 ring-white/10 shrink-0"
                    />
                  ) : (
                    <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-indigo-500 flex items-center justify-center text-black font-semibold shrink-0">
                      <span className="text-lg">
                        {getInitials(member.name)}
                      </span>
                    </div>
                  )}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-medium truncate">{member.name}</p>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          aria-label={`${member.name} on LinkedIn`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center h-5 w-5 rounded bg-[#0A66C2] text-white text-[10px] font-bold"
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
        </section>

        <section id="company" className="py-24 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold mb-4">Company</h2>
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
        </section>

        <section id="contact" className="py-24 border-t border-white/10">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-xl font-semibold mb-6">Contact</h2>
            <form action="/api/contact" method="post" className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-xs text-white/70 mb-1"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg bg-white/[0.06] border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs text-white/70 mb-1"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg bg-white/[0.06] border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-xs text-white/70 mb-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-lg bg-white/[0.06] border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-white text-black text-sm font-medium px-5 py-3 hover:bg-white/90"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-indigo-500" />
            <span className="text-sm font-semibold tracking-wide">
              Ultra AI
            </span>
          </div>
          <p className="text-xs text-white/60">
            © 2024 Ultra AI ® All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
