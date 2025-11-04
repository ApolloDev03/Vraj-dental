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
import bg from "../../asserts/bg-black.jpg";
import BlogSection from '../component/blogHome';
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/config";
import FeedbackVideoSlider from '../component/feedback';
import Head from "next/head";
import Branches from '../component/branch';

interface Doctor {
    id: number;
    name: string;
    specialty: string;
    image: string;

}

type TestimonialVideos = {
    id: number;
    video_url: string;
    title?: string;
    thumbnail?: string;
};


type Blog = {
    blogImage: string;
    created_at: string;
    blogTitle: string;
    blogDescription: string;
    urlParameter: string;
}

type HomeData = {
    latest_blogs: Blog[];
    // testimonial_videos: TestimonialVideos[];
    our_branches: Branch[];
}

type MetaData = {
    metaTitle: string;
    metaKeyword: string;
    metaDescription: string;
}

type Branch = {
  name: string;
  displayUrl: string;
  address: string;
  mapLink: string | null;
};

export default function AboutUsPage() {
    const [homeData, setHomeData] = useState<HomeData | null>(null);
    const [loading, setLoading] = useState(true);
    const [metaData, setMetaData] = useState<MetaData | null>(null);

    useEffect(() => {
        const fetchHomeData = async () => {
            try {
                const res = await axios.post(`${apiUrl}/home`);
                if (res.data.success) {
                    //   console.log(res.data.data);

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


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.post(`${apiUrl}/about`);
                if (res.data.success) {
                      

                    setMetaData(res.data.meta_data);
                }
            } catch (err) {
                console.error("Error Fetching home data", err);
            } finally {
                setLoading(false)
            }
        };

        fetchData();
    }, [])

    const bgUrl = typeof bg === "string" ? bg : (bg as { src: string }).src;


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
            <Head>
                <title>{metaData?.metaTitle || null}</title>
                {
                    metaData?.metaDescription && (
                        <meta
                            name="description"
                            content={metaData?.metaDescription}
                        />
                    )
                }

                {
                    metaData?.metaKeyword && (
                        <meta
                            name="keywords"
                            content={metaData?.metaKeyword }
                        />
                    )
                }

            </Head>

            {/* Your Breadcrumb Component Here */}
            <BreadcrumbHero
                title="ABOUT US"
                crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
            />


            {/* ========== WHO WE ARE SECTION ========== */}
            <section className="max-w-6xl mx-auto py-15 md:py-25 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Left side - Image */}
                        <div className=" flex-1">
                            <div className="relative w-[350px] md:w-full h-[400px] md:h-[526px]">
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
                            <p className="!text-[#b6c651] text-center md:text-start !text-[14px] font-extrabold mb-2">WHO WE ARE</p>
                            <h2 className="text-[25px] md:text-[42px] font-normal text-center md:text-start text-[005d98] mb-[14px]">
                                Experienced & Specialized<br />Dental Surgeon
                            </h2>

                            <p className="text-[#6d7a8c] !text-[14px] md:!text-[16px] text-justify mb-4 leading-[1.8]">
                                Vraj Group of Dental Clinics (VGDC), managed by Vraj Dental Clinics Pvt. Ltd., is one of the most trusted names in dentistry across Vadodara and Surat. With multiple branches, VGDC is committed to delivering affordable, advanced, and patient-friendly dental care under one roof.
                            </p>

                            <p className="text-[#6d7a8c] text-justify mb-4 leading-[1.8] !text-[14px] md:!text-[16px]">
                                Our team of highly skilled dentists and specialists ensures that every treatment – from routine cleanings to complex surgeries – is performed with utmost precision and care. Over the years, VGDC has successfully completed 5000+ dental implants, bringing back confidence and smiles to thousands of patients.
                            </p>

                            <p className="text-[#6d7a8c] !text-[14px] md:!text-[16px] text-justify mb-4 leading-[1.8]">
                                VGDC is also an empanelled dental clinic with VAC, Happy Water, and Gartic, making dental care more accessible for eligible patients.
                            </p>

                            <p className="text-[#6d7a8c] !text-[14px] md:!text-[16px] text-justify mb-4 leading-[1.8]">
                                At VGDC, we believe dentistry is not just about teeth – it's about people. We focus on pain-free treatments, long term relationships, and personalized care that puts your comfort first.
                            </p>

                            <p className="text-[#6d7a8c] !text-[14px] md:!text-[16px] text-justify mb-4 leading-[1.8]">
                                Whether it's your routine dental checkup, smile makeover, or advanced dental treatment, VGDC is here to serve you with excellence.
                            </p>

                            <p className="text-[#6d7a8c] !text-[14px] md:!text-[16px] text-justify mb-4 leading-[1.8]">
                                Motto: "We care for your healthy smile no matter where you are."
                            </p>

                            {/* Features Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-2 !text-[14px] md:!text-[16px]">
                                    <svg className="w-5 h-5 text-[#005d98]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-[#6d7a8c]">Complete Crown</span>
                                </div>
                                <div className="flex items-center gap-2 !text-[14px] md:!text-[16px]">
                                    <svg className="w-5 h-5 text-[#005d98]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-[#6d7a8c]">Cosmetic Filling</span>
                                </div>
                                <div className="flex items-center gap-2 !text-[14px] md:!text-[16px]">
                                    <svg className="w-5 h-5 text-[#005d98]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-[#6d7a8c]">Dental Implants</span>
                                </div>
                                <div className="flex items-center gap-2 !text-[14px] md:!text-[16px]">
                                    <svg className="w-5 h-5 text-[#005d98]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-[#6d7a8c]">Dental Crown</span>
                                </div>
                                <div className="flex items-center gap-2 !text-[14px] md:!text-[16px]">
                                    <svg className="w-5 h-5 text-[#005d98]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-[#6d7a8c]">Dental X-Ray</span>
                                </div>
                                <div className="flex items-center gap-2 !text-[14px] md:!text-[16px]">
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
            <section className="border-[15px] border-[#b5d535] bg-[#004170] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#004170] via-[#003a63] to-[#002f52]"></div>

                <div className="relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch min-h-[600px]">
                        {/* Left side - Content */}
                        <div className="space-y-6 py-15 md:py-25 px-8 flex flex-col justify-center container mx-auto"
                            style={{
                                backgroundImage: `url(${bgUrl})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                            }}>
                            <p className="!text-white !text-[14px] text-center md:text-start font-semibold uppercase mb-2">
                                WHY YOU CHOOSE US
                            </p>
                            <h2 className="!text-white text-[25px] md:text-[42px] text-center md:text-start font-normal mb-[14px]">
                                Perfect Smile,<br />Excellence Defined
                            </h2>
                            <p className="!text-white text-center !text-[14px] md:!text-[16px] font-normal">
                                Teeth whitening is one of the quickest ways to improve your smile. Many patients are amazed that one trip to DentiCare can change their teeth dramatically.
                            </p>

                            {/* Features Grid */}
                            <div className="grid  grid-cols-1 md:grid-cols-2 gap-8 pt-4 ">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex flex-col items-start space-y-3 group">
                                        <div className="w-[50px] h-[50px] group-hover:bg-[#005d98] group-hover:!text-white bg-white rounded-full flex items-center justify-center text-[#005d98] text-2xl shadow-lg ">
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
                        <div className="relative h-full min-h-[308px] md:min-h-[600px]">
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





            {/* ========== TESTIMONIALS SECTION ========== */}


            {/* Your Latest Blog Component Here */}

            {/* {homeData?.testimonial_videos && <FeedbackVideoSlider videos={homeData.testimonial_videos} />} */}

            {homeData?.our_branches && <Branches branches={homeData.our_branches} />}

            {homeData?.latest_blogs && <BlogSection blogs={homeData.latest_blogs} />}
        </main>
    );
}
