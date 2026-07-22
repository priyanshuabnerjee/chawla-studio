import Image from "next/image";

const portfolioItems = [
  {
    title: "Wedding",
    subtitle: "Timeless Love Stories",
    image: "/images/about/about.jpg",
  },
  {
    title: "Pre Wedding",
    subtitle: "Beautiful Beginnings",
    image: "/images/about/about.jpg",
  },
  {
    title: "Haldi",
    subtitle: "Colours of Celebration",
    image: "/images/about/about.jpg",
  },
  {
    title: "Mehendi",
    subtitle: "Elegant Traditions",
    image: "/images/about/about.jpg",
  },
  {
    title: "Reception",
    subtitle: "Grand Celebrations",
    image: "/images/about/about.jpg",
  },
  {
    title: "Couple Portrait",
    subtitle: "Forever Together",
    image: "/images/about/about.jpg",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#F9F7F4] py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 uppercase tracking-[8px] text-[#D4AF37]">
            OUR PORTFOLIO
          </p>

          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl lg:text-6xl text-[#1A120D]">
            Stories Captured Forever
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Every wedding has its own story. Here are some of the beautiful
            moments we've had the privilege to capture.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={700}
                height={900}
                className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>

              {/* Text */}
              <div className="absolute bottom-0 left-0 p-8 translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="uppercase tracking-[5px] text-[#D4AF37] text-sm">
                  {item.title}
                </p>

                <h3 className="mt-2 text-3xl font-[family-name:var(--font-cormorant)] text-white">
                  {item.subtitle}
                </h3>

                <p className="mt-3 text-gray-300">
                  View Story →
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}