"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Engagements",
    description: "Celebrate your 'yes' with beautiful, authentic images that capture the joy and love of your engagement.",
    image: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800",
  },
  {
    title: "Weddings",
    description: "From the quiet moments getting ready to the last dance, every detail of your perfect day, preserved.",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800",
  },
  {
    title: "Newborns",
    description: "Those impossibly tiny fingers and toes — captured while they're still new. Gentle, warm, and timeless.",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800",
  },
  {
    title: "Maternity",
    description: "Honouring the beautiful journey of pregnancy with stunning portraits that celebrate this magical chapter.",
    image: "https://images.unsplash.com/photo-1584559582128-b8be739912e1?w=800",
  },
  {
    title: "Families",
    description: "Real laughter, real connection. Family sessions are relaxed and fun — exactly the way memories should be made.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=800",
  },
  {
    title: "Pets",
    description: "First pets are family too. Personality-driven pet portraits that capture all the love your furry friend brings.",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay: i * 0.1 },
  }),
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-[#c9a28d] mb-4">What I Offer</p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#3d2e26] mb-6">
            Sessions & Services
          </h2>
          <div className="w-12 h-px bg-[#c9a28d] mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="group cursor-pointer"
              style={{ translateY: 0 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div
                className="overflow-hidden aspect-[4/3] mb-5"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div
                className="px-1"
                style={{
                  filter: "drop-shadow(0 8px 24px rgba(0,0,0,0))",
                  transition: "filter 0.3s",
                }}
              >
                <h3 className="font-serif text-xl text-[#3d2e26] mb-2 relative inline-block">
                  {service.title}
                  {/* Accent underline slides in on hover */}
                  <span className="absolute bottom-0 left-0 h-px bg-[#c9a28d] w-0 group-hover:w-full transition-all duration-400 ease-out" />
                </h3>
                <div className="w-8 h-px bg-[#c9a28d] mb-3" />
                <p className="text-sm text-[#7a5c4e] font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
