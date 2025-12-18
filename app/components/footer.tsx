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

        <div className="pt-2 text-xs sm:text-sm text-gray-400 flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
          <span>Built for lifters.</span>
          <span className="hidden sm:inline">·</span>
          <span>Powered by Arthlete</span>
        </div>
      </div>
    </footer>
  );
}
