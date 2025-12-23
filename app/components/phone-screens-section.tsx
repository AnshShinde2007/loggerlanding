import Image from "next/image";

export default function PhoneScreensSection() {
    return (
        <section id="phone-screens" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        See Logger in Action
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Clean interface. Fast performance. Zero distractions.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
                    {/* Phone Screen 1 */}
                    <div className="flex flex-col items-center">
                        <div className="w-full max-w-xs aspect-[9/19] bg-gradient-to-br from-gray-100 to-gray-200 rounded-[3rem] border-8 border-black p-4 shadow-2xl">
                            <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                                <Image
                                    src="/screen3.png"
                                    alt="Logger Main Screen"
                                    width={400}
                                    height={800}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <p className="mt-4 sm:mt-6 text-base sm:text-lg font-semibold">Add Exercise</p>
                    </div>

                    {/* Phone Screen 2 */}
                    <div className="flex flex-col items-center">
                        <div className="w-full max-w-xs aspect-[9/19] bg-gradient-to-br from-gray-100 to-gray-200 rounded-[3rem] border-8 border-black p-4 shadow-2xl">
                            <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                                <Image
                                    src="/screen4.png"
                                    alt="Today's Workout Summary"
                                    width={400}
                                    height={800}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <p className="mt-4 sm:mt-6 text-base sm:text-lg font-semibold">Today's Summary</p>
                    </div>

                    {/* Phone Screen 3 */}
                    <div className="flex flex-col items-center">
                        <div className="w-full max-w-xs aspect-[9/19] bg-gradient-to-br from-gray-100 to-gray-200 rounded-[3rem] border-8 border-black p-4 shadow-2xl">
                            <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                                <Image
                                    src="/screen5.png"
                                    alt="Progress Tracking Dashboard"
                                    width={400}
                                    height={800}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <p className="mt-4 sm:mt-6 text-base sm:text-lg font-semibold">Progress Tracking</p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg"></p>
                    <a
                        href="https://app.youform.com/forms/tabbd897"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-800 transition-colors"
                    >
                        Join Waitlist
                    </a>
                </div>
            </div>
        </section>
    );
}
