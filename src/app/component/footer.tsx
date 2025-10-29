// import Image from 'next/image';
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
// import vrajLogo from '../../asserts/logo.png'; // update to your actual path

// export default function Footer() {
//     return (
//         <footer className="bg-[#005d98] pt-16 pb-8 text-white relative">
//             {/* Main Footer */}
//             <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
//                 {/* Logo and Description */}
//                 <div>
//                     <div className="mb-6 flex justify-start">
//                         <Image
//                             src={vrajLogo}
//                             alt="VRAJ Dental Clinic Logo"
//                             width={240}
//                             height={100}
//                             className="object-contain"
//                         />
//                     </div>
//                     <p className="text-base text-gray-100 mb-6 leading-relaxed">
//                         Our patients leave our clinic feeling happy and satisfied with the
//                         treatment and service we provide.
//                     </p>
//                     <ul className="flex space-x-4 mt-3">
//                         {[
//                             { icon: <FaFacebookF />, link: 'https://www.facebook.com/login/' },
//                             { icon: <FaTwitter />, link: 'https://x.com/i/flow/login' },
//                             { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/login' },
//                             { icon: <FaInstagram />, link: 'https://www.instagram.com/accounts/login/' },
//                         ].map((item, index) => (
//                             <li
//                                 key={index}
//                                 className="text-white hover:bg-white hover:text-[#005d98] p-2 rounded-full transition-colors"
//                             >
//                                 <a href={item.link} target="_blank" rel="noopener noreferrer">
//                                     {item.icon}
//                                 </a>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Quick Links */}
//                 <div>
//                     <div className="relative mb-6">
//                         <h4 className="text-lg font-semibold tracking-wide inline-block pb-1 border-b-2 border-blue-200">
//                             QUICK LINKS
//                         </h4>
//                     </div>
//                     <div className="grid grid-cols-2 gap-x-10 text-base">
//                         <ul className="space-y-2">
//                             <li><a href="/" className="hover:underline">HOME</a></li>
//                             <li><a href="/branches" className="hover:underline">OUR BRANCHES</a></li>
//                             <li><a href="/gallery" className="hover:underline">GALLERY</a></li>
//                             <li><a href="/testimonial" className="hover:underline">TESTIMONIAL</a></li>
//                         </ul>
//                         <ul className="space-y-2">
//                             <li><a href="/about" className="hover:underline">ABOUT US</a></li>
//                             <li><a href="/services" className="hover:underline">SERVICES</a></li>
//                             <li><a href="/blog" className="hover:underline">BLOG</a></li>
//                             <li><a href="/contact" className="hover:underline">CONTACT US</a></li>
//                         </ul>
//                     </div>
//                 </div>

//                 {/* Contact Info */}
//                 <div>
//                     <div className="relative mb-6">
//                         <h4 className="text-lg font-semibold tracking-wide inline-block pb-1 border-b-2 border-blue-200">
//                             CONTACT INFO
//                         </h4>
//                     </div>
//                     <p className="text-base mb-2 leading-relaxed">
//                         <span className="font-semibold">Location:</span> 18/GF, Red Coral, Opp Gada Circle,
//                         Harni Road, Vadodara, Gujarat
//                     </p>
//                     <p className="text-base mb-2">
//                         <span className="font-semibold">Email:</span>{' '}
//                         <a href="mailto:vrajgroupofdental@gmail.com" className="hover:underline">
//                             vrajgroupofdental@gmail.com
//                         </a>
//                     </p>
//                     <p className="text-base mb-3">
//                         <span className="font-semibold">Phone:</span>{' '}
//                         <a href="tel:+919427784433" className="hover:underline">
//                             +91 94277 84433
//                         </a>
//                     </p>
//                     <a
//                         href="#"
//                         className="text-blue-200 hover:text-white underline underline-offset-2"
//                     >
//                         View Location on GoogleMap
//                     </a>
//                 </div>
//             </div>

//             {/* Divider */}
//             <div className="border-t border-blue-200 mt-12 mb-6 max-w-7xl mx-auto"></div>

//             {/* Bottom Footer */}
//             <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-blue-100">
//                 <p className="mb-2 md:mb-0 text-center md:text-left">
//                     © 2024 - vrajdentalclinic.com, All rights reserved.
//                 </p>
//                 <div className="space-x-3">
//                     <a href="#" className="hover:underline">Privacy Policy</a>
//                     <span>|</span>
//                     <a href="#" className="hover:underline">Terms &amp; Conditions</a>
//                 </div>
//             </div>
//         </footer>
//     );
// }



import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import vrajLogo from "../../asserts/logo.png"; // Adjust path
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer-area">
            <div className="container max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Logo and Description */}
                    <div className="single-footer-widget">
                        <div className="logo mb-4">
                            <a href="/">
                                <Image
                                    src={vrajLogo}
                                    alt="VRAJ Dental Clinic Logo"
                                    width={240}
                                    height={100}
                                    className="object-contain"
                                />
                            </a>
                            <p>
                                Our patients leave our clinic feeling happy and satisfied with the
                                treatment and service we provide.
                            </p>
                        </div>
                        <ul className="flex space-x-4 mt-3">
                            {[
                                { icon: <FaFacebookF />, link: 'https://www.facebook.com/login/' },
                                { icon: <FaTwitter />, link: 'https://x.com/i/flow/login' },
                                { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/login' },
                                { icon: <FaInstagram />, link: 'https://www.instagram.com/accounts/login/' },
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="footersocial text-white hover:bg-white hover:text-[#005d98] p-2 rounded-full transition-colors"
                                >
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="">
                                        {item.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>


                    </div>

                    {/* Quick Links */}
                    <div className="single-footer-widget">
                        <h3>Quick Links</h3>
                        <ul className="footer-quick-links">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/about">About Us</a>
                            </li>
                            <li>
                                <a href="/branches">Our Branches</a>
                            </li>
                            <li>
                                <a href="/services">Services</a>
                            </li>
                            <li>
                                <a href="/gallery">Gallery</a>
                            </li>
                            <li>
                                <a href="/blog">Blog</a>
                            </li>
                            <li>
                                <a href="/testimonial">Testimonial</a>
                            </li>
                            <li>
                                <a href="/contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="single-footer-widget">
                        <h3>Contact Info</h3>
                        <ul className="footer-contact-info">
                            <li>
                                <span>Location:</span> 18/GF, Red Coral, Opp Gada Circle, Harni Road, Vadodara, Gujarat
                            </li>
                            <li>
                                <span>Email:</span>{" "}
                                <a href="mailto:vrajgroupofdental@gmail.com">
                                    vrajgroupofdental@gmail.com
                                </a>
                            </li>
                            <li>
                                <span>Phone:</span>{" "}
                                <a href="tel:+919427784433">+91 94277 84433</a>
                            </li>
                            <li>
                                <a href="https://maps.app.goo.gl/9wGzVZ5bjnvWerUu8" target="_blank" rel="noopener noreferrer">
                                    View Location on GoogleMap
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright Area */}
            <div className="copyright-area">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                    <p>© 2024 - vrajdentalclinic.com, All rights reserved</p>
                    <ul className="flex">
                        <li>
                            <Link href="/privacy-policy" className="hover:!text-[#000]">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="/terms-conditions" className="hover:!text-[#000]">Terms &amp; Conditions</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
