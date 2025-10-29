
"use client"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaClock, FaMapMarkerAlt, FaPaperPlane, FaRegPaperPlane } from 'react-icons/fa';
import logo from "../../asserts/logo.png"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import { MdAccessTime } from 'react-icons/md';
import axios from 'axios';
import { apiUrl } from '@/config';
import { usePathname } from "next/navigation";
const Header: React.FC = () => {
    const pathname = usePathname();
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [categories, setCategories] = useState<{ id: number; categoryName: string; slug: string }[]>([]);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);


    // const services = [
    //     { name: "Root Canal Treatment", href: "/services/root-canal" },
    //     { name: "Dental Implants", href: "/services/dental-implants" },
    //     { name: "Teeth Whitening", href: "/services/teeth-whitening" },
    //     { name: "Braces & Aligners", href: "/services/braces-aligners" },
    //     { name: "Wisdom Tooth Removal", href: "/services/wisdom-tooth" },
    // ];

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.post(`${apiUrl}/categories`);
                if (res.data.success && Array.isArray(res.data.data)) {
                    const sorted = res.data.data.sort((a: any, b: any) => a.sequance - b.sequance);
                    setCategories(sorted);
                }
            } catch (error) {
                console.error("Error fetching categories", error);
            }
        };
        fetchCategories()
    }, [])

    // 👇 Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const isActive = (path: string) =>
        pathname === path ? "!text-[#005d98] font-semibold" : "text-gray-700";

    return (
        <header className="bg-white shadow">
            {/* Top Bar - Social Links */}
            <div className="bg-[#005d98] text-white text-lg overflow-hidden">
                <div className="max-w-7xl mx-auto flex  px-10 py-2 items-center justify-between">
                    {/* Left part: Logo + Marquee */}
                    <div className="flex items-center space-x-4  ">
                        <div className="overflow-hidden whitespace-nowrap min-w-0 ">
                            <div className="animate-marquee text-[15px] font-medium truncate  ">
                                Most Reviewed Dental Clinic in Vadodara, 1000 + 5* Rating
                            </div>
                        </div>
                    </div>
                    {/* Social Icons */}
                    <div className="flex space-x-4">
                        <Link
                            href="https://www.facebook.com/login/"
                            aria-label="Facebook"
                            className='bg-[#FFFFFF33] p-2 rounded-full transition-all hover:bg-transparent hover:-translate-y-1 duration-500'
                            style={{ display: 'inline-flex', alignItems: 'center', color: 'white' }}
                        >
                            <FaFacebookF />
                        </Link>
                        <Link
                            href="https://x.com/i/flow/login"
                            aria-label="Twitter"
                            className='bg-[#FFFFFF33] p-2 rounded-full transition-all hover:bg-transparent hover:-translate-y-1 duration-500'
                            style={{ display: 'inline-flex', alignItems: 'center', color: "white" }}
                        >
                            <FaTwitter />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/login"
                            aria-label="LinkedIn"
                            className='bg-[#FFFFFF33] p-2 rounded-full transition-all hover:bg-transparent hover:-translate-y-1 duration-500'
                            style={{ display: 'inline-flex', alignItems: 'center', color: "white" }}
                        >
                            <FaLinkedinIn />
                        </Link>
                        <Link
                            href="https://www.instagram.com/accounts/login/"
                            aria-label="Instagram"
                            className='bg-[#FFFFFF33] p-2 rounded-full transition-all hover:bg-transparent hover:-translate-y-1 duration-500'
                            style={{ display: 'inline-flex', alignItems: 'center', color: "white" }}
                        >
                            <FaInstagram />
                        </Link>
                    </div>

                </div>

            </div>

            <div
        className={`transition-all duration-300 bg-white z-50 w-full ${
          isSticky ? "fixed top-0 left-0 shadow-md animate-slideDown" : "relative"
        }`}
      >
            <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">
                {/* Main Nav */}
                {/* Logo and Brand */}
                <div className="flex items-center space-x-3">
                    <Link
                        href="/"
                    >
                        <Image
                            src={logo}
                            alt="Mubryx Logo"
                            width={200}
                            height={100}
                            className="rounded-full"
                        />
                    </Link>

                </div>
                {/* Navigation */}

                <nav className="space-x-8 block font-semibold  !text-black">
                    <Link href="/" className={`${isActive("/")} hover:text-[#005d98]`}>HOME</Link>
                    <Link href="/about" className={`${isActive("/about")} hover:text-[#005d98]`}>ABOUT</Link>
                    <Link href="/branches" className={`${isActive("/branches")} hover:text-[#005d98]`}>OUR BRANCHES</Link>

                    {/* 🔹 OUR SERVICES Dropdown */}
                    <div className="relative inline-block " onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => {
                        // Small delay before closing (smooth UX)
                        setTimeout(() => setIsServicesOpen(false), 2000);
                    }}>
                        <span
                            className={`inline-flex items-center gap-1 cursor-pointer text-black select-none
                            ${pathname.startsWith("/services")
                                    ? "text-[#005d98] font-semibold"
                                    : "text-black"
                                }`}
                            aria-haspopup="menu"
                        >
                            OUR SERVICES
                            <svg
                                className={`h-3.5 w-3.5 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.856a.75.75 0 111.08 1.04l-4.24 4.41a.75.75 0 01-1.08 0l-4.24-4.41a.75.75 0 01.02-1.06z" />
                            </svg>
                        </span>

                        {/* Dropdown Panel */}
                        {
                            isServicesOpen && (
                                <div
                                    role="menu"
                                    onMouseEnter={() => setIsServicesOpen(true)} // keep open while hovering
                                    onMouseLeave={() => setIsServicesOpen(false)} // close after leaving
                                    className={`absolute left-0 top-full z-20 mt-2 min-w-[330px] rounded-md border border-gray-200 bg-white shadow-lg origin-top transition-all duration-300 ease-out
      ${isServicesOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
    `}
                                >
                                    <div className="py-2">
                                        {categories.length > 0 ? (
                                            categories.map((service: any) => (
                                                <Link
                                                    key={service.id}
                                                    href={`/services/${service.slug}`}
                                                    className={`block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#005d98] ${pathname === `/services/${service.slug}`
                                                        ? "text-[#005d98] font-semibold"
                                                        : "text-gray-700"
                                                        }`}
                                                    role="menuitem"
                                                >
                                                    {service.categoryName}
                                                </Link>
                                            ))
                                        ) : (
                                            <div className="px-4 py-2 text-sm text-gray-400">Loading...</div>
                                        )}
                                    </div>
                                </div>
                            )
                        }

                    </div>


                    {/* Gallery dropdown: parent not clickable */}
                    <div className="relative inline-block group">
                        {/* Non-clickable parent trigger */}
                        <span
                            className={`inline-flex items-center gap-1 cursor-pointer select-none ${pathname.startsWith("/gallery") || pathname === "/video-gallery"
                                ? "text-[#005d98] font-semibold"
                                : "text-black"
                                }`}
                            aria-haspopup="menu"
                            aria-expanded="false"
                            aria-controls="gallery-menu"
                        >
                            GALLERY
                            <svg
                                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.856a.75.75 0 111.08 1.04l-4.24 4.41a.75.75 0 01-1.08 0l-4.24-4.41a.75.75 0 01.02-1.06z" />
                            </svg>
                        </span>

                        {/* Dropdown panel */}
                        <div
                            id="gallery-menu"
                            role="menu"
                            className="absolute left-0 top-full z-20 mt-2 min-w-[200px] rounded-md border border-gray-200 bg-white shadow-lg opacity-0 scale-95 origin-top
                 pointer-events-none transition-all duration-1000 ease-out
                 group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto"
                        >
                            <div className="py-2">
                                <Link
                                    href="/gallery"
                                    role="menuitem"
                                    className={`block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#005d98] ${pathname === "/gallery"
                                            ? "text-[#005d98] font-semibold"
                                            : "text-gray-700"
                                        }`}
                                >
                                    Gallery
                                </Link>
                                <Link
                                    href="/video-gallery"
                                    role="menuitem"
                                    className={`block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#005d98] ${
                    pathname === "/video-gallery"
                      ? "text-[#005d98] font-semibold"
                      : "text-gray-700"
                  }`}
                                >
                                    Video Gallery
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link href="/blog" className={`${isActive("/blog")} hover:text-[#005d98]`}>BLOG</Link>
                    <Link href="/testimonial" className={`${isActive("/testimonial")} hover:text-[#005d98]`}>TESTIMONIAL</Link>
                    <Link href="/contact" className={`${isActive("/contact")} hover:text-[#005d98]`}>CONTACT</Link>
                </nav>
            </div>
                  </div>



            <div
                className="bottom-header"
            >
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4">
                    {/* Location */}
                    <div className="flex items-start px-4 py-3 border-r border-b md:border-b-0 border-white md:border-r md:border-white">
                        <FaLocationCrosshairs className="text-3xl flex-shrink-0 text-white" />
                        <div className="ml-3 flex-1 min-w-0">
                            <div className="font-medium whitespace-normal break-words">
                                <span className='text-white'>
                                    <a href="https://maps.app.goo.gl/L3TQPr5FdWmKFdrt6" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>Ajwa Rd</a>{" "} |{" "}
                                    <a href="https://maps.app.goo.gl/vJ63vDw7ChJJ79jR6" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>Harni Rd</a> {" "} |{" "}
                                    <a href="https://maps.app.goo.gl/YmYjGJJyNwaMvQGB7" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>Raopura</a> {" "} |{" "}
                                    <a href="https://maps.app.goo.gl/x97hmZgRqdPAo91i6" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>Sama Savli Rd</a> {" "} |{" "}
                                    <a href="https://maps.app.goo.gl/opR9qxFhpDNVic6t5" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>Gotri Sevasi Rd</a> {" "} |{" "}
                                    <a href="https://maps.app.goo.gl/X3v3CbcV8zcK8bme7" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>Vasna Bhayli</a> {" "} |{" "}
                                    <a href="https://maps.app.goo.gl/JYWAxzG1r3ZrtVgP9" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>Manjalpur</a> {" "} |{" "}
                                    <a href="https://maps.app.goo.gl/ie3GdXirj3gN7PE87" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>Atladara</a>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start px-4 py-3 border-r border-b md:border-b-0 border-white  flex-1 min-w-0 text-white">
                        <FaPhoneAlt className="text-3xl flex-shrink-0" />
                        <div className="ml-3 min-w-0">
                            <div className="font-medium ">Call us</div>
                            <div className="font-semibold truncate md:text-base">+91 6354 734 441</div>
                        </div>
                    </div>
                    {/* Email */}
                    <div className="flex items-start px-4 py-3 border-r border-b md:border-b-0 border-white  flex-1 min-w-0 text-white">
                        <FaRegPaperPlane className="text-3xl flex-shrink-0" />
                        <div className="ml-3 min-w-0">
                            <div className="font-medium">Email us</div>
                            <div className="font-semibold truncate md:text-base">
                                <a
                                    href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=vrajgroupofdental@gmail.com"
                                    target="_self"
                                    rel="noopener noreferrer"
                                    style={{ color: 'inherit', textDecoration: 'underline' }}
                                >
                                    vrajgroupofdental@gmail.com
                                </a>
                            </div>
                        </div>

                    </div>
                    {/* Hours */}
                    <div className="flex items-start px-4 py-3 border-r border-b md:border-b-0 border-white flex-1 min-w-0 text-white">
                        <MdAccessTime className="text-3xl flex-shrink-0" />
                        <div className="ml-3 flex-1 min-w-0">
                            <div className="font-medium  whitespace-normal break-words">
                                Opening Hour
                            </div>
                            <div className=" md:text-base whitespace-normal break-words">
                                Mon - Sat 10.00 am - 8.00 pm. | Sunday By Appointment
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
}


export default Header;

