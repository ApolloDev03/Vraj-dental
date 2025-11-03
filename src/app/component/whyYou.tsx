"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import {
  FaProjectDiagram,
  FaMapMarkerAlt,
  FaUsers,
  FaBriefcaseMedical,
  FaMicroscope,
  FaPiggyBank,
} from "react-icons/fa";
import bg from "../../asserts/bg-black.webp";
import aboutImg1 from '@/asserts/why-choose-img1.webp'
import aboutImg2 from '@/asserts/why-choose-img2.webp'
import aboutImg3 from '@/asserts/why-choose-img3.webp'

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



export default function HeroWithWhyChoose() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [active, setActive] = useState(0);

  const bgUrl = typeof bg === "string" ? bg : (bg as { src: string }).src;

  return (
    <section className="relative"
    >
      <div
        className="relative mx-auto max-w-7xl bg-white border-[15px]"
        style={{ borderColor: "#b5d535" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT: WHY CHOOSE */}
          <div className="relative bg-[#043d72] px-6 py-10 sm:px-10 md:px-7 md:py-25 text-white overflow-hidden"
            style={{
              backgroundImage: `url(${bgUrl})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  "radial-gradient(120px 120px at 20% 20%, rgba(255,255,255,0.06) 0, transparent 60%), radial-gradient(140px 140px at 70% 60%, rgba(255,255,255,0.05) 0, transparent 60%)",
              }}
            />
            <div className="relative">
              <p className="!text-[12px] text-center md:text-start font-semibold uppercase tracking-[0.2em]" style={{ color: "white" }}>
                Why you choose us
              </p>
              <h2
                className="mt-3 text-center md:text-start text-[25px] font-normal leading-tight md:text-[42px]"
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

          {/* Right side - Swiper */}
          <div className="relative h-full min-h-[308px] md:min-h-[600px] group">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              onBeforeInit={(swiper) => {
                const prev = swiper.el.querySelector('.swiper-button-prev') as HTMLElement | null;
                const next = swiper.el.querySelector('.swiper-button-next') as HTMLElement | null;

                if (prev) prev.style.color = 'white';
                if (next) next.style.color = 'white';
              }}

              // autoplay={{
              //   delay: 3000,
              //   disableOnInteraction: false,
              // }}
              loop={true}
              className="h-full why-choose-swiper"
            >
              <SwiperSlide>
                <div className="relative h-full w-full">
                  <Image
                    src={aboutImg1.src}
                    alt="Dental Treatment"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full w-full">
                  <Image
                    src={aboutImg2.src}
                    alt="Dental Care"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full w-full">
                  <Image
                    src={aboutImg3.src}
                    alt="Dental Service"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </SwiperSlide>
            </Swiper>
            {/* Custom styles for Swiper buttons */}
            <style jsx global>{`
    /* ✅ Hide buttons by default */
    .why-choose-swiper .swiper-button-prev,
    .why-choose-swiper .swiper-button-next {
      opacity: 0;
      transition: all 0.3s ease;
    }

    /* ✅ Show on hover over parent */
    .group:hover .why-choose-swiper .swiper-button-prev,
    .group:hover .why-choose-swiper .swiper-button-next {
      opacity: 1;
    }

    /* ✅ Button design */
    .why-choose-swiper .swiper-button-prev,
    .why-choose-swiper .swiper-button-next {
      color: white;
      // background-color: rgba(0, 0, 0, 0.4);
      border-radius: 50%;
      width: 45px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* ✅ Hover color change */
    .why-choose-swiper .swiper-button-prev:hover,
    .why-choose-swiper .swiper-button-next:hover {
      // background-color: #ffffff;
      color: #005d98 !important;
    }

    /* ✅ Adjust arrow size */
    .why-choose-swiper .swiper-button-prev::after,
    .why-choose-swiper .swiper-button-next::after {
      font-size: 18px;
      font-weight: bold;
    }
  `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}
