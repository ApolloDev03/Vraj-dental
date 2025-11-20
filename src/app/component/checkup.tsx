"use client";
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { apiUrl } from "@/config";
import { LuUserRound } from "react-icons/lu";
import { PiPhoneCall } from "react-icons/pi";
import { IoIosGitBranch } from "react-icons/io";

interface Branch {
    name: string;
    displayUrl: string;
    area: string;
    address: string;
    mapLink: string;
    metaTitle: string | null;
    metaKeyword: string;
    metaDescription: string;
}

interface AppointmentForm {
    name: string;
    mobile: string;
    clinic: string;
}

export default function AppointmentSection() {
    const [branches, setBranches] = useState([]);
    const [form, setForm] = useState<AppointmentForm>({
        name: "",
        mobile: "",
        clinic: "",
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");



    useEffect(() => {
        axios
            .post(`${apiUrl}/our-branches`)
            .then((res) => {
                if (res.data.success && Array.isArray(res.data.data)) {
                    setBranches(res.data.data);
                    console.log(res.data.data, "dataaaaaa");

                }

            })
            .catch((err) => console.error("Failed to fetch branches:", err)
            )
    }, []);

    useEffect(() => {
        // console.log(branches,"addddadadadadadadad");

    }, [branches])

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        try {
            const response = await axios.post<{ success: boolean; message: string }>(
                `${apiUrl}/contact-submit`,
                {
                    name: form.name,
                    mobile: form.mobile,
                    clinic: form.clinic,
                    url: "https://vrajdentalclinic.com/new_vraj/contact-us/vadodara",
                }
            );
            if (response.data.success) {
                setForm({ name: "", mobile: "", clinic: "" });
                setMessage("Inquiry submitted successfully!");
                setTimeout(() => {
                    setMessage("");
                }, 4000)
            } else {
                setMessage("Submission failed, please try again.");
                setTimeout(() => {
                    setMessage("");
                }, 4000)
            }
        } catch {
            setMessage("Network error, please try again.");
            setTimeout(() => {
                setMessage("");
            }, 4000)
        }
        setLoading(false);
    };

    return (
        <div className="bg-[#ccc] px-2  flex items-center justify-center py-14">
            <section className="w-full max-w-4xl bg-white rounded-xl shadow-lg mx-auto p-5 md:p-10">
                <div className="mb-2 text-[13px] text-center md:text-start md:text-sm font-semibold text-[#b6c651] uppercase tracking-wide">
                    FREE CHECKUP & CONSULTATION
                </div>
                <h2 className="mb-8 text-[24px] md:text-4xl text-center md:text-start font-light md:font-medium text-[#005d98]">
                    Schedule your free dental check-up now.
                </h2>
                <form
                    className="space-y-5 md:space-y-0 md:grid md:grid-cols-2 md:gap-6"
                    onSubmit={handleSubmit}
                >

                    <div className="relative flex gap-2 px-2 items-center bg-[#f6f8fa] rounded">
                        <label className="  text-[#4c6689] border-r  border-[#116296]">
                            {/* Heroicon: User */}
                            <LuUserRound className="text-[#116296] text-2xl mr-2 " />
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="YOUR NAME"
                            value={form.name}
                            required
                            onChange={handleChange}
                            className="w-full  py-4 text-lg bg-[#f4f4f4] placeholder-[#4c6689] rounded outline-none"
                        />
                    </div>
                    {/* Phone Input with Icon */}
                    <div className="relative flex gap-2 px-2 items-center bg-[#f6f8fa] rounded mt-4 md:mt-0">

                        <label className=" text-[#4c6689] border-r  border-[#116296]">
                            {/* Heroicon: Phone */}
                            <PiPhoneCall className="text-[#116296] text-2xl mr-2" />
                        </label>

                        <input
                            type="text"
                            name="mobile"
                            placeholder="YOUR PHONE"
                            value={form.mobile}
                            required
                            onChange={handleChange}
                            maxLength={10}
                            inputMode="numeric"
                            pattern="[0-9]*"
                            className="w-full py-4 text-lg bg-[#f4f4f4] placeholder-[#4c6689] rounded outline-none"
                            onKeyDown={(e) => {
                                if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Tab") {
                                    e.preventDefault();
                                }
                            }}
                        />

                    </div>
                    {/* Branch Select with Icon */}
                    <div className="relative flex px-2 gap-2 items-center bg-[#f6f8fa] rounded col-span-2 mt-4">

                        <label className=" text-[#4c6689] border-r  border-[#116296]">
                            {/* Heroicon: Wrench (branch) */}
                            <IoIosGitBranch className="text-[#116296] text-2xl mr-2" />
                        </label>

                        <select
                            name="clinic"
                            value={form.clinic}
                            required
                            onChange={handleChange}
                            className="w-full py-4 text-lg bg-[#f4f4f4] uppercase placeholder-[#4c6689] rounded outline-none appearance-none"
                        >
                            <option value="" disabled>Select Your Branch</option>
                            {branches.map((branch: any) => (
                                <option key={branch.shortName} value={branch.shortName}>
                                    {branch.shortName}
                                </option>
                            ))}
                        </select>

                    </div>
                    {/* Button */}
                    <div className="col-span-2 flex justify-center mt-7">
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex items-center justify-center bg-[#0266b5] text-white md:px-10 px-5 py-4 rounded-full text-base font-medium shadow-lg hover:bg-[#023f6b] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0266b5]"
                        >
                            MAKE YOUR APPOINTMENT
                            <span className="ml-4 flex items-center justify-center w-7 h-7 rounded-full bg-white text-[#0266b5]">
                                {/* Heroicon: ArrowRight */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#0266b5" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </button>
                    </div>
                    {message && (
                        <div className="col-span-2 text-center text-green-600 font-semibold mt-2">
                            {message}
                        </div>
                    )}
                </form>
            </section>
        </div >
    );
}
