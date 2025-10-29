"use client"
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BreadcrumbHero from "../component/breadcrumb";
import axios from "axios";
import { apiUrl } from "@/config";
import { useEffect, useState } from "react";

type GalleryItem = {
  id: number;
  title: string;
  image: string;
  imageAlt: string;
  imageTitle: string;
};


const PAGE_SIZE = 27;

export default function GalleryPage() {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");
  const page = Math.max(1, Number(pageParam || 1));
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axios.post(`${apiUrl}/gallery`);
        if (res.data.success && res.data.data) {
          setItems(res.data.data);
        } else {
          setError("No gallery data found.");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load gallery.");
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center text-gray-600 text-lg">Loading gallery...</div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center text-red-500 text-lg">{error}</div>
    );
  }

  const total = items.length;
  const pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE));

  if (page > pageCount) return notFound();

  const start = (page - 1) * PAGE_SIZE;
  const paginatedItems = items.slice(start, start + PAGE_SIZE);

  return (
    <div>
         <BreadcrumbHero
                        title="GALLERY"
                        crumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
                    />
    <main className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-10">
        
      {/* Section eyebrow + title */}
      <div className="text-center mb-14">
        <p className="text-[14px]  !text-[#b6c651] font-extrabold">OUR GALLERY</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-[#005d98]">Our Gallery</h1>
      </div>

      {/* Grid */}
      <section aria-label="Dental gallery" className="mb-10">
        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {paginatedItems.map((item) => (
            <li key={item.id} className="group  border border-[#005d98] overflow-hidden bg-white ">
              <figure className="flex flex-col">
                <div className="relative w-full h-[280px]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt || item.imageTitle || item.title || "Gallery image"}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className=""
                    priority={false}
                  />
                </div>
                {/* {item.caption && (
                  <figcaption className="px-4 py-3 text-sm text-slate-700">
                    {item.caption}
                  </figcaption>
                )} */}
              </figure>
            </li>
          ))}
        </ul>
      </section>

      {/* Pagination */}
      <nav
        aria-label="Pagination"
        className="flex items-center justify-center gap-2"
      >
        <Pager page={page} pageCount={pageCount} />
      </nav>
    </main>
    </div>
  );
}

function Pager({ page, pageCount }: { page: number; pageCount: number }) {
  const prev = Math.max(1, page - 1);
  const next = Math.min(pageCount, page + 1);

  const pageNumbers = getWindowedPages(page, pageCount, 5);

  return (
    <div className="inline-flex items-center gap-1">
         
      <PageLink href={`/gallery?page=${prev}`} ariaLabel="Previous page" disabled={page === 1}>
        ‹
      </PageLink>

      {pageNumbers.map((p, idx) =>
        p === -1 ? (
          <span key={`ellipsis-${idx}`} className="px-2 text-slate-400 select-none">…</span>
        ) : (
          <PageLink
            key={p}
            href={`/gallery?page=${p}`}
            current={p === page}
            ariaLabel={`Page ${p}`}
          >
            {p}
          </PageLink>
        )
      )}

      <PageLink href={`/gallery?page=${next}`} ariaLabel="Next page" disabled={page === pageCount}>
        ›
      </PageLink>
    </div>
  );
}

function PageLink({
  href,
  children,
  current,
  ariaLabel,
  disabled,
}: {
  href: string;
  children: React.ReactNode;
  current?: boolean;
  ariaLabel?: string;
  disabled?: boolean;
}) {
  if (disabled) {
    return (
      <span
        aria-disabled="true"
        className="min-w-9 h-9 px-3 inline-flex items-center justify-center rounded border border-slate-200 text-slate-300 cursor-not-allowed"
      >
        {children}
      </span>
    );
  }
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      aria-current={current ? "page" : undefined}
      className={`min-w-9 h-9 px-3 inline-flex items-center justify-center rounded border transition-colors
        ${current ? "border-sky-600 bg-sky-600 text-white" : "border-slate-200 text-slate-700 hover:border-sky-600 hover:text-sky-700"}
      `}
      prefetch={false}
    >
      {children}
    </Link>
  );
}

function getWindowedPages(current: number, total: number, width: number) {
  const half = Math.floor(width / 2);
  let start = Math.max(1, current - half);
  let end = Math.min(total, start + width - 1);
  if (end - start + 1 < width) start = Math.max(1, end - width + 1);
  const pages: number[] = [];
  if (start > 1) {
    pages.push(1);
    if (start > 2) pages.push(-1); // ellipsis
  }
  for (let p = start; p <= end; p++) pages.push(p);
  if (end < total) {
    if (end < total - 1) pages.push(-1);
    pages.push(total);
  }
  return pages;
}
