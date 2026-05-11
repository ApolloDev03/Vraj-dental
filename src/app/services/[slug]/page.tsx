import { Metadata } from "next";

import ServiceDetailPage from "./ServiceDetailPage";

import { apiUrl } from "@/config";

type Params = {
  slug: string;
};

async function getServiceDetail(slug: string) {
  try {
    const res = await fetch(
      `${apiUrl}/category/${slug}`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          slug,
        }),

        next: {
          revalidate: 3600,
        },
      }
    );

    const data = await res.json();

    if (data.success) {
      return data;
    }

    return null;
  } catch (error) {
    console.error(
      "Service Detail Error:",
      error
    );

    return null;
  }
}

export async function generateStaticParams() {
  try {
    const res = await fetch(
      `${apiUrl}/categories`,
      {
        method: "POST",

        next: {
          revalidate: 3600,
        },
      }
    );

    const data = await res.json();

    const services = data?.data || [];

    return services.map((service: any) => ({
      slug: service.slug,
    }));
  } catch (error) {
    console.error(
      "Error generating static params:",
      error
    );

    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;

  const service = await getServiceDetail(slug);

  return {
    title:
      service?.metaTitle ||
      service?.categoryName ||
      "Service Detail",

    description:
      service?.metaDescription ||
      service?.briefDescription ||
      "",

    keywords:
      service?.metaKeyword || "",

    openGraph: {
      title:
        service?.metaTitle ||
        service?.categoryName ||
        "Service Detail",

      description:
        service?.metaDescription ||
        service?.briefDescription ||
        "",

      url: `https://vrajdentalclinic.com/services/${slug}`,

      images: service?.categoryImage
        ? [
          {
            url: service.categoryImage,

            width: 1200,

            height: 630,

            alt:
              service?.categoryName ||
              "Service Image",
          },
        ]
        : [],

      type: "article",
    },

    twitter: {
      card: "summary_large_image",

      title:
        service?.metaTitle ||
        service?.categoryName ||
        "Service Detail",

      description:
        service?.metaDescription ||
        service?.briefDescription ||
        "",

      images: service?.categoryImage
        ? [service.categoryImage]
        : [],
    },

    alternates: {
      canonical: `https://vrajdentalclinic.com/services/${slug}`,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  return (
    <ServiceDetailPage slug={slug} />
  );
}