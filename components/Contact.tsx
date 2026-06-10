"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const sessionTypes = [
  "Engagement",
  "Wedding",
  "Newborn",
  "Maternity",
  "Family",
  "Pets",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sessionType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Photography Enquiry - ${formData.sessionType || "General"}`);
    const body = encodeURIComponent(
      `Hi Katie,\n\nMy name is ${formData.name}.\n\nSession type: ${formData.sessionType}\n\n${formData.message}\n\nBest,\n${formData.name}\n${formData.email}`
    );
    window.location.href = `mailto:katiepollard85@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left — info, fade up */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs tracking-[0.4em] uppercase text-[#c9a28d] mb-4">Let's Connect</p>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#3d2e26] mb-6 leading-tight">
              Book Your<br />
              <span className="italic">Session</span>
            </h2>
            <div className="w-12 h-px bg-[#c9a28d] mb-8" />
            <p className="text-[#7a5c4e] font-light leading-relaxed mb-10">
              Ready to create something beautiful together? I'd love to hear about your vision. 
              Send me a message and I'll be in touch within 24 hours.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#e8ddd0] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#c9a28d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-[#c9a28d] mb-1">Location</p>
                  <p className="text-[#3d2e26] font-light">Darwin, Northern Territory, Australia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#e8ddd0] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#c9a28d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-[#c9a28d] mb-1">Phone</p>
                  <a href="tel:+61400441595" className="text-[#3d2e26] font-light hover:text-[#c9a28d] transition-colors">
                    +61 400 441 595
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#e8ddd0] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#c9a28d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-[#c9a28d] mb-1">Email</p>
                  <a href="mailto:katiepollard85@gmail.com" className="text-[#3d2e26] font-light hover:text-[#c9a28d] transition-colors">
                    katiepollard85@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#e8ddd0] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#c9a28d]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-[#c9a28d] mb-1">Follow Along</p>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/katie_pollard_photos/" target="_blank" rel="noopener noreferrer" className="text-[#3d2e26] font-light hover:text-[#c9a28d] transition-colors text-sm">Instagram</a>
                    <a href="https://www.facebook.com/katiepollardphotos/" target="_blank" rel="noopener noreferrer" className="text-[#3d2e26] font-light hover:text-[#c9a28d] transition-colors text-sm">Facebook</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — form, fade up with slight delay */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="peer w-full border-b border-[#e8ddd0] bg-transparent pt-6 pb-2 text-[#3d2e26] font-light placeholder-transparent focus:outline-none focus:border-[#c9a28d] transition-colors"
                  placeholder="Jane Smith"
                  id="name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-0 text-xs tracking-widest uppercase text-[#7a5c4e] transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-[#c4b4a8] peer-focus:top-0 peer-focus:text-xs peer-focus:tracking-widest peer-focus:text-[#c9a28d]"
                >
                  Your Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="peer w-full border-b border-[#e8ddd0] bg-transparent pt-6 pb-2 text-[#3d2e26] font-light placeholder-transparent focus:outline-none focus:border-[#c9a28d] transition-colors"
                  placeholder="jane@example.com"
                  id="email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-0 text-xs tracking-widest uppercase text-[#7a5c4e] transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-[#c4b4a8] peer-focus:top-0 peer-focus:text-xs peer-focus:tracking-widest peer-focus:text-[#c9a28d]"
                >
                  Email Address
                </label>
              </div>

              {/* Session type */}
              <div>
                <label className="block text-xs tracking-widest uppercase text-[#7a5c4e] mb-2">Session Type</label>
                <select
                  value={formData.sessionType}
                  onChange={(e) => setFormData({ ...formData, sessionType: e.target.value })}
                  className="w-full border-b border-[#e8ddd0] bg-transparent py-3 text-[#3d2e26] font-light focus:outline-none focus:border-[#c9a28d] transition-colors appearance-none"
                >
                  <option value="">Select a session type...</option>
                  {sessionTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="peer w-full border-b border-[#e8ddd0] bg-transparent pt-6 pb-2 text-[#3d2e26] font-light placeholder-transparent focus:outline-none focus:border-[#c9a28d] transition-colors resize-none"
                  placeholder="Share any details..."
                  id="message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 top-0 text-xs tracking-widest uppercase text-[#7a5c4e] transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-[#c4b4a8] peer-focus:top-0 peer-focus:text-xs peer-focus:tracking-widest peer-focus:text-[#c9a28d]"
                >
                  Tell Me About Your Session
                </label>
              </div>

              {/* Submit — shimmer button */}
              <button
                type="submit"
                className="shimmer-btn w-full bg-[#c9a28d] text-white text-sm font-medium tracking-[0.2em] uppercase py-4 hover:bg-[#b8907a] transition-colors duration-300 relative overflow-hidden"
              >
                Send Enquiry
              </button>

              <p className="text-xs text-[#7a5c4e] text-center font-light">
                I'll respond within 24 hours ✦
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
