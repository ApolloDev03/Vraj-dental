"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const heroSlides = [
    {
        src: require("../../asserts/hero1.webp"),
        alt: "Hero Slide 1",
    },
    {
        src: require("../../asserts/hero2.webp"),
        alt: "Hero Slide 2",
    },
    {
        src: require("../../asserts/hero3.webp"),
        alt: "Hero Slide 3",
    },
];

export default function HeroSection() {
    // const prevRef = useRef<HTMLButtonElement>(null);
    // const nextRef = useRef<HTMLButtonElement>(null);

    return (
        <section className=" relative z-[1]  bg-center bg-cover bg-no-repeat md:mt-[0px] overflow-hidden group">

            <Swiper
                modules={[Navigation, Autoplay]} // ← Removed Pagination module
                autoplay={{ delay: 5000 }}
                loop={true}
                navigation={{
                    prevEl: ".hero-prev",
                    nextEl: ".hero-next",
                }}

                // onBeforeInit={(swiper) => {
                //     if (
                //         swiper.params.navigation &&
                //         typeof swiper.params.navigation === "object"
                //     ) {
                //         swiper.params.navigation.prevEl = prevRef.current;
                //         swiper.params.navigation.nextEl = nextRef.current;
                //     }
                // }}
                // navigation={{
                //     prevEl: prevRef.current,
                //     nextEl: nextRef.current,
                // }}
                className="w-full h-[160px] md:h-[100vh]"

            >
                {heroSlides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            className="object-cover w-full h-full"
                            priority
                            width={0}
                            height={0}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Arrows */}
            <button
                className="hero-prev cursor-pointer absolute top-1/2 left-5 z-10 transform -translate-y-1/2
    bg-white text-[#130947] hover:bg-[#005d98] p-4 rounded shadow-md opacity-0 group-hover:opacity-100 duration-700
    hover:text-white hover:scale-110 transition-all"
                aria-label="Previous"
            >
                <BsChevronLeft className="text-2xl" />
            </button>

            <button
                className="hero-next cursor-pointer absolute top-1/2 right-5 z-10 transform -translate-y-1/2
    bg-white text-[#130947] hover:bg-[#005d98] p-4 rounded shadow-md opacity-0 group-hover:opacity-100 duration-700
    hover:text-white hover:scale-110 transition-all"
                aria-label="Next"
            >
                <BsChevronRight className="text-2xl" />
            </button>

        </section>
    );
}
