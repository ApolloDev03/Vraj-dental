"use client";
import { Service } from "@/types/type";
import Link from "next/link";
import { TbDental } from "react-icons/tb";

export default function ServiceCard({ service }: { service: Service }) {
//   const Icon = service.icon;
  return (
    

    
    <div className="group relative">
      {/* badge — reacts to group hover */}
      <div className="absolute -top-10 left-6 z-10 p-5 flex h-20 w-20 items-center justify-center rounded-full border border-[#3a4f9d] bg-white text-indigo-900 shadow-sm transition-all duration-200 group-hover:translate-y-[-10px]  group-hover:border-[#2f4290]">
        <TbDental className="h-8 w-8 transition-transform duration-200 group-hover:scale-105" />
      </div>

      {/* card — reacts to the same group hover */}
      <div className="rounded-2xl border border-[#3a4f9d] bg-white p-3 pt-8 pl-8 pr-8 text-center shadow-[0_1px_8px_rgba(2,6,23,0.05)] transition-all duration-200 group-hover:translate-y-[-10px] group-hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] group-hover:border-[#2f4290]" style={{marginBottom:"30px",height:"230px"}}>
        <div className="mt-4" />
        <h3 className="text-[20px] font-semibold tracking-tight" style={{ color: "#130947" }}>
          {service.title}
        </h3>
        <p className="mt-2 text-[16px] leading-7 text-slate-500" style={{ color: "#6d7a8c" }}>
          {service.blurb}
        </p>
        <Link
          href={service.href}
          className="inline-block text-sm font-medium text-[#1b2a6b] underline-offset-4 transition-colors duration-200 group-hover:text-[#0f1d58] hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
    
  );
}
