export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-0 mt-24 h-[72vh] min-h-[620px] w-full overflow-hidden md:mx-[15px] md:w-[calc(100%-30px)] md:h-[78vh] md:min-h-[650px]"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        controlsList="nodownload noplaybackrate"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-[#1A120D]/45 to-black/75" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-5 pt-16 sm:px-6 md:pt-20">
        <div className="w-full max-w-5xl text-center">

          {/* Brand */}
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[6px] text-[#D4AF37] sm:text-xs sm:tracking-[8px] md:mb-5 md:text-sm md:tracking-[10px]">
            CHINTU CHAWLA PHOTOGRAPHY
          </p>

          {/* Heading */}
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-semibold leading-[0.95] text-white sm:text-5xl md:text-7xl lg:text-8xl">
            We Don't Just Capture
            <br />
            <span className="text-[#D4AF37]">Moments.</span>
            <br />
            We Preserve Emotions.
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-3xl px-2 text-sm leading-6 text-gray-200 sm:text-base sm:leading-7 md:mt-7 md:text-xl md:leading-8">
            Luxury wedding photography and cinematic films crafted to preserve
            every emotion, every smile, and every unforgettable moment of your
            special day.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row sm:gap-4">

            <a
              href="#contact"
              className="w-full rounded-full bg-[#D4AF37] px-8 py-3.5 text-center font-semibold text-[#1A120D] transition duration-300 hover:scale-105 hover:bg-[#E8C766] sm:w-auto"
            >
              Book Your Story
            </a>

            <a
              href="#portfolio"
              className="w-full rounded-full border border-white/80 px-8 py-3.5 text-center font-semibold text-white transition duration-300 hover:bg-white hover:text-[#1A120D] sm:w-auto"
            >
              Explore Portfolio
            </a>

          </div>
        </div>
      </div>

      {/* Scroll Indicator - Mobile Only */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce sm:hidden">
        <a href="#about" aria-label="Scroll to About section">
          <div className="flex h-10 w-6 justify-center rounded-full border border-white/70">
            <div className="mt-2 h-2.5 w-1 rounded-full bg-white" />
          </div>
        </a>
      </div>
    </section>
  );
}