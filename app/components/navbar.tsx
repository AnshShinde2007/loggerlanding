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
          <button className="w-full px-4 py-3 bg-black text-white rounded-lg font-semibold" onClick={() => setIsOpen(false)}>
            Download
          </button>
        </div>
      )}
    </nav>
  );
}
