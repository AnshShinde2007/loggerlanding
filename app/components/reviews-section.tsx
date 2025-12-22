export default function ReviewsSection() {
    const reviews = [
        {
            name: "Alex Chen",
            role: "Powerlifter",
            content: "Finally, a workout app that doesn't try to be everything. Logger does one thing and does it perfectly.",
            rating: 5,
        },
        {
            name: "Sarah Martinez",
            role: "CrossFit Athlete",
            content: "I've tried every fitness app out there. Logger is the only one I actually use consistently. It's that good.",
            rating: 5,
        },
        {
            name: "Mike Johnson",
            role: "Bodybuilder",
            content: "No social feeds, no meal plans, just pure workout tracking. Exactly what I needed.",
            rating: 5,
        },
        {
            name: "Emma Wilson",
            role: "Home Gym Enthusiast",
            content: "The UI is so clean and fast. I can log my entire workout in seconds. Game changer.",
            rating: 5,
        },
        {
            name: "David Kim",
            role: "Strength Coach",
            content: "I recommend Logger to all my clients. Simple, effective, and actually helps them stay consistent.",
            rating: 5,
        },
        {
            name: "Lisa Anderson",
            role: "Marathon Runner",
            content: "Best workout logger I've ever used. No fluff, just results. Love it!",
            rating: 5,
        },
    ];

    return (
        <section id="reviews" className="py-20 px-6 sm:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        Loved by Athletes
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Join thousands of people who train seriously
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="p-6 border-2 border-black rounded-2xl bg-white hover:shadow-lg transition-shadow"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-black"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4 text-lg">{review.content}</p>
                            <div className="border-t-2 border-gray-200 pt-4">
                                <p className="font-bold text-lg">{review.name}</p>
                                <p className="text-gray-500">{review.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
