// "use client"
// import { useState } from "react";
// import Image from "next/image";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// // Replace with your Next.js public image paths if possible for static files
// const heroSlides = [
//   {
//     src: require("../../asserts/hero1.jpg"),
//     alt: "Hero Slide 1",
//     showBanner: true, // Only first slide shows content overlay below
//   },
//   {
//     src: require("../../asserts/hero2.png"),
//     alt: "Hero Slide 2",
//     showBanner: false,
//   },
//   {
//     src: require("../../asserts/hero3.png"),
//     alt: "Hero Slide 3",
//     showBanner: false,
//   },
// ];

// export default function HeroSection() {
//   const [current, setCurrent] = useState(0);

//   const prev = () => setCurrent(current === 0 ? heroSlides.length - 1 : current - 1);
//   const next = () => setCurrent(current === heroSlides.length - 1 ? 0 : current + 1);

//   return (
//     <section className="relative w-full bg-white mt-[-120px]">
//       <div className="relative flex items-center justify-center min-h-[400px]">
//         {/* Image Slider */}
//         <button
//           aria-label="Previous"
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-lg z-10"
//           onClick={prev}
//         >
//           <FaChevronLeft className="text-2xl text-blue-900" />
//         </button>
//         <Image
//           src={heroSlides[current].src}
//           alt={heroSlides[current].alt}
//           className="object-cover w-full h-[450px]"
//           priority
//         />
//         <button
//           aria-label="Next"
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-lg z-10"
//           onClick={next}
//         >
//           <FaChevronRight className="text-2xl text-blue-900" />
//         </button>     
//       </div>
//     </section>
//   );
// }


"use client";
import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Your slide images and alt text
const heroSlides = [
    {
        src: require("../../asserts/hero1.jpg"),
        alt: "Hero Slide 1",
        showBanner: true,
    },
    {
        src: require("../../asserts/hero2.png"),
        alt: "Hero Slide 2",
        showBanner: false,
    },
    {
        src: require("../../asserts/hero3.png"),
        alt: "Hero Slide 3",
        showBanner: false,
    },
];

export default function HeroSection() {
    const [current, setCurrent] = useState(0);

    const prev = () =>
        setCurrent(current === 0 ? heroSlides.length - 1 : current - 1);
    const next = () =>
        setCurrent(current === heroSlides.length - 1 ? 0 : current + 1);

    return (
        <section className="relative w-full bg-white mt-[-120px]">
            <div className="relative flex items-center justify-center min-h-[400px]">
                {/* Left Arrow */}
                <button
                    aria-label="Previous"
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                     bg-white w-[48px] h-[48px] flex items-center justify-center
                     border border-gray-200 shadow hover:bg-gray-100 transition"
                    style={{ outline: "none" }}
                    onClick={prev}
                >
                    <FaChevronLeft className="text-2xl text-gray-700" />
                </button>

                {/* Slide Image */}
                <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                        src={heroSlides[current].src}
                        alt={heroSlides[current].alt}
                        className="object-cover w-full h-[450px]"
                        priority
                    />
                </div>

                {/* Right Arrow */}
                <button
                    aria-label="Next"
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                     bg-white w-[48px] h-[48px] flex items-center justify-center
                     border border-gray-200 shadow hover:bg-gray-100 transition"
                    style={{ outline: "none" }}
                    onClick={next}
                >
                    <FaChevronRight className="text-2xl text-gray-700" />
                </button>
            </div>
        </section>
    );
}

