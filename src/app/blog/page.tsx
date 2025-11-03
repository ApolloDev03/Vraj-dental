"use client";

import { useEffect, useState } from 'react';
import axios from "axios";
import { apiUrl } from '@/config';
import BlogCard from '../component/blogCard';
import BreadcrumbHero from '../component/breadcrumb';
import Head from 'next/head';

interface Blog {
  id: number;
  categoryId: number;
  blogTitle: string;
  blogDescription: string;
  blogImage: string;
  imageTitle: string;
  imageAlt: string;
  urlParameter: string;
  tags?: string;
  publishDate?: string;
  metaTitle?: string;
  metaKeyword?: string;
  metaDescription?: string;
  created_at?: string;
}

interface MetaData {
  metaTitle: string;
  metaKeyword: string;
  metaDescription: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: Blog[];
  meta_data: MetaData;
}

export default function BlogSection() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, SetLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
   const [metaData, setMetaData] = useState<MetaData | null>(null);

  // ✅ Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 12;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.post(`${apiUrl}/blogs`);
        if (response.data?.success === true && Array.isArray(response.data.data)) {
          setBlogs(response.data.data);
          setMetaData(response.data.meta_data);
          // console.log(response.data.meta_data,"metadataaaaaaaa");
          
        } else {
          setError("No Blog Found.");
        }
      } catch (err) {
        setError("Failed to fetch blogs. please try again later");
      } finally {
        SetLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // ✅ Pagination logic
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = blogs.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };


  return (
    <div>
      <Head>
        <title>{metaData?.metaTitle }</title>
        <meta 
          name="description" 
          content={metaData?.metaDescription } 
        />
        <meta 
          name="keywords" 
          content={metaData?.metaKeyword} 
        />
      </Head>

      <BreadcrumbHero
        title="BLOG"
        crumbs={[{ label: "Home", href: "/" }, { label: "BLOG" }]}
      />
      <section className="mx-auto max-w-6xl px-4 py-[60px] md:py-[100px]">
        <div className="text-center mb-[55px]">
          <div className="text-[14px] font-bold uppercase mb-2 " style={{ color: "#b6c651", fontWeight: 900 }}>
            Our Blog
          </div>
          <h2 className="text-[25px] md:text-[42px] font-normal leading-tight" style={{ color: "#005d98" }}>
            Read Our Latest Blog
          </h2>
        </div>

        {loading && (
          <div className="text-center text-gray-500 py-10">Loading blogs...</div>
        )}

        {error && (
          <div className="text-center text-red-500 py-10">{error}</div>
        )}

        {!loading && !error && (
          <>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {currentBlogs.map((blog) => (
                <BlogCard
                  key={blog.id}
                  href={`/blogdetail/${blog.urlParameter}`}
                  imageSrc={blog.blogImage || "/images/default.jpg"}
                  imageAlt={blog.imageAlt || blog.imageTitle || blog.blogTitle}
                  dateText={blog.publishDate ? blog.publishDate.split(" ")[0] : "N/A"}
                  title={blog.blogTitle}
                  slug={blog.urlParameter}
                  excerpt={
                    blog.metaDescription ||
                    (blog.blogDescription
                      ? blog.blogDescription.replace(/<[^>]+>/g, "").slice(0, 100) + "..."
                      : "No description available.")
                  }
                />
              ))}
            </div>

            {/* ✅ Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-10">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border rounded-md text-sm font-semibold text-[#005d98] disabled:opacity-50"
                >
                  Prev
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`px-3 py-2 border rounded-md text-sm font-semibold ${currentPage === i + 1
                      ? "bg-[#b6c651] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border rounded-md text-sm font-semibold text-[#005d98] disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
