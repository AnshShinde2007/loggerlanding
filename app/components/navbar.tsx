"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);

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

  return (
    <nav
      ref={navRef}
      className="flex items-center px-2 pb-1 pt-0 relative"
    >
      {/* LEFT — Logo */}
      <div className="flex items-center">
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
      <div className="absolute left-1/2 -translate-x-1/2 flex gap-8 text-lg">
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
      <div className="ml-auto">
        <button className="px-5 py-2.5 bg-black text-white rounded-md font-bold hover:opacity-80 transition">
          Download
        </button>
      </div>
    </nav>
  );
}
