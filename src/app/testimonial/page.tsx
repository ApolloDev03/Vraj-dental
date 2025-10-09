// components/VideoTestimonials.tsx
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../../config";

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

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const res = await axios.post(apiUrl);
    //             const data = res.data;
    //             if (data.status && Array.isArray(data.data)) {
    //                 setVideos(data.data);
    //             } else {
    //                 setVideos([]);
    //             }
    //         } catch (e) {
    //             console.error("Error fetching video testimonials:", e);
    //             setVideos([]);
    //         } finally {
    //             setLoading(false);
    //         }
    //     })();
    // }, []);

    return (
        <section className="py-10 bg-[#15507c] border-l-8 border-r-8 border-[#bed43b]">
            <div className="max-w-6xl mx-auto px-3 md:px-0 text-center">
                <h4 className="text-white text-lg font-semibold mb-1">FEEDBACK</h4>
                <h2 className="text-3xl md:text-4xl text-white font-light mb-10">What Customer Saying About us</h2>
                {loading ? (
                    <p className="text-white text-lg">Loading...</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
                        {videos.map((item: VideoData) => (
                            <div key={item.id} className="flex flex-col items-center">
                                <div className="w-full md:w-[350px] h-[200px] md:h-[200px] shadow-lg bg-white overflow-hidden rounded-lg">
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
    );
};

export default VideoTestimonials;
