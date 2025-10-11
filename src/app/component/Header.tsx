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

            <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">
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




            <div
                className="bottom-header"
            >
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4">
                    {/* Location */}
                    <div className="flex items-start px-4 py-3 border-r border-white md:border-r md:border-white">
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
                    <div className="flex items-start px-4 py-3 border-r border-white  flex-1 min-w-0 text-white">
                        <FaPhoneAlt className="text-3xl flex-shrink-0" />
                        <div className="ml-3 min-w-0">
                            <div className="font-medium ">Call us</div>
                            <div className="font-semibold truncate md:text-base">+91 6354 734 441</div>
                        </div>
                    </div>
                    {/* Email */}
                    <div className="flex items-start px-4 py-3 border-r border-white  flex-1 min-w-0 text-white">
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
                    <div className="flex items-start px-4 py-3 border-r border-white flex-1 min-w-0 text-white">
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

