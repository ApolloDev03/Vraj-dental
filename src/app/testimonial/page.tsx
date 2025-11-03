// components/VideoTestimonials.tsx
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../../config";
import BreadcrumbHero from "../component/breadcrumb";
import bg from "../../asserts/feedback-bg.jpg";
import Head from "next/head";

interface VideoData {
    id: number;
    categoryId: number;
    cityId: number;
    videoUrl: string;
    videoTitle: string | null;
    metaTitle: string | null;
    metaKeyword: string | null;
    metaDescription: string | null;
    created_at: string;
    imageUrl: string;
}

type MetaData = {
    metaTitle: string,
    metaKeyword: string;
    metaDescription: string;
}

type ApiResponse = {
    status: boolean,
    message: string,
    data: VideoData[],
    meta_data: MetaData
}

const cleanYoutubeUrl = (url: string): string => {
    let cleanUrl = url;
    if (cleanUrl.includes('"')) cleanUrl = cleanUrl.split('"')[0];
    cleanUrl = cleanUrl.replaceAll("&amp;", "&");
    if (cleanUrl.endsWith("%22")) cleanUrl = cleanUrl.slice(0, -3);
    return cleanUrl;
};

const VideoTestimonials: React.FC = () => {
    const [videos, setVideos] = useState<VideoData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [metaData, setMetaData] = useState<MetaData | null>(null)

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.post<ApiResponse>(`${apiUrl}/testimonial-video`);
                // console.log(res.data.data, "responce======")
                if (res?.data?.status && Array.isArray(res.data.data)) {
                    setVideos(res.data.data);
                    setMetaData(res.data.meta_data);
                } else {
                    setVideos([]);
                }
            } catch (e) {
                console.error("Error fetching video testimonials:", e);
                setVideos([]);
            } finally {
                setLoading(false);
            }
        })();
    }, []);
    // console.log(videos, "videosvideosvideosvideosvideosvideos")

    
    

    const bgUrl = typeof bg === "string" ? bg : (bg as { src: string }).src;
    return (
        <div>
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

            <BreadcrumbHero
                title="TESTIMONIAL"
                crumbs={[{ label: "Home", href: "/" }, { label: "Testimonial" }]}
            />
            <section className="py-15 md:py-25 bg-[#15507c]  border-[15px] border-[#bed43b]"
                style={{
                    backgroundImage: `url(${bgUrl})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",

                }}>
                <div className="max-w-6xl mx-auto px-3 md:px-0 text-center">
                    <h4 className="!text-white text-[14px] font-extrabold mb-1">FEEDBACK</h4>
                    <h2 className="text-[25px] md:text-[42px] !text-white font-light mb-[55px]">What Customer Saying About us</h2>
                    {loading ? (
                        <p className="text-white text-lg">Loading...</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
                            {videos.map((item: VideoData) => (
                                <div key={item.id} className="flex flex-col  items-center">
                                    <div className="w-full md:w-[350px] h-[200px] md:h-[200px] shadow-lg bg-white overflow-hidden ">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={cleanYoutubeUrl(item.videoUrl)}
                                            title={item.metaTitle || "Testimonial Video"}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full h-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default VideoTestimonials;
