import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8F3E8] pt-6 pb-8 md:pt-8 md:pb-10"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#C49A3A]/10 blur-3xl animate-pulse" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-[#C49A3A]/10 blur-3xl animate-pulse" />

      <div className="mx-auto max-w-7xl px-6">

        {/* =====================================================
            ABOUT SECTION
        ====================================================== */}

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

          {/* =================================================
              IMAGE
          ================================================== */}

          <div className="relative">

            {/* Outer decorative frame */}
            <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] border border-[#C49A3A]/40" />

            {/* Second decorative frame */}
            <div className="pointer-events-none absolute -inset-7 rounded-[3rem] border border-[#C49A3A]/20" />

            {/* Image container */}
            <div className="relative overflow-hidden rounded-[2rem] border border-[#C49A3A]/70 bg-[#F8F3E8] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">

              <div className="overflow-hidden rounded-[1.7rem]">

                <Image
                  src="/images/about/about.jpg"
                  alt="About Chintu Chawla Photography"
                  width={700}
                  height={900}
                  className="h-auto w-full object-cover transition duration-700 hover:scale-105"
                  priority
                />

              </div>

            </div>
          </div>


         {/* =================================================
    CONTENT
================================================== */}

<div className="relative text-center">

  {/* Our Philosophy */}
  <div className="mb-6 flex items-center justify-center gap-4">
    <span className="h-px w-14 bg-[#C49A3A]" />

    <p className="text-xs uppercase tracking-[5px] text-[#B88620]">
      Our Philosophy
    </p>

    <span className="h-px w-14 bg-[#C49A3A]" />
  </div>


  {/* Main heading */}
  <h2 className="font-[family-name:var(--font-cormorant)] text-5xl font-semibold leading-[0.95] text-[#211711] sm:text-6xl lg:text-7xl">

    Every Story
    <br />

    Deserves
    <br />

    <span className="italic text-[#B88620]">
      To Be Remembered
    </span>

  </h2>


  {/* Gold divider */}
  <div className="my-7 flex items-center justify-center gap-4">

    <span className="h-px w-24 bg-[#C49A3A]" />

    <span className="text-[#C49A3A]">
      ◆
    </span>

    <span className="h-px w-12 bg-[#C49A3A]" />

  </div>


  {/* Description */}
  <p className="mx-auto max-w-2xl text-base leading-8 text-[#5C554F] md:text-lg">

    At Chintu Chawla Photography, we believe photography is more
    than simply capturing beautiful images. It is about preserving
    emotions, genuine connections, and timeless memories that become
    even more valuable with every passing year.

  </p>


  {/* Book button */}
  <a
    href="#contact"
    className="group mt-8 inline-flex items-center gap-5 rounded-full border border-[#C49A3A] bg-[#100D0A] px-8 py-4 text-sm font-medium uppercase tracking-[3px] text-[#E1BD65] shadow-[0_15px_35px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#18130E] hover:shadow-[0_20px_45px_rgba(0,0,0,0.25)]"
  >

    <span>
      Book Your Session
    </span>

    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C49A3A] text-[#D8B866] transition-transform duration-500 group-hover:translate-x-1">
      →
    </span>

  </a>

</div>
        </div>


        {/* =====================================================
            SLIM STATISTICS
        ====================================================== */}

        <div className="relative mt-8 md:mt-10">

          {/* Soft glow behind card */}
          <div className="pointer-events-none absolute -inset-3 rounded-[1.5rem] bg-[#C49A3A]/10 blur-3xl animate-pulse" />


          {/* =================================================
              BLACK + GOLD SLIM CARD
          ================================================== */}

          <div className="group relative rounded-[1.3rem] border border-[#C49A3A]/70 bg-[#0D0B09] p-[3px] shadow-[0_15px_35px_rgba(0,0,0,0.18)] transition-all duration-700 hover:shadow-[0_20px_45px_rgba(0,0,0,0.28)]">

            {/* Inner border */}
            <div className="relative overflow-hidden rounded-[1.05rem] border border-[#C49A3A]/25">

              {/* Moving gold light */}
              <div className="pointer-events-none absolute left-0 top-0 h-px w-28 bg-gradient-to-r from-transparent via-[#E3BE61] to-transparent animate-[goldMove_5s_linear_infinite]" />

              <div className="grid grid-cols-1 md:grid-cols-3">


                {/* =================================================
                    WEDDINGS
                ================================================== */}

                <div className="group/stat relative flex items-center justify-center px-4 py-4 text-center md:py-4">

                  {/* Divider */}
                  <div className="absolute bottom-3 right-0 hidden h-[calc(100%-1.5rem)] w-px bg-[#C49A3A]/25 md:block" />

                  <div className="flex flex-col items-center">

                    {/* Icon */}
                    <div className="relative mb-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-[#C49A3A]/70 text-[#D8B866] transition-all duration-500 group-hover/stat:scale-110">

                      <span className="absolute inset-[-3px] rounded-full border border-[#C49A3A]/20 animate-ping" />

                      <span className="relative text-sm">
                        ◇
                      </span>

                    </div>


                    {/* Number */}
                    <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium leading-none text-[#D8B866] animate-[numberFloat_4s_ease-in-out_infinite] md:text-3xl">
                      150+
                    </h3>


                    {/* Gold line */}
                    <div className="my-1 h-px w-7 bg-[#C49A3A] transition-all duration-500 group-hover/stat:w-12" />


                    {/* Label */}
                    <p className="text-[8px] uppercase tracking-[2px] text-[#D8D0C4] md:text-[9px] md:tracking-[2.5px]">
                      Weddings
                    </p>

                  </div>
                </div>


                {/* =================================================
                    HAPPY CLIENTS
                ================================================== */}

                <div className="group/stat relative flex items-center justify-center border-t border-[#C49A3A]/20 px-4 py-4 text-center md:border-t-0 md:py-4">

                  {/* Divider */}
                  <div className="absolute bottom-3 right-0 hidden h-[calc(100%-1.5rem)] w-px bg-[#C49A3A]/25 md:block" />

                  <div className="flex flex-col items-center">

                    {/* Icon */}
                    <div className="relative mb-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-[#C49A3A]/70 text-[#D8B866] transition-all duration-500 group-hover/stat:scale-110">

                      <span
                        className="absolute inset-[-3px] rounded-full border border-[#C49A3A]/20 animate-ping"
                        style={{ animationDelay: "700ms" }}
                      />

                      <span className="relative text-sm">
                        ♧
                      </span>

                    </div>


                    {/* Number */}
                    <h3
                      className="font-[family-name:var(--font-cormorant)] text-2xl font-medium leading-none text-[#D8B866] animate-[numberFloat_4s_ease-in-out_infinite] md:text-3xl"
                      style={{ animationDelay: "500ms" }}
                    >
                      500+
                    </h3>


                    {/* Gold line */}
                    <div className="my-1 h-px w-7 bg-[#C49A3A] transition-all duration-500 group-hover/stat:w-12" />


                    {/* Label */}
                    <p className="text-[8px] uppercase tracking-[2px] text-[#D8D0C4] md:text-[9px] md:tracking-[2.5px]">
                      Happy Clients
                    </p>

                  </div>
                </div>


                {/* =================================================
                    EXPERIENCE
                ================================================== */}

                <div className="group/stat relative flex items-center justify-center border-t border-[#C49A3A]/20 px-4 py-4 text-center md:border-t-0 md:py-4">

                  <div className="flex flex-col items-center">

                    {/* Icon */}
                    <div className="relative mb-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-[#C49A3A]/70 text-[#D8B866] transition-all duration-500 group-hover/stat:scale-110">

                      <span
                        className="absolute inset-[-3px] rounded-full border border-[#C49A3A]/20 animate-ping"
                        style={{ animationDelay: "1400ms" }}
                      />

                      <span className="relative text-sm">
                        ♜
                      </span>

                    </div>


                    {/* Number */}
                    <h3
                      className="font-[family-name:var(--font-cormorant)] text-2xl font-medium leading-none text-[#D8B866] animate-[numberFloat_4s_ease-in-out_infinite] md:text-3xl"
                      style={{ animationDelay: "1000ms" }}
                    >
                      15+
                    </h3>


                    {/* Gold line */}
                    <div className="my-1 h-px w-7 bg-[#C49A3A] transition-all duration-500 group-hover/stat:w-12" />


                    {/* Label */}
                    <p className="text-[8px] uppercase tracking-[2px] text-[#D8D0C4] md:text-[9px] md:tracking-[2.5px]">
                      Years Experience
                    </p>

                  </div>
                </div>

              </div>
            </div>
          </div>


          {/* =================================================
              BOTTOM DECORATIVE LINE
          ================================================== */}

          <div className="mt-6 flex items-center justify-center gap-3 md:mt-8">

            <div className="h-px flex-1 bg-[#C49A3A]/30" />

            <div className="flex h-7 w-7 rotate-45 items-center justify-center border border-[#C49A3A] bg-[#0D0B09]">

              <span className="-rotate-45 text-[9px] text-[#D8B866]">
                ◆
              </span>

            </div>

            <div className="h-px flex-1 bg-[#C49A3A]/30" />

          </div>

        </div>

      </div>
    </section>
  );
}