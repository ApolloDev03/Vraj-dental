"use client"

import { useEffect, useState } from "react"
import BreadcrumbHero from "../component/breadcrumb"
import axios from "axios"
import { apiUrl } from "@/config"

// app/components/VideoGallery.tsx
type Video = {
    id: number
    videoUrl: string
    videoTitle: string | null
}
// const videosRow: Video[] = [
//     { id: "j3b93qcissA" }, 
//     { id: "dQw4w9WgXcQ" },
//     { id: "ObIWst9oMWA" },
// ]

export default function VideoGallery() {
    // two identical rows
    // const rows: Video[][] = [videosRow, videosRow]

    const [videos, setVideos] = useState<Video[]>([])
    const [loading, SetLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.post(`${apiUrl}/video-gallery`)
                if (response.data.status && response.data.data) {
                    setVideos(response.data.data)
                } else {
                    setError("No videos found")
                }
            } catch (err) {
                console.error(err)
                setError("Failed to load video gallery")
            } finally {
                SetLoading(false)
            }
        }
        fetchVideos()
    }, [])

    return (
        <div>
            <BreadcrumbHero
                title="OUR VIDEOS "
                crumbs={[{ label: "Home", href: "/" }, { label: "Our Videos" }]}
            />
            <section className="mx-auto max-w-6xl px-4 py-12">
                <div className="text-center mb-14">
                    <p className="!mb-0 uppercase font-extrabold !text-[#b6c651] text-[14px]">Our Videos</p>
                    <h2 className=" text-[42px] font-normal text-[#005d98]">Our Videos</h2>
                </div>

                {loading ? (
                    <p className="text-center text-gray-600">Loading videos...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videos.map((video) => (
                            <div key={video.id} className="w-full">
                                <div className="w-full aspect-video overflow-hidden shadow-lg ">
                                    <iframe
                                        className="h-full w-full"
                                        src={video.videoUrl.replace("&amp;", "&")}
                                        title={video.videoTitle || `Video ${video.id}`}
                                        loading="lazy"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    )
}
