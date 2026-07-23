"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed left-1/2 top-5 z-50 -translate-x-1/2 transition-all duration-500 ${
          scrolled
            ? "w-[90%] max-w-5xl"
            : "w-[92%] max-w-6xl"
        }`}
      >
        <div
          className="
          flex items-center justify-between
          rounded-full
          border border-white/10
          bg-black/35
          backdrop-blur-2xl
          px-6
          py-3
          shadow-[0_12px_40px_rgba(0,0,0,0.35)]
          transition-all duration-500
        "
        >
          {/* Logo */}

          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37] text-xs font-semibold text-[#D4AF37]">
              CS
            </div>

            <div className="leading-none">
              <p className="font-[family-name:var(--font-cormorant)] text-lg tracking-[0.22em] text-white">
                CHAWLA
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.45em] text-gray-300">
                STUDIO
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative text-sm text-white transition duration-300 hover:text-[#D4AF37]"
              >
                {item.name}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA */}

          <div className="hidden md:block">
            <a
              href="#contact"
              className="rounded-full bg-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#E6BF52]"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-white md:hidden"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <div className="mt-3 overflow-hidden rounded-3xl border border-white/10 bg-black/80 backdrop-blur-xl md:hidden">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-5 text-white transition hover:bg-white/10"
              >
                {item.name}
              </a>
            ))}

            <div className="p-5">
              <a
                href="#contact"
                className="block rounded-full bg-[#D4AF37] py-3 text-center font-semibold text-black"
              >
                Book Consultation
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}