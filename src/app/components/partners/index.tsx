"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

import { cn } from "@/src/lib/utils";
import logos from "@/src/app/data/partners.json"; // Import the JSON file

interface PartnerLogo {
  src: string;
  alt: string;
}

interface PartnerLogosScrollProps {
  baseVelocity?: number;
  className?: string;
}

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

function LogoScroll({
  baseVelocity = 100,
  className,
}: PartnerLogosScrollProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const [repetitions, setRepetitions] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateRepetitions = () => {
      if (containerRef.current && logosRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const logosWidth = logosRef.current.offsetWidth;
        const newRepetitions = Math.ceil(containerWidth / logosWidth) + 1;
        setRepetitions(newRepetitions);
      }
    };

    calculateRepetitions();

    window.addEventListener("resize", calculateRepetitions);
    return () => window.removeEventListener("resize", calculateRepetitions);
  }, []); // Removed `logos` as a dependency

  const x = useTransform(baseX, (v) => `${wrap(-100, 0, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className="w-full overflow-hidden whitespace-nowrap relative"
      ref={containerRef}
    >
      <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-black to-transparent z-10" />
      <motion.div className={cn("inline-block", className)} style={{ x }}>
        {Array.from({ length: repetitions }).map((_, i) => (
          <div
            key={i}
            className="inline-flex items-center"
            ref={i === 0 ? logosRef : null}
          >
            {logos.map((logo, index) => (
              <div key={index} className="inline-block mx-6">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={250}
                  height={120}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function PartnerLogosScroll({
  baseVelocity = 5,
  className,
}: PartnerLogosScrollProps) {
  return (
    <section className="relative w-full py-5 bg-gradient-to-r from-transparent via-black to-transparent">
      <LogoScroll baseVelocity={baseVelocity} className={className} />
    </section>
  );
}
