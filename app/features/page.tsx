"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ---------- Phone (DUMB component) ---------- */

type PhoneContent = {
  title: string;
  desc: string;
  image: string;
};

type PhoneProps = PhoneContent & {
  flipped: boolean;
};


function Phone({ title, desc, image, flipped }: PhoneProps) {
  return (
    <motion.div
      className="relative w-[260px] h-[500px]"
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      animate={{ rotateY: flipped ? 180 : 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Front */}
      <div className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
        />
      </div>

      {/* Back */}
      <div
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
      </div>
    </motion.div>
  );
}

function PhoneCard({ title, desc, image }: PhoneContent) {
  return (
    <div className="rounded-3xl border shadow-sm overflow-hidden bg-white">
      <div className="relative w-full aspect-[260/500] bg-neutral-50">
        <Image src={image} alt={title} fill className="object-contain" sizes="(max-width: 640px) 100vw, 480px" />
      </div>
      <div className="p-5">
        <h4 className="font-semibold mb-2">{title}</h4>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < breakpoint);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [breakpoint]);

  return isMobile;
}


/* ---------- Data ---------- */

const phones: PhoneContent[] = [
  {
    title: "Clutter-free design",
    desc: "Only what you need. Nothing extra.",
    image: "/screen3.png",
  },
  {
    title: "Fast logging",
    desc: "Log sets in seconds.",
    image: "/screen2.png",
  },
  {
    title: "Progress tracking",
    desc: "See your strength grow over time.",
    image: "/screen1.png",
  },
  {
    title: "Notes per workout",
    desc: "Remember how it felt.",
    image: "/screen4.png",
  },
  {
    title: "Offline first",
    desc: "Works even without internet.",
    image: "/screen5.png",
  },
];


const slots = [
  { x: -280, y: 24, scale: 0.9, z: 0 },
  { x: -140, y: 12, scale: 0.95, z: 10 },
  { x: 0, y: 0, scale: 1.05, z: 30 }, // CENTER
  { x: 140, y: 12, scale: 0.95, z: 10 },
  { x: 280, y: 24, scale: 0.9, z: 0 },
];

/* ---------- Page ---------- */

export default function FeaturesPage() {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(2); // center by default
  const [flipped, setFlipped] = useState(false);

  if (isMobile) {
    return (
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-20 sm:py-28">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Features that stay out of your way
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto mb-12 text-center">
          Everything you need to log workouts — nothing you don’t.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {phones.map((phone) => (
            <PhoneCard key={phone.title} {...phone} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-8 py-20 sm:py-28">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Features that stay out of your way
      </h2>

      <p className="text-gray-600 max-w-xl mx-auto mb-16 text-center">
        Everything you need to log workouts — nothing you don’t.
      </p>

      <div className="relative flex justify-center mt-12 sm:mt-16 mb-16 sm:mb-24">
        <div className="relative w-full max-w-[920px] h-[520px] flex justify-center">

          {phones.map((phone, i) => {
            const slotIndex = i - activeIndex + 2;
            if (slotIndex < 0 || slotIndex > 4) return null;

            const slot = slots[slotIndex];

            return (
              <motion.div
                key={i}
                className="absolute cursor-pointer"
                animate={{
                  x: slot.x,
                  y: slot.y,
                  scale: slot.scale,
                  zIndex: slot.z,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 22,
                }}
                onClick={() => {
                  if (activeIndex === i) {
                    setFlipped(v => !v); // flip only if centered
                  } else {
                    setActiveIndex(i);   // bring to center
                    setFlipped(false);   // reset flip
                  }
                }}
              >
                <Phone
                  title={phone.title}
                  desc={phone.desc}
                  image={phone.image}
                  flipped={activeIndex === i && flipped}
                />

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
