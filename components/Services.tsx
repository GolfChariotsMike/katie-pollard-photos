import Image from "next/image";

const services = [
  {
    title: "Engagements",
    description: "Celebrate your 'yes' with beautiful, authentic images that capture the joy and love of your engagement.",
    image: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800",
    emoji: "💍",
  },
  {
    title: "Weddings",
    description: "From the quiet moments getting ready to the last dance, every detail of your perfect day, preserved.",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800",
    emoji: "💒",
  },
  {
    title: "Newborns",
    description: "Those impossibly tiny fingers and toes — captured while they're still new. Gentle, warm, and timeless.",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800",
    emoji: "👶",
  },
  {
    title: "Maternity",
    description: "Honouring the beautiful journey of pregnancy with stunning portraits that celebrate this magical chapter.",
    image: "https://images.unsplash.com/photo-1584559582128-b8be739912e1?w=800",
    emoji: "🤰",
  },
  {
    title: "Families",
    description: "Real laughter, real connection. Family sessions are relaxed and fun — exactly the way memories should be made.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=800",
    emoji: "👨‍👩‍👧‍👦",
  },
  {
    title: "Pets",
    description: "First pets are family too. Personality-driven pet portraits that capture all the love your furry friend brings.",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800",
    emoji: "🐾",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-[#c9a28d] mb-4">What I Offer</p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#3d2e26] mb-6">
            Sessions & Services
          </h2>
          <div className="w-12 h-px bg-[#c9a28d] mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="group cursor-pointer">
              <div className="overflow-hidden aspect-[4/3] mb-5">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="px-1">
                <h3 className="font-serif text-xl text-[#3d2e26] mb-2">
                  {service.title}
                </h3>
                <div className="w-8 h-px bg-[#c9a28d] mb-3" />
                <p className="text-sm text-[#7a5c4e] font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
