'use client';
import { useEffect, useState } from 'react';
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
import Head from "next/head";
import axios from 'axios';
import { apiUrl } from '@/config';

type FormValues = {
    name: string;
    email: string;
    mobile: string;
    clinic: string;
    strMessage: string;
};

type MetaData = {
    metaTitle: string;
    metaKeyword: string;
    metaDescription: string;
}

type ContactApiResponse = {
    success: boolean,
    message: string,
    meta_Data: MetaData;
}

// const branches = [
//     {
//         title: 'VRAJ GROUP OF DENTAL CLINICS AJWA ROAD BRANCH',
//         address:
//             'FF, DIVYA plaza complex, Above Jigar provision store, Besides Atul bakery Vadodara Gujarat.'
//     },
//     {
//         title: 'VRAJ DENTAL CLINIC IN VADODARA-HARNI ROAD',
//         address:
//             '18/GF, Red Coral,Opp Gada Circle, Harni Road, Vadodara, Gujarat'
//     },
//     {
//         title: 'VRAJ DENTAL CLINIC & IMPLANT CENTER RAOPURA',
//         address:
//             '1st Floor Ashok House 2, Inside Santhavasahat Gate, Raopura, Vadodara, Gujarat.'
//     },
//     {
//         title: 'VRAJ DENTAL CLINIC IN VADODARA-SAMA-SAVLI',
//         address:
//             '2nd Floor, Shukan Hub, Opp Shivam Party Plot, Sama – Savli Main Road, Vadodara Gujarat.'
//     },
// ];

export default function ContactPage() {
    const [form, setForm] = useState<FormValues>({
        name: '',
        email: '',
        mobile: '',
        clinic: '',
        strMessage: '',
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
    const [metaData, setMetaData] = useState<MetaData | null>(null);
    const [branches, setBranches] = useState<{ name: string; address: string; mapLink: string; shortName: string; }[]>([]);

    useEffect(() => {
        const fetchBranches = async () => {
            try {
                const response = await axios.post(`${apiUrl}/our-branches`);
                if (response.data.success && Array.isArray(response.data.data)) {
                    // Get first 4 branches only
                    const firstFour = response.data.data.slice(0, 4);
                    // Simplify data for rendering
                    setBranches(
                        firstFour.map((b: any) => ({
                            name: b.name,
                            address: b.address,
                            mapLink: b.mapLink,
                        }))
                    );
                }
            } catch (error) {
                console.error('Error fetching branches:', error);
            }
        };

        fetchBranches();
    }, []);

    useEffect(() => {
        const fetchBranches = async () => {
            try {
                const response = await axios.post(`${apiUrl}/our-branches`);
                if (response.data.success) {
                    setBranches(response.data.data);
                }
            } catch (error) {
                console.error("Error fetching branches:", error);
            }
        };

        fetchBranches();
    }, []);

    useEffect(() => {
        const fetchContactData = async () => {
            try {
                const response = await axios.post(`${apiUrl}/contact`);
                if (response.data.success) {
                    setMetaData(response.data.meta_data);
                }
            } catch (error) {
                console.error("Error fetching contact SEO data:", error);
            }
        }
        fetchContactData()
    }, [])

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            const response = await axios.post(`${apiUrl}/visitor-inquiry-submit`, {
                name: form.name,
                mobile: form.mobile,
                email: form.email,
                clinic: form.clinic,
                strMessage: form.strMessage
            })

            if (response.data.success) {
                setMessage({ type: 'success', text: response.data.message });
                setForm({ name: '', email: '', mobile: '', clinic: '', strMessage: '' });
            } else {
                setMessage({ type: 'error', text: 'Failed to submit inquiry. Please try again.' });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setMessage({ type: 'error', text: 'An error occurred. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="bg-[#f6f9fc]">
            <Head>
                <title>{metaData?.metaTitle || null}</title>
                {
                    metaData?.metaDescription && (
                        <meta
                            name="description"
                            content={metaData?.metaDescription}
                        />
                    )
                }

                {
                    metaData?.metaKeyword && (
                        <meta
                            name="keywords"
                            content={metaData?.metaKeyword}
                        />
                    )
                }

            </Head>

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
                                'Ajwa Rd | Harni Rd | Raopura | ',
                                'Sama Savli Rd | Gotri Sevasi Rd |',
                                ' Vasna Bhayli | Manjalpur | Sunpharma Road'
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
                        <p className="!text-[14px] !mb-[10px] font-bold !text-[#005d98]">MESSAGE US</p>
                        <h2 className="mt-1 !text-[25px] md:!text-[40px] font-normal text-[#005d98]">
                            Drop us Message for any Query
                        </h2>

                        {message && (
                            <div className={`mt-4 p-3 rounded ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {message.text}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
                            <div className="grid gap-4 md:grid-cols-2">
                                <InputWithIcon
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="YOUR NAME"
                                    icon={<FaUser className="h-4 w-4" />}
                                    className='bg-[#f4f4f4]'
                                    required
                                />
                                <InputWithIcon
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="YOUR EMAIL"
                                    icon={<FaRegEnvelope className="h-4 w-4" />}
                                    required
                                />
                                <InputWithIcon
                                    type='text'
                                    name="mobile"
                                    value={form.mobile}
                                    onChange={handleChange}
                                    maxLength={10}
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    placeholder="YOUR PHONE"
                                    icon={<FaPhoneAlt className="h-4 w-4" />}
                                    required
                                    onKeyDown={(e) => {
                                        if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Tab") {
                                            e.preventDefault();
                                        }
                                    }}
                                />
                                {/* 🔥 UPDATED: DROPDOWN HERE */}
                                <div className="flex items-center rounded border border-gray-200">
                                    <div className="flex h-12 w-12 items-center justify-center text-[#0e5aa7]">
                                        <FaScrewdriverWrench className="h-4 w-4" />
                                    </div>

                                    <select
                                        name="clinic"
                                        value={form.clinic}
                                        onChange={handleChange}
                                        required
                                        className="h-12 w-full border-0 pr-3 outline-none bg-white text-gray-700"
                                    >
                                        <option value="">Select Clinic</option>
                                        {branches.map((branch, i) => (
                                            <option key={i} value={branch.shortName}>
                                                {branch.shortName}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-start rounded border border-gray-200">
                                    <div className="flex h-12 w-12 items-center justify-center text-[#0e5aa7]">
                                        <FaRegCommentDots className="h-5 w-5" />
                                    </div>
                                    <textarea
                                        name="strMessage"
                                        rows={5}
                                        placeholder="YOUR MESSAGE"
                                        value={form.strMessage}
                                        onChange={handleChange}
                                        className="w-full resize-none border-0 p-3 outline-none placeholder:tracking-wider"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="group inline-flex items-center gap-3 rounded-full bg-[#005d98] hover:bg-[#bace3d] px-4 py-3 text-white transition hover:opacity-90"
                                >
                                    {loading ? 'SENDING' : 'SEND MESSAGE'}
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
                    {branches.map((b: any) => (
                        <div
                            key={b.name}
                            className=" border border-[#b0cb1f] bg-white p-5 shadow-[10px_10px_10px_#ccc]"
                        >
                            <h4 className="!text-[21px] md:!text-2xl font-semibold tracking-wide text-[#005d98] mb-2">
                                {b.name}
                            </h4>
                            <a
                                href={b.mapLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 inline-block text-[16px] !text-[#6b727f] hover:!underline"
                            >
                                {b.address}
                            </a>

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
