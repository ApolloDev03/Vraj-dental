// app/[slug]/page.tsx
import { notFound } from "next/navigation";
import { apiUrl } from "@/config";
import BreadcrumbHero from "../component/breadcrumb";

type CmsData = {
    strTitle: string;
    strDescription: string;
    slugname: string;
};

// Only allow these slugs (static export friendly)
const VALID_SLUGS = ["terms-conditions", "privacy-policy"];

// ✅ For static export: only build these paths
export const dynamicParams = false;
export async function generateStaticParams() {
    return VALID_SLUGS.map((slug) => ({ slug }));
}

export default async function CMSPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const normalizedSlug = slug?.toLowerCase().trim();

    // ❌ If slug is not valid → 404
    if (!VALID_SLUGS.includes(normalizedSlug)) return notFound();

    // ✅ Call new API
    const res = await fetch(`${apiUrl}/page`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slugname: normalizedSlug }),
        next: { revalidate: 86400 },
        // For static generation:
        // next: { revalidate: 86400 } // Revalidate every 24h
    });

    if (!res.ok) return notFound();

    const json = await res.json();
    const cmsData: CmsData | null = json?.data ?? null;

    if (!cmsData) return notFound();

    return (
        <section>
            <BreadcrumbHero
                title={cmsData.strTitle}
                crumbs={[{ label: "Home", href: "/" }, { label: cmsData.strTitle }]}
            />
            <div className="max-w-6xl mx-auto py-10 text-black">
                <h2 className="text-[42px] text-center font-bold mb-4">{cmsData.strTitle}</h2>
                <div
                    className="prose max-w-6xl text-justify"
                    dangerouslySetInnerHTML={{ __html: cmsData.strDescription }}
                />
            </div>
        </section>
    );
}
