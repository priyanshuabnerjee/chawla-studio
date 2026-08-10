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
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed left-1/2 top-2 z-50 -translate-x-1/2 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled
          ? "w-[80%] max-w-4xl"
          : "w-[92%] max-w-6xl"
      }`}
    >
      <div
        className={`
          flex items-center justify-between
          rounded-full
          border border-[#D4AF37]/20
          bg-[#514940]/90
          backdrop-blur-xl
          shadow-[0_16px_45px_rgba(0,0,0,0.28)]
          transition-all
          duration-600
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            scrolled
              ? "px-4 py-2"
              : "px-5 py-2.5 md:px-7"
          }
        `}
      >

        {/* BRAND */}
        <a
          href="#home"
          className={`
            flex shrink-0 items-center
            transition-all
            duration-600
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              scrolled
                ? "gap-2"
                : "gap-2.5"
            }
          `}
          aria-label="Chintu Chawla Photography"
        >
          {/* LOGO */}
          <img
            src="/chintu-chawla-logo-mark.png"
            alt="Chintu Chawla Photography"
            className={`
              shrink-0
              object-contain
              transition-all
              duration-600
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                scrolled
                  ? "h-11 w-[88px]"
                  : "h-14 w-[110px]"
              }
            `}
          />

          {/* BRAND TEXT */}
          <div
            className={`
              hidden
              leading-none
              sm:block
              transition-all
              duration-600
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                scrolled
                  ? "translate-x-[-2px]"
                  : "translate-x-0"
              }
            `}
          >
            <p
              className={`
                font-[family-name:var(--font-cormorant)]
                tracking-[0.10em]
                text-[#D4AF37]
                transition-all
                duration-600
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  scrolled
                    ? "text-[16px]"
                    : "text-[18px] md:text-[20px]"
                }
              `}
            >
              CHINTU CHAWLA
            </p>

            <p
              className="
                mt-1
                text-[8px]
                font-bold
                uppercase
                tracking-[0.32em]
                text-[#C8A951]
              "
            >
              PHOTOGRAPHY
            </p>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <div
          className={`
            hidden
            items-center
            md:flex
            transition-all
            duration-600
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              scrolled
                ? "gap-5"
                : "gap-7"
            }
          `}
        >
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
                group
                relative
                whitespace-nowrap
                text-sm
                font-medium
                text-white/90
                transition-colors
                duration-300
                hover:text-[#D4AF37]
              "
            >
              {item.name}

              <span
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-px
                  w-0
                  bg-[#D4AF37]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className={`
              inline-flex
              items-center
              justify-center
              whitespace-nowrap
              rounded-full
              bg-[#D4AF37]
              font-semibold
              text-[#17100C]
              transition-all
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              hover:scale-105
              hover:bg-[#E6BF52]
              ${
                scrolled
                  ? "px-4 py-2 text-xs"
                  : "px-5 py-2.5 text-sm"
              }
            `}
          >
            Book Consultation
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-white/15
            bg-white/5
            text-xl
            text-white
            transition-colors
            duration-300
            hover:text-[#D4AF37]
            md:hidden
          "
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className="
            mt-3
            overflow-hidden
            rounded-3xl
            border
            border-[#D4AF37]/15
            bg-[#514940]/95
            shadow-[0_20px_60px_rgba(0,0,0,0.4)]
            backdrop-blur-xl
            md:hidden
          "
        >
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="
                block
                border-b
                border-white/10
                px-6
                py-4
                text-sm
                font-medium
                text-white
                transition-colors
                duration-300
                hover:bg-white/5
                hover:text-[#D4AF37]
              "
            >
              {item.name}
            </a>
          ))}

          <div className="p-5">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="
                block
                rounded-full
                bg-[#D4AF37]
                py-3
                text-center
                text-sm
                font-semibold
                text-[#17100C]
              "
            >
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}