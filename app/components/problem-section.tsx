export default function ProblemSection() {
    return (
        <section id="problem" className="py-20 px-6 sm:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        The Problem We Solve
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Most fitness apps are bloated with features you'll never use. We built Logger for people who just want to train.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Problem 1 */}
                    <div className="p-8 border-2 border-black rounded-2xl bg-white hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Bloated Apps</h3>
                        <p className="text-gray-600">
                            Social feeds, meal plans, meditation guides—you don't need any of that. You need a workout logger.
                        </p>
                    </div>

                    {/* Problem 2 */}
                    <div className="p-8 border-2 border-black rounded-2xl bg-white hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Complex UI</h3>
                        <p className="text-gray-600">
                            Navigating through 5 screens just to log a set shouldn't be normal. Logger keeps it simple.
                        </p>
                    </div>

                    {/* Problem 3 */}
                    <div className="p-8 border-2 border-black rounded-2xl bg-white hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Slow & Laggy</h3>
                        <p className="text-gray-600">
                            Your rest timer shouldn't freeze. Logger is built to be fast, responsive, and reliable.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
