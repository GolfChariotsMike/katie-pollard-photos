"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="#"
          className={`font-serif text-lg font-medium tracking-wide transition-colors duration-300 ${
            scrolled ? "text-[#3d2e26]" : "text-white"
          }`}
        >
          Katie Pollard Photography
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-light tracking-widest uppercase transition-colors duration-300 hover:text-[#c9a28d] ${
                scrolled ? "text-[#3d2e26]" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium tracking-widest uppercase bg-[#c9a28d] text-white px-5 py-2 hover:bg-[#b8907a] transition-colors duration-300"
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden flex flex-col gap-1.5 ${scrolled ? "text-[#3d2e26]" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-light tracking-widest uppercase text-[#3d2e26] hover:text-[#c9a28d]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium tracking-widest uppercase bg-[#c9a28d] text-white px-5 py-2 text-center hover:bg-[#b8907a]"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
