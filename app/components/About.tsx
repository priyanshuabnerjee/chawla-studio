import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-white to-[#F9F6F2] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Image */}
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/about/about.jpg"
              alt="About Chawla Studio"
              width={700}
              height={900}
              className="h-auto w-full object-cover transition duration-700 hover:scale-105"
              priority
            />
          </div>

          {/* Content */}
          <div>

            <p className="mb-4 uppercase tracking-[6px] text-[#D4AF37]">
              Our Philosophy
            </p>

            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-semibold leading-tight text-[#2B1B12] sm:text-5xl lg:text-6xl">
              Every Story
              <br />
              Deserves
              <br />
              To Be Remembered
            </h2>

            <p className="mt-8 text-base leading-8 text-gray-600 md:text-lg">
              At Chawla Studio, we believe photography is more than simply
              capturing beautiful images. It is about preserving emotions,
              genuine connections, and timeless memories that become even more
              valuable with every passing year.
            </p>

            <a
              href="#contact"
              className="mt-10 inline-block rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-[#1A120D] transition duration-300 hover:scale-105 hover:bg-[#E8C766]"
            >
              Book Your Session
            </a>

            {/* Statistics */}
            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-[#D4AF37]/20 pt-10">

              <div className="text-center">
                <h3 className="text-3xl font-bold text-[#2B1B12] md:text-4xl">
                  150+
                </h3>
                <p className="mt-2 text-sm text-gray-500 md:text-base">
                  Weddings
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold text-[#2B1B12] md:text-4xl">
                  500+
                </h3>
                <p className="mt-2 text-sm text-gray-500 md:text-base">
                  Happy Clients
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold text-[#2B1B12] md:text-4xl">
                  8+
                </h3>
                <p className="mt-2 text-sm text-gray-500 md:text-base">
                  Years Experience
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}