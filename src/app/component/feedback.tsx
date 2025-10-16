// app/components/FeedbackVideoSlider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import bg from "../../asserts/feedback-bg.jpg";

type Slide = {
  id: number;
  title: string;
  youtubeId: string;
};

const slides: Slide[] = [
  { id: 1, title: "Customer 1", youtubeId: "Gu1ecJqXHa4?si=6paGG5hnH3pxSVFz" },
  { id: 2, title: "Customer 2", youtubeId: "Ga2MiFoibG4?si=S-Nw-HF2QlstisLJ" },
  { id: 3, title: "Customer 3", youtubeId: "T-4nH8lcIO4?si=hQ7RGgutvGUzm4CV" },
];

export default function FeedbackVideoSlider() {
    const bgUrl = typeof bg === "string" ? bg : (bg as { src: string }).src;
  return (
    <section className="relative"
    style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        
      }}>
      
<div className="border-[15px]" style={{ borderColor: "#b5d535" }}>
      <div className="mx-auto max-w-6xl px-4 py-[100px]" >
        <p className="text-center uppercase tracking-widest font-black text text-[14px]" style={{color:"#ffffff"}}>
          Feedback
        </p>
        <h2 className="mt-2 text-center  text-4xl md:text-[42px]" style={{color:"#ffffff"}}>
          What Customer Saying About us
        </h2>

        {/* Make container auto-height; width constrained; space for bullets via pb on Swiper */}
        <div className="feedback-swiper mt-12 w-full max-w-[720px] mx-auto  border border-white pt-3 ">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            allowTouchMove={false}
            className="!pb-7" /* reserve just enough for bullets */
          >
            {slides.map((s) => (
              <SwiperSlide key={s.id}>
                {/* Aspect wrapper controls height; no fixed heights */}
                <div className="relative aspect-video overflow-hidden rounded bg-[#0b4773]">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube.com/embed/${s.youtubeId}?rel=0&modestbranding=1`}
                    title={s.title}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Remove extra bottom padding that created extra box height */}
        </div>
        <style jsx global>{`
  /* Base bullet color */
  .feedback-swiper .swiper-pagination-bullet {
    background: #ffffff;        /* inactive color */
    opacity: 0.5;
  }
  /* Active bullet color */
  .feedback-swiper .swiper-pagination-bullet-active {
    background: #ffffff;        /* active lime to match your design */
    opacity: 1;
  }
  /* Optional: size/spacing tweaks */
  .feedback-swiper .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    margin: 0 6px !important;
  }
`}</style>
      </div>
      </div>
    </section>
  );
}
