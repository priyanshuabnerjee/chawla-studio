"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Wedding Photography",
    description:
      "Timeless wedding photography that captures every emotion, smile, and unforgettable moment with artistic elegance.",
    icon: "✦",
  },
  {
    title: "Pre Wedding Shoots",
    description:
      "Romantic pre-wedding sessions at beautiful locations, crafted to tell your unique love story.",
    icon: "◇",
  },
  {
    title: "Cinematic Wedding Films",
    description:
      "Luxury cinematic films that preserve every emotion through storytelling, music, and beautiful visuals.",
    icon: "◉",
  },
  {
    title: "Premium Albums",
    description:
      "Handcrafted premium albums with elegant finishes, designed to preserve your memories for generations.",
    icon: "▣",
  },
  {
    title: "Maternity Shoots",
    description:
      "Beautiful maternity portraits that celebrate the glow, emotion, and precious journey of motherhood.",
    icon: "♡",
  },
  {
    title: "Model Shoots",
    description:
      "Creative and professional model photography designed to capture confidence, personality, and striking visual moments.",
    icon: "✧",
  },
  {
    title: "Baby Shoots",
    description:
      "Sweet and timeless baby photography that preserves the little smiles, expressions, and precious moments of childhood.",
    icon: "☼",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const mobileCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const desktopScrollRef = useRef<HTMLDivElement | null>(null);

  /* =====================================================
     DETECT ACTIVE MOBILE CARD
  ====================================================== */

  useEffect(() => {
    const cards = mobileCardsRef.current.filter(
      (card): card is HTMLDivElement => card !== null
    );

    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let bestIndex = activeIndex;
        let bestRatio = 0;

        entries.forEach((entry) => {
          const index = Number(
            (entry.target as HTMLElement).dataset.index
          );

          if (
            entry.isIntersecting &&
            entry.intersectionRatio > bestRatio
          ) {
            bestRatio = entry.intersectionRatio;
            bestIndex = index;
          }
        });

        if (bestRatio > 0.5) {
          setActiveIndex(bestIndex);
        }
      },
      {
        threshold: [0.35, 0.5, 0.65, 0.8, 0.95],
        rootMargin: "0px -12% 0px -12%",
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [activeIndex]);

  /* =====================================================
     DESKTOP / IPAD SCROLL
  ====================================================== */

  const scrollDesktop = (direction: "left" | "right") => {
    const container = desktopScrollRef.current;

    if (!container) return;

    const amount = Math.min(
      container.clientWidth * 0.78,
      650
    );

    container.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  /* =====================================================
     SCROLL DESKTOP CARD TO CENTER
  ====================================================== */

  const scrollDesktopCard = (index: number) => {
    const container = desktopScrollRef.current;

    if (!container) return;

    const cards = container.children;

    const card = cards[index] as HTMLElement | undefined;

    if (!card) return;

    card.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });

    setActiveIndex(index);
  };

  return (
    <section
      id="services"
      className="
        relative
        -mt-4
        overflow-hidden
        bg-[#F9F6F2]
        pb-16
        pt-8
        md:-mt-6
        md:pb-24
        md:pt-14
      "
    >
      {/* =====================================================
          BACKGROUND GOLD GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          bg-[#D4AF37]/10
          blur-[110px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-1/3
          h-72
          w-72
          rounded-full
          bg-[#D4AF37]/5
          blur-[100px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-6">

        {/* =====================================================
            HEADING
        ====================================================== */}

        <div
          className="
            mx-auto
            mb-9
            max-w-4xl
            text-center
            md:mb-12
          "
        >
          <p
            className="
              mb-3
              text-base
              uppercase
              tracking-[5px]
              text-[#B89024]
              md:tracking-[6px]
            "
          >
            Our Services
          </p>

          <h2
            className="
              font-[family-name:var(--font-cormorant)]
              text-[38px]
              leading-[0.95]
              text-[#21150F]
              sm:text-5xl
              md:text-6xl
            "
          >
            Crafted For Every Celebration
          </h2>

          {/* Gold divider */}

          <div
            className="
              mx-auto
              mt-5
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span className="h-px w-10 bg-[#D4AF37]/50 md:w-16" />

            <span className="h-2 w-2 rotate-45 bg-[#D4AF37]" />

            <span className="h-px w-10 bg-[#D4AF37]/50 md:w-16" />
          </div>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-[#665D57]
              md:text-base
              md:leading-8
            "
          >
            Every celebration deserves to be remembered beautifully. We blend
            creativity, emotion, and storytelling to create timeless memories
            you'll treasure forever.
          </p>
        </div>

        {/* =====================================================
            MOBILE VERSION
        ====================================================== */}

        <div className="md:hidden">

          <div
            className="
              -mx-5
              flex
              snap-x
              snap-mandatory
              gap-4
              overflow-x-auto
              overscroll-x-contain
              px-5
              pb-6
              scroll-smooth
            "
            style={{
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {services.map((service, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={service.title}
                  ref={(element) => {
                    mobileCardsRef.current[index] = element;
                  }}
                  data-index={index}
                  className={`
                    min-w-[88%]
                    snap-center
                    transition-all
                    duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${
                      isActive
                        ? "scale-100 opacity-100"
                        : "scale-[0.96] opacity-70"
                    }
                  `}
                >
                  <div
                    className={`
                      group
                      relative
                      min-h-[410px]
                      overflow-hidden
                      rounded-[28px]
                      border
                      shadow-[0_20px_60px_rgba(43,27,18,0.12)]
                      transition-all
                      duration-700
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${
                        isActive
                          ? `
                            border-[#D4AF37]
                            bg-[#100D0B]
                            shadow-[0_25px_75px_rgba(43,27,18,0.28)]
                          `
                          : `
                            border-[#D4AF37]/25
                            bg-white
                            shadow-[0_10px_35px_rgba(43,27,18,0.08)]
                          `
                      }
                    `}
                  >

                    {/* Active gold glow */}

                    <div
                      className={`
                        pointer-events-none
                        absolute
                        -right-20
                        -top-20
                        h-48
                        w-48
                        rounded-full
                        bg-[#D4AF37]
                        blur-[75px]
                        transition-all
                        duration-1000
                        ${
                          isActive
                            ? "scale-125 opacity-20"
                            : "scale-75 opacity-0"
                        }
                      `}
                    />

                    <div
                      className={`
                        pointer-events-none
                        absolute
                        -bottom-24
                        left-1/2
                        h-48
                        w-48
                        -translate-x-1/2
                        rounded-full
                        bg-[#D4AF37]
                        blur-[75px]
                        transition-all
                        duration-1000
                        ${
                          isActive
                            ? "scale-125 opacity-15"
                            : "scale-75 opacity-0"
                        }
                      `}
                    />

                    {/* Gold top line */}

                    <div
                      className={`
                        absolute
                        left-8
                        top-0
                        h-[2px]
                        bg-gradient-to-r
                        from-transparent
                        via-[#D4AF37]
                        to-transparent
                        transition-all
                        duration-700
                        ${
                          isActive
                            ? "right-8 opacity-100"
                            : "right-1/2 opacity-30"
                        }
                      `}
                    />

                    {/* Content */}

                    <div
                      className="
                        relative
                        z-10
                        flex
                        min-h-[410px]
                        flex-col
                        p-7
                      "
                    >

                      {/* Icon */}

                      <div
                        className={`
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-full
                          border
                          text-2xl
                          transition-all
                          duration-700
                          ${
                            isActive
                              ? `
                                border-[#D4AF37]
                                bg-[#D4AF37]/10
                                text-[#D4AF37]
                                shadow-[0_0_35px_rgba(212,175,55,0.18)]
                              `
                              : `
                                border-[#D4AF37]/30
                                bg-[#D4AF37]/5
                                text-[#B89024]
                              `
                          }
                        `}
                      >
                        {service.icon}
                      </div>

                      {/* Brand label */}

                      <p
                        className={`
                          mt-7
                          text-[10px]
                          uppercase
                          tracking-[4px]
                          transition-colors
                          duration-700
                          ${
                            isActive
                              ? "text-[#D4AF37]"
                              : "text-[#B89024]"
                          }
                        `}
                      >
                        CHINTU CHAWLA PHOTOGRAPHY
                      </p>

                      {/* Title */}

                      <h3
                        className={`
                          mt-4
                          max-w-[300px]
                          font-[family-name:var(--font-cormorant)]
                          text-[38px]
                          leading-[0.95]
                          transition-all
                          duration-700
                          ${
                            isActive
                              ? "translate-y-0 text-white"
                              : "translate-y-1 text-[#21150F]"
                          }
                        `}
                      >
                        {service.title}
                      </h3>

                      {/* Divider */}

                      <div
                        className={`
                          mt-5
                          h-px
                          bg-[#D4AF37]
                          transition-all
                          duration-700
                          ${
                            isActive
                              ? "w-16"
                              : "w-10"
                          }
                        `}
                      />

                      {/* Description */}

                      <p
                        className={`
                          mt-5
                          text-sm
                          leading-7
                          transition-all
                          duration-700
                          ${
                            isActive
                              ? "text-white/65"
                              : "text-[#665D57]"
                          }
                        `}
                      >
                        {service.description}
                      </p>

                      {/* Bottom */}

                      <div
                        className="
                          mt-auto
                          flex
                          items-center
                          justify-between
                          pt-7
                        "
                      >
                        <a
                          href="#contact"
                          className={`
                            text-sm
                            font-medium
                            transition-colors
                            duration-700
                            ${
                              isActive
                                ? "text-[#D4AF37]"
                                : "text-[#B89024]"
                            }
                          `}
                        >
                          Discover Service
                        </a>

                        <div
                          className={`
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            border
                            transition-all
                            duration-700
                            ${
                              isActive
                                ? `
                                  border-[#D4AF37]
                                  bg-[#D4AF37]
                                  text-[#17100C]
                                `
                                : `
                                  border-[#D4AF37]/40
                                  text-[#B89024]
                                `
                            }
                          `}
                        >
                          →
                        </div>
                      </div>
                    </div>

                    {/* Corner light */}

                    <div
                      className={`
                        absolute
                        bottom-5
                        right-5
                        h-2
                        w-2
                        rotate-45
                        transition-all
                        duration-700
                        ${
                          isActive
                            ? `
                              bg-[#D4AF37]
                              shadow-[0_0_18px_rgba(212,175,55,0.9)]
                            `
                            : "border border-[#D4AF37]/40"
                        }
                      `}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Swipe hint */}

          <div
            className="
              mt-1
              flex
              items-center
              justify-between
              px-1
            "
          >
            <p
              className="
                text-[10px]
                uppercase
                tracking-[3px]
                text-[#8B817A]
              "
            >
              Swipe to explore
            </p>

            <div className="flex items-center gap-2">
              <span className="text-sm text-[#B89024]">
                ←
              </span>

              <span className="h-[2px] w-8 bg-[#D4AF37]/30" />

              <span className="text-sm text-[#B89024]">
                →
              </span>
            </div>
          </div>

          {/* Progress */}

          <div className="mt-4 flex justify-center gap-2">
            {services.map((service, index) => (
              <button
                key={service.title}
                type="button"
                onClick={() => {
                  const card =
                    mobileCardsRef.current[index];

                  if (card) {
                    card.scrollIntoView({
                      behavior: "smooth",
                      block: "nearest",
                      inline: "center",
                    });
                  }

                  setActiveIndex(index);
                }}
                aria-label={`Show ${service.title}`}
                className={`
                  h-1
                  rounded-full
                  transition-all
                  duration-500
                  ${
                    activeIndex === index
                      ? "w-8 bg-[#D4AF37]"
                      : "w-2 bg-[#D4AF37]/25"
                  }
                `}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            IPAD + DESKTOP VERSION
            HORIZONTAL SCROLL CAROUSEL
        ====================================================== */}

        <div className="relative hidden md:block">

          {/* LEFT ARROW */}

          <button
            type="button"
            onClick={() => scrollDesktop("left")}
            aria-label="Scroll services left"
            className="
              absolute
              left-2
              top-1/2
              z-30
              flex
              h-14
              w-14
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border-2
              border-[#D4AF37]/70
              bg-white
              text-xl
              font-medium
              text-[#B89024]
              shadow-[0_8px_25px_rgba(43,27,18,0.15)]
              backdrop-blur-md
              transition-all
              duration-300
              hover:scale-110
              hover:border-[#D4AF37]
              hover:bg-[#D4AF37]
              hover:text-[#17100C]
              hover:shadow-[0_12px_30px_rgba(212,175,55,0.30)]
            "
          >
            ←
          </button>

          {/* RIGHT ARROW */}

          <button
            type="button"
            onClick={() => scrollDesktop("right")}
            aria-label="Scroll services right"
            className="
              absolute
              right-2
              top-1/2
              z-30
              flex
              h-14
              w-14
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border-2
              border-[#D4AF37]/70
              bg-white
              text-xl
              font-medium
              text-[#B89024]
              shadow-[0_8px_25px_rgba(43,27,18,0.15)]
              backdrop-blur-md
              transition-all
              duration-300
              hover:scale-110
              hover:border-[#D4AF37]
              hover:bg-[#D4AF37]
              hover:text-[#17100C]
              hover:shadow-[0_12px_30px_rgba(212,175,55,0.30)]
            "
          >
            →
          </button>

          {/* SCROLL AREA */}

          <div
            ref={desktopScrollRef}
            className="
              flex
              snap-x
              snap-mandatory
              gap-5
              overflow-x-auto
              overscroll-x-contain
              px-14
              pb-7
              scroll-smooth
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            {services.map((service, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={service.title}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => scrollDesktopCard(index)}
                  className={`
                    group
                    relative
                    min-h-[390px]
                    min-w-[44%]
                    snap-center
                    overflow-hidden
                    rounded-[28px]
                    border
                    transition-all
                    duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    lg:min-w-[32%]
                    xl:min-w-[calc((100%-60px)/4)]
                    ${
                      isActive
                        ? `
                          -translate-y-3
                          border-[#D4AF37]
                          bg-[#100D0B]
                          shadow-[0_25px_70px_rgba(43,27,18,0.22)]
                        `
                        : `
                          border-[#D4AF37]/20
                          bg-white
                          shadow-[0_10px_35px_rgba(43,27,18,0.07)]
                          hover:-translate-y-2
                        `
                    }
                  `}
                >

                  {/* Moving gold light */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      -left-1/2
                      top-0
                      h-full
                      w-[55%]
                      rotate-[18deg]
                      bg-gradient-to-r
                      from-transparent
                      via-[#D4AF37]/20
                      to-transparent
                      transition-all
                      duration-[1500ms]
                      ${
                        isActive
                          ? "translate-x-[300%]"
                          : "-translate-x-full"
                      }
                    `}
                  />

                  {/* Content */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      min-h-[390px]
                      flex-col
                      p-8
                    "
                  >

                    {/* Icon */}

                    <div
                      className={`
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-full
                        border
                        text-2xl
                        transition-all
                        duration-700
                        ${
                          isActive
                            ? `
                              border-[#D4AF37]
                              bg-[#D4AF37]/10
                              text-[#D4AF37]
                            `
                            : `
                              border-[#D4AF37]/30
                              bg-[#D4AF37]/5
                              text-[#B89024]
                            `
                        }
                      `}
                    >
                      {service.icon}
                    </div>

                    {/* Brand label */}

                    <p
                      className={`
                        mt-7
                        text-[10px]
                        uppercase
                        tracking-[4px]
                        transition-colors
                        duration-700
                        ${
                          isActive
                            ? "text-[#D4AF37]"
                            : "text-[#B89024]"
                        }
                      `}
                    >
                      CHINTU CHAWLA PHOTOGRAPHY
                    </p>

                    {/* Title */}

                    <h3
                      className={`
                        mt-4
                        font-[family-name:var(--font-cormorant)]
                        text-3xl
                        leading-none
                        transition-colors
                        duration-700
                        ${
                          isActive
                            ? "text-white"
                            : "text-[#21150F]"
                        }
                      `}
                    >
                      {service.title}
                    </h3>

                    {/* Divider */}

                    <div className="mt-5 h-px w-12 bg-[#D4AF37]" />

                    {/* Description */}

                    <p
                      className={`
                        mt-5
                        text-sm
                        leading-7
                        transition-colors
                        duration-700
                        ${
                          isActive
                            ? "text-white/65"
                            : "text-[#665D57]"
                        }
                      `}
                    >
                      {service.description}
                    </p>

                    {/* Bottom */}

                    <div
                      className="
                        mt-auto
                        flex
                        items-center
                        justify-between
                        pt-7
                      "
                    >
                      <a
                        href="#contact"
                        onClick={(e) => e.stopPropagation()}
                        className={`
                          text-sm
                          font-medium
                          transition-colors
                          duration-700
                          ${
                            isActive
                              ? "text-[#D4AF37]"
                              : "text-[#B89024]"
                          }
                        `}
                      >
                        Discover Service
                      </a>

                      <span
                        className={`
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          border
                          transition-all
                          duration-700
                          ${
                            isActive
                              ? `
                                border-[#D4AF37]
                                bg-[#D4AF37]
                                text-[#17100C]
                              `
                              : `
                                border-[#D4AF37]/30
                                text-[#B89024]
                              `
                          }
                        `}
                      >
                        →
                      </span>
                    </div>
                  </div>

                  {/* Corner light */}

                  <div
                    className={`
                      absolute
                      bottom-5
                      right-5
                      h-2
                      w-2
                      rotate-45
                      transition-all
                      duration-700
                      ${
                        isActive
                          ? `
                            bg-[#D4AF37]
                            shadow-[0_0_18px_rgba(212,175,55,0.9)]
                          `
                          : "border border-[#D4AF37]/40"
                      }
                    `}
                  />
                </div>
              );
            })}
          </div>

          {/* DESKTOP SCROLL HINT */}

          <div
            className="
              mt-1
              flex
              items-center
              justify-between
              px-14
            "
          >
            <p
              className="
                flex
                items-center
                gap-3
                text-[10px]
                uppercase
                tracking-[3px]
                text-[#8B817A]
              "
            >
              <span className="h-px w-8 bg-[#D4AF37]/60" />
              Scroll to explore
              <span className="h-px w-8 bg-[#D4AF37]/60" />
            </p>

            <div className="flex items-center gap-3">
              <span className="text-base font-medium text-[#B89024] transition-transform duration-300 hover:-translate-x-1">
                ←
              </span>

              <div className="h-[2px] w-20 overflow-hidden rounded-full bg-[#D4AF37]/20">
                <div className="h-full w-1/3 rounded-full bg-[#D4AF37]" />
              </div>

              <span className="text-base font-medium text-[#B89024] transition-transform duration-300 hover:translate-x-1">
                →
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}