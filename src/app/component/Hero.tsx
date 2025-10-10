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
        src: require("../../asserts/hero1.jpg"),
        alt: "Hero Slide 1",
    },
    {
        src: require("../../asserts/hero2.png"),
        alt: "Hero Slide 2",
    },
    {
        src: require("../../asserts/hero3.jpg"),
        alt: "Hero Slide 3",
    },
];

export default function HeroSection() {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    return (
        <section className=" relative z-[1]  bg-center bg-cover bg-no-repeat mt-[-120px] overflow-hidden group">
            {/* <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                loop={true}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    if (
                        swiper.params.navigation &&
                        typeof swiper.params.navigation === "object"
                    ) {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }
                }}
                className="w-full h-full"
            >
                {heroSlides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            className="object-cover w-full h-full"
                            priority
                        />
                    </SwiperSlide>
                ))}
            </Swiper> */}
            <Swiper
                modules={[Navigation, Autoplay]} // ← Removed Pagination module
                autoplay={{ delay: 5000 }}
                loop={true}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    if (
                        swiper.params.navigation &&
                        typeof swiper.params.navigation === "object"
                    ) {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }
                }}
                className="w-full h-[570px]"

            >
                {heroSlides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            className="object-cover w-full h-full"
                            priority

                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Arrows */}
            <button
                ref={prevRef}
                className="cursor-pointer custom-prev absolute top-1/2 left-5 z-10 transform -translate-y-1/2
    bg-white text-[#130947] hover:bg-[#005d98] p-4 rounded shadow-md opacity-0 group-hover:opacity-100 duration-700
    hover:bg-primary hover:text-white hover:scale-110 hover:shadow-lg transition-all"
                aria-label="Previous"
            >
                <BsChevronLeft className="text-2xl" />
            </button>

            <button
                ref={nextRef}
                className="cursor-pointer custom-next absolute top-1/2 right-5 z-10 transform -translate-y-1/2
    bg-white text-[#130947] hover:bg-[#005d98] p-4 rounded shadow-md opacity-0 group-hover:opacity-100 duration-700
    hover:bg-primary hover:text-white hover:scale-110 hover:shadow-lg transition-all"
                aria-label="Next"
            >
                <BsChevronRight className="text-2xl" />
            </button>
        </section>
    );
}
