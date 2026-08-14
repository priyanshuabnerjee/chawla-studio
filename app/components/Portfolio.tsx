"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/* =====================================================
   STORY IMAGES
===================================================== */

const weddingImages = [
  "/images/portfolio/wedding/wedding-1.JPG",
  "/images/portfolio/wedding/wedding-2.JPG",
  "/images/portfolio/wedding/wedding-3.JPG",
  "/images/portfolio/wedding/wedding-4.JPG",
  "/images/portfolio/wedding/wedding-5.JPG",
];

const preWeddingImages = [
  "/images/portfolio/pre-wedding/prewedding-1.jpg",
  "/images/portfolio/pre-wedding/prewedding-2.jpg",
  "/images/portfolio/pre-wedding/prewedding-3.jpg",
  "/images/portfolio/pre-wedding/prewedding-4.jpg",
  "/images/portfolio/pre-wedding/prewedding-5.jpg",
];

const modelImages = [
  "/images/portfolio/model-shoot/model-1.jpg",
  "/images/portfolio/model-shoot/model-2.jpg",
  "/images/portfolio/model-shoot/model-3.jpg",
  "/images/portfolio/model-shoot/model-4.jpg",
  "/images/portfolio/model-shoot/model-5.jpg",
];

const maternityImages = [
  "/images/portfolio/maternity/maternity-1.jpg",
  "/images/portfolio/maternity/maternity-2.jpg",
  "/images/portfolio/maternity/maternity-3.jpg",
  "/images/portfolio/maternity/maternity-4.jpg",
  "/images/portfolio/maternity/maternity-5.jpg",
];

const kidsImages = [
  "/images/portfolio/kids/kids-1.jpg",
  "/images/portfolio/kids/kids-2.jpg",
  "/images/portfolio/kids/kids-3.jpg",
  "/images/portfolio/kids/kids-4.jpg",
  "/images/portfolio/kids/kids-5.jpg",
];

const engagementImages = [
  "/images/portfolio/engagement/engagement-1.jpg",
  "/images/portfolio/engagement/engagement-2.jpg",
  "/images/portfolio/engagement/engagement-3.jpg",
  "/images/portfolio/engagement/engagement-4.jpg",
  "/images/portfolio/engagement/engagement-5.jpg",
];

/* =====================================================
   PORTFOLIO CARDS
===================================================== */

const portfolioItems = [
  {
    title: "Engagement Ceremony",
    subtitle: "A Beautiful Beginning",
    image: engagementImages[0],
    storyImages: engagementImages,
  },
  {
    title: "Pre Wedding",
    subtitle: "Beautiful Beginnings",
    image: preWeddingImages[0],
    storyImages: preWeddingImages,
  },
  {
    title: "Wedding",
    subtitle: "Timeless Love Stories",
    image: weddingImages[0],
    storyImages: weddingImages,
  },
  {
    title: "Maternity Shoots",
    subtitle: "The Beauty of Motherhood",
    image: maternityImages[0],
    storyImages: maternityImages,
  },
  {
    title: "Kids Shoots",
    subtitle: "Little Moments, Forever Memories",
    image: kidsImages[0],
    storyImages: kidsImages,
  },
  {
    title: "Model Shoots",
    subtitle: "Confidence in Every Frame",
    image: modelImages[0],
    storyImages: modelImages,
  },
];

/* =====================================================
   IMAGE PRELOADER
===================================================== */

const preloadImage = (src: string) => {
  return new Promise<void>((resolve) => {
    const img = new window.Image();

    img.onload = () => resolve();
    img.onerror = () => resolve();

    img.src = src;
  });
};

/* =====================================================
   COMPONENT
===================================================== */

export default function Portfolio() {
  const [galleryOpen, setGalleryOpen] = useState(false);

  const [activeStory, setActiveStory] = useState<{
    title: string;
    images: string[];
  } | null>(null);

  const [currentImage, setCurrentImage] = useState(0);

  const [imageLoading, setImageLoading] = useState(false);

  /* =====================================================
     BODY SCROLL LOCK
  ===================================================== */

  useEffect(() => {
    if (galleryOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [galleryOpen]);

  /* =====================================================
     KEYBOARD CONTROLS
  ===================================================== */

  useEffect(() => {
    if (!galleryOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeGallery();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [galleryOpen, activeStory, currentImage]);

  /* =====================================================
     OPEN STORY
  ===================================================== */

  const openGallery = async (
    title: string,
    images: string[]
  ) => {
    setActiveStory({
      title,
      images,
    });

    setCurrentImage(0);
    setImageLoading(false);
    setGalleryOpen(true);

    /*
      Only preload the first two photos
      of the selected story.
    */

    preloadImage(images[0]);

    if (images[1]) {
      preloadImage(images[1]);
    }
  };

  /* =====================================================
     CLOSE STORY
  ===================================================== */

  const closeGallery = () => {
    setGalleryOpen(false);

    setTimeout(() => {
      setActiveStory(null);
      setCurrentImage(0);
    }, 200);
  };

  /* =====================================================
     CHANGE IMAGE
  ===================================================== */

  const changeImage = async (index: number) => {
    if (!activeStory) return;

    const total = activeStory.images.length;

    const newIndex =
      (index + total) % total;

    const image =
      activeStory.images[newIndex];

    setImageLoading(true);

    await preloadImage(image);

    setCurrentImage(newIndex);

    setImageLoading(false);

    /*
      Preload the next image quietly.
      This makes the next click feel faster.
    */

    const nextIndex =
      (newIndex + 1) % total;

    preloadImage(
      activeStory.images[nextIndex]
    );
  };

  /* =====================================================
     NEXT
  ===================================================== */

  const nextImage = () => {
    if (!activeStory || imageLoading) return;

    const next =
      currentImage + 1 >= activeStory.images.length
        ? 0
        : currentImage + 1;

    changeImage(next);
  };

  /* =====================================================
     PREVIOUS
  ===================================================== */

  const previousImage = () => {
    if (!activeStory || imageLoading) return;

    const previous =
      currentImage - 1 < 0
        ? activeStory.images.length - 1
        : currentImage - 1;

    changeImage(previous);
  };

  return (
    <>
      {/* =====================================================
          PORTFOLIO
      ===================================================== */}

      <section
        id="portfolio"
        className="relative -mt-px bg-[#F9F7F4] pt-0 pb-28"
      >
        <div className="mx-auto max-w-7xl px-6">

          {/* HEADING */}

          <div className="mb-16 text-center">

            <p className="mb-3 uppercase tracking-[8px] text-[#D4AF37]">
              OUR PORTFOLIO
            </p>

            <h2
              className="
                font-[family-name:var(--font-cormorant)]
                text-5xl
                text-[#1A120D]
                lg:text-6xl
              "
            >
              Stories Captured Forever
            </h2>
            <div className="mx-auto mt-6 flex items-center justify-center gap-4">
  <span className="h-px w-20 bg-[#D4AF37]" />
  <span className="h-2.5 w-2.5 rotate-45 bg-[#D4AF37]" />
  <span className="h-px w-20 bg-[#D4AF37]" />
</div>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Every celebration has its own story. Here are some of
              the beautiful moments we've had the privilege to capture.
            </p>

          </div>

          {/* =====================================================
              CARDS
          ===================================================== */}

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {portfolioItems.map((item, index) => (

              <div
                key={item.title}
                onClick={() =>
                  openGallery(
                    item.title,
                    item.storyImages
                  )
                }
                className="
                  group
                  relative
                  cursor-pointer
                  overflow-hidden
                  rounded-3xl
                  shadow-xl
                "
              >

                {/* COVER IMAGE */}

                <Image
  src={item.image}
  alt={item.title}
  width={700}
  height={900}
  priority={index === 0}
  sizes="
    (max-width: 768px) 100vw,
    (max-width: 1024px) 50vw,
    33vw
  "
  className="
    h-[500px]
    w-full
    object-cover
    transition-transform
    duration-700
    ease-out
    xl:group-hover:scale-110
  "
/>

                {/* OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/30
                    to-transparent
                    opacity-100
                    transition-opacity
                    duration-500
                    xl:opacity-0
                    xl:group-hover:opacity-100
                  "
                />

                {/* CONTENT */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-6
                    opacity-100
                    transition-all
                    duration-500
                    xl:p-8
                    xl:translate-y-8
                    xl:opacity-0
                    xl:group-hover:translate-y-0
                    xl:group-hover:opacity-100
                  "
                >

                  <p
                    className="
                      text-sm
                      uppercase
                      tracking-[5px]
                      text-[#D4AF37]
                    "
                  >
                    {item.title}
                  </p>

                  <h3
                    className="
                      mt-2
                      text-3xl
                      text-white
                      font-[family-name:var(--font-cormorant)]
                    "
                  >
                    {item.subtitle}
                  </h3>

                  {/* VIEW STORY */}

                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();

                      openGallery(
                        item.title,
                        item.storyImages
                      );
                    }}
                    className="
                      mt-4
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-[#D4AF37]
                      bg-black/50
                      px-5
                      py-2.5
                      text-sm
                      font-medium
                      text-white
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      hover:bg-[#D4AF37]
                      hover:text-black
                      active:scale-95
                    "
                  >
                    <span>View Story</span>

                    <span className="text-[#D4AF37]">
                      →
                    </span>
                  </button>

                </div>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          FULLSCREEN GALLERY
      ===================================================== */}

      {galleryOpen && activeStory && (

        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/95
            backdrop-blur-sm
          "
          onClick={(event) => {
            if (
              event.target === event.currentTarget
            ) {
              closeGallery();
            }
          }}
        >

          {/* TOP BAR */}

          <div
            className="
              absolute
              left-0
              right-0
              top-0
              z-20
              flex
              items-center
              justify-between
              px-5
              py-5
              md:px-10
              md:py-7
            "
          >

            <button
              type="button"
              onClick={closeGallery}
              className="
                rounded-full
                border
                border-white/30
                bg-black/40
                px-5
                py-3
                text-sm
                font-medium
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#D4AF37]
                hover:bg-[#D4AF37]
                hover:text-black
              "
            >
              ← Back to Portfolio
            </button>

            <div
              className="
                rounded-full
                border
                border-[#D4AF37]/50
                bg-black/40
                px-4
                py-2
                text-sm
                tracking-[3px]
                text-[#D4AF37]
                backdrop-blur-md
              "
            >
              {currentImage + 1} / {activeStory.images.length}
            </div>

          </div>

          {/* IMAGE AREA */}

          <div
            className="
              relative
              flex
              h-[78vh]
              w-[92vw]
              max-w-7xl
              items-center
              justify-center
              md:h-[82vh]
            "
          >

            {/* LOADING SPINNER */}

            {imageLoading && (
              <div
                className="
                  absolute
                  z-20
                  h-10
                  w-10
                  animate-spin
                  rounded-full
                  border-2
                  border-white/20
                  border-t-[#D4AF37]
                "
              />
            )}

            {/* IMAGE */}

            <div className="relative h-full w-full">

              <Image
                key={activeStory.images[currentImage]}
                src={activeStory.images[currentImage]}
                alt={`${activeStory.title} photograph ${
                  currentImage + 1
                }`}
                fill
                priority
                loading="eager"
                sizes="100vw"
                className="
                  select-none
                  object-contain
                "
              />

            </div>

            {/* PREVIOUS */}

            <button
              type="button"
              onClick={previousImage}
              disabled={imageLoading}
              aria-label="Previous image"
              className="
                absolute
                left-2
                top-1/2
                flex
                h-12
                w-12
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                bg-black/50
                text-2xl
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:scale-110
                hover:border-[#D4AF37]
                hover:bg-[#D4AF37]
                hover:text-black
                disabled:opacity-40
                md:left-5
                md:h-14
                md:w-14
              "
            >
              ←
            </button>

            {/* NEXT */}

            <button
              type="button"
              onClick={nextImage}
              disabled={imageLoading}
              aria-label="Next image"
              className="
                absolute
                right-2
                top-1/2
                flex
                h-12
                w-12
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                bg-black/50
                text-2xl
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:scale-110
                hover:border-[#D4AF37]
                hover:bg-[#D4AF37]
                hover:text-black
                disabled:opacity-40
                md:right-5
                md:h-14
                md:w-14
              "
            >
              →
            </button>

          </div>

          {/* BOTTOM */}

          <div
            className="
              absolute
              bottom-5
              left-0
              right-0
              z-20
              flex
              flex-col
              items-center
              gap-3
              px-5
              text-center
              md:bottom-7
            "
          >

            <p
              className="
                text-xs
                uppercase
                tracking-[5px]
                text-[#D4AF37]
              "
            >
              {activeStory.title} STORY
            </p>

            {/* INDICATORS */}

            <div className="flex gap-2">

              {activeStory.images.map((_, index) => (

                <button
                  key={index}
                  type="button"
                  disabled={imageLoading}
                  onClick={() =>
                    changeImage(index)
                  }
                  aria-label={`Go to image ${
                    index + 1
                  }`}
                  className={`
                    h-1.5
                    rounded-full
                    transition-all
                    duration-500
                    disabled:cursor-wait
                    ${
                      currentImage === index
                        ? "w-10 bg-[#D4AF37]"
                        : "w-3 bg-white/30 hover:bg-white/60"
                    }
                  `}
                />

              ))}

            </div>

          </div>

        </div>
      )}
    </>
  );
}