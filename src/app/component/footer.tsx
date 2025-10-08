import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import vrajLogo from '../../asserts/logo.png'; // Update to your logo path

export default function Footer() {
    return (
        <footer className="bg-[#005d98] pt-16 pb-8 text-white relative">
            {/* Top Content Section */}
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Logo & Description */}
                <div>
                    <div className="mb-6">
                        <Image src={vrajLogo} alt="VRAJ Dental Clinic Logo" width={220} height={90} />
                    </div>
                    <p className="mb-6 text-base text-gray-100">Our patients leaves our clinic feeling happy and satisfied with the treatment and service we provide.</p>
                    <ul className="flex space-x-6  rounded-lg ">
                        <li className='text-white hover:bg-white p-2 rounded-full cursor-pointer hover:text-[rgb(13,110,253)] transition'>
                            <a href="https://www.facebook.com/login/" >
                                <FaFacebookF />
                            </a>
                        </li>
                        <li className='text-white hover:bg-white p-2 rounded-full cursor-pointer hover:text-[rgb(13,110,253)] transition'>
                            <a href="https://x.com/i/flow/login" >
                                <FaTwitter />
                            </a>
                        </li>
                        <li className='text-white hover:bg-white p-2 rounded-full cursor-pointer hover:text-[rgb(13,110,253)] transition'>
                            <a href="https://www.linkedin.com/login" >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className='text-white hover:bg-white p-2 rounded-full cursor-pointer hover:text-[rgb(13,110,253)] transition'>
                            <a href="https://www.instagram.com/accounts/login/" >
                                <FaInstagram />
                            </a>
                        </li>
                    </ul>

                </div>
                {/* Quick Links */}
                <div>
                    <h4 className="text-lg  tracking-wide mb-4">QUICK LINKS</h4>
                    <hr className="border-blue-200 mb-2" />
                    <div className="grid grid-cols-2 gap-x-8 text-base">
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:underline">HOME</a></li>
                            <li><a href="/branches" className="hover:underline">OUR BRANCHES</a></li>
                            <li><a href="/gallery" className="hover:underline">GALLERY</a></li>
                            <li><a href="/testimonial" className="hover:underline">TESTIMONIAL</a></li>
                        </ul>
                        <ul className="space-y-2">
                            <li><a href="/about" className="hover:underline">ABOUT US</a></li>
                            <li><a href="/services" className="hover:underline">SERVICES</a></li>
                            <li><a href="/blog" className="hover:underline">BLOG</a></li>
                            <li><a href="/contact" className="hover:underline">CONTACT US</a></li>
                        </ul>

                    </div>
                </div>
                {/* Contact Info */}
                <div>
                    <h4 className="text-lg  tracking-wide mb-4">CONTACT INFO</h4>
                    <hr className="border-blue-200 mb-2" />
                    <div className="text-base mb-1">
                        <span className="font-semibold">Location:</span> 18/GF, Red Coral, Opp Gada Circle, Harni Road, Vadodara, Gujarat
                    </div>
                    <div className="text-base mb-1">
                        <span className="font-medium">Email:</span> vrajgroupofdental@gmail.com
                    </div>
                    <div className="text-base mb-1">
                        <span className="font-medium">Phone:</span> +91 94277 84433
                    </div>
                    <a href="#" className="underline text-blue-200 hover:text-white">View Location on GoogleMap</a>
                </div>
            </div>
            {/* Divider */}
            <div className="border-t border-blue-200 my-8 max-w-7xl mx-auto"></div>
            {/* Bottom Section */}
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm text-blue-100">
                <div className="mb-2 md:mb-0">&copy; 2024 - vrajdentalclinic.com, All rights reserved</div>
                <div>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <span className="mx-2">|</span>
                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </div>
            </div>
        </footer>
    );
}
