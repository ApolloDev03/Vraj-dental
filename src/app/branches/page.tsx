
'use client';
import { useEffect, useState } from 'react';
import axios from "axios"
import { PiPaperPlaneRightFill } from 'react-icons/pi';
import { MdCall } from 'react-icons/md';
import BreadcrumbHero from '../component/breadcrumb';
import { FaPhoneVolume, FaPaperPlane } from "react-icons/fa6"
import { apiUrl } from '@/config';
import Link from 'next/link';

type Branch = {
    name: string
    cityName: string
    address: string
    mapLink?: string | null
    phone?: string
}


type CityGroup = {
    city: string;
    branches: Branch[];
};



function groupByCity(branches: Branch[]): CityGroup[] {
    const grouped: Record<string, Branch[]> = {}

    branches.forEach((b) => {
        const city = b.cityName || "Unknown"
        if (!grouped[city]) grouped[city] = []
        grouped[city].push(b)
    })

    // Convert object to array and sort alphabetically by city name
    return Object.keys(grouped)
        .sort((a, b) => {
            if (a.toLowerCase() === "vadodara") return -1
            if (b.toLowerCase() === "vadodara") return 1
            return a.localeCompare(b)
        })
        .map((city) => ({ city, branches: grouped[city] }))
}

function BranchCard({ b }: { b: Branch }) {
    return (
        <div
            className=" relative bg-white border border-[#b0cb1f] shadow-[10px_10px_10px_#ccc] pl-5 pr-5 py-5"
        >
            <h3 className="text-2xl  font-semibold text-[#1a3970]">
                {b.name}
            </h3>

            {/* <p className="mt-2 text-[14px] text-[#6b727f]"></p> */}

            <Link
                href={b.mapLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-[16px] !text-[#6b727f] hover:!underline"
            >
                {b.address}
            </Link>

            {b.phone && (
                <div className="mt-3 flex items-center gap-2 text-[16px] text-[#6b727f]">
                    <FaPhoneVolume className="text-[18px]" />
                    <a href={`tel:${b.phone.replace(/\s+/g, "")}`} className="hover:underline">
                        {b.phone}
                    </a>
                </div>
            )}

            {/* <div className="mt-4">
                <Link
                    href={b.mapLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 rounded-full bg-[#0f63a9] hover:bg-[#bace3d] text-white px-5 py-2.5 text-[13px] font-medium shadow-[0_6px_16px_rgba(15,99,169,0.35)] transition-transform duration-200 hover:-translate-y-[1px]"
                >
                    <span className="text-white font-bold">BRING ME TO THIS CLINIC</span>
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#0f63a9] group-hover:text-[#130947] shadow-[0_3px_10px_rgba(0,0,0,0.15)]">
                        <FaPaperPlane className="text-[16px] rotate-5" />
                    </span>
                </Link>
            </div> */}

        </div>

    );
}

export default function BranchesMainSection() {
    const [groups, setGroups] = useState<CityGroup[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchBranches = async () => {
            try {
                const res = await axios.post(`${apiUrl}/our-branches`)
                if (res.data.success && res.data.data) {
                    const grouped = groupByCity(res.data.data)
                    setGroups(grouped)
                } else {
                    setError("No branches found.")
                }
            } catch (err) {
                console.error(err)
                setError("Failed to load branches.")
            } finally {
                setLoading(false)
            }
        }

        fetchBranches()
    }, [])

    return (
        <section className="relative  bg-[#f7fbff]">
            <BreadcrumbHero
                title="OUR BRANCHES"
                crumbs={[{ label: "Home", href: "/" }, { label: "OUR BRANCHES " }]}
            />
            <div className="mx-auto max-w-6xl py-[50px]">
                <div className="text-center mx-auto mb-[40px] md:mb-[55px]">
                    <div className="text-[14px] mb-2 font-extrabold z-1 text-[#b6c651] uppercase">
                        our branches
                    </div>
                    <h2 className="mt-2 text-[25px] md:text-[42px] leading-[40px] font-normal text-[#1a3970]">
                        Visit our Branches
                    </h2>
                </div>

                {loading ? (
                    <p className="text-center text-gray-600">Loading branches...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    groups.map((g) => (
                        <div key={g.city} className="">
                            <h3 className="mb-2 text-center text-[24px] md:text-[32px] font-semibold text-[#005d98]">
                                {g.city}
                            </h3>

                            <div className="mx-3 grid grid-cols-1 md:grid-cols-2 ">
                                {g.branches.map((b, idx) => (
                                    <BranchCard key={idx} b={b} />
                                ))}
                            </div>
                            <br></br>
                            <br></br>
                        </div>
                    )))}
            </div>
        </section>
    );
}
