import { Metadata } from "next";
import VideoGalleryClient from "./VideoGalleryClient";
import { apiUrl } from "@/config";

async function getSeoData() {
  try {
    const res = await fetch(`${apiUrl}/video-gallery`, {
      method: "POST",
      next: {
        revalidate: 3600,
      },
    });

    const data = await res.json();

    if (data.status) {
      return data.meta_data;
    }

    return null;
  } catch (error) {
    console.error("Video Gallery SEO Error:", error);
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getSeoData();

  return {
    title:
      meta?.metaTitle || "Video Gallery | Vraj Dental Clinic",

    description:
      meta?.metaDescription || "",

    keywords:
      meta?.metaKeyword || "",

    openGraph: {
      title:
        meta?.metaTitle || "Video Gallery | Vraj Dental Clinic",

      description:
        meta?.metaDescription || "",

      url:
        "https://vrajdentalclinic.com/video-gallery",

      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title:
        meta?.metaTitle || "Video Gallery | Vraj Dental Clinic",

      description:
        meta?.metaDescription || "",
    },

    alternates: {
      canonical:
        "https://vrajdentalclinic.com/video-gallery",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Page() {
  return <VideoGalleryClient />;
}