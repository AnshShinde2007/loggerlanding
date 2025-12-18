"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!navRef.current) return;

    gsap.fromTo(
      navRef.current.children,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.1,
      }
    );
  }, []);

  // close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      ref={navRef}
      className="flex flex-wrap items-center gap-y-3 px-4 py-3 relative"
    >
      {/* LEFT — Logo */}
      <div className="flex items-center flex-1 min-w-[140px]">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logger logo"
            width={120}
            height={40}
            priority
          />
        </Link>
      </div>

      {/* CENTER — Nav links */}
      <div className="order-3 md:order-none w-full md:w-auto md:absolute md:left-1/2 md:-translate-x-1/2 hidden md:flex justify-center gap-6 sm:gap-8 text-base sm:text-lg">
        <Link href="/features" className="font-medium hover:opacity-70 transition">
          Features
        </Link>
        <Link href="/how-it-works" className="font-medium hover:opacity-70 transition">
          How it works
        </Link>
        <Link href="/pricing" className="font-medium hover:opacity-70 transition">
          Pricing
        </Link>
      </div>


      {/* RIGHT — Download */}
      <div className="order-2 md:order-none ml-auto flex items-center gap-3">
        <button className="hidden md:inline-block w-full sm:w-auto px-5 py-2.5 bg-black text-white rounded-md font-bold hover:opacity-80 transition">
          Download
        </button>
        <button
          className="md:hidden w-11 h-11 flex items-center justify-center rounded-md border"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="space-y-1.5">
            <span className={`block h-[2px] w-6 bg-black transition ${isOpen ? "translate-y-[7px] rotate-45" : ""}`}></span>
            <span className={`block h-[2px] w-6 bg-black transition ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block h-[2px] w-6 bg-black transition ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`}></span>
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="w-full md:hidden mt-2 grid gap-2 text-base">
          <Link
            href="/features"
            className="block px-4 py-3 rounded-lg border bg-white hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/how-it-works"
            className="block px-4 py-3 rounded-lg border bg-white hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            How it works
          </Link>
          <Link
            href="/pricing"
            className="block px-4 py-3 rounded-lg border bg-white hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>

          <div className="px-4 pt-2 text-sm text-gray-600">Socials</div>
          <div className="px-4 grid grid-cols-3 gap-3 text-sm font-semibold">
            <a
              href="https://x.com/arthlete_fit?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAOw0rNleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAadxX_UrBbKNWBi2hIijoFfgZuUj1dySpUkjeyP1_V1f0p2eSRCkycVJqBkDmQ_aem_NN2QzPkOXBdd0Ziw1MXrFw"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border bg-white py-2 hover:bg-gray-50"
              aria-label="Open X"
              onClick={() => setIsOpen(false)}
            >
                <Image src="/x.png" alt="X" width={18} height={18} className="object-contain" />
                <span className="sr-only">X</span>
            </a>
            <a
              href="https://www.instagram.com/logger.fit?igsh=MWw4djZiOHB2MW1zZg=="
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center rounded-lg border bg-white py-2 hover:bg-gray-50"
              aria-label="Open Instagram"
              onClick={() => setIsOpen(false)}
            >
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="4" ry="4" />
                <circle cx="12" cy="12" r="3.5" />
                <circle cx="16.5" cy="7.5" r="1" fill="currentColor" />
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
          </div>

          <button className="w-full px-4 py-3 bg-black text-white rounded-lg font-semibold" onClick={() => setIsOpen(false)}>
            Download
          </button>
        </div>
      )}
    </nav>
  );
}
