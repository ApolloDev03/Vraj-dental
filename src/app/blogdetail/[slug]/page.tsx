// import BlogDetailClient from "./BlogDetailClient"; // ✅ Correct import (NOT "./page")

// import { apiUrl } from "@/config";
import axios from "axios";

// // ✅ Server Component wrapper
// export default function Page({ params }: { params: { slug: string } }) {
//   // Pass slug prop to the client component
//   return <BlogDetailClient slug={params.slug} />;
// }

// // ✅ Static export for Next.js build
// import axios from "axios";
// import { apiUrl } from "@/config";

// export async function generateStaticParams() {
//   try {
//     const res = await axios.post(`${apiUrl}/blogs`);
//     const blogs = res?.data?.data || [];

//     return blogs.map((b: any) => ({
//       slug:
//         b.slugname ||
//         b.strSlug ||
//         b.blogSlug ||
//         b.title
//           ?.toLowerCase()
//           ?.replace(/\s+/g, "-")
//           ?.replace(/[^a-z0-9-]/g, "") ||
//         "placeholder",
//     }));
//   } catch (error) {
//     console.error("Error generating static params:", error);
//     // Fallback so build doesn’t fail
//     return [
//       {
//         slug:
//           "THE-POTENTIAL-RISK-CAVITIES-FROM-BLACK-MOLD",
//       },
//     ];
//   }
// }


// app/blogdetail/[slug]/page.tsx
import { Metadata } from "next";
import BlogDetailClient from "./BlogDetailClient";
import { apiUrl } from "@/config";

type Params = {
  slug: string;
};

async function getBlogDetail(slug: string) {
  try {
    const res = await fetch(`${apiUrl}/blog/${slug}`, {
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
    });

    const data = await res.json();

    if (data.success) {
      return data.data.blog;
    }

    return null;
  } catch (error) {
    console.error("Blog Detail Error:", error);

    return null;
  }
}

export async function generateStaticParams() {
  try {
    const res = await fetch(`${apiUrl}/blogs`, {
      method: "POST",

      next: {
        revalidate: 3600,
      },
    });

    const data = await res.json();

    const blogs = data?.data || [];

    return blogs.map((blog: any) => ({
      slug: blog.urlParameter,
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

  const blog = await getBlogDetail(slug);

  return {
    title:
      blog?.metaTitle ||
      blog?.blogTitle ||
      "Blog Detail",

    description:
      blog?.metaDescription ||
      "",

    keywords:
      blog?.metaKeyword || "",

    openGraph: {
      title:
        blog?.metaTitle ||
        blog?.blogTitle ||
        "Blog Detail",

      description:
        blog?.metaDescription ||
        "",

      url: `https://vrajdentalclinic.com/blogdetail/${slug}`,

      images: blog?.blogImage
        ? [
            {
              url: blog.blogImage,
              width: 1200,
              height: 630,
              alt:
                blog?.imageAlt ||
                blog?.blogTitle,
            },
          ]
        : [],

      type: "article",
    },

    twitter: {
      card: "summary_large_image",

      title:
        blog?.metaTitle ||
        blog?.blogTitle ||
        "Blog Detail",

      description:
        blog?.metaDescription ||
        "",

      images: blog?.blogImage
        ? [blog.blogImage]
        : [],
    },

    alternates: {
      canonical: `https://vrajdentalclinic.com/blogdetail/${slug}`,
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

  return <BlogDetailClient slug={slug} />;
}