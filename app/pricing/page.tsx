export default function PricingPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-8 py-20 sm:py-28 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
        Free. Actually free.
      </h2>

      <p className="text-gray-600 max-w-xl mx-auto mb-12 sm:mb-16 text-sm sm:text-base">
        No trials. No paywalls. No dark patterns. Just a serious workout logger.
      </p>

      <div className="max-w-md mx-auto relative px-2">
        {/* Card */}
        <div className="border rounded-2xl p-6 sm:p-8 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <div className="mb-6 sm:mb-7">
            <span className="text-4xl sm:text-5xl font-bold">₹0</span>
            <span className="text-gray-500 text-base sm:text-lg ml-1">/ forever</span>
          </div>

          <ul className="text-left text-sm sm:text-base text-gray-700 space-y-3 mb-7 sm:mb-8">
            <li>✔ Unlimited workouts</li>
            <li>✔ Progress tracking</li>
            <li>✔ No ads. Ever.</li>
            <li>✔ Offline support</li>
          </ul>

          <button className="w-full py-3 sm:py-3.5 rounded-xl bg-black text-white font-semibold hover:opacity-90 transition">
            Download Logger
          </button>
          <p className="mt-4 text-xs text-gray-500">Start logging in under a minute.</p>
        </div>

        {/* Subtle badge */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white text-[11px] sm:text-xs px-3 py-1 rounded-full">
          No catch
        </div>
      </div>
    </section>
  );
}
