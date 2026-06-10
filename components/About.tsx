"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#faf6f1]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image — slide in from left */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#c9a28d]/30" />
            <div className="relative overflow-hidden aspect-[4/5]">
              <motion.div
                className="w-full h-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/photos/profile.jpg"
                  alt="Katie Pollard"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Text — slide in from right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <p className="text-xs tracking-[0.4em] uppercase text-[#c9a28d] mb-4">About Katie</p>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#3d2e26] mb-8 leading-tight">
              Stories told with<br />
              <span className="italic">heart & light</span>
            </h2>
            <div className="w-12 h-px bg-[#c9a28d] mb-8" />
            <p className="text-[#7a5c4e] leading-relaxed mb-6 font-light">
              Katie Pollard Photography captures life's special milestones, from engagements and weddings 
              to first pets, pregnancy and newborns.
            </p>
            <p className="text-[#7a5c4e] leading-relaxed mb-6 font-light">
              Creating timeless, heartfelt images that tell your unique love story every step of the way. 
              Based in beautiful Darwin, Northern Territory — Australia's Top End provides the most 
              spectacular natural backdrops for your most cherished memories.
            </p>
            <p className="text-[#7a5c4e] leading-relaxed mb-10 font-light">
              Every session is a collaboration — relaxed, genuine, and filled with real moments that 
              you'll treasure for a lifetime.
            </p>
            <a
              href="#contact"
              className="inline-block border border-[#c9a28d] text-[#c9a28d] text-xs font-medium tracking-[0.2em] uppercase px-8 py-3 hover:bg-[#c9a28d] hover:text-white transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
