import { Metadata } from "next";
import ContactClient from "./ContactClient";
import { apiUrl } from "@/config";

async function getSeoData() {
  try {
    const res = await fetch(`${apiUrl}/contact`, {
      method: "POST",

      next: {
        revalidate: 3600,
      },
    });

    const data = await res.json();

    if (data.success) {
      return data.meta_data;
    }

    return null;
  } catch (error) {
    console.error(
      "Contact SEO Error:",
      error
    );

    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getSeoData();

  return {
    title:
      meta?.metaTitle ||
      "Contact Us | Vraj Dental Clinic",

    description:
      meta?.metaDescription || "",

    keywords:
      meta?.metaKeyword || "",

    openGraph: {
      title:
        meta?.metaTitle ||
        "Contact Us | Vraj Dental Clinic",

      description:
        meta?.metaDescription || "",

      url:
        "https://vrajdentalclinic.com/contact",

      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title:
        meta?.metaTitle ||
        "Contact Us | Vraj Dental Clinic",

      description:
        meta?.metaDescription || "",
    },

    alternates: {
      canonical:
        "https://vrajdentalclinic.com/contact",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Page() {
  return <ContactClient />;
}