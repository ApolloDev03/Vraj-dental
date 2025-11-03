"use client";

import vmc from "@/asserts/vmc-logo.webp"
import hwb from "@/asserts/hwb-logo.webp"
import cghs from "@/asserts/cghs-logo.webp"
import Image from "next/image";

type Centre = { id: number; img: string; alt: string };

const centres: Centre[] = [
  { id: 1, img: vmc.src, alt: "Vadodara Municipal Corporation" },
  { id: 2, img: hwb.src, alt: "HWB" },
  { id: 3, img: cghs.src, alt: "CGHS" },
];

export default function EmpanelledCentres() {
  return (
    <section
      className="relative"
      style={{
        background:
          "linear-gradient(135deg, #0d6efd 0%, #20c997 100%)",
      }}
    >
      {/* top white strip like screenshot */}
      <div className="absolute inset-x-0 top-0 h-4 bg-white/100"></div>

      <div className="mx-auto max-w-6xl py-12 md:py-16  mt-12" >
        <h2 className="text-center font-bold text-[28px] md:text-[28px] leading-tight" style={{color:"#ffffff"}}>
          Empanelled Centres For
        </h2>

        {/* small white divider */}
        <div className="mx-auto mt-4 h-[3px] w-[120px] rounded-full bg-white/90"></div>

        {/* cards row */}
        <div className="mt-6 flex flex-wrap justify-center items-center gap-5">
          {centres.map((c) => (
            <div
              key={c.id}
              className="h-[140px] w-[140px] md:h-[132px] md:w-[132px] p-4 rounded-xl bg-white
                         shadow-[0_6px_16px_rgba(0,0,0,0.10),0_18px_36px_rgba(0,0,0,0.12)]
                         flex items-center justify-center"
            >
              {/* logo image */}
              <Image
                src={c.img}
                alt={c.alt}
                width={92}
                height={92}
                className="object-contain h-[82px] w-[82px] md:h-[92px] md:w-[92px]"
               
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
