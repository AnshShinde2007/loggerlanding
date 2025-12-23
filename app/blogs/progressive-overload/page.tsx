import Link from "next/link";

export default function BlogPost2() {
    return (
        <main className="w-full">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                <Link href="/blogs" className="text-sm font-semibold hover:opacity-60 transition-opacity mb-8 inline-block">
                    ← Back to Blogs
                </Link>

                <div className="mb-8">
                    <span className="px-3 py-1 bg-black text-white rounded-full text-xs font-semibold">
                        Training Tips
                    </span>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mt-4 sm:mt-6 mb-3 sm:mb-4">
                        The Power of Progressive Overload: Why Tracking Is Essential
                    </h1>
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                        <span>December 5, 2024</span>
                        <span>•</span>
                        <span>6 min read</span>
                    </div>
                </div>

                <div className="prose prose-lg max-w-none">
                    <p className="text-base sm:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                        Progressive overload is the single most important principle in strength training. But without proper tracking, you're flying blind. Here's why logging your workouts is the key to consistent gains.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-bold mt-10 sm:mt-12 mb-3 sm:mb-4">What Is Progressive Overload?</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Progressive overload is simple: to get stronger, you must gradually increase the demands on your muscles over time. This can mean adding weight to the bar, doing more reps, adding more sets, or reducing rest time.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Your body adapts to stress. When you lift a weight, your muscles experience micro-tears. During recovery, your body repairs these tears and builds the muscle slightly stronger to handle that stress next time. But here's the catch: if you keep lifting the same weight for the same reps, your body has no reason to adapt further.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-bold mt-10 sm:mt-12 mb-3 sm:mb-4">Why You Can't Rely on Memory</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Ask yourself: what weight did you use for squats three weeks ago? How many reps did you get on your last set of bench press last Monday? If you can't answer these questions immediately, you're not alone—and you're missing out on gains.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Human memory is unreliable, especially when you're training multiple exercises across multiple sessions per week. You might remember your big lifts, but what about your accessories? Your isolation work? Without tracking, you're guessing, and guessing doesn't build muscle.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-bold mt-10 sm:mt-12 mb-3 sm:mb-4">The Data-Driven Approach</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        When you track every workout, you create a roadmap of your progress. You can see exactly what you did last time, which means you know exactly what you need to do this time to progress. No guesswork, no wasted sets, no spinning your wheels.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Let's say last week you did 3 sets of 8 reps on bench press with 185 lbs. This week, you have clear options for progressive overload:
                    </p>
                    <ul className="list-disc pl-6 mb-6 text-gray-700">
                        <li className="mb-2">Add 5 lbs and do 3 sets of 8 reps with 190 lbs</li>
                        <li className="mb-2">Keep 185 lbs but do 3 sets of 9 reps</li>
                        <li className="mb-2">Add a fourth set at 185 lbs for 8 reps</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        All of these represent progress. But you can only make these informed decisions if you know what you did last time.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-bold mt-10 sm:mt-12 mb-3 sm:mb-4">Tracking Reveals Plateaus Early</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        When you track your workouts, plateaus become obvious. If you see that you've been stuck at the same weight for three weeks, you know it's time to change something—maybe deload, switch exercises, or adjust your programming.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Without tracking, plateaus are invisible. You might think you're making progress when you're actually spinning your wheels. Weeks turn into months, and you wonder why you're not getting stronger.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-bold mt-10 sm:mt-12 mb-3 sm:mb-4">Motivation Through Visible Progress</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        There's something incredibly motivating about seeing your numbers go up over time. When you can look back at your training log and see that you've added 50 lbs to your squat in three months, that's tangible proof of your hard work.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        This visible progress keeps you motivated during tough training blocks. When a workout feels hard, you can look at your history and see how far you've come. That perspective is invaluable for long-term consistency.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-bold mt-10 sm:mt-12 mb-3 sm:mb-4">How to Track Effectively</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Effective tracking doesn't need to be complicated. For each exercise, log:
                    </p>
                    <ul className="list-disc pl-6 mb-6 text-gray-700">
                        <li className="mb-2"><strong>Weight used:</strong> The actual load on the bar</li>
                        <li className="mb-2"><strong>Reps completed:</strong> How many reps you got for each set</li>
                        <li className="mb-2"><strong>Sets performed:</strong> Total number of sets</li>
                        <li className="mb-2"><strong>Notes (optional):</strong> How it felt, any form issues, etc.</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        That's it. You don't need to track calories, steps, heart rate, or sleep quality. Just the basics that drive progressive overload.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-bold mt-10 sm:mt-12 mb-3 sm:mb-4">Start Today</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        If you're not tracking your workouts, start today. It doesn't matter if you use a notebook, a spreadsheet, or an app—just start recording your exercises, sets, reps, and weight.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        After a few weeks, you'll wonder how you ever trained without it. The clarity, the progress, the motivation—it all comes from having data. Progressive overload is the key to gains, and tracking is the key to progressive overload.
                    </p>
                </div>

                <div className="mt-16 p-8 border-2 border-black rounded-2xl bg-gray-50 text-center">
                    <h3 className="text-2xl font-bold mb-4">Track your progressive overload with Logger</h3>
                    <p className="text-gray-600 mb-6">Simple, fast, and built for serious lifters.</p>
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
