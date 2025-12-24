"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import bg from "../../asserts/feedback-bg.webp";



export default function FeedbackVideoSlider({ videos }: any) {
  const bgUrl = typeof bg === "string" ? bg : (bg as { src: string }).src;

  // Helper to extract YouTube video ID
  const getYoutubeId = (url: string): string | null => {
    try {
      const match = url.match(
        /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^?&]+)/i
      );
      return match ? match[1] : null;
    } catch {
      return null;
    }
  };

  if (!videos || videos.length === 0) return null;

  return (
    <section
      className="relative"
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="border-[15px]" style={{ borderColor: "#b5d535" }}>
        <div className="mx-auto max-w-6xl px-4 py-[60px] md:py-[100px]">
          <p
            className="text-center uppercase tracking-widest font-black !text-[14px]"
            style={{ color: "#ffffff" }}
          >
            Feedback
          </p>
          <h2
            className="mt-2 text-center text-[25px] md:text-[42px]"
            style={{ color: "#ffffff" }}
          >
           What Parents Are Saying About Us
          </h2>

          <div className="feedback-swiper mt-12 w-full max-w-[720px] mx-auto border border-white pt-3">
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              allowTouchMove={false}
              className="!pb-7"
            >
              {videos.map((video:any) => {
                
                // const youtubeId = getYoutubeId(video.video_url);
                // if (!youtubeId) return null;

                
                

                return (
                  <SwiperSlide key={video.id}>
                    <div className="relative aspect-video overflow-hidden rounded bg-[#0b4773]">
                      <iframe
                        className="absolute inset-0 h-full w-full"
                        src={video.videoUrl}
                        title={video.videoTitle || "Feedback Video"}
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                    {video.videoTitle && (
                      <p className="mt-3 text-center text-white font-semibold">
                        {video.videoTitle}
                      </p>
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <style jsx global>{`
            .feedback-swiper .swiper-pagination-bullet {
              background: #ffffff;
              opacity: 0.5;
            }
            .feedback-swiper .swiper-pagination-bullet-active {
              background: #ffffff;
              opacity: 1;
            }
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
