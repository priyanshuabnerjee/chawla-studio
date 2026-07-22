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
  ];

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 uppercase tracking-[8px] text-[#D4AF37]">
            TESTIMONIALS
          </p>

          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl lg:text-6xl text-[#1A120D]">
            Loved by Our Couples
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Every wedding is unique, and every smile we capture becomes a
            lifelong memory. Here's what our wonderful couples have to say.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-[#E8DFD5] bg-[#FDFBF9] p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Quote */}
              <div className="mb-6 text-6xl leading-none text-[#D4AF37]">
                “
              </div>

              {/* Review */}
              <p className="leading-8 text-gray-600 italic">
                {item.review}
              </p>

              {/* Stars */}
              <div className="mt-8 text-[#D4AF37] text-xl">
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
          ))}
        </div>

      </div>
    </section>
  );
}