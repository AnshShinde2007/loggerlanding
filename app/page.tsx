import BlurText from "./components/BlurText";
import PricingPage from "./pricing/page";
import HowItWorksPage from "./how-it-works/page";
import FeaturesPage from "./features/page";

export default function HomePage() {
  return (
    <main className="w-full">
      {/* HERO */}
      <section className="h-screen flex items-center justify-center px-8 text-center">
        <div className="-translate-y-8">
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
            className="mt-6 text-gray-600 max-w-md"
          />

          <div className="mt-8 flex gap-4 justify-center">
            <button className="px-6 py-3 bg-black text-white rounded">
              Download Free
            </button>
            <button className="px-6 py-3 border rounded">
              See how it works
            </button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <HowItWorksPage />
      </section>

      {/* FEATURES */}
      <section>
        <FeaturesPage />
      </section>

      {/* PRICING */}
      <section>
        <PricingPage />
      </section>
    </main>
  );
}
