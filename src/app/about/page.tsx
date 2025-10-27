// app/about-us/page.tsx
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BreadcrumbHero from '../component/breadcrumb';
import aboutImg from '@/asserts/about-img3.jpg'
import aboutImg1 from '@/asserts/why-choose-img1.jpg'
import aboutImg2 from '@/asserts/why-choose-img2.jpg'
import aboutImg3 from '@/asserts/why-choose-img3.jpg'
import { FaUserMd, FaFlask, FaBaby } from "react-icons/fa";
import { RiToothFill } from 'react-icons/ri';
import bg from "../../asserts/feedback-bg.jpg";
import doc1 from '@/asserts/doc1.jpg'
import doc2 from '@/asserts/doc2.jpg'
import doc3 from '@/asserts/doc3.jpg'
import doc4 from '@/asserts/doc4.jpg'
import doc5 from '@/asserts/doc5.jpg'
import doc6 from '@/asserts/doc6.jpg'
import BlogSection from '../component/blogHome';
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/config";

interface Doctor {
    id: number;
    name: string;
    specialty: string;
    image: string;

}

interface Testimonial {
    id: number;
    name: string;
    text: string;
    // rating: number;
}

type Blog = {
    blogImage: string;
  created_at: string;
  blogTitle: string;
  blogDescription: string;
  urlParameter: string;
}

type HomeData = {
    latest_blogs: Blog[];
}

