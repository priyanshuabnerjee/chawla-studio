export default function Services() {
  const services = [
    {
      title: "Wedding Photography",
      description:
        "Timeless wedding photography that captures every emotion, smile, and unforgettable moment with artistic elegance.",
      icon: "📸",
    },
    {
      title: "Pre Wedding Shoots",
      description:
        "Romantic pre-wedding sessions at beautiful locations, crafted to tell your unique love story.",
      icon: "💍",
    },
    {
      title: "Cinematic Wedding Films",
      description:
        "Luxury cinematic films that preserve every emotion through storytelling, music, and beautiful visuals.",
      icon: "🎥",
    },
    {
      title: "Premium Albums",
      description:
        "Handcrafted premium albums with elegant finishes, designed to preserve your memories for generations.",
      icon: "📖",
    },
  ];

  return (
    <section
      id="services"
      className="bg-gradient-to-b from-[#F9F6F2] to-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 uppercase tracking-[6px] text-[#D4AF37]">
            Our Services
          </p>

          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-semibold text-[#2B1B12] sm:text-5xl lg:text-6xl">
            Crafted For Every Celebration
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            Every celebration deserves to be remembered beautifully. We blend
            creativity, emotion, and storytelling to create timeless memories
            you'll treasure forever.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex min-h-[430px] flex-col rounded-3xl border border-[#D4AF37]/20 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-[#D4AF37] hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#D4AF37]/10 text-5xl transition duration-500 group-hover:scale-110 group-hover:bg-[#D4AF37]/20">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="min-h-[72px] text-2xl font-semibold leading-tight text-[#2B1B12]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-4 flex-grow leading-7 text-gray-600">
                {service.description}
              </p>

              {/* Button */}
              <a
                href="#contact"
                className="mt-8 inline-block font-semibold text-[#D4AF37] transition hover:text-[#B89024]"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}