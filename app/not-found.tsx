import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-16 bg-background text-foreground">
      <div className="max-w-lg text-center space-y-6">
        <p className="text-sm font-semibold text-gray-500">404</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Page not found</h1>
        <p className="text-gray-600 text-sm sm:text-base">
          The link you followed doesn&apos;t exist or has moved. Pick a page below to keep training.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-5 py-3 rounded-lg bg-black text-white font-semibold hover:opacity-90 transition"
          >
            Go to home
          </Link>
          <Link
            href="/pricing"
            className="px-5 py-3 rounded-lg border font-semibold hover:bg-gray-50 transition"
          >
            View pricing
          </Link>
        </div>
      </div>
    </main>
  );
}
