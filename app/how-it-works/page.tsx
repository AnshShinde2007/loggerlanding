"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorksPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".step"),
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  const steps = [
    {
      title: "Open Logger",
      desc: "Start a new workout in seconds.",
    },
    {
      title: "Add exercises",
      desc: "Pick what you’re training today.",
    },
    {
      title: "Log sets",
      desc: "Quickly enter reps and weight.",
    },
    {
      title: "Save workout",
      desc: "Finish and store your session.",
    },
    {
      title: "Track progress",
      desc: "See your improvement over time.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="max-w-6xl mx-auto px-4 sm:px-8 py-20 sm:py-28 text-center"
    >
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
        How Logger works
      </h2>
      <p className="text-gray-600 max-w-md mx-auto mb-12 sm:mb-20 text-sm sm:text-base">
        No setup. No clutter. Just log and train.
      </p>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 sm:gap-14">
        {steps.map((step, i) => (
          <div key={step.title} className="step flex flex-col items-center">
            <div className="w-10 h-10 sm:w-11 sm:h-11 mb-4 sm:mb-5 rounded-full bg-black text-white flex items-center justify-center font-medium">
              {i + 1}
            </div>
            <h3 className="font-semibold mb-2 text-base">{step.title}</h3>
            <p className="text-sm text-gray-600 max-w-[180px] text-center">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
