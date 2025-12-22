"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LEFT — Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logger logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* CENTER — Nav links in rounded bar (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 px-8 py-3 border-2 border-black rounded-full bg-white">
          <Link href="#features" className="text-base font-medium hover:opacity-60 transition-opacity">
            Features
          </Link>
          <Link href="#pricing" className="text-base font-medium hover:opacity-60 transition-opacity">
            Pricing
          </Link>
          <Link href="/blogs" className="text-base font-medium hover:opacity-60 transition-opacity">
            Blogs
          </Link>
        </nav>

        {/* RIGHT — Download Button & Mobile Menu */}
        <div className="flex items-center gap-3">
          <a
            href="https://app.youform.com/forms/tabbd897"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block px-6 py-2.5 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Join Waitlist
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-1.5">
              <span className={`block h-[2px] w-6 bg-black transition-transform ${isOpen ? "translate-y-[7px] rotate-45" : ""}`}></span>
              <span className={`block h-[2px] w-6 bg-black transition-opacity ${isOpen ? "opacity-0" : ""}`}></span>
              <span className={`block h-[2px] w-6 bg-black transition-transform ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-4 py-4 border-2 border-black rounded-2xl bg-white">
          <div className="space-y-3">
            <Link
              href="#features"
              className="block py-2 font-medium hover:opacity-60 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="block py-2 font-medium hover:opacity-60 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/blogs"
              className="block py-2 font-medium hover:opacity-60 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </Link>
            <a
              href="https://app.youform.com/forms/tabbd897"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-4 px-6 py-3 bg-black text-white rounded-lg font-semibold text-center block"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
