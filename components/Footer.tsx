export default function Footer() {
  return (
    <footer className="bg-[#3d2e26] text-white/70 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl text-white mb-3">Katie Pollard Photography</h3>
            <p className="text-sm font-light leading-relaxed text-white/60">
              Timeless, heartfelt images that tell your unique love story — from Darwin, NT.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#c9a28d] mb-4">Navigate</p>
            <div className="flex flex-col gap-2">
              {["About", "Services", "Gallery", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-light text-white/60 hover:text-[#c9a28d] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#c9a28d] mb-4">Connect</p>
            <div className="flex flex-col gap-2">
              <a href="tel:+61400441595" className="text-sm font-light text-white/60 hover:text-[#c9a28d] transition-colors">
                +61 400 441 595
              </a>
              <a href="mailto:katiepollard85@gmail.com" className="text-sm font-light text-white/60 hover:text-[#c9a28d] transition-colors">
                katiepollard85@gmail.com
              </a>
              <div className="flex gap-4 mt-2">
                <a
                  href="https://www.instagram.com/katie_pollard_photos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-white/60 hover:text-[#c9a28d] transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/katiepollardphotos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-white/60 hover:text-[#c9a28d] transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40 font-light">
            © 2025 Katie Pollard Photography. All rights reserved.
          </p>
          <p className="text-xs text-white/30 font-light">
            Darwin, Northern Territory, Australia
          </p>
        </div>
      </div>
    </footer>
  );
}
