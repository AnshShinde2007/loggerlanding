export default function Footer() {
  return (
    <footer className="bg-black text-white py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center gap-6 sm:gap-8">
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold">
          Stop fighting your workout app.
        </p>

        <button className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition">
          Download Logger — Free
        </button>

        <div className="flex flex-wrap justify-center gap-3 text-sm">
          <a
            href="https://x.com/arthlete_fit?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAOw0rNleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAadxX_UrBbKNWBi2hIijoFfgZuUj1dySpUkjeyP1_V1f0p2eSRCkycVJqBkDmQ_aem_NN2QzPkOXBdd0Ziw1MXrFw"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2 rounded-lg border border-white/30 text-white hover:bg-white hover:text-black transition flex items-center gap-2"
          >
              <img src="/x.png" alt="" className="w-5 h-5 object-contain" />
            <span className="sr-only">X</span>
          </a>
          <a
            href="https://www.instagram.com/logger.fit?igsh=MWw4djZiOHB2MW1zZg=="
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2 rounded-lg border border-white/30 text-white hover:bg-white hover:text-black transition flex items-center gap-2"
          >
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="4" width="16" height="16" rx="4" ry="4" />
              <circle cx="12" cy="12" r="3.5" />
              <circle cx="16.5" cy="7.5" r="1" fill="currentColor" />
            </svg>
            <span className="sr-only">Instagram</span>
          </a>
        </div>

        <div className="pt-2 text-xs sm:text-sm text-gray-400 flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
          <span>Built for lifters.</span>
          <span className="hidden sm:inline">·</span>
          <span>Powered by Arthlete</span>
        </div>
      </div>
    </footer>
  );
}
