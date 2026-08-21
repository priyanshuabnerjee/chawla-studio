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
          <div className="mb-4 sm:mb-5">
            <p className="text-2xl font-extrabold uppercase tracking-[5px] text-[#D4AF37] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] sm:text-3xl sm:tracking-[7px] md:text-4xl md:tracking-[9px]">
              CHINTU CHAWLA PHOTOGRAPHY
            </p>

            <p className="mt-2 text-base font-extrabold uppercase tracking-[3px] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] sm:text-lg sm:tracking-[5px] md:text-xl md:tracking-[6px]">
              A UNIT OF NEW CHAWLA STUDIO
            </p>
          </div>

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
          <div className="mt-7 flex flex-col items-center justify-center gap-3 pb-3 sm:mt-9 sm:flex-row sm:gap-4 sm:pb-0">

            <a
              href="#contact"
              className="w-full max-w-[340px] rounded-full bg-[#D4AF37] px-8 py-3.5 text-center font-semibold text-[#1A120D] transition duration-300 hover:scale-105 hover:bg-[#E8C766] sm:w-auto sm:max-w-none"
            >
              Book Your Story
            </a>

            <a
              href="#portfolio"
              className="w-full max-w-[340px] rounded-full border border-white/80 px-8 py-3.5 text-center font-semibold text-white transition duration-300 hover:bg-white hover:text-[#1A120D] sm:w-auto sm:max-w-none"
            >
              Explore Portfolio
            </a>

          </div>
        </div>
      </div>

    </section>
  );
}