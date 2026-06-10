"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=800", alt: "Family at beach" },
  { src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800", alt: "Engagement couple" },
  { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800", alt: "Wedding" },
  { src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800", alt: "Newborn" },
  { src: "https://images.unsplash.com/photo-1584559582128-b8be739912e1?w=800", alt: "Maternity portrait" },
  { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800", alt: "Children at beach" },
  { src: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800", alt: "Beach portrait" },
  { src: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800", alt: "Family sunset" },
  { src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800", alt: "Pet portrait" },
  { src: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=800", alt: "Maternity glow" },
  { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800", alt: "Portrait session" },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closeLightbox, goNext, goPrev]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#faf6f1]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-[#c9a28d] mb-4">The Work</p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#3d2e26] mb-6">
            Gallery
          </h2>
          <div className="w-12 h-px bg-[#c9a28d] mx-auto mb-6" />
          <p className="text-[#7a5c4e] font-light max-w-md mx-auto">
            A glimpse into some of the moments I've been privileged to capture.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              className="break-inside-avoid overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              onClick={() => setLightboxIndex(i)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-[#7a5c4e] font-light mb-6">
            Want to see more? Follow along on Instagram & Facebook
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/katie_pollard_photos/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#c9a28d] text-[#c9a28d] text-xs font-medium tracking-[0.2em] uppercase px-6 py-3 hover:bg-[#c9a28d] hover:text-white transition-all duration-300"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/katiepollardphotos/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#c9a28d] text-[#c9a28d] text-xs font-medium tracking-[0.2em] uppercase px-6 py-3 hover:bg-[#c9a28d] hover:text-white transition-all duration-300"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            {/* Dark backdrop */}
            <div className="absolute inset-0 bg-black/90" />

            {/* Close button */}
            <button
              className="absolute top-5 right-5 text-white/80 hover:text-white z-10 p-2 transition-colors"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Prev arrow */}
            <button
              className="absolute left-4 md:left-8 text-white/70 hover:text-white z-10 p-2 transition-colors"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              aria-label="Previous"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              className="relative z-10 max-w-5xl max-h-[85vh] mx-16 md:mx-24"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                width={1200}
                height={900}
                className="object-contain max-h-[85vh] w-auto mx-auto"
                style={{ maxHeight: "85vh" }}
              />
              <p className="text-white/60 text-xs tracking-widest uppercase text-center mt-4">
                {lightboxIndex + 1} / {galleryImages.length}
              </p>
            </motion.div>

            {/* Next arrow */}
            <button
              className="absolute right-4 md:right-8 text-white/70 hover:text-white z-10 p-2 transition-colors"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              aria-label="Next"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
