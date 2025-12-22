"use client";

import { useState } from "react";
import BlurText from "./components/BlurText";
import PricingPage from "./pricing/page";
import HowItWorksPage from "./how-it-works/page";
import FeaturesPage from "./features/page";
import WaitlistModal from "./components/WaitlistModal";

export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="w-full">
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 sm:px-8 py-16 text-center">
        <div className="-translate-y-4 sm:-translate-y-8 max-w-2xl">
          <BlurText
            text="Logger"
            delay={250}
            animateBy="letters"
            direction="top"
            className="text-5xl md:text-7xl font-bold italic tracking-tight"
          />

          <BlurText
            text="A minimal workout logger for people who train seriously and don’t want bloated features."
            delay={100}
            animateBy="words"
            direction="bottom"
            className="mt-6 text-gray-600 max-w-xl mx-auto text-lg"
          />

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setOpen(true)}
              className="px-6 py-3 bg-black text-white rounded font-semibold"
            >
              WaitList
            </button>

            <button className="px-6 py-3 border rounded font-semibold">
              See how it works
            </button>
          </div>
        </div>
      </section>

      <HowItWorksPage />
      <FeaturesPage />
      <PricingPage />

      <WaitlistModal open={open} onClose={() => setOpen(false)} />
    </main>
  );
}
