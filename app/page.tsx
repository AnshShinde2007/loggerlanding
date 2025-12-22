import PricingPage from "./pricing/page";
import ProblemSection from "./components/problem-section";
import StepsSection from "./components/steps-section";

import FAQsSection from "./components/faqs-section";
import PhoneScreensSection from "./components/phone-screens-section";
import JoinCommunitySection from "./components/join-community-section";

export default function HomePage() {
  return (
    <main className="w-full">
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-16 py-16">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight">
              Log your workouts
              <br />
              <span className="text-gray-400">Without the clutter.</span>
            </h1>

            <p className="mt-6 text-gray-500 text-base sm:text-lg max-w-md leading-relaxed">
              Logger is a minimal workout logger built for gym and home workouts. Track exercises, sets, reps, and progress without fighting the UI.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://app.youform.com/forms/tabbd897"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center"
              >
                Join Waitlist
              </a>
              <button className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                See how it works
              </button>
            </div>

            <p className="mt-8 text-xs text-gray-400 uppercase tracking-wider font-bold">
              Powered by Arthlete
            </p>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-lg aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl flex items-center justify-center border border-gray-200">
              {/* This is where you'll add your image */}
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-2xl flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm">Add your image here</p>
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
