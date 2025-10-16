// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
// import { TbDental, TbMapPin, TbUsersGroup, TbBadge, TbTools, TbCurrencyRupee } from "react-icons/tb";
// import { FaProjectDiagram, FaMapMarkerAlt, FaUsers, FaPiggyBank, FaBriefcaseMedical, FaMicroscope } from "react-icons/fa";
// import { useRef, useState } from "react";


// type Feature = { id: string; title: string; text: string; icon: React.JSX.Element };

// const features: Feature[] = [
//   { id: "system", title: "SYSTEM BASED DENTISTRY", text: "Structured and evidence‑based dental care approach.", icon: <FaProjectDiagram className="h-6 w-6" /> },
//   { id: "locations", title: "MULTIPLE LOCATIONS", text: "Conveniently accessible clinics at different places.", icon: <FaMapMarkerAlt className="h-6 w-6" /> },
//   { id: "group", title: "GROUP OF DOCTORS", text: "A team of expert dentists collaborating for your care.", icon: <FaUsers className="h-6 w-6" /> },
//   { id: "experience", title: "14 YEARS OF EXPERIENCE", text: "Trusted expertise built over more than a decade.", icon: <FaBriefcaseMedical className="h-6 w-6" /> },
//   { id: "equipment", title: "LATEST EQUIPMENT & TECHNOLOGY", text: "Advanced tools and modern techniques for better outcomes.", icon: <FaMicroscope className="h-6 w-6" /> },
//   { id: "pricing", title: "AFFORDABLE PRICING", text: "High‑quality treatments at fair and transparent rates.", icon: <FaPiggyBank className="h-6 w-6" /> },
// ];

// const slides = [
//   "../../asserts/why-choose-img2.jpg",
//   "/images/clinic-2.jpg",
//   "/images/clinic-3.jpg",
// ];

// export default function WhyChooseUsSwiper() {
//   const prevRef = useRef<HTMLButtonElement | null>(null);
//   const nextRef = useRef<HTMLButtonElement | null>(null);
//   const [active, setActive] = useState(0);

//   return (
//     <section className="relative">
//       {/* <div className="h-2 w-full bg-[#b5d535]" /> */}
//       <div className="relative mx-auto max-w-7xl bg-white border-[15px]" style={{ borderColor: "#b5d535" }}>
//         <div className="grid grid-cols-1 md:grid-cols-2">
//           {/* LEFT PANEL */}
//           <div className="relative bg-[#043d72] px-6 py-10 sm:px-10 md:px-7 md:py-25 text-white overflow-hidden">
//             <div
//               aria-hidden
//               className="pointer-events-none absolute inset-0 opacity-15"
//               style={{
//                 backgroundImage:
//                   "radial-gradient(120px 120px at 20% 20%, rgba(255,255,255,0.06) 0, transparent 60%), radial-gradient(140px 140px at 70% 60%, rgba(255,255,255,0.05) 0, transparent 60%)",
//               }}
//             />
//             <div className="relative">
//               <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white" style={{color:"white"}}>Why you choose us</p>
//               <h2 className="mt-3 text-4xl font-normal leading-tight md:text-[42px]" style={{color:"white"}}>
//                 Perfect Smile,<br />Excellence Defined
//               </h2>

//               <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
//                 {features.map((f) => (
//                   <div key={f.id} className="group gap-4">
//                     <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border border-white/30 bg-white text-[#005d98] group-hover:bg-[#005d98] group-hover:text-white">
//                       {f.icon}
//                     </div>
//                     <div>
//                       <h4 className="text-[17px] mt-[16px] mb-[7px] tracking-wide" style={{color:"#fff", fontWeight: 800}}>{f.title}</h4>
//                       <p className="mt-1 text-[13px] leading-6 text-white/80" style={{color:"#fff"}}>{f.text}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* RIGHT: SWIPER IMAGE SLIDER */}
//           <div className="relative">
//             <Swiper
//               modules={[Navigation, Autoplay]}
//               slidesPerView={1}
//               loop
//               speed={600}
//               autoplay={{ delay: 3800, disableOnInteraction: false }}
//               onSlideChange={(s) => setActive(s.realIndex)}
//               onBeforeInit={(s) => {

//                 s.params.navigation = { prevEl: prevRef.current, nextEl: nextRef.current };
//                 s.navigation.init();
//                 s.navigation.update();
//               }}
//               className="h-full"
//             >
//               {slides.map((src, i) => (
//                 <SwiperSlide key={i}>
//                   <div className="relative">
//                     <img src={src} alt="" className="h-full w-full object-cover" />
//                     <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>

//             {/* arrows */}
//             <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-between px-6">
//               <button
//                 ref={prevRef}
//                 aria-label="Previous"
//                 className="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-[#0d4272] shadow hover:bg-white"
//               >
//                 <HiOutlineChevronLeft className="h-5 w-5" />
//               </button>
//               <button
//                 ref={nextRef}
//                 aria-label="Next"
//                 className="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-[#0d4272] shadow hover:bg-white"
//               >
//                 <HiOutlineChevronRight className="h-5 w-5" />
//               </button>
//             </div>

//             {/* tiny line pagination */}
//             <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2">
//               {slides.map((_, i) => (
//                 <span
//                   key={i}
//                   className={`h-0.5 rounded transition-all ${i === active ? "w-8 bg-[#1b2a6b]/70" : "w-6 bg-[#9aa7c7]/60"}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <div className="h-2 w-full bg-[#b5d535]" /> */}
//     </section>
//   );
// }


