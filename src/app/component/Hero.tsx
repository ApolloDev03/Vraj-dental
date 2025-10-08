"use client"
import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import vrajLogo from "../../asserts/hero2.png";

// Slide images: update with your filenames
const heroImages = [
    require("../../asserts/hero1.jpg"),
    require("../../asserts/hero2.png"),
    require("../../asserts/hero3.png"),
];

export default function HeroSection() {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent(current === 0 ? heroImages.length - 1 : current - 1);
    const next = () => setCurrent(current === heroImages.length - 1 ? 0 : current + 1);

    return (
        <section className="relative w-full bg-white">
            <div className=" flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Left Side: Slider */}
                <div className="w-full relative flex items-center justify-center">
                    <button
                        aria-label="Previous"
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-lg z-10"
                        onClick={prev}
                    >
                        <FaChevronLeft className="text-2xl text-blue-900" />
                    </button>
                    <Image
                        src={heroImages[current]}
                        alt={`Hero Slide ${current + 1}`}

                        className="object-contain w-full h-full"
                        priority
                    />
                    <button
                        aria-label="Next"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-lg z-10"
                        onClick={next}
                    >
                        <FaChevronRight className="text-2xl text-blue-900" />
                    </button>
                </div>


            </div>
        </section>
    );
}
