"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const } },
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ken Burns background */}
      <div
        className="absolute inset-0 ken-burns"
        style={{
          backgroundImage: "url('/photos/cover.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-sm tracking-[0.4em] uppercase font-light mb-4 text-[#e8c9b8]"
        >
          Darwin, Northern Territory
        </motion.p>
        <motion.h1
          variants={itemVariants}
          className="font-serif text-5xl md:text-7xl font-normal leading-tight mb-6"
        >
          Katie Pollard
          <span className="block italic font-light">Photography</span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg font-light tracking-wide text-white/85 mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Capturing life's most precious milestones — from first love to new beginnings
        </motion.p>
        <motion.a
          variants={itemVariants}
          href="#contact"
          className="inline-block bg-[#c9a28d] text-white text-sm font-medium tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#b8907a] transition-colors duration-300"
        >
          Book a Session
        </motion.a>
      </motion.div>

      {/* Scroll indicator arrow — bounces, fades on scroll */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 cursor-pointer"
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M10 3v14M3 11l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
