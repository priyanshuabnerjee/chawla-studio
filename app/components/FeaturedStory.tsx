export default function FeaturedStory() {
  return (
    <section className="bg-[#F9F7F4] pt-2 pb-20 md:pt-4 md:pb-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* SECTION HEADING */}
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 uppercase tracking-[6px] text-[#8B6B4A]">
            Featured Wedding
          </p>

          <h2
            className="
              font-[family-name:var(--font-cormorant)]
              text-4xl
              text-[#2B1B12]
              sm:text-5xl
              lg:text-6xl
            "
          >
            A Royal Wedding Story
          </h2>
          <div className="mx-auto mt-6 flex items-center justify-center gap-4">
  <span className="h-px w-20 bg-[#D4AF37]" />
  <span className="h-2.5 w-2.5 rotate-45 bg-[#D4AF37]" />
  <span className="h-px w-20 bg-[#D4AF37]" />
</div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* VIDEO */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="
                block
                aspect-[16/10]
                h-full
                w-full
                object-cover
              "
            >
              <source
                src="/wedding-story.mp4"
                type="video/mp4"
              />

              Your browser does not support the video tag.
            </video>
          </div>

          {/* TEXT */}
          <div>

            <h3
              className="
                mb-6
                font-[family-name:var(--font-cormorant)]
                text-4xl
                leading-tight
                text-[#2B1B12]
                sm:text-5xl
              "
            >
              Love. Tradition. Celebration.
            </h3>

            <p
              className="
                mb-8
                text-lg
                leading-8
                text-gray-600
              "
            >
              Every wedding tells a unique story. From heartfelt vows to joyful
              celebrations, we capture every emotion with cinematic elegance,
              creating timeless memories that families will cherish forever.
            </p>

            <a
              href="#portfolio"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-[#8B6B4A]
                px-8
                py-4
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#6f5438]
                hover:shadow-lg
              "
            >
              View Full Gallery
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}