import Image from "next/image";
import Link from "next/link";
import HotkeyContact from "../../components/HotkeyContact";

export const metadata = {
  title: "Contact — Ultra AI",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white overflow-x-hidden">
      <HotkeyContact />
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/ultra-white-transparent.png"
              alt="Ultra AI logo"
              width={120}
              height={32}
              className="h-7 w-auto"
              priority
            />
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <Link href="/#how" className="hover:text-white">
              Solutions
            </Link>
            <Link href="/#company" className="hover:text-white">
              People
            </Link>
            <Link href="/news" className="hover:text-white">
              News
            </Link>
          </nav>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-black text-white text-base font-medium px-6 py-3 border border-purple-500/60 shadow-[0_0_24px_rgba(168,85,247,0.35)] hover:shadow-[0_0_36px_rgba(168,85,247,0.5)] hover:border-purple-400 transition"
          >
            Contact Us{" "}
            <span className="ml-2 text-white/70 text-sm hidden sm:inline">
              ⌘D
            </span>
          </Link>
        </div>
      </header>

      <main className="pt-24 md:pt-36">
        <section className="py-12">
          <div className="mx-auto max-w-3xl px-6">
            <h1 className="text-3xl md:text-4xl font-semibold mb-2">Contact</h1>
            <p className="text-white/70 mb-8">
              Tell us about your use case. We usually reply within one business
              day.
            </p>
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
