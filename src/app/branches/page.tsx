// app/our-branches/sections/BranchesMainSection.tsx
'use client';

import { PiPaperPlaneRightFill } from 'react-icons/pi';
import { MdCall } from 'react-icons/md';
import BreadcrumbHero from '../component/breadcrumb';
import {FaPhoneVolume, FaPaperPlane} from "react-icons/fa6"

type Branch = {
    title: string;
    address: string;
    phone: string;
    mapHref?: string;
};

type CityGroup = {
    city: string;
    branches: Branch[];
};

const groups: CityGroup[] = [
    {
        city: 'Vadodara',
        branches: [
            {
                title: 'VRAJ GROUP OF DENTAL CLINICS AJWA ROAD BRANCH',
                address:
                    'FF, DIVYA plaza complex, Above Jigar provision store, Besides Atul bakery, Vadodara, Gujarat.',
                phone: '+91 94277 84433',
                mapHref: '#',
            },
            {
                title: 'VRAJ DENTAL CLINIC IN VADODARA-HARNI ROAD',
                address:
                    '18/GF, Red Coral, Opp Gada Circle, Harni Road, Vadodara, Gujarat',
                phone: '+91 94277 84433',
                mapHref: '#',
            },
            {
                title: 'VRAJ DENTAL CLINIC IN VADODARA-SAMA-SAVLI',
                address:
                    '2nd Floor, Shukan Hub, Opp Shivam Party Plot, Sama–Savli Main Road, Vadodara, Gujarat.',
                phone: '+91 94277 84433',
                mapHref: '#',
            },
            {
                title: 'VRAJ DENTAL CLINIC & IMPLANT CENTER RAOPURA',
                address:
                    '1st Floor, Ashok House 2, Inside Santhavasahat Gate, Raopura, Vadodara, Gujarat.',
                phone: '+91 99049 63090',
                mapHref: '#',
            },
            {
                title: 'Vraj Group of Dental Clinics - Vasna Bhayli',
                address:
                    'GF/6 AKSHAR pavilion, Road 4, Vasna–Bhayli Main Rd, Opp. Rosedale Heights, Vadodara 391410',
                phone: '+91 94277 84433',
                mapHref: '#',
            },
            {
                title: 'Vraj Group of Dental Clinics - SUN PHARMA',
                address:
                    'TOWER-C/FF-SHOP NO, 05 SUNRISE HEIGHTS, VADODARA, Gujarat 390012',
                phone: '+91 94277 84433',
                mapHref: '#',
            },
            {
                title: 'Vraj Group of Dental Clinics - Manjalpur',
                address:
                    '2/ 2nd floor, Brookfields Vinayaa Hub, near tulshidham char rasta, Manjalpur, Vadodara 390011',
                phone: '+91 94277 84433',
                mapHref: '#',
            },
            {
                title: 'Vraj Group of Dental Clinic - Gotri - Sevasi Branch',
                address:
                    '149 phase 2, prince villa, BEHIND SHIVAY HOSPITAL, behind collabera, gotri sevasi road, Vadodara 390021',
                phone: '+91 94277 84433',
                mapHref: '#',
            },
        ],
    },
    {
        city: 'Surat',
        branches: [
            {
                title: 'VRAJ GROUP OF DENTAL CLINICS Ugat Branch Surat',
                address: '88 / GF, Raj Harmony, Palanpur, Surat.',
                phone: '+91 96240 68069',
                mapHref: '#',
            },
        ],
    },
];

function join(classes: (string | false | null | undefined)[]) {
    return classes.filter(Boolean).join(' ');
}

function BranchCard({ b }: { b: Branch }) {
    return (
        <div
            className={join([
                'relative  bg-white',
                'border border-[#b0cb1f] shadow-[10px_10px_10px_#ccc]',
                'pl-5 pr-5 py-5',
                '',
            ])}
        >
            <h3 className="text-2xl  font-semibold text-[#1a3970]">
                {b.title}
            </h3>

            <p className="mt-2 text-[14px] text-[#6b727f]">{b.address}</p>

            <div className="mt-3 flex items-center gap-2 text-[16px] text-[#6b727f]">
                <FaPhoneVolume className="text-[18px]" />
                <a href={`tel:${b.phone.replace(/\s+/g, '')}`} className="hover:underline">
                    {b.phone}
                </a>
            </div>

            <div className="mt-4">
                <a
                    href={b.mapHref || '#'}
                    className={join([
                        'group inline-flex items-center gap-3 rounded-full bg-[#0f63a9] hover:bg-[#bace3d] text-white',
                        'px-5 py-2.5 text-[13px] font-medium',
                        'shadow-[0_6px_16px_rgba(15,99,169,0.35)]',
                        'transition-transform duration-200 hover:-translate-y-[1px]',
                    ])}
                >
                    <span className='text-white font-bold'>BRING ME TO THIS CLINIC</span>
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#0f63a9] group-hover:text-[#130947] shadow-[0_3px_10px_rgba(0,0,0,0.15)]">
                        <FaPaperPlane className="text-[16px] rotate-5" />
                    </span>
                </a>
            </div>
            
        </div>

    );
}

export default function BranchesMainSection() {
    return (
        <section className="relative  bg-[#f7fbff]">
            <BreadcrumbHero
                title="OUR BRANCHES"
                crumbs={[{ label: "Home", href: "/" }, { label: "OUR BRANCHES " }]}
            />
            <div className="mx-auto max-w-6xl lg:py-[50px]">
                <div className="text-center mx-auto mb-[55px]">
                    <div className="text-[14px] mb-2 font-extrabold z-1 text-[#b6c651] uppercase">
                        our branches
                    </div>
                    <h2 className="mt-2 text-[42px] leading-[40px] font-normal text-[#1a3970]">
                        Visit our Branches
                    </h2>
                </div>

                {groups.map((g) => (
                    <div key={g.city} className="">
                        <h3 className="mb-2 text-center text-[32px] font-semibold text-[#005d98]">
                            {g.city}
                        </h3>

                        <div className=" grid grid-cols-1 md:grid-cols-2 ">
                            {g.branches.map((b) => (
                                <BranchCard key={b.title} b={b} />
                            ))}
                        </div>
                        <br></br>
                        <br></br>
                    </div>
                ))}
            </div>
        </section>
    );
}
