"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white overflow-hidden">
      {/* Scrolling Text Banner */}
      <div className="relative bg-white py-4 overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          <span className="inline-block text-black font-bold text-lg tracking-wider px-8">
            ELEVATING FITNESS • ELEVATING FITNESS • ELEVATING FITNESS • ELEVATING FITNESS • ELEVATING FITNESS • ELEVATING FITNESS •
          </span>
          <span className="inline-block text-black font-bold text-lg tracking-wider px-8">
            ELEVATING FITNESS • ELEVATING FITNESS • ELEVATING FITNESS • ELEVATING FITNESS • ELEVATING FITNESS • ELEVATING FITNESS •
          </span>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Section */}
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Empowering Every<br />
                Step of Fitness!
              </h2>
              <p className="text-gray-400 text-lg">Start today, stay fit forever.</p>
              <a
                href="https://app.youform.com/forms/tabbd897"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-fit px-8 py-4 bg-white hover:bg-gray-100 text-black font-semibold rounded-xl transition-colors"
              >
                Join Waitlist
              </a>
            </div>

            {/* Right Section - Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Sitemap</h3>
                <Link href="#features" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
                <Link href="#features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
                <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Social</h3>
                <a href="https://www.instagram.com/logger.fit?igsh=MWw4djZiOHB2MW1zZg==" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Instagram</a>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Support</h3>
                <Link href="#faqs" className="text-gray-300 hover:text-white transition-colors">Help Center</Link>
                <Link href="#faqs" className="text-gray-300 hover:text-white transition-colors">FAQs</Link>
                <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">ARTHLETE MOTIONS PRIVATE LIMITED • All rights reserved</p>
              <div className="flex gap-6 text-sm">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms</Link>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</Link>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Delete Account</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
