import ServiceDetailPage from "./ServiceDetailPage";
import axios from "axios";
import { apiUrl } from "@/config"; // adjust if your config path is different

// ✅ This runs **at build time** to tell Next.js which service pages to pre-render
export async function generateStaticParams() {
  try {
    const res = await axios.post(`${apiUrl}/categories`); // API to get all services
    const services = res.data?.data || [];

    // Each item must return `{ slug: 'something' }`
    return services.map((service: any) => ({
      slug: service.slug, // depends on your API response key
    }));
  } catch (error) {
    console.error("Error fetching services for static params:", error);
    return []; // prevent build crash
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  return <ServiceDetailPage slug={params.slug} />;
}
