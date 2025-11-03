"use client";

import Image from "next/image";
import bg from "../../asserts/bg-white.jpg"; // keep your folder
import ujas from '../../asserts/ujas.webp'

export default function FounderSection() {
  const bgUrl = typeof bg === "string" ? bg : (bg as { src: string }).src;

  return (
    <section
      className="relative"
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-6xl px-3 py-15 pb-[30px] md:py-20 ">
        {/* Section heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[14px] font-black uppercase mb-0" style={{ color: "#b6c651" }}>
            OUR DOCTORS
          </p>
          <h2 className="text-[25px] md:text-[42px] font-normal tracking-tight" style={{ color: "#005d98" }}>
            meet our Founder
          </h2>
          <p className="mt-3 mx-auto text-center  text-[17px] leading-7 text-slate-600">
            Qualified dental doctors are essential for maintaining and improving oral <br />
            health, which is a crucial component of overall well‑being.
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-[300px_minmax(0,1fr)] gap-10 md:gap-12 items-center">
          {/* Left photo card */}
          <div className="rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white">
            <div className="relative aspect-[4/4.3]">
              <Image
                src={ujas}
                alt="Dr Ujas Shah"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right text */}
          <div className="flex flex-col justify-center">
            <h3 className="text-[23px] md:text-[28px] font-semibold" style={{ color: "#005d98" }}>
              Dr Ujas Shah
            </h3>
            <p className="mt-4 !text-[14px] md:!text-[16px] leading-8 text-slate-700">
              Dr. UJAS SHAH attended M.P dental College in Vadodara where he earned his Becholure degree
              in the field of dentistry. He then completed an extensive three year master degree program,
              where he was awarded specialty certificates in both Periodontics and implantology. While doing
              master degree course he also completed his research on bone graft material which were used to
              increase the bone height and width for future implant placement and earned his Master’s degree
              in the field of periodontics and implantology. Dr Ujas Became Dentist in Vadodara
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
