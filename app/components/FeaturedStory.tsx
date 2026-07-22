import Image from "next/image";

export default function FeaturedStory() {
  return (
    <section className="bg-[#F9F7F4] py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-[#8B6B4A] mb-3">
            Featured Wedding
          </p>

          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl lg:text-6xl text-[#2B1B12]">
            A Royal Wedding Story
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <Image
              src="/images/about/about.jpg"
              alt="Royal Wedding"
              width={700}
              height={900}
              className="rounded-3xl shadow-2xl object-cover w-full"
            />
          </div>

          <div>

            <h3 className="text-4xl font-[family-name:var(--font-cormorant)] text-[#2B1B12] mb-6">
              Love. Tradition. Celebration.
            </h3>

            <p className="text-lg text-gray-600 leading-8 mb-8">
              Every wedding tells a unique story. From heartfelt vows to joyful
              celebrations, we capture every emotion with cinematic elegance,
              creating timeless memories that families will cherish forever.
            </p>

            <button className="bg-[#8B6B4A] hover:bg-[#6f5438] transition text-white px-8 py-4 rounded-full">
              View Full Gallery
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}