export default function PricingPage() {
  return (
    <main className="max-w-4xl mx-auto px-8 py-20 text-center">
      <h1 className="text-4xl font-bold mb-6">Free. Actually free.</h1>

      <div className="max-w-sm mx-auto border rounded-xl p-6">
        <p className="text-4xl font-bold mb-4">₹0</p>
        <ul className="text-sm text-gray-600 space-y-2 mb-6">
          <li>Unlimited workouts</li>
          <li>No ads</li>
          <li>Progress tracking</li>
        </ul>
        <button className="w-full py-3 bg-black text-white rounded">
          Download Logger
        </button>
      </div>
    </main>
  );
}
