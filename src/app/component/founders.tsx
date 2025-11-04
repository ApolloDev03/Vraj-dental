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
            <p className="mt-4 !mb-0 !text-[14px] md:!text-[16px] leading-8 text-slate-700">
              Dr. Ujas Shah is one of Vadodara’s most trusted and experienced implant dentists, with 5000+ successful dental implant placements.
              With 14+ years of clinical expertise, he is well-known for his gentle approach, honest guidance, and dedication to giving every patient a confident, natural, and long-lasting smile.
            </p>
            <p className="mt-1 !text-[14px] md:!text-[16px] leading-8 text-slate-700">
              He has completed his Post-Graduation in Implantology from Vadodara and holds a Fellowship in Implant Dentistry from Germany, ensuring that every treatment he provides meets global standards of precision and safety.

              As the Director of Vraj Group of Dental Clinics, Dr. Ujas Shah leads and manages 8 clinics across Vadodara, supported by a team of expert doctors.
              Under his leadership, VGDC has grown into a multi-branch dental network where patients can easily access the nearest clinic with consistent, high-quality care.
            </p>
            <p className="mt-1 !text-[14px] md:!text-[16px] leading-8 text-slate-700">
              His mission is to make advanced, high-quality, and affordable dental treatment accessible to every family in our city.

              Patients appreciate VGDC for:            </p>
              <ul className="list-disc pl-5">
                <li>Transparent and clear treatment planning</li>
                <li>Neat, precise, and painless work</li>
                <li>Genuine care for their comfort at every step</li>
              </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