export default function AboutUsPage() {
    const [homeData, setHomeData] = useState<HomeData | null>(null);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const res = await axios.post(`${apiUrl}/home`);
        if (res.data.success) {
          console.log(res.data.data);

          setHomeData(res.data.data);
        }
      } catch (err) {
        console.error("Error Fetching home data", err);
      } finally {
        setLoading(false)
      }
    };

    fetchHomeData();
  }, [])

    const bgUrl = typeof bg === "string" ? bg : (bg as { src: string }).src;

    const doctors: Doctor[] = [
        {
            id: 1,
            name: 'Dr. V.R.A.J',
            specialty: 'Dental Specialist',
            image: doc1.src

        },
        {
            id: 2,
            name: 'Dr. V.R.A.J',
            specialty: 'Dental Specialist',
            image: doc2.src
        },
        {
            id: 3,
            name: 'Dr. V.R.A.J',
            specialty: 'Dental Specialist',
            image: doc3.src
        },
        {
            id: 4,
            name: 'Dr. V.R.A.J',
            specialty: 'Dental Specialist',
            image: doc4.src
        },
        {
            id: 5,
            name: 'Dr. V.R.A.J',
            specialty: 'Dental Specialist',
            image: doc5.src
        },
        {
            id: 6,
            name: 'Dr. V.R.A.J',
            specialty: 'Dental Specialist',
            image: doc6.src
        }
    ];

    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: 'RESHMA SHAH',
            text: '"I have undergone implant treatment, feel good, nice and humble behavior makes me feeling good. They provided Full satisfaction towards their Implant process to me and my wife.thaks lots to Dr Prachi Shah and Dr Ujas Shah."',
            // rating: 5
        },
        {
            id: 2,
            name: 'RESHMA SHAH',
            text: '"I have undergone implant treatment, feel good, nice and humble behavior makes me feeling good. They provided Full satisfaction towards their Implant process to me and my wife.thaks lots to Dr Prachi Shah and Dr Ujas Shah."',
            // rating: 5
        },
        {
            id: 3,
            name: 'RESHMA SHAH',
            text: '"I have undergone implant treatment, feel good, nice and humble behavior makes me feeling good. They provided Full satisfaction towards their Implant process to me and my wife.thaks lots to Dr Prachi Shah and Dr Ujas Shah."',
            // rating: 5
        }
    ];

    const features = [
        {
            icon: <FaUserMd />,
            title: 'PROFESSIONAL STAFF',
            description: 'Our Staff team are well trained, polite and co-operative.'
        },
        {
            icon: <FaFlask />,
            title: 'EXCELLENCE GUARANTEED',
            description: 'Our passion is to deliver Great Results, not just false hopes.'
        },
        {
            icon: <FaBaby />,
            title: 'PAIN FREE TREATMENT',
            description: 'We use Painless Technology & Highly Sterile Equipments.'
        },
        {
            icon: <RiToothFill />,
            title: 'AFFORDABLE PRICING',
            description: 'Fixed rates and honest competitive pricing.'
        }
    ];

    return (
        <main>
            {/* Your Breadcrumb Component Here */}
            <BreadcrumbHero
                title="ABOUT US"
                crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
            />


            {/* ========== WHO WE ARE SECTION ========== */}
            <section className="max-w-6xl mx-auto py-25 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Left side - Image */}
                        <div className=" flex-1">
                            <div className="relative w-full h-[526px]">
                                <Image
                                    src={aboutImg.src}
                                    alt="Dental Treatment Before After"
                                    fill
                                    className="object-cover "
                                />
                                <div className="absolute top-[45%] -right-3 bg-[#005d98] text-white border-8 border-[#ffffff] rounded-full w-[150px] h-[150px] flex flex-col items-center justify-center">
                                    <p className='text-center uppercase font-semibold !text-white !leading-5'>
                                        <span className="text-[30px] font-bold">10 </span>Years Experience
                                    </p>
                                    {/* <span className="text-xs">Experience</span> */}
                                </div>
                            </div>
                        </div>

                        {/* Right side - Content */}
                        <div className='flex-1'>
                            <p className="!text-[#b6c651] text-[14px] font-extrabold mb-2">WHO WE ARE</p>
                            <h2 className="text-3xl md:text-[42px] font-normal text-[005d98] mb-[14px]">
                                Experienced & Specialized<br />Dental Surgeon
                            </h2>

                            <p className="text-[#6d7a8c] text-justify mb-4 leading-[1.8]">
                                Vraj Group of Dental Clinics (VGDC), managed by Vraj Dental Clinics Pvt. Ltd., is one of the most trusted names in dentistry across Vadodara and Surat. With multiple branches, VGDC is committed to delivering affordable, advanced, and patient-friendly dental care under one roof.
                            </p>

                            <p className="text-[#6d7a8c] text-justify mb-4 leading-[1.8]">
                                Our team of highly skilled dentists and specialists ensures that every treatment – from routine cleanings to complex surgeries – is performed with utmost precision and care. Over the years, VGDC has successfully completed 5000+ dental implants, bringing back confidence and smiles to thousands of patients.
                            </p>

                            <p className="text-[#6d7a8c] text-justify mb-4 leading-[1.8]">
                                VGDC is also an empanelled dental clinic with VAC, Happy Water, and Gartic, making dental care more accessible for eligible patients.
                            </p>

                            <p className="text-[#6d7a8c] text-justify mb-4 leading-[1.8]">
                                At VGDC, we believe dentistry is not just about teeth – it's about people. We focus on pain-free treatments, long term relationships, and personalized care that puts your comfort first.
                            </p>

                            <p className="text-[#6d7a8c] text-justify mb-4 leading-[1.8]">
                                Whether it's your routine dental checkup, smile makeover, or advanced dental treatment, VGDC is here to serve you with excellence.
                            </p>

                            <p className="text-[#6d7a8c] text-justify mb-4 leading-[1.8]">
                                Motto: "We care for your healthy smile no matter where you are."
                            </p>

                            {/* Features Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-[#005d98]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-[#6d7a8c]">Complete Crown</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-[#005d98]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-[#6d7a8c]">Cosmetic Filling</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-[#005d98]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-[#6d7a8c]">Dental Implants</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-[#005d98]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-[#6d7a8c]">Dental Crown</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-[#005d98]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-[#6d7a8c]">Dental X-Ray</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-[#005d98]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-[#6d7a8c]">Root Canal</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== WHY CHOOSE US SECTION ========== */}
            <section className="border-[15px] border-[#b3c83f] bg-[#004170] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#004170] via-[#003a63] to-[#002f52]"></div>

                <div className="relative z-10">
                    <div className="grid md:grid-cols-2 gap-0 items-stretch min-h-[600px]">
                        {/* Left side - Content */}
                        <div className="space-y-6 py-25 px-8 flex flex-col justify-center container mx-auto">
                            <p className="!text-white text-[14px] font-semibold uppercase mb-2">
                                WHY YOU CHOOSE US
                            </p>
                            <h2 className="!text-white text-4xl md:text-[42px] font-normal mb-[14px]">
                                Perfect Smile,<br />Excellence Defined
                            </h2>
                            <p className="!text-white font-normal">
                                Teeth whitening is one of the quickest ways to improve your smile. Many patients are amazed that one trip to DentiCare can change their teeth dramatically.
                            </p>

                            {/* Features Grid */}
                            <div className="grid grid-cols-2 gap-8 pt-4 group">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex flex-col items-start space-y-3">
                                        <div className="w-[50px] h-[50px] group-hover:bg-[#005d98] group-hover:!text-white bg-white rounded-full flex items-center justify-center text-[#005d98] text-2xl shadow-lg">
                                            {feature.icon}
                                        </div>
                                        <h3 className="font-extrabold mt-[16px] mb-[7px] !text-white text-base uppercase ">
                                            {feature.title}
                                        </h3>
                                        <p className="!text-white text-sm ">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right side - Swiper */}
                        <div className="relative h-full min-h-[600px]">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={0}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
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
                                        />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>



            {/* ========== OUR DOCTORS SECTION ========== */}
            <section className="max-w-6xl mx-auto pt-25 py-[70px] ">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <p className="!text-[#b6c651] font-extrabold text-[14px] mb-2">OUR DOCTORS</p>
                        <h2 className="text-3xl md:text-[42px] font-normal text-[#005d98]">
                            Meet Our Qualified Doctors To Get Support
                        </h2>
                        <p className="text-gray-600 mt-[10px] text-center max-w-2xl mx-auto">
                            Qualified dental doctors are essential for maintaining and improving oral health, which is a crucial aspect of overall well-being.
                        </p>
                    </div>

                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        // navigation={true}
                        pagination={{ clickable: true, el: ".doctors-pagination", }}
                        // autoplay={{
                        //     delay: 3000,
                        //     disableOnInteraction: false,
                        // }}
                        // loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                        className="pb-12 doctors-swiper"
                    >
                        {doctors.map((doctor) => (
                            <SwiperSlide key={doctor.id}>
                                <div className="bg-white  border-[#b6c651] border-1 overflow-hidden shadow-lg  transition-shadow duration-300 h-[150px]">
                                    <div className="relative h-[150px]">
                                        <Image
                                            src={doctor.image}
                                            alt={doctor.name}
                                            fill
                                            className="object-cover "
                                        />

                                    </div>
                                    {/* <div className="p-4 text-center">
                                        <h3 className="text-xl font-bold text-blue-900 mb-1">{doctor.name}</h3>
                                        <p className="text-gray-600">{doctor.specialty}</p>
                                    </div> */}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="doctors-pagination flex mt-5 justify-center"></div>
                </div>
            </section>
            <style jsx global>{`
                /* --- OUR DOCTORS SWIPER PAGINATION ONLY --- */
                .doctors-pagination .swiper-pagination-bullet {
                    background-color: #005d98;
                    opacity: 1;
                    width: 10px;
                    height: 10px;
                    margin: 0 6px !important;
                    transition: all 0.3s ease;
                }
                .doctors-pagination .swiper-pagination-bullet-active {
                    background-color: #b6c651 !important; /* your brand green */
                    width: 12px;
                    height: 12px;
                    transform: scale(1.1);
                }
                `}</style>

            {/* ========== TESTIMONIALS SECTION ========== */}
            <section className="relative"
                style={{
                    backgroundImage: `url(${bgUrl})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }} >
                <div className="py-25  text-white border-[15px]" style={{ borderColor: "#b5d535" }}>
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <p className="text-center !text-white uppercase tracking-widest font-black text-[14px]">FEEDBACK</p>
                            <h2 className="mt-2 text-center text-4xl md:text-[42px] !text-white">
                                What Customer Saying About us
                            </h2>
                        </div>

                        <div className="w-full max-w-[720px] mx-auto border border-white pt-3">
                            <Swiper
                                modules={[Pagination]}
                                spaceBetween={30}
                                slidesPerView={1}
                                pagination={{ clickable: true, el: ".feedback-pagination" }}
                                // autoplay={{
                                //     delay: 5000,
                                //     disableOnInteraction: false,
                                // }}
                                // loop={true}
                                className="pb-12 testimonials-swiper"
                            >
                                {testimonials.map((testimonial) => (
                                    <SwiperSlide key={testimonial.id}>
                                        <div className=" ">
                                            {/* <div className="flex justify-center mb-6">
                                                {[...Array(testimonial.rating)].map((_, index) => (
                                                    <svg
                                                        key={index}
                                                        className="w-6 h-6 text-yellow-400"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div> */}
                                            <p className="text-[20px] !mb-0 !text-white text-center  italic">
                                                {testimonial.text}
                                            </p>
                                            <p className="text-center mt-[30px] font-bold !text-white">
                                                - {testimonial.name}
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className="feedback-pagination flex mt-5 justify-center"></div>
                </div>
            </section>

            <style jsx global>{`
                /* --- OUR DOCTORS SWIPER PAGINATION ONLY --- */
                .feedback-pagination .swiper-pagination-bullet {
                    background-color: #fff;
                    opacity: 1;
                    width: 10px;
                    height: 10px;
                    margin: 0 6px !important;
                    transition: all 0.3s ease;
                }
                .feedback-pagination .swiper-pagination-bullet-active {
                    background-color: #005d98 !important; /* your brand green */
                    width: 12px;
                    height: 12px;
                    transform: scale(1.1);
                }
                `}</style>

            {/* Your Latest Blog Component Here */}

            {/* <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
        //   background: rgba(0, 0, 0, 0.3);
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px;
        }

        .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
        }
        
        .swiper-pagination-bullet-active {
          background: #fbbf24;
          opacity: 1;
        }

        .doctors-swiper .swiper-button-next,
        .doctors-swiper .swiper-button-prev {
          color: #1e3a8a;
          background: white;
        }

        .doctors-swiper .swiper-pagination-bullet {
          background: #1e3a8a;
        }

        .doctors-swiper .swiper-pagination-bullet-active {
          background: #22c55e;
        }
      `}</style> */}

      {homeData?.latest_blogs && <BlogSection blogs = {homeData.latest_blogs} />}
        </main>
    );
}
