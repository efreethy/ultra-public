"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

type HeaderProps = {
  onHome?: boolean;
  active?: "news" | "people" | "solutions";
};

export default function Header({ onHome = false, active }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const hrefFor = (hash: string) => (onHome ? hash : `/${hash}`);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image
              src="/ultra-white-transparent.png"
              alt="Ultra AI logo"
              width={120}
              height={32}
              className="h-7 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <Link
            href={hrefFor("#how")}
            className={
              active === "solutions" ? "text-white" : "hover:text-white"
            }
          >
            Solutions
          </Link>
          <Link
            href={hrefFor("#company")}
            className={active === "people" ? "text-white" : "hover:text-white"}
          >
            People
          </Link>
          <Link
            href="/news"
            className={active === "news" ? "text-white" : "hover:text-white"}
          >
            News
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center rounded-full bg-black text-white text-base font-medium px-6 py-3 border border-purple-500/60 shadow-[0_0_24px_rgba(168,85,247,0.35)] hover:shadow-[0_0_36px_rgba(168,85,247,0.5)] hover:border-purple-400 transition"
        >
          Contact Us
          <span className="ml-2 text-white/70 text-sm hidden sm:inline">
            ⌘D
          </span>
        </Link>

        {/* Mobile hamburger */}
        <button
          aria-label="Open menu"
          aria-expanded={isOpen}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-black/40 text-white/90"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile full-screen menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-black">
          <div className="flex h-dvh w-full flex-col bg-black">
            <div className=" bg-black flex items-center justify-between px-6 py-4 border-b border-white/10">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Image
                  src="/ultra-white-transparent.png"
                  alt="Ultra AI logo"
                  width={120}
                  height={32}
                  className="h-7 w-auto"
                />
              </Link>
              <button
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-black/40 text-white/90"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 px-6 py-8">
              <ul className="flex h-full flex-col justify-center gap-10">
                <li>
                  <Link
                    href={hrefFor("#how")}
                    className="block text-2xl md:text-3xl text-white/90 hover:text-white tracking-wide"
                    onClick={() => setIsOpen(false)}
                  >
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href={hrefFor("#company")}
                    className="block text-2xl md:text-3xl text-white/90 hover:text-white tracking-wide"
                    onClick={() => setIsOpen(false)}
                  >
                    People
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className="block text-2xl md:text-3xl text-white/90 hover:text-white tracking-wide"
                    onClick={() => setIsOpen(false)}
                  >
                    News
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="px-6 pb-8">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-black text-white text-base md:text-lg font-medium px-6 py-4 border border-purple-500/60 shadow-[0_0_40px_rgba(168,85,247,0.35)] hover:shadow-[0_0_56px_rgba(168,85,247,0.5)] hover:border-purple-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
                <span className="ml-2 text-white/70 text-sm hidden md:inline">
                  ⌘D
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
