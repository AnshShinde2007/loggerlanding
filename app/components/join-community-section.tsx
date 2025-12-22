export default function JoinCommunitySection() {
    return (
        <section id="community" className="py-20 px-6 sm:px-12 lg:px-16 bg-black text-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                    Join the Logger Community
                </h2>
                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                    Connect with thousands of athletes, share your progress, and get support from people who train like you do.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
                    {/* Discord */}
                    <a
                        href="#"
                        className="p-6 border-2 border-white rounded-2xl hover:bg-white hover:text-black transition-colors group"
                    >
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                            </svg>
                            <span className="text-xl font-bold">Discord</span>
                        </div>
                        <p className="text-gray-300 group-hover:text-black">Join our Discord server</p>
                    </a>

                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/logger.fit?igsh=MWw4djZiOHB2MW1zZg=="
                        target="_blank"
                        rel="noreferrer"
                        className="p-6 border-2 border-white rounded-2xl hover:bg-white hover:text-black transition-colors group"
                    >
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                <rect x="4" y="4" width="16" height="16" rx="4" ry="4" />
                                <circle cx="12" cy="12" r="3.5" />
                                <circle cx="16.5" cy="7.5" r="1" fill="currentColor" />
                            </svg>
                            <span className="text-xl font-bold">Instagram</span>
                        </div>
                        <p className="text-gray-300 group-hover:text-black">Follow us on Instagram</p>
                    </a>
                </div>
            </div>
        </section>
    );
}
