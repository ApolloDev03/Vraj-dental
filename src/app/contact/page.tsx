'use client';
import { useState } from 'react';
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaUser,
    FaRegEnvelope,
    FaRegCommentDots,

    FaPaperPlane,
} from 'react-icons/fa';
import BreadcrumbHero from '../component/breadcrumb';
import { FaScrewdriverWrench, FaPhoneVolume } from "react-icons/fa6";
import Link from 'next/link';
type FormValues = {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
};

const branches = [
    {
        title: 'VRAJ GROUP OF DENTAL CLINICS AJWA ROAD BRANCH',
        address:
            'FF, DIVYA plaza complex, Above Jigar provision store, Besides Atul bakery Vadodara Gujarat.',
        phone: '+91 1234567890',
        email: 'drujas88@gmail.com',
    },
    {
        title: 'VRAJ DENTAL CLINIC IN VADODARA-HARNI ROAD',
        address:
            '18/GF, Red Coral,Opp Gada Circle, Harni Road, Vadodara, Gujarat',
        phone: '+91 94277 84433',
        email: 'drujas88@gmail.com',
    },
    {
        title: 'VRAJ DENTAL CLINIC & IMPLANT CENTER RAOPURA',
        address:
            '1st Floor Ashok House 2, Inside Santhavasahat Gate, Raopura, Vadodara, Gujarat.',
        phone: '+91 99049 63090',
        email: 'drujas88@gmail.com',
    },
    {
        title: 'VRAJ DENTAL CLINIC IN VADODARA-SAMA-SAVLI',
        address:
            '2nd Floor, Shukan Hub, Opp Shivam Party Plot, Sama – Savli Main Road, Vadodara Gujarat.',
        phone: '+91 94277 84433',
        email: 'drujas88@gmail.com',
    },
];

