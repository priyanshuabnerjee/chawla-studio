"use client";

import { useEffect, useRef } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul & Priya",
      event: "Wedding Ceremony",
      review:
        "Our wedding photographs were beyond anything we imagined. Every emotion, smile, and little moment was captured beautifully. Looking at the pictures feels like reliving our special day.",
    },
    {
      name: "Aman & Simran",
      event: "Pre-Wedding Shoot",
      review:
        "The entire experience was effortless and enjoyable. The team made us feel comfortable throughout the shoot, and the final photographs exceeded all our expectations.",
    },
    {
      name: "Karan & Neha",
      event: "Reception",
      review:
        "Every single frame tells a story. The attention to detail, creativity, and professionalism were outstanding. We couldn't have chosen a better photography team.",
    },
    {
      name: "Rohit & Anjali",
      event: "Engagement Ceremony",
      review:
        "The photographs from our engagement were absolutely beautiful. The team captured every little emotion naturally and made the entire experience feel special.",
    },
    {
      name: "Arjun & Meera",
      event: "Pre-Wedding Shoot",
      review:
        "We were a little nervous before the shoot, but the team made us feel completely comfortable. The pictures turned out elegant, natural, and better than we expected.",
    },
    {
      name: "Vikram & Sneha",
      event: "Wedding Ceremony",
      review:
        "From the first conversation to the final photographs, everything was handled professionally. They captured the emotions of our wedding day perfectly.",
    },
    {
      name: "Aditya & Riya",
      event: "Wedding Reception",
      review:
        "We loved how beautifully every moment was captured. The photographs feel timeless, and looking through them brings back all the memories of our special celebration.",
    },
    {
      name: "Manish & Pooja",
      event: "Couple Shoot",
      review:
        "The creativity and patience of the photography team really stood out. Every photograph felt personal, natural, and beautifully composed. Highly recommended.",
    },
  ];

  const trackRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const positionRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    const firstSet = firstSetRef.current;

    if (!track || !firstSet) return;

    let lastTime = performance.now();

    const speed = 45; // pixels per second

    const animate = (currentTime: number) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      if (!pausedRef.current) {
        positionRef.current -= (speed * delta) / 1000;

        const firstSetWidth = firstSet.offsetWidth;

        if (Math.abs(positionRef.current) >= firstSetWidth) {
          positionRef.current += firstSetWidth;
        }

        track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const pauseCarousel = () => {
    pausedRef.current = true;
  };

  const resumeCarousel = () => {
    pausedRef.current = false;
  };

  return (
    <section className="overflow-hidden bg-white pt-0 pb-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 uppercase tracking-[8px] text-[#D4AF37]">
            TESTIMONIALS
          </p>

          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl text-[#1A120D] lg:text-6xl">
            Loved by Our Couples
          </h2>
          <div className="mx-auto mt-6 flex items-center justify-center gap-4">
  <span className="h-px w-20 bg-[#D4AF37]" />
  <span className="h-2.5 w-2.5 rotate-45 bg-[#D4AF37]" />
  <span className="h-px w-20 bg-[#D4AF37]" />
</div>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Every wedding is unique, and every smile we capture becomes a
            lifelong memory. Here's what our wonderful couples have to say.
          </p>
        </div>

        {/* Carousel Window */}
        <div
          className="w-full overflow-hidden"
          onPointerDown={pauseCarousel}
          onPointerUp={resumeCarousel}
          onPointerCancel={resumeCarousel}
          onPointerLeave={resumeCarousel}
        >
          {/* Moving Track */}
          <div
            ref={trackRef}
            className="flex w-max will-change-transform"
          >

            {/* FIRST SET */}
            <div
              ref={firstSetRef}
              className="flex shrink-0 gap-8 pr-8"
            >
              {testimonials.map((item, index) => (
                <div
                  key={`first-${index}`}
                  className="w-[82vw] shrink-0 md:w-[48vw] lg:w-[31vw]"
                >
                  <div className="flex min-h-[420px] h-full flex-col rounded-3xl border border-[#E8DFD5] bg-[#FDFBF9] p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                    {/* Quote */}
                    <div className="mb-6 text-6xl leading-none text-[#D4AF37]">
                      “
                    </div>

                    {/* Review */}
                    <p className="leading-8 text-gray-600 italic">
                      {item.review}
                    </p>

                    {/* Stars */}
                    <div className="mt-8 text-xl text-[#D4AF37]">
                      ★★★★★
                    </div>

                    {/* Client */}
                    <div className="mt-5">
                      <h3 className="text-xl font-semibold text-[#1A120D]">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-sm uppercase tracking-[3px] text-gray-500">
                        {item.event}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* SECOND IDENTICAL SET */}
            <div className="flex shrink-0 gap-8 pr-8">
              {testimonials.map((item, index) => (
                <div
                  key={`second-${index}`}
                  className="w-[82vw] shrink-0 md:w-[48vw] lg:w-[31vw]"
                >
                  <div className="flex min-h-[420px] h-full flex-col rounded-3xl border border-[#E8DFD5] bg-[#FDFBF9] p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                    {/* Quote */}
                    <div className="mb-6 text-6xl leading-none text-[#D4AF37]">
                      “
                    </div>

                    {/* Review */}
                    <p className="leading-8 text-gray-600 italic">
                      {item.review}
                    </p>

                    {/* Stars */}
                    <div className="mt-8 text-xl text-[#D4AF37]">
                      ★★★★★
                    </div>

                    {/* Client */}
                    <div className="mt-5">
                      <h3 className="text-xl font-semibold text-[#1A120D]">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-sm uppercase tracking-[3px] text-gray-500">
                        {item.event}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Interaction Hint */}
        <div className="mt-8 text-center">
          <p className="text-xs uppercase tracking-[4px] text-gray-400">
            Hold to pause
          </p>
        </div>

      </div>
    </section>
  );
}