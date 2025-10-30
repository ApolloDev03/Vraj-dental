"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BreadcrumbHero from "../../component/breadcrumb";
// import { Calendar } from "lucide-react";
import { FaRegClock } from "react-icons/fa";
import img1 from '@/asserts/1680696890.png'
import Link from "next/link";
import { apiUrl } from "@/config";
import axios from "axios";
import Head from "next/head";


type BlogDetail = {
    id: number;
    blogTitle: string;
    blogDescription: string;
    blogImage: string;
    publishDate: string;
    tags: string;
    metaTitle?: string;
    metaKeyword?: string;
    metaDescription?: string;
};

type LatestPost = {
    id: number;
    blogTitle: string;
    urlParameter: string;
    blogImage: string;
    publishDate: string;
};

type Category = {
    id: number;
    categoryName: string;
};

type ApiResponse = {
    success: boolean;
    message: string;
    data: {
        blog: BlogDetail;
        latest: LatestPost[];
        categories: Category[];
    };
};

export default function BlogDetailPage({ slug }: { slug: string }) {

    const [blog, setBlog] = useState<BlogDetail | null>(null);
    const [latest, setLatest] = useState<LatestPost[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        comment: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState<string | null>(null);


    // console.log(slug, "sluggggg");

    useEffect(() => {
        if (!slug) return;

        const fetchBlog = async () => {
            try {
                const { data } = await axios.post<ApiResponse>(
                    `${apiUrl}/blog/${slug}`
                );

                if (data.success) {
                    setBlog(data.data.blog);
                    setLatest(data.data.latest);
                    setCategories(data.data.categories);
                } else {
                    console.error("API returned success=false:", data.message);
                }
            } catch (error) {
                console.error("Error fetching blog:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [slug]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // console.log(blog?.id,"blogidcomment");


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!blog) return;

        // console.log("Submitting comment for blog:", blog);


        setSubmitting(true);
        setMessage(null);


        try {
            const response = await axios.post(`${apiUrl}/blog/comment`, {
                blogId: blog.id,
                name: formData.name,
                email: formData.email,
                comment: formData.comment,
            });

            if (response.data?.success) {
                setMessage("✅ Comment submitted successfully!");
                setFormData({ name: "", email: "", comment: "" });
            } else {
                setMessage("❌ Failed to submit comment. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting comment:", error);
            setMessage("⚠️ Something went wrong. Please try again later.");
        } finally {
            setSubmitting(false);

            setTimeout(() => {
                setMessage(null);
            }, 5000)
        }
    };


    if (loading) return <div className="text-center py-20">Loading...</div>;
    if (!blog) return <div className="text-center py-20">Blog not found.</div>;

    const tags = blog.tags ? blog.tags.split(",") : [];

    
    

    return (
        <section>
            <Head>
                <title>{blog.metaTitle || null}</title>
                {
                    blog.metaDescription && (
                        <meta
                            name="description"
                            content={blog.metaDescription}
                        />
                    )
                }
                
                {
                    blog.metaKeyword && (
                        <meta
                    name="keywords"
                    content={blog.metaKeyword}
                />
                    )
                }
            </Head>

            <BreadcrumbHero
                title="BLOD DETAILS"
                crumbs={[{ label: "Home", href: "/" }, { label: "Blog Details" }]}
            />
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12 ">
                {/* Left Content */}
                <div className="lg:col-span-2">
                    <div className="bg-white shadow  rounded-lg p-6">
                        <Image
                            src={blog.blogImage}
                            alt={blog.blogTitle}
                            width={0}
                            height={0}
                            style={{ width: "100%", height: "250px" }}
                            className="rounded-md  object-contain mb-6"
                        />
                        <div className="flex items-center text-gray-500 gap-2 mb-2">
                            {/* <Calendar className="w-4 h-4" /> */}
                            <FaRegClock className="w-4 h-4 text-[#005d98]" />
                            <span className="text-sm">{new Date(blog.publishDate).toDateString()}</span>
                        </div>

                        <h1 className="text-2xl md:text-[23px] font-normal text-[#005d98] mb-2 uppercase">
                            {blog.blogTitle}
                        </h1>

                        <div
                            className="prose prose-gray max-w-none"
                            dangerouslySetInnerHTML={{ __html: blog.blogDescription }}
                        />
                    </div>

                    {/* Comment Section */}
                    <div className="mt-12 bg-white shadow rounded-lg p-6">
                        <h2 className="text-lg font-semibold border-l-4 border-[#005d98] pl-3 mb-4">
                            Leave a Comment
                        </h2>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name *"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md px-3 py-2 w-full"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email *"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md px-3 py-2 w-full"
                                    required
                                />
                            </div>
                            <textarea
                                name="comment"
                                placeholder="Comment"
                                value={formData.comment}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-md px-3 py-2 w-full h-32"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                disabled={submitting}
                                className={`${submitting ? "opacity-60 cursor-not-allowed" : "hover:bg-[#b3c83f]"
                                    } bg-[#005d98] text-white font-medium px-[35px] py-[12px] rounded-md transition-colors`}
                            >
                                {submitting ? "Posting..." : "POST COMMENT"}
                            </button>
                            {message && (
                                <p
                                    className={`mt-3 text-sm ${message.includes("successfully")
                                            ? "text-green-600"
                                            : "text-red-600"
                                        }`}
                                >
                                    {message}
                                </p>
                            )}
                        </form>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="space-y-8">
                    {/* Popular Posts */}
                    <div className="">
                        <h3 className="text-[20px] font-semibold mb-[25px] border-b pb-[10px]">Popular Posts</h3>
                        <ul className="space-y-5">
                            {latest.map((post) => (
                                <li key={post.id} className="flex gap-3 items-start">
                                    <Link
                                        href={`${post.urlParameter}`}
                                        className="flex gap-3 items-start">
                                        <div className="relative w-16 h-16 flex-shrink-0">
                                            <Image
                                                src={post.blogImage}
                                                alt={post.blogTitle}
                                                fill
                                                className="object-cover rounded-md"
                                            />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <span className="text-xs text-gray-500">{new Date(post.publishDate).toDateString()}</span>

                                            <p className="text-[16px] font-medium !text-black hover:!text-[#005d98]  cursor-pointer leading-snug">
                                                {post.blogTitle}
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="">
                        <h3 className="text-[20px] font-semibold mb-[25px] border-b pb-[10px]">Our Services</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                            {categories.map((cat) => (
                                <li key={cat.id} className=" before:content-['▪'] before:!text-xl before:text-[#005d98] before:mr-2">
                                    <Link href={`/services/${cat.categoryName.toLowerCase().replace(/\s+/g, '-')}`} className="text-[16px] font-semibold !text-[#130947]">
                                        {cat.categoryName}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tags */}
                    <div className="">
                        <h3 className="text-[20px] font-bold mb-4 border-b pb-2">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-3 text-[#130947] py-1 border border-dashed hover:border-transparent border-gray-200 !font-semibold hover:bg-[#005d98] hover:!text-white  text-sm transition-all duration-500 ease-in-out cursor-pointer"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
}

// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import BreadcrumbHero from "../../component/breadcrumb";
// import { FaRegClock } from "react-icons/fa";
// import img1 from "@/asserts/1680696890.png";

// type Blog = {
//   id: number;
//   title: string;
//   date: string;
//   content: string;
//   image: string;
// };

// export default function BlogDetailClient({ slug }: { slug: string }) {
//   const [blog, setBlog] = useState<Blog | null>(null);

//   console.log(slug, "sluggggg");

//   useEffect(() => {
//     const mockBlog: Blog = {
//       id: 1,
//       title: "Loose Tooth",
//       date: "Apr 05 2023",
//       image: img1.src,
//       content: "<p>Mock blog content here...</p>",
//     };
//     setBlog(mockBlog);
//   }, [slug]);

//   if (!blog) return <div>Loading...</div>;

//   return (
//     <section>
//       <BreadcrumbHero
//         title="BLOG DETAILS"
//         crumbs={[{ label: "Home", href: "/" }, { label: "Blog Details" }]}
//       />
//       <div className="max-w-3xl mx-auto py-12">
//         <Image src={blog.image} alt={blog.title} width={800} height={400} />
//         <h1 className="text-2xl font-semibold mt-6">{blog.title}</h1>
//         <div dangerouslySetInnerHTML={{ __html: blog.content }} />
//       </div>
//     </section>
//   );
// }
