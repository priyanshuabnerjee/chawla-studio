export default function Hero() {
  return (
    <section
      id="home"
      className="relative mt-24 h-[calc(100vh-6rem)] min-h-[700px] w-full overflow-hidden rounded-t-[32px] bg-black"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        controlsList="nodownload noplaybackrate"
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/45 to-black/80"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[7px] text-[#D4AF37] sm:text-sm md:mb-6 md:text-base md:tracking-[10px]">
            CHAWLA STUDIO
          </p>

          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-7xl lg:text-8xl">
            We Don't Just Capture
            <br />
            <span className="text-[#D4AF37]">Moments.</span>
            <br />
            We Preserve Emotions.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl px-2 text-base leading-7 text-gray-200 sm:text-lg md:mt-8 md:text-xl md:leading-8">
            Luxury wedding photography and cinematic films crafted to preserve
            every emotion, every smile, and every unforgettable moment of your
            special day.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row">
            <a
              href="#contact"
              className="w-full rounded-full bg-[#D4AF37] px-8 py-4 text-center font-semibold text-[#1A120D] transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95 hover:bg-[#E8C766] sm:w-auto"
            >
              Book Your Story
            </a>

            <a
              href="#portfolio"
              className="w-full rounded-full border border-white px-8 py-4 text-center font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#1A120D] active:scale-95 sm:w-auto"
            >
              Explore Portfolio
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about">
          <div className="flex h-12 w-7 justify-center rounded-full border border-white/70">
            <div className="mt-2 h-3 w-1 rounded-full bg-white"></div>
          </div>
        </a>
      </div>
    </section>
  );
}