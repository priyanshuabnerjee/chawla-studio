"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
   CINEMATIC VIDEO PREVIEW
===================================================== */

function CinematicPreview({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "1200px 0px", threshold: 0.01 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad || !videoRef.current) return;

    const video = videoRef.current;

    video.load();

    const playVideo = () => {
      video.play().catch(() => {});
    };

    if (video.readyState >= 2) {
      playVideo();
    } else {
      video.addEventListener("canplay", playVideo, { once: true });
    }

    return () => {
      video.removeEventListener("canplay", playVideo);
    };
  }, [shouldLoad]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      autoPlay={shouldLoad}
      muted
      loop
      playsInline
      preload={shouldLoad ? "auto" : "none"}
      className="
        pointer-events-none
        absolute
        inset-0
        h-full
        w-full
        object-cover
        transition-transform
        duration-700
        group-hover:scale-105
      "
    />
  );
}

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
   COMPONENT
===================================================== */

export default function Portfolio() {
  const [galleryOpen, setGalleryOpen] = useState(false);

  const [activeStory, setActiveStory] = useState<{
    title: string;
    images: string[];
  } | null>(null);

  const [currentImage, setCurrentImage] = useState(0);

  const [videoOpen, setVideoOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);


  /* =====================================================
     BODY SCROLL LOCK
  ===================================================== */

  useEffect(() => {
    if (galleryOpen || videoOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [galleryOpen, videoOpen]);

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

  const openGallery = (
  title: string,
  images: string[]
) => {
  setActiveStory({
    title,
    images,
  });

  setCurrentImage(0);
  setGalleryOpen(true);
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
     OPEN / CLOSE VIDEO
  ===================================================== */

  const openVideo = (video: string) => {
    setActiveVideo(video);
    setVideoOpen(true);
  };

  const closeVideo = () => {
    setVideoOpen(false);
    setActiveVideo(null);
  };

  /* =====================================================
     CHANGE IMAGE
  ===================================================== */

  const changeImage = (index: number) => {
    if (!activeStory) return;

    const total = activeStory.images.length;

    const newIndex =
      (index + total) % total;

    setCurrentImage(newIndex);
  };

  /* =====================================================
     NEXT
  ===================================================== */

  const nextImage = () => {
    if (!activeStory) return;

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
    if (!activeStory) return;

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
  alt={
  index === 0
    ? "Wedding photography in Jamshedpur by Chintu Chawla Photography"
    : item.title
}
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

          {/* =====================================================
              CINEMATIC STORIES
          ===================================================== */}

          <div className="mt-28">

            <div className="mb-12 text-center">
              <p className="mb-3 uppercase tracking-[8px] text-[#D4AF37]">
                CINEMATIC STORIES
              </p>

              <h3
                className="
                  font-[family-name:var(--font-cormorant)]
                  text-4xl
                  text-[#1A120D]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Moments Beyond The Frame
              </h3>

              <div className="mx-auto mt-6 flex items-center justify-center gap-4">
                <span className="h-px w-16 bg-[#D4AF37]" />
                <span className="h-2.5 w-2.5 rotate-45 bg-[#D4AF37]" />
                <span className="h-px w-16 bg-[#D4AF37]" />
              </div>

              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
                Experience the emotions, movement, and moments beyond
                photography.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">

              {/* VIDEO 1 */}

              <button
                type="button"
                onClick={() =>
                  openVideo("/videos/cinematic-story-1.mp4")
                }
                className="
                  group
                  relative
                  h-[280px]
                  overflow-hidden
                  rounded-3xl
                  bg-[#120B08]
                  shadow-xl
                  text-left
                  sm:h-[360px]
                  lg:h-[420px]
                "
              >

                <CinematicPreview src="/videos/cinematic-story-1.mp4" />

                <div className="absolute inset-0 bg-black/35 transition-all duration-500 group-hover:bg-black/50" />

                <div className="absolute inset-0 flex items-center justify-center">

                  <span
                    className="
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/70
                      bg-black/40
                      text-2xl
                      text-white
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:border-[#D4AF37]
                      group-hover:bg-[#D4AF37]
                      group-hover:text-black
                    "
                  >
                    ▶
                  </span>

                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7">

                  <p className="text-xs uppercase tracking-[5px] text-[#D4AF37]">
                    CINEMATIC FILM
                  </p>

                  <h4
                    className="
                      mt-2
                      font-[family-name:var(--font-cormorant)]
                      text-3xl
                      text-white
                      sm:text-4xl
                    "
                  >
                    A Story In Motion
                  </h4>

                </div>

              </button>


              {/* VIDEO 2 */}

              <button
                type="button"
                onClick={() =>
                  openVideo("/videos/cinematic-story-2.mp4")
                }
                className="
                  group
                  relative
                  h-[280px]
                  overflow-hidden
                  rounded-3xl
                  bg-[#120B08]
                  shadow-xl
                  text-left
                  sm:h-[360px]
                  lg:h-[420px]
                "
              >

                <CinematicPreview src="/videos/cinematic-story-2.mp4" />

                <div className="absolute inset-0 bg-black/35 transition-all duration-500 group-hover:bg-black/50" />

                <div className="absolute inset-0 flex items-center justify-center">

                  <span
                    className="
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/70
                      bg-black/40
                      text-2xl
                      text-white
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:border-[#D4AF37]
                      group-hover:bg-[#D4AF37]
                      group-hover:text-black
                    "
                  >
                    ▶
                  </span>

                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7">

                  <p className="text-xs uppercase tracking-[5px] text-[#D4AF37]">
                    CINEMATIC FILM
                  </p>

                  <h4
                    className="
                      mt-2
                      font-[family-name:var(--font-cormorant)]
                      text-3xl
                      text-white
                      sm:text-4xl
                    "
                  >
                    Memories In Motion
                  </h4>

                </div>

              </button>

            </div>

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

      {/* =====================================================
          FULLSCREEN VIDEO
      ===================================================== */}

      {videoOpen && activeVideo && (

        <div
          className="
            fixed
            inset-0
            z-[10000]
            flex
            items-center
            justify-center
            bg-black
          "
        >

          {/* CLOSE */}

          <button
            type="button"
            onClick={closeVideo}
            aria-label="Close video"
            className="
              absolute
              right-5
              top-5
              z-30
              flex
              h-12
              w-12
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
              hover:border-[#D4AF37]
              hover:bg-[#D4AF37]
              hover:text-black
            "
          >
            ×
          </button>


          {/* VIDEO */}

          <video
            src={activeVideo}
            autoPlay
            controls
            playsInline
            preload="auto"
            className="
              h-full
              w-full
              object-contain
              bg-black
            "
          />

        </div>

      )}
    </>
  );
}