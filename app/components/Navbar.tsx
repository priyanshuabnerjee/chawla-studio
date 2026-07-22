"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#2B1B12]/80 backdrop-blur-md shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-xl font-bold tracking-[0.2em] text-white md:text-2xl">
          CHAWLA STUDIO
        </h1>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 text-white md:flex">
          <a href="#home" className="transition hover:text-[#D4AF37]">
            Home
          </a>

          <a href="#about" className="transition hover:text-[#D4AF37]">
            About
          </a>

          <a href="#services" className="transition hover:text-[#D4AF37]">
            Services
          </a>

          <a href="#portfolio" className="transition hover:text-[#D4AF37]">
            Gallery
          </a>

          <a href="#contact" className="transition hover:text-[#D4AF37]">
            Contact
          </a>

          <a
            href="#contact"
            className="rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-white md:hidden"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#2B1B12] md:hidden">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-white hover:bg-[#3d281c]"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-white hover:bg-[#3d281c]"
          >
            About
          </a>

          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-white hover:bg-[#3d281c]"
          >
            Services
          </a>

          <a
            href="#portfolio"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-white hover:bg-[#3d281c]"
          >
            Gallery
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-white hover:bg-[#3d281c]"
          >
            Contact
          </a>

          <div className="p-6">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block rounded-full bg-[#D4AF37] py-3 text-center font-semibold text-black transition hover:scale-105"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}