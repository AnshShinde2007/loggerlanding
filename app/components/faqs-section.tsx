"use client";

import { useState } from "react";

export default function FAQsSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Is Logger really free?",
            answer: "Yes! Logger is completely free to download and use. We offer a premium version with advanced analytics and cloud sync, but the core features are free forever.",
        },
        {
            question: "What platforms is Logger available on?",
            answer: "Logger is available on iOS and Android. We're also working on a web version for desktop users.",
        },
        {
            question: "How is Logger different from other fitness apps?",
            answer: "Logger focuses solely on workout tracking. No social features, no meal plans, no distractions. Just a clean, fast interface for logging your training.",
        },
    ];

    return (
        <section id="faqs" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-16 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600">
                        Everything you need to know about Logger
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-2 border-black rounded-2xl bg-white overflow-hidden"
                        >
                            <button
                                className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="text-lg sm:text-xl font-bold pr-4">{faq.question}</span>
                                <svg
                                    className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {openIndex === index && (
                                <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-gray-600 text-base sm:text-lg border-t-2 border-black pt-4 sm:pt-5">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
