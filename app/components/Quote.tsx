export default function Quote() {
  return (
    <section className="relative overflow-hidden bg-[#F6F2EC] px-6 py-12 sm:py-16 md:py-20">

      {/* Luxury Quote Card */}
      <div
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          bg-[linear-gradient(135deg,#0D0907_0%,#17100C_50%,#120B08_100%)]
          px-6
          py-16
          shadow-[0_25px_80px_rgba(35,20,10,0.15)]
          sm:px-10
          sm:py-20
          md:px-16
          md:py-24
        "
      >

        {/* Subtle inner glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[520px]
            w-[520px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#D4AF37]/[0.05]
            blur-[140px]
          "
        />

        {/* Gold Frame */}
        <div
          className="
            pointer-events-none
            absolute
            inset-5
            border
            border-[#D4AF37]/20
            sm:inset-7
            md:inset-9
          "
        />

        {/* Content */}
        <div className="relative mx-auto max-w-5xl text-center">

          {/* Brand */}
          <div className="mb-7 flex items-center justify-center gap-4 sm:mb-8">
            <span className="h-px w-8 bg-[#D4AF37]/40 sm:w-14" />

            <p className="text-[8px] font-medium uppercase tracking-[4px] text-[#D4AF37] sm:text-[10px] sm:tracking-[6px]">
              CHINTU CHAWLA PHOTOGRAPHY
            </p>

            <span className="h-px w-8 bg-[#D4AF37]/40 sm:w-14" />
          </div>

          {/* Quote */}
          <blockquote
            className="
              mx-auto
              max-w-4xl
              font-[family-name:var(--font-cormorant)]
              text-4xl
              font-medium
              leading-[1.02]
              tracking-[-0.02em]
              text-[#F4EDE3]
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Photographs are the only way
            <br className="hidden sm:block" />

            <span className="italic text-[#D4AF37]">
              to relive moments that
            </span>

            <br className="hidden sm:block" />

            time can never bring back.
          </blockquote>

          {/* Divider */}
          <div className="mx-auto mt-8 flex items-center justify-center gap-3 sm:mt-9">
            <span className="h-px w-10 bg-[#D4AF37]/35 sm:w-14" />

            <span className="h-1.5 w-1.5 rotate-45 bg-[#D4AF37]" />

            <span className="h-px w-10 bg-[#D4AF37]/35 sm:w-14" />
          </div>

          {/* Supporting line */}
          <p className="mt-6 text-[9px] uppercase tracking-[3px] text-[#B8A99A] sm:mt-7 sm:text-xs sm:tracking-[4px]">
            Stories fade
            <span className="mx-3 text-[#D4AF37]">•</span>
            Memories remain
          </p>

          {/* Editorial Detail */}
          <div className="mt-8 flex items-center justify-center gap-3 opacity-50 sm:mt-9">
            <span className="h-px w-5 bg-[#D4AF37]" />

            <span className="text-[7px] uppercase tracking-[3px] text-[#D4AF37]">
              EST. • STORYTELLING
            </span>

            <span className="h-px w-5 bg-[#D4AF37]" />
          </div>

        </div>
      </div>

    </section>
  );
}