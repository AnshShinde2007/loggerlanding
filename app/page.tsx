import PricingPage from "./pricing/page";
import Image from "next/image";
import ProblemSection from "./components/problem-section";
import StepsSection from "./components/steps-section";

import FAQsSection from "./components/faqs-section";
import PhoneScreensSection from "./components/phone-screens-section";
import JoinCommunitySection from "./components/join-community-section";

export default function HomePage() {
  return (
    <main className="w-full">
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-16 py-12 sm:py-16">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight">
              Log your workouts
              <br />
              <span className="text-gray-400">Without the clutter.</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-gray-500 text-base sm:text-lg max-w-md leading-relaxed">
              Logger is a minimal workout logger built for gym and home workouts. Track exercises, sets, reps, and progress without fighting the UI.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://app.youform.com/forms/tabbd897"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 sm:px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center"
              >
                Join Waitlist
              </a>
              <button className="px-5 sm:px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                See how it works
              </button>
            </div>

            <p className="mt-8 text-xs text-gray-400 uppercase tracking-wider font-bold">
              Powered by Arthlete
            </p>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[360px] aspect-[9/19] bg-gradient-to-br from-gray-50 to-gray-100 rounded-[3rem] border-8 border-black p-4 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                <Image
                  src="/hero.png"
                  alt="Logger app hero preview"
                  width={720}
                  height={1520}
                  priority
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 360px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM WE SOLVE */}
      <ProblemSection />

      {/* STEPS OF LOGGER */}
      <StepsSection />

      {/* PHONE SCREENS - See Logger in Action */}
      <PhoneScreensSection />

      {/* PRICING */}
      <section id="pricing">
        <PricingPage />
      </section>



      {/* FAQs */}
      <FAQsSection />

      {/* JOIN COMMUNITY */}
      <JoinCommunitySection />
    </main>
  );
}
