// import BlogDetailClient from "./BlogDetailClient"; // ✅ Correct import (NOT "./page")

import { apiUrl } from "@/config";
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
import BlogDetailClient from "./BlogDetailClient";

export async function generateStaticParams() {
  try {
    // ✅ use POST if API does not support GET
    const res = await axios.post(`${apiUrl}/blogs`);
    const blogs = res?.data?.data || [];

    return blogs.map((b: any) => ({
      slug: b.urlParameter, // Adjust based on your API field
    }));
  } catch (err) {
    console.error("Error generating static params:", err);
    return []; // Return empty so build doesn't crash
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  return <BlogDetailClient slug={params.slug} />;
}
