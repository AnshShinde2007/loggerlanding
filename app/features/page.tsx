"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type PhoneProps = {
  title?: string;
  desc?: string;
};

function Phone({ title, desc }: PhoneProps) {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      className="relative w-[260px] h-[500px] cursor-pointer"
      style={{ perspective: 1000 }}
      animate={
        active
          ? {
            scale: 1.12,
            rotateY: 180,
            zIndex: 50,
          }
          : {
            scale: 1,
            rotateY: 0,
          }
      }
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      onClick={() => {
        setActive(true);
        setTimeout(() => setActive(false), 900);
      }}
    >
      {/* Front */}
      <motion.div
        className="absolute inset-0"
        style={{ backfaceVisibility: "hidden" }}
      >
        <Image
          src="/image.png"
          alt="Phone frame"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Back */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-black text-white rounded-2xl p-4"
        style={{
          transform: "rotateY(180deg)",
          backfaceVisibility: "hidden",
        }}
      >
        <div className="text-center">
          <h4 className="font-semibold mb-2">{title}</h4>
          <p className="text-sm text-gray-300">{desc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FeaturesPage() {


  return (
    <section className="max-w-6xl mx-auto px-8 py-28">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Features that stay out of your way
      </h2>
      <p className="text-gray-600 max-w-md mx-auto mb-20 text-center">
        Everything you need to log workouts — nothing you don’t.
      </p>
      <div className="relative flex justify-center mt-16 mb-24">
        <div className="relative w-[860px] h-[520px]">

          {/* Screen 3 (far left) */}
          <div className="absolute left-[0px] top-[24px] z-0 shadow-md">
            <Phone
              title="Clutter-free design"
              desc="Only what you need. Nothing extra."
            />
          </div>

          {/* Screen 2 */}
          <div className="absolute left-[120px] top-[12px] z-10 shadow-lg">
            <Phone
              title="Fast logging"
              desc="Log sets in seconds."
            />
          </div>

          {/* Screen 1 — HERO */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 z-30 shadow-[0_40px_100px_rgba(0,0,0,0.75)]">
            <Phone
              title="Progress tracking"
              desc="See your strength grow over time."
            />
          </div>

          {/* Screen 4 */}
          <div className="absolute right-[120px] top-[12px] z-10 shadow-lg">
            <Phone
              title="Notes per workout"
              desc="Remember how it felt."
            />
          </div>

          {/* Screen 5 (far right) */}
          <div className="absolute right-[0px] top-[24px] z-0 shadow-md">
            <Phone
              title="Offline first"
              desc="Works even without internet."
            />
          </div>

        </div>
      </div>
    </section>
  );
}
