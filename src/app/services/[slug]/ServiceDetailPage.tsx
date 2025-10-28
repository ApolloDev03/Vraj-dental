"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import rootCanalImg from "@/asserts/1602311948.jpg";
import BreadcrumbHero from "../../component/breadcrumb";
import { useParams } from "next/navigation";
import axios from "axios";
import { apiUrl } from "@/config";
import Link from "next/link";

export default function ServiceDetailPage({ slug }: { slug: string }) {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const [loading, setLoading] = useState(true);
    const [serviceData, setServiceData] = useState<any>(null);
    // const {slug} = useParams();

    // const faqs = [
    //     {
    //         question: "WHO NEEDS A ROOT CANAL TREATMENT?",
    //         answer: (
    //             <ul className="list-disc pl-6 space-y-2">
    //                 <li>If you have caries and pain in that specific affected tooth.</li>
    //                 <li>If you suffer from prolong sensitivity.</li>
    //                 <li>If you have mild but continuous pain.</li>
    //                 <li>
    //                     If you have swelling because of the infection that might have entered the peri apical area of the tooth.
    //                 </li>
    //                 <li>
    //                     If you suffer from attrition and abrasion that has caused the tooth loss.
    //                 </li>
    //                 <li>When accidentally the tooth gets broken.</li>
    //                 <li>
    //                     When you wish to save the malpositioned tooth, which we might need to prepare veneer for.
    //                 </li>
    //                 <li>Failed dental veneer or gum disease.</li>
    //                 <li>Teeth tilted with attrition.</li>
    //             </ul>
    //         ),
    //     },
    //     { question: "WHAT HAPPENS IN ROOT CANAL TREATMENT?", answer: <p>During treatment, the infected pulp is removed...</p> },
    //     { question: "DOES THE TOOTH BECOME DEAD?", answer: <p>No, the tooth remains functional...</p> },
    //     { question: "HOW MANY SITTINGS/VISITS DO A ROOT CANAL TREATMENT TAKE?", answer: <p>Usually 1–3 sittings depending on infection severity.</p> },
    //     { question: "IS ROOT CANAL TREATMENT PAINFUL?", answer: <p>Modern techniques make RCT almost painless.</p> },
    // ];
    useEffect(() => {
        if (!slug) return;

        const fetchServiceData = async () => {
            try {
                const res = await axios.post(`${apiUrl}/category/${slug}`);
                if (res.data.success) {
                    setServiceData(res.data)
                }
            } catch (error) {
                console.error("Error fetching service data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchServiceData();
    }, [slug])

    if (loading) {
        return (
            <div className="py-20 text-center text-gray-600">Loading service details...</div>
        );
    }

    if (!serviceData) {
        return (
            <div className="py-20 text-center text-red-500">Service not found!</div>
        );
    }

    const { categoryName, h1Text, categoryImage, briefDescription, description, faqs, gallery, testimonial_videos, latest_blogs } = serviceData;


    return (
        <section>
            <BreadcrumbHero
                title={categoryName}
                crumbs={[{ label: "Home", href: "/" }, { label: categoryName }]}
            />
            <div className="max-w-6xl mx-auto px-4 py-[50px]">
                {/* ----------- HERO SECTION ----------- */}
                <section className="max-w-[720px] text-center mb-10 mx-auto">
                    <h4 className="!text-[#b6c651] font-extrabold  uppercase">Our Services</h4>
                    <h1 className="text-3xl md:text-[42px] text-center font-normal text-[#005d98] mt-2 mx-auto">
                        {h1Text}
                    </h1>
                </section>

                {/* ----------- IMAGE + INTRO ----------- */}
                <div className="grid md:grid-cols-2 gap-8  mb-12">
                    <div className="flex justify-center " >
                        <Image
                            src={categoryImage}
                            alt={categoryName}
                            width={0}
                            height={0}
                            className="rounded-[50px_0px] !w-full h-auto max-w-sm shadow"
                        />
                    </div>
                    <div className="flex ">
                        <p className="text-gray-700 text-justify"
                            dangerouslySetInnerHTML={{ __html: briefDescription }}
                        >
                        </p>
                    </div>
                </div>

                {/* ----------- FAQ SECTION ----------- */}
                {
                    faqs?.length > 0 && (
                        <section className="md:px-[50px] md:py-[60px] pt-[30px] ">
                            <h3 className="text-[#005d98] font-bold text-[14px] uppercase mb-2">
                                Frequently Asked Questions
                            </h3>
                            <h2 className="text-2xl md:text-[42px] font-normal text-gray-800 mb-6">
                                Get Every Single Answer
                            </h2>

                            <div className="space-y-3">
                                {faqs.map((faq: any, index: any) => (
                                    <div
                                        key={index}
                                        className="border border-gray-300 rounded-md overflow-hidden"
                                    >
                                        <button
                                            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                                            className={`w-full flex items-center justify-between px-4 py-3 text-left font-semibold transition-colors ${index === activeIndex ? "bg-[#b3c83f] text-white" : "bg-gray-50 text-gray-800"
                                                }`}
                                        >
                                            <span dangerouslySetInnerHTML={{ __html: faq.question }}></span>
                                            <span className="text-3xl">{index === activeIndex ? "−" : "+"}</span>
                                        </button>
                                        {index === activeIndex && (
                                            <div className="p-4 text-gray-700 bg-white" dangerouslySetInnerHTML={{ __html: faq.answer }}></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )
                }


                {/* ----------- CONTENT SECTIONS ----------- */}
                {
                    description?.length > 0 && (
                        <section className="mt-12 space-y-10 text-gray-700 leading-relaxed">
                            {/* Overview */}
                            <div className="border border-[#b3c83f] p-6  bg-[#f9f9f9] shadow-[10px_10px_10px_#ccc]"
                                dangerouslySetInnerHTML={{ __html: description }}
                            >
                            </div>
                        </section>
                    )
                }


                {/* ----------- GALLERY SECTION ----------- */}
                {
                    gallery?.length > 0 && (
                        <section className="mt-16">
                            <h2 className="text-2xl md:text-[42px] font-normal text-[#005d98] mb-6 text-center">
                                Root Canal Treatment Gallery
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                                {gallery.map((g: any, i: number) => (
                                    <div
                                        key={g.image ?? i}
                                        className="overflow-hidden rounded-xl shadow-[7px_7px_7px_#ccc] border border-[#b3c83f] hover:scale-[1.03] transition-transform duration-300 flex items-center"
                                    >
                                        <Image
                                            src={g.image}
                                            alt={`Gallery image ${i + 1}`}
                                            width={0}
                                            height={0}
                                            className="w-full h-24 !object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>
                    )
                }


                {/* ----------- YOUTUBE VIDEO GALLERY ----------- */}
                {testimonial_videos?.length > 0 && (
                    <section className="mt-16">
                        <h2 className="text-2xl md:text-[42px] font-normal text-[#005d98] mb-6 text-center">
                            Watch Our Treatment Videos
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {testimonial_videos.map((v: any, i: any) => (
                                <div
                                    key={i}
                                    className="overflow-hidden rounded-xl shadow-lg aspect-video"
                                >
                                    <iframe
                                        src={v.videoUrl}
                                        title={`YouTube video ${i + 1}`}
                                        className="w-full h-full rounded-xl"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* ----------- LATEST BLOGS (related) ----------- */}
                {latest_blogs?.length > 0 && (
                    <section className="mt-16">
                        <h2 className="text-2xl md:text-[42px] font-normal text-[#005d98] mb-10 text-center">
                            Latest Blogs
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {latest_blogs.map((blog: any) => (
                                <Link
                                    key={blog.id}
                                    href={`/blogdetail/${blog.urlParameter || blog.id}`}
                                    className="group bg-white rounded-xl shadow-[0_25px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_35px_60px_rgba(0,0,0,0.10)]  transition-all duration-300 overflow-hidden"
                                >
                                    {/* Blog Image */}
                                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                                        <Image
                                            src={blog.image}
                                            alt={blog.blogTitle}
                                            width={600}
                                            height={400}
                                            className="object-contain transition-transform duration-500 group-hover:scale-[1.3] group-hover:rotate-[4deg] group-hover:cursor-pointer"
                                        />
                                    </div>

                                    {/* Blog Content */}
                                    <div className="p-6">
                                        {/* Date */}
                                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 text-[#005d98]"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                />
                                            </svg>
                                            <span>
                                                Posted On{" "}
                                                {new Date(blog.publishDate).toLocaleDateString("en-US", {
                                                    weekday: "short",
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric",
                                                })}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-[#005d98] transition">
                                            {blog.blogTitle}
                                        </h3>

                                        {/* Description */}
                                        

                                        {/* Read More */}
                                        <span className="inline-flex items-center text-[#005d98] font-medium text-sm group-hover:gap-2 transition-all">
                                            Read More
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 ml-1"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

            </div>
        </section>
    );
}
