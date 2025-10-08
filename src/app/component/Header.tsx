// components/Header.js
"use client"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaClock, FaMapMarkerAlt, FaPaperPlane, FaRegPaperPlane } from 'react-icons/fa';
import logo from "../../asserts/logo.png"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import { MdAccessTime } from 'react-icons/md';
const Header: React.FC = () => {
    const [galleryOpen, setGalleryOpen] = useState(false);
    return (
        <header className="bg-white shadow">
            {/* Top Bar - Social Links */}
            <div className="bg-[#005d98] text-white text-lg overflow-hidden">
                <div className="max-w-7xl mx-auto flex  px-10 py-2 items-center justify-between">
                    {/* Left part: Logo + Marquee */}
                    <div className="flex items-center space-x-4 min-w-0">
                        <div className="overflow-hidden whitespace-nowrap min-w-0">
                            <div className="animate-marquee text-sm font-medium truncate">
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
                            style={{ display: 'inline-flex', alignItems: 'center' }}
                        >
                            <FaFacebookF />
                        </Link>
                        <Link
                            href="https://x.com/i/flow/login"
                            aria-label="Twitter"
                            className='bg-[#FFFFFF33] p-2 rounded-full transition-all hover:bg-transparent hover:-translate-y-1 duration-500'
                            style={{ display: 'inline-flex', alignItems: 'center' }}
                        >
                            <FaTwitter />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/login"
                            aria-label="LinkedIn"
                            className='bg-[#FFFFFF33] p-2 rounded-full transition-all hover:bg-transparent hover:-translate-y-1 duration-500'
                            style={{ display: 'inline-flex', alignItems: 'center' }}
                        >
                            <FaLinkedinIn />
                        </Link>
                        <Link
                            href="https://www.instagram.com/accounts/login/"
                            aria-label="Instagram"
                            className='bg-[#FFFFFF33] p-2 rounded-full transition-all hover:bg-transparent hover:-translate-y-1 duration-500'
                            style={{ display: 'inline-flex', alignItems: 'center' }}
                        >
                            <FaInstagram />
                        </Link>
                    </div>

                </div>

            </div>

            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
                {/* Main Nav */}
                {/* Logo and Brand */}
                <div className="flex items-center space-x-3">
                    <Image
                        src={logo}
                        alt="Mubryx Logo"
                        width={200}
                        height={100}
                        className="rounded-full"
                    />

                </div>
                {/* Navigation */}

                <nav className="space-x-8 block  text-gray-700">
                    <Link href="/" className="hover:text-[#005d98]">HOME</Link>
                    <Link href="/about" className="hover:text-[#005d98]">ABOUT</Link>
                    <Link href="/branches" className="hover:text-[#005d98]">OUR BRANCHES</Link>
                    <Link href="/services" className="hover:text-[#005d98]">OUR SERVICES</Link>
                    <Link href="/gallery" className="hover:text-[#005d98]">GALLERY</Link>
                    <Link href="/blog" className="hover:text-[#005d98]">BLOG</Link>
                    <Link href="/testimonial" className="hover:text-[#005d98]">TESTIMONIAL</Link>
                    <Link href="/contact" className="hover:text-[#005d98]">CONTACT</Link>
                </nav>
            </div>


            {/* Info Strip */}
            {/* <div
                className="text-white "
                style={{ backgroundColor: "rgba(0, 93, 152, 0.64)" }}
            >
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
                    <div className="flex items-center px-4 py-3 border-t border-b border-r border-blue-300 md:border-none md:border-r md:border-blue-300  min-w-0">
                        <FaMapMarkerAlt className="text-2xl flex-shrink-0" />
                        <div className="ml-3 min-w-0">
                            <div className=" truncate">Ajwa Rd | Harni Rd | Raopura |</div>
                            <div className=" truncate">
                                Sama Savli Rd | Gotri Sevasi Rd | Vasna Bhayli | Manjalpur | Atladara
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center px-4 py-3 border-t border-b border-r border-blue-300 md:border-none md:border-r md:border-blue-300 flex-1 min-w-0">
                        <FaPhoneAlt className="text-2xl flex-shrink-0" />
                        <div className="ml-3 min-w-0">
                            <div className="">Call us</div>
                            <div className=" font-semibold truncate">+91 6354 734 441</div>
                        </div>
                    </div>
                    <div className="flex items-center px-4 py-3 border-t border-b border-r border-blue-300 md:border-none md:border-r md:border-blue-300 flex-1 min-w-0">
                        <FaPaperPlane className="text-2xl flex-shrink-0" />
                        <div className="ml-3 min-w-0">
                            <div className="">Email us</div>
                            <div className="font-semibold truncate">vrajgroupofdental@gmail.com</div>
                        </div>
                    </div>
                    <div className="flex items-center px-4 py-3 flex-1 min-w-0">
                        <FaClock className="text-2xl flex-shrink-0" />
                        <div className="ml-3 min-w-0">
                            <div className="">Opening Hour</div>
                            <div className=" font-semibold truncate">Mon - Sat 10.00 am - 8.00 pm. | Sunday By Appointment</div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div
                className="text-[#ffffff] "
                style={{ backgroundColor: "rgba(0, 93, 152, 0.64)" }}
            >
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4">
                    {/* Location */}
                    <div className="flex items-start px-4 py-3 border-r border-white md:border-r md:border-white">
                        <FaLocationCrosshairs className="text-3xl flex-shrink-0" />
                        <div className="ml-3 flex-1 min-w-0">
                            <div className="font-medium whitespace-normal break-words">
                                Ajwa Rd | Harni Rd | Raopura |
                            </div>
                            <div className="font-medium whitespace-normal break-words">
                                Sama Savli Rd | Gotri Sevasi Rd | Vasna Bhayli | Manjalpur | Atladara
                            </div>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start px-4 py-3 border-r border-white  flex-1 min-w-0">
                        <FaPhoneAlt className="text-3xl flex-shrink-0" />
                        <div className="ml-3 min-w-0">
                            <div className="font-medium ">Call us</div>
                            <div className="font-semibold truncate md:text-base">+91 6354 734 441</div>
                        </div>
                    </div>
                    {/* Email */}
                    <div className="flex items-start px-4 py-3 border-r border-white  flex-1 min-w-0">
                        <FaRegPaperPlane className="text-3xl flex-shrink-0" />
                        <div className="ml-3 min-w-0">
                            <div className="font-medium ">Email us</div>
                            <div className="font-semibold truncate md:text-base">vrajgroupofdental@gmail.com</div>
                        </div>
                    </div>
                    {/* Hours */}
                    <div className="flex items-start px-4 py-3 border-r border-white flex-1 min-w-0">
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