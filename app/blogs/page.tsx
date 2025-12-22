import Link from "next/link";

export default function BlogsPage() {
    const blogPosts = [
        {
            title: "5 Reasons Why Simple Workout Tracking Works Better",
            excerpt: "Discover why minimalist workout logging helps you stay consistent and see better results than complex fitness apps.",
            date: "December 15, 2024",
            category: "Training Tips",
            readTime: "5 min read",
            slug: "simple-workout-tracking",
        },
        {
            title: "How to Build a Sustainable Workout Routine",
            excerpt: "Learn the fundamentals of creating a workout routine that you'll actually stick to for the long term.",
            date: "December 10, 2024",
            category: "Fitness",
            readTime: "7 min read",
            slug: "#",
        },
        {
            title: "The Power of Progressive Overload: Why Tracking Is Essential",
            excerpt: "Understanding progressive overload is key to making consistent gains. Here's how to track it effectively.",
            date: "December 5, 2024",
            category: "Training Tips",
            readTime: "6 min read",
            slug: "progressive-overload",
        },
        {
            title: "Why You Don't Need a Complicated Fitness App",
            excerpt: "Most fitness apps are bloated with features you'll never use. Here's why simple is better.",
            date: "November 28, 2024",
            category: "Productivity",
            readTime: "4 min read",
            slug: "why-simple-apps",
        },
        {
            title: "Tracking Your Workouts: A Beginner's Guide",
            excerpt: "New to workout tracking? Start here with our complete beginner's guide to logging your training.",
            date: "November 20, 2024",
            category: "Getting Started",
            readTime: "8 min read",
            slug: "#",
        },
        {
            title: "The Science Behind Rest Days",
            excerpt: "Rest days are just as important as training days. Learn why recovery matters for your progress.",
            date: "November 15, 2024",
            category: "Fitness",
            readTime: "5 min read",
            slug: "#",
        },
    ];

    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="py-20 px-6 sm:px-12 lg:px-16 bg-black text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                        Logger Blog
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Tips, insights, and stories to help you train smarter and stay consistent.
                    </p>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-20 px-6 sm:px-12 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <Link
                                key={index}
                                href={`/blogs/${post.slug}`}
                                className="border-2 border-black rounded-2xl bg-white hover:shadow-lg transition-shadow overflow-hidden group"
                            >
                                {/* Image Placeholder */}
                                <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                    <div className="text-gray-400 text-sm">Blog Image</div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
                                        <span className="px-3 py-1 bg-black text-white rounded-full text-xs font-semibold">
                                            {post.category}
                                        </span>
                                        <span>{post.readTime}</span>
                                    </div>

                                    <h2 className="text-2xl font-bold mb-3 group-hover:opacity-70 transition-opacity">
                                        {post.title}
                                    </h2>

                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t-2 border-gray-200">
                                        <span className="text-sm text-gray-500">{post.date}</span>
                                        <span className="text-sm font-semibold group-hover:underline">
                                            Read more →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-20 px-6 sm:px-12 lg:px-16 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                        Stay Updated
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Get the latest training tips and Logger updates delivered to your inbox.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-3 rounded-lg border-2 border-black font-medium focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        <button
                            type="submit"
                            className="px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}
