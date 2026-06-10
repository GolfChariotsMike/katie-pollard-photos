export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/photos/cover.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
        <p className="text-sm tracking-[0.4em] uppercase font-light mb-4 text-[#e8c9b8]">
          Darwin, Northern Territory
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-normal leading-tight mb-6">
          Katie Pollard
          <span className="block italic font-light">Photography</span>
        </h1>
        <p className="text-base md:text-lg font-light tracking-wide text-white/85 mb-10 max-w-xl mx-auto leading-relaxed">
          Capturing life's most precious milestones — from first love to new beginnings
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#c9a28d] text-white text-sm font-medium tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#b8907a] transition-colors duration-300"
        >
          Book a Session
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
}