export default function ContactPage() {
    const [form, setForm] = useState<FormValues>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Contact form:', form);
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    return (
        <main className="bg-[#f6f9fc]">
            <BreadcrumbHero
                title="CONTACT"
                crumbs={[{ label: "Home", href: "/" }, { label: "Contact " }]}
            />
            {/* Top Info Bar */}
            <section className="mx-auto max-w-6xl bg-[#043d72] text-white">
                <div className=" px-4">
                    <div className="grid gap-6 py-6 md:grid-cols-3 ">
                        <InfoItem
                            icon={<FaMapMarkerAlt className="h-6 w-6 " />}
                            title="Location"
                            lines={[
                                '18/GF, Red Coral,Opp Gada Circle,',
                                'Harni Road, Vadodara, Gujarat',
                            ]}
                        />
                        <InfoItem
                            icon={<FaPhoneAlt className="h-6 w-6" />}
                            title="Phone Number"
                            lines={['+91 94277 84433']}

                        />
                        <InfoItem
                            icon={<FaEnvelope className="h-6 w-6" />}
                            title="Email Address"
                            lines={['vrajgroupofdental@gmail.com', 'drujas88@gmail.com']}
                        />
                    </div>
                </div>
            </section>

            {/* Message Form + Map (same section, one grid) */}
            <section className="mx-auto max-w-6xl px-4 py-12">
                <div className="grid  md:grid-cols-12">
                    {/* Form Card */}
                    <div className="md:col-span-7  bg-white p-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.07)]">
                        <p className="text-[12px] !mb-[10px] font-bold !text-[#005d98]">MESSAGE US</p>
                        <h2 className="mt-1 text-[40px] font-light text-[#005d98]">
                            Drop us Message for any Query
                        </h2>

                        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
                            <div className="grid gap-4 md:grid-cols-2">
                                <InputWithIcon
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="YOUR NAME"
                                    icon={<FaUser className="h-4 w-4" />}
                                    className='bg-[#f4f4f4]'
                                />
                                <InputWithIcon
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="YOUR EMAIL"
                                    icon={<FaRegEnvelope className="h-4 w-4" />}
                                />
                                <InputWithIcon
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="YOUR PHONE"
                                    icon={<FaPhoneAlt className="h-4 w-4" />}
                                />
                                <InputWithIcon
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    placeholder="YOUR SUBJECT"
                                    icon={<FaScrewdriverWrench className="h-4 w-4" />}
                                />
                            </div>

                            <div>
                                <div className="flex items-start rounded border border-gray-200">
                                    <div className="flex h-12 w-12 items-center justify-center text-[#0e5aa7]">
                                        <FaRegCommentDots className="h-5 w-5" />
                                    </div>
                                    <textarea
                                        name="message"
                                        rows={5}
                                        placeholder="YOUR MESSAGE"
                                        value={form.message}
                                        onChange={handleChange}
                                        className="w-full resize-none border-0 p-3 outline-none placeholder:tracking-wider"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group inline-flex items-center gap-3 rounded-full bg-[#005d98] hover:bg-[#bace3d] px-4 py-3 text-white transition hover:opacity-90"
                                >
                                    SEND MESSAGE
                                    <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#0f63a9] group-hover:text-[#130947] shadow-[0_3px_10px_rgba(0,0,0,0.15)]">
                                        <FaPaperPlane className="h-4 w-4 rotate-5 c z-100" />
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Map Card */}
                    <div className="md:col-span-5  bg-white  shadow-[0_10px_30px_rgba(0,0,0,0.07)]">
                        <div className="h-full min-h-[420px] overflow-hidden ">
                            <iframe
                                title="Vraj Dental Clinic Map"
                                className="h-full w-full"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                src={
                                    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48352.08200848644!2d-74.221833!3d40.761912!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ab4c4f268ebf%3A0x2ced2e98d311b9b9!2sRamada%20by%20Wyndham%20East%20Orange!5e0!3m2!1sen!2sbd!4v1760707688776!5m2!1sen!2sbd'
                                }
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Branch Grid */}
            <section className="mx-auto max-w-6xl px-4 pb-10">
                <div className="grid  md:grid-cols-2">
                    {branches.map((b) => (
                        <div
                            key={b.title}
                            className=" border border-[#b0cb1f] bg-white p-5 shadow-[10px_10px_10px_#ccc]"
                        >
                            <h4 className="text-2xl font-semibold tracking-wide text-[#005d98] mb-2">
                                {b.title}
                            </h4>
                            <p className="text-[16px] leading-6 text-[#4a5a6b]">{b.address}</p>

                            <div className="mt-3 space-y-2 text-[15px] text-[#4a5a6b]">
                                <div className="flex items-center gap-2">
                                    <FaPhoneVolume className="h-4 w-4 text-[#6d7a8c]" />
                                    {/* <span>{b.phone}</span> */}
                                    <Link
                                     href={`tel:${b.phone.replace(/[^+\d]/g, '')}`}
                                     className='text-[16px]'
                                     >{b.phone}</Link>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaRegEnvelope className="h-4 w-4 text-[#6d7a8c]" />
                                    {/* <span>{b.email}</span> */}
                                    <Link 
                                        href={`mailto:${b.email}`}
                                        className='text-[16px] font-normal' 
                                        >
                                            {b.email}
                                        </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

function InfoItem({
    icon,
    title,
    lines,
}: {
    icon: React.ReactNode;
    title: string;
    lines: string[];
}) {
    return (
        <div className="flex items-start gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-white hover:bg-[#005d98]">
                <span className="text-[#005d98] hover:text-white">{icon}</span>
            </div>
            <div>
                <p className="text-[20px]" style={{ color: "#ffffff", marginBottom: 0 }}>{title}</p>
                <span className='text-white' style={{ color: "#ffffff" }}>
                    {lines.map((l, i) => (
                        <p key={i} className="text-[15px] !text-white hover:!text-[#005d98]" style={{ marginBottom: 0 }}>
                            {l}
                        </p>
                    ))}
                </span>
            </div>
        </div>
    );
}

function InputWithIcon(
    props: React.InputHTMLAttributes<HTMLInputElement> & { icon: React.ReactNode }
) {
    const { icon, ...rest } = props;
    return (
        <div className="flex items-center rounded border border-gray-200">
            <div className="flex h-12 w-12 items-center justify-center text-[#0e5aa7]">
                {icon}
            </div>
            <input
                {...rest}
                className="h-12 w-full border-0 pr-3 outline-none placeholder:tracking-wider"
            />
        </div>
    );
}