"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import {
  FaProjectDiagram,
  FaMapMarkerAlt,
  FaUsers,
  FaBriefcaseMedical,
  FaMicroscope,
  FaPiggyBank,
} from "react-icons/fa";

type Feature = { id: string; title: string; text: string; icon: React.ReactNode };
type Slide = { src: any; alt: string };

const features: Feature[] = [
  {
    id: "system",
    title: "SYSTEM BASED DENTISTRY",
    text: "Structured and evidence‑based dental care approach.",
    icon: <FaProjectDiagram className="h-6 w-6" />,
  },
  {
    id: "locations",
    title: "MULTIPLE LOCATIONS",
    text: "Conveniently accessible clinics at different places.",
    icon: <FaMapMarkerAlt className="h-6 w-6" />,
  },
  {
    id: "group",
    title: "GROUP OF DOCTORS",
    text: "A team of expert dentists collaborating for your care.",
    icon: <FaUsers className="h-6 w-6" />,
  },
  {
    id: "experience",
    title: "14 YEARS OF EXPERIENCE",
    text: "Trusted expertise built over more than a decade.",
    icon: <FaBriefcaseMedical className="h-6 w-6" />,
  },
  {
    id: "equipment",
    title: "LATEST EQUIPMENT & TECHNOLOGY",
    text: "Advanced tools and modern techniques for better outcomes.",
    icon: <FaMicroscope className="h-6 w-6" />,
  },
  {
    id: "pricing",
    title: "AFFORDABLE PRICING",
    text: "High‑quality treatments at fair and transparent rates.",
    icon: <FaPiggyBank className="h-6 w-6" />,
  },
];

const heroSlides: Slide[] = [
  { src: require("../../asserts/why-choose-img2.jpg"), alt: "Hero Slide 1" },
  { src: require("../../asserts/hero2.png"), alt: "Hero Slide 2" },
  { src: require("../../asserts/hero3.jpg"), alt: "Hero Slide 3" },
];

export default function HeroWithWhyChoose() {
  const prevRef = useRef<HTMLButtonElement >(null);
  const nextRef = useRef<HTMLButtonElement >(null);
  const [active, setActive] = useState(0);

  return (
    <section className="relative">
      <div
        className="relative mx-auto max-w-7xl bg-white border-[15px]"
        style={{ borderColor: "#b5d535" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT: WHY CHOOSE */}
          <div className="relative bg-[#043d72] px-6 py-10 sm:px-10 md:px-7 md:py-25 text-white overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  "radial-gradient(120px 120px at 20% 20%, rgba(255,255,255,0.06) 0, transparent 60%), radial-gradient(140px 140px at 70% 60%, rgba(255,255,255,0.05) 0, transparent 60%)",
              }}
            />
            <div className="relative">
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em]" style={{ color: "white" }}>
                Why you choose us
              </p>
              <h2
                className="mt-3 text-4xl font-normal leading-tight md:text-[42px]"
                style={{ color: "white" }}
              >
                Perfect Smile,<br />Excellence Defined
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {features.map((f) => (
                  <div key={f.id} className="group gap-4">
                    <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border border-white/30 bg-white text-[#005d98] group-hover:bg-[#005d98] group-hover:text-white">
                      {f.icon}
                    </div>
                    <div>
                      <h4
                        className="text-[17px] mt-[16px] mb-[7px] tracking-wide"
                        style={{ color: "#fff", fontWeight: 800 }}
                      >
                        {f.title}
                      </h4>
                      <p className="mt-1 text-[13px] leading-6 text-white/80" style={{ color: "#fff" }}>
                        {f.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: SLIDER */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              loop
              speed={600}
              autoplay={false}
              onSlideChange={(s) => setActive(s.realIndex)}
              navigation={{
          // placeholders; real elements assigned in onBeforeInit
          prevEl: prevRef.current || undefined,
          nextEl: nextRef.current || undefined,
        }}
              onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation === "object") {
            swiper.params.navigation.prevEl = prevRef.current!;
            swiper.params.navigation.nextEl = nextRef.current!;
          }
          swiper.navigation.init();
          swiper.navigation.update();
        }}
              className="h-full w-full"
            >
              {heroSlides.map((slide, i) => (
                <SwiperSlide key={i} className="!h-full">
                  <div className="relative w-full h-full">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      className="object-cover w-full h-full"
                      fill
                      sizes="50vw"
                      priority
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* arrows */}
            {/* arrows – always visible on top */}
            <div className="relative inset-y-0 left-4 z-20 flex flex-col items-center justify-center gap-3">
              <button
                ref={prevRef}
                aria-label="Previous"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 grid h-10 w-10 place-items-center rounded-full bg-white/95 text-[#0d4272] shadow hover:bg-white transition"
              >
                <BsChevronLeft className="h-5 w-5" />
              </button>
              <button
                ref={nextRef}
                aria-label="Next"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 grid h-10 w-10 place-items-center rounded-full bg-white/95 text-[#0d4272] shadow hover:bg-white transition"
              >
                <BsChevronRight className="h-5 w-5" />
              </button>
            </div>


            {/* tiny line pagination */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2">
              {heroSlides.map((_, i) => (
                <span
                  key={i}
                  className={`h-0.5 rounded transition-all ${i === active ? "w-8 bg-[#1b2a6b]/70" : "w-6 bg-[#9aa7c7]/60"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
