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

interface Doctor {
    id: number;
    name: string;
    specialty: string;
    image: string;
    facebook: string;
    linkedin: string;
}

interface Testimonial {
    id: number;
    name: string;
    text: string;
    rating: number;
}

export default function AboutUsPage() {
    const doctors: Doctor[] = [
        {
            id: 1,
            name: 'Dr. V.R.A.J',
            specialty: 'Dental Specialist',
            image: '/images/doctor-1.jpg',
            facebook: '#',
            linkedin: '#'
        },
        {
            id: 2,
            name: 'Dr. V.R.A.J',
            specialty: 'Dental Specialist',
            image: '/images/doctor-2.jpg',
            facebook: '#',
            linkedin: '#'
        },
        {
            id: 3,
            name: 'Dr. V.R.A.J',
            specialty: 'Dental Specialist',
            image: '/images/doctor-3.jpg',
            facebook: '#',
            linkedin: '#'
        },
        {
            id: 4,
            name: 'Dr. V.R.A.J',
            specialty: 'Dental Specialist',
            image: '/images/doctor-4.jpg',
            facebook: '#',
            linkedin: '#'
        }
    ];

    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: 'RESHMA SHAH',
            text: '"I have undergone implant treatment, feel good, pleased humble behavior, Rolex and being good. They provided full satisfaction towards their implant patients but and my visit was easy to Dr Pooja Shah and Dr BJ Ajga Shah."',
            rating: 5
        },
        {
            id: 2,
            name: 'JOHN DOE',
            text: '"Excellent service and professional staff. The treatment was painless and the results exceeded my expectations. Highly recommend to everyone!"',
            rating: 5
        },
        {
            id: 3,
            name: 'JANE SMITH',
            text: '"Best dental clinic in the city. The doctors are very experienced and caring. They made my dental experience comfortable and stress-free."',
            rating: 5
        }
    ];

    const features = [
        {
            icon: <FaUserMd />,
            title: 'PROFESSIONAL STAFF',
            description: 'Our Staff team are well trained, courteous and an approachable.'
        },
        {
            icon: <FaFlask />,
            title: 'EXCELLENCE GUARANTEED',
            description: 'Our passion is to deliver dental Results, we will think bigger.'
        },
        {
            icon: <FaBaby />,
            title: 'PAIN FREE TREATMENT',
            description: 'We use Painless Technology & Highly Sterile Equipments.'
        },
        {
            icon: '💰',
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
                            <div className="grid grid-cols-2 gap-8 pt-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex flex-col items-start space-y-3">
                                        <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center text-[#004170] text-2xl shadow-lg">
                                            {feature.icon}
                                        </div>
                                        <h3 className="font-bold !text-white text-base uppercase tracking-wide">
                                            {feature.title}
                                        </h3>
                                        <p className="!text-white text-sm leading-relaxed">
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
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <p className="text-[#005d98] font-medium mb-2">OUR DOCTORS</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                            Meet Our Qualified Doctors To Get Support
                        </h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            Qualified dental doctors are essential for maintaining and improving oral health, which is a crucial aspect of overall well-being.
                        </p>
                    </div>

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
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
                                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="relative h-80">
                                        <Image
                                            src={doctor.image}
                                            alt={doctor.name}
                                            fill
                                            className="object-cover"
                                        />
                                        {/* Social Icons Overlay */}
                                        <div className="absolute top-4 left-4 flex gap-2">
                                            <a
                                                href={doctor.facebook}
                                                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                </svg>
                                            </a>
                                            <a
                                                href={doctor.linkedin}
                                                className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="p-4 text-center">
                                        <h3 className="text-xl font-bold text-blue-900 mb-1">{doctor.name}</h3>
                                        <p className="text-gray-600">{doctor.specialty}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* ========== TESTIMONIALS SECTION ========== */}
            <section className="py-16 bg-blue-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <p className="text-yellow-400 font-medium mb-2">FEEDBACK</p>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            What Customer Saying About us
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            className="pb-12 testimonials-swiper"
                        >
                            {testimonials.map((testimonial) => (
                                <SwiperSlide key={testimonial.id}>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12">
                                        <div className="flex justify-center mb-6">
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
                                        </div>
                                        <p className="text-lg md:text-xl text-center mb-6 italic">
                                            {testimonial.text}
                                        </p>
                                        <p className="text-center font-bold text-yellow-400">
                                            - {testimonial.name}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

            {/* Your Latest Blog Component Here */}

            <style jsx global>{`
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
      `}</style>
        </main>
    );
}
