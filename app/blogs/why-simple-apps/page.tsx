import Link from "next/link";

export default function BlogPost3() {
    return (
        <main className="w-full">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                <Link href="/blogs" className="text-sm font-semibold hover:opacity-60 transition-opacity mb-8 inline-block">
                    ← Back to Blogs
                </Link>

                <div className="mb-8">
                    <span className="px-3 py-1 bg-black text-white rounded-full text-xs font-semibold">Productivity</span>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mt-4 sm:mt-6 mb-3 sm:mb-4">
                        Why You Don't Need a Complicated Fitness App
                    </h1>
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                        <span>November 28, 2024</span>
                        <span>•</span>
                        <span>4 min read</span>
                    </div>
                </div>

                <div className="prose prose-lg max-w-none">
                    <p className="text-base sm:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                        The fitness app market is flooded with products promising to revolutionize your training. But do you really need an app that tracks your sleep, counts your steps, plans your meals, and connects you with a social network? Probably not.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-bold mt-10 sm:mt-12 mb-3 sm:mb-4">The Feature Creep Problem</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Most fitness apps suffer from feature creep. They start as workout trackers, then add meal planning. Then social features. Then meditation guides. Then sleep tracking. Then habit tracking. Before you know it, you're using 10% of the app's features and feeling overwhelmed by the other 90%.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        This isn't accidental. App developers add features to justify subscription prices and increase engagement metrics. But more features don't make you stronger—they just make the app more complicated.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-bold mt-10 sm:mt-12 mb-3 sm:mb-4">What You Actually Need</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">Let's be honest about what you need from a workout tracker:</p>
                    <ul className="list-disc pl-6 mb-6 text-gray-700">
                        <li className="mb-2">A way to log exercises, sets, reps, and weight</li>
                        <li className="mb-2">Access to your workout history</li>
                        <li className="mb-2">A fast, distraction-free interface you can use under fatigue</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        That's it. Everything else is noise. You don't need a social feed to get stronger. You don't need AI-generated workout plans. You don't need gamification badges. You need to show up, lift weights, and track your progress.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-bold mt-10 sm:mt-12 mb-3 sm:mb-4">The Cost of Complexity</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Complicated apps have hidden costs. Every extra feature is another thing to learn, another screen to navigate, another setting to configure. This complexity creates friction, and friction kills consistency.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Think about it: you're between sets, your rest timer is running, and you need to log your reps. Do you want to navigate through a maze of features, or do you want to tap a few buttons and get back to training? The answer is obvious.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-bold mt-10 sm:mt-12 mb-3 sm:mb-4">Simple Apps, Better Results</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Simple workout trackers have a massive advantage: they're easy to use consistently. When an app does one thing well, you actually use it. Every workout. For months. For years. That consistency is what drives results.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-bold mt-10 sm:mt-12 mb-3 sm:mb-4">The Minimalist Advantage</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Minimalist workout trackers are faster and easier to learn. They're less likely to crash or have bugs. They respect your time and your focus. They don't try to be everything—they aim to be excellent at one thing: tracking your training.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-bold mt-10 sm:mt-12 mb-3 sm:mb-4">Make the Switch</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Try this for one month: use the simplest workout tracker you can find. Just log your exercises, sets, reps, and weight. Nothing else. You'll likely be more consistent, less stressed, and more focused on what matters.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        The best fitness app isn't the one with the most features—it's the one you actually use. And simple apps win that battle every time.
                    </p>
                </div>

                <div className="mt-12 sm:mt-16 p-6 sm:p-8 border-2 border-black rounded-2xl bg-gray-50 text-center">
                    <h3 className="text-2xl font-bold mb-4">Experience the power of simplicity</h3>
                    <p className="text-gray-600 mb-6">Logger does one thing perfectly: track your workouts.</p>
                    <a
                        href="https://app.youform.com/forms/tabbd897"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 sm:px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                    >
                        Join Waitlist
                    </a>
                </div>
            </article>
        </main>
    );
}
