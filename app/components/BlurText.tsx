"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState, useMemo } from "react";
type MotionValue =
  | number
  | string;

type MotionSnapshot = Record<string, MotionValue>;

type BlurTextProps = {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: MotionSnapshot;
  animationTo?: MotionSnapshot[];
  easing?: (t: number) => number;


  onAnimationComplete?: () => void;
  stepDuration?: number;
};

const buildKeyframes = (
  from: MotionSnapshot,
  steps: MotionSnapshot[]
): Record<string, MotionValue[]> => {
  const keys = new Set([
    ...Object.keys(from),
    ...steps.flatMap(s => Object.keys(s)),
  ]);

  const keyframes: Record<string, MotionValue[]> = {};

  keys.forEach(k => {
    keyframes[k] = [from[k], ...steps.map(s => s[k])];
  });

  return keyframes;
};


export default function BlurText({
  text,
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = t => t,
  onAnimationComplete,
  stepDuration = 0.35,
}: BlurTextProps) {
  const elements =
    animateBy === "words" ? text.split(" ") : text.split("");

  const ref = useRef<HTMLParagraphElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const fromSnapshot = useMemo(
    () =>
      animationFrom ??
      (direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -50 }
        : { filter: "blur(10px)", opacity: 0, y: 50 }),
    [animationFrom, direction]
  );

  const toSnapshots = useMemo(
    () =>
      animationTo ?? [
        {
          filter: "blur(5px)",
          opacity: 0.5,
          y: direction === "top" ? 5 : -5,
        },
        { filter: "blur(0px)", opacity: 1, y: 0 },
      ],
    [animationTo, direction]
  );

  const animateKeyframes = useMemo(
    () => buildKeyframes(fromSnapshot, toSnapshots),
    [fromSnapshot, toSnapshots]
  );

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from(
    { length: stepCount },
    (_, i) => i / (stepCount - 1)
  );

  return (
    <p
      ref={ref}
      className={`${className} leading-relaxed`}
    >
      {elements.map((segment, index) => (
        <motion.span
          key={index}
          className="inline-block will-change-[transform,filter,opacity]"
          initial={fromSnapshot}
          animate={inView ? animateKeyframes : fromSnapshot}
          transition={{
            duration: totalDuration,
            times,
            delay: (index * delay) / 1000,
            ease: easing,
          }}
          onAnimationComplete={
            index === elements.length - 1
              ? onAnimationComplete
              : undefined
          }
        >
          {segment === " " ? "\u00A0" : segment}
          {animateBy === "words" &&
            index < elements.length - 1 &&
            "\u00A0"}
        </motion.span>
      ))}
    </p>
  );
}
