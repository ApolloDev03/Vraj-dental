"use client"

import { useEffect, useState } from 'react';
import axios from "axios";
import { apiUrl } from '@/config';
import blog2 from '@/asserts/1684924885.jpg';
import blog3 from '@/asserts/1680696890.png';
import BlogCard from '../component/blogCard';
import BreadcrumbHero from '../component/breadcrumb';

// const posts = [
//     {
//         href: '/blog/potential-risk-of-cavities-from-black-mold',
//         imageSrc: '/images/blog/b1.jpg',
//         imageAlt: 'black mold blog',
//         dateText: 'Jun 15 2023',
//         title: 'THE POTENTIAL RISK OF CAVITIES FROM BLACK MOLD',
//         excerpt:
//             'The potential risk of cavities from black mold…',
//     },
//     {
//         href: '/blog/how-does-sugar-affects-your-teeth',
//         imageSrc: blog2.src,
//         imageAlt: 'sugar affects teeth',
//         dateText: 'May 24 2023',
//         title: 'HOW DOES SUGAR AFFECTS YOUR TEETH?',
//         excerpt:
//             'Sugars—The term sugar refers to common household sucrose as well as free sugars present in drinks and processed foods…',
//     },
//     {
//         href: '/blog/loose-tooth',
//         imageSrc: blog3.src,
//         imageAlt: 'loose tooth chart',
//         dateText: 'Apr 05 2023',
//         title: 'LOOSE TOOTH',
//         excerpt:
//             'What to do about a loose tooth that does not fall out? It is quite common for your…',
//     },
// ];


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


export default function BlogSection() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, SetLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        
        const fetchBlogs = async () => {
            try {
                const response = await axios.post(`${apiUrl}/blogs`);
                if (response.data?.success === true && Array.isArray(response.data.data)) {
                    // console.log("api call");

                    // console.log(response.data, "full blogggggg");
                    // console.log(response.data.data, "blogggggg");
                    setBlogs(response.data.data);
                } else {
                    setError("No Blog Found.")
                }
            } catch (err) {
                setError("Failed to fetch blogs. please try again later")
            } finally {
                SetLoading(false);
            }
        };

        fetchBlogs();
    }, [])
    return (
        <div>

            <BreadcrumbHero
                title="BLOG"
                crumbs={[{ label: "Home", href: "/" }, { label: "BLOG" }]}
            />
            <section className="mx-auto max-w-6xl px-4 py-[100px]">
                <div className="text-center mb-[55px]">
                    <div className="text-[14px] font-bold uppercase mb-2 " style={{ color: "#b6c651", fontWeight: 900 }}>
                        Our Blog
                    </div>
                    <h2 className=" text-[42px] font-normal leading-tight" style={{ color: "#005d98" }}>
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
                    <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {blogs.map((blog) => (
                            <BlogCard
                                key={blog.id}
                                href={`/blog/${blog.urlParameter || blog.id}`}
                                imageSrc={blog.blogImage || "/images/default.jpg"}
                                imageAlt={blog.imageAlt || blog.imageTitle || blog.blogTitle}
                                dateText={blog.publishDate ? blog.publishDate.split(" ")[0] : "N/A"}
                                title={blog.blogTitle}
                                excerpt={
                                    blog.metaDescription ||
                                    (blog.blogDescription
                                        ? blog.blogDescription.replace(/<[^>]+>/g, "").slice(0, 100) + "..."
                                        : "No description available.")
                                }
                            />
                        ))}
                    </div>
                )

                }

            </section>
        </div>
    );
}
