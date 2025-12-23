export default function StepsSection() {
    return (
        <section id="steps" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-16 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        How Logger Works
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Three simple steps to track your workouts like a pro
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                    {/* Step 1 */}
                    <div className="text-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black text-white rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-4 sm:mb-6">
                            1
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Create Your Workout</h3>
                        <p className="text-gray-600 text-base sm:text-lg">
                            Start a new session or use a template. Name it, set your exercises, and youre ready to go.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="text-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black text-white rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-4 sm:mb-6">
                            2
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Log Your Sets</h3>
                        <p className="text-gray-600 text-base sm:text-lg">
                            Track weight, reps, and rest time with a clean, distraction-free interface. No clutter.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="text-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black text-white rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-4 sm:mb-6">
                            3
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Track Progress</h3>
                        <p className="text-gray-600 text-base sm:text-lg">
                            View your history, analyze trends, and watch yourself get stronger over time.
                        </p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <button className="px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-800 transition-colors">
                        Get Started Free
                    </button>
                </div>
            </div>
        </section>
    );
}
