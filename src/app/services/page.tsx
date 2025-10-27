"use client";

import { useState } from "react";
import Image from "next/image";
import rootCanalImg from "@/asserts/1602311948.jpg";
import BreadcrumbHero from "../component/breadcrumb";

export default function ServiceDetailPage() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "WHO NEEDS A ROOT CANAL TREATMENT?",
            answer: (
                <ul className="list-disc pl-6 space-y-2">
                    <li>If you have caries and pain in that specific affected tooth.</li>
                    <li>If you suffer from prolong sensitivity.</li>
                    <li>If you have mild but continuous pain.</li>
                    <li>
                        If you have swelling because of the infection that might have entered the peri apical area of the tooth.
                    </li>
                    <li>
                        If you suffer from attrition and abrasion that has caused the tooth loss.
                    </li>
                    <li>When accidentally the tooth gets broken.</li>
                    <li>
                        When you wish to save the malpositioned tooth, which we might need to prepare veneer for.
                    </li>
                    <li>Failed dental veneer or gum disease.</li>
                    <li>Teeth tilted with attrition.</li>
                </ul>
            ),
        },
        { question: "WHAT HAPPENS IN ROOT CANAL TREATMENT?", answer: <p>During treatment, the infected pulp is removed...</p> },
        { question: "DOES THE TOOTH BECOME DEAD?", answer: <p>No, the tooth remains functional...</p> },
        { question: "HOW MANY SITTINGS/VISITS DO A ROOT CANAL TREATMENT TAKE?", answer: <p>Usually 1–3 sittings depending on infection severity.</p> },
        { question: "IS ROOT CANAL TREATMENT PAINFUL?", answer: <p>Modern techniques make RCT almost painless.</p> },
    ];

    return (
        <section>
            <BreadcrumbHero
                title="ROOT CANAL TREATMENT"
                crumbs={[{ label: "Home", href: "/" }, { label: "Root Canal Treatment" }]}
            />
            <div className="max-w-6xl mx-auto px-4 py-[50px]">
                {/* ----------- HERO SECTION ----------- */}
                <section className="max-w-[720px] text-center mb-10 mx-auto">
                    <h4 className="!text-[#b6c651] font-extraboldbold  uppercase">Our Services</h4>
                    <h1 className="text-3xl md:text-[42px] text-center font-normal text-[#005d98] mt-2 mx-auto">
                        ROOT CANAL TREATMENT In Vadodara
                    </h1>
                </section>

                {/* ----------- IMAGE + INTRO ----------- */}
                <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                    <div className="flex justify-center " >
                        <Image
                            src={rootCanalImg}
                            alt="Root Canal"
                            className="rounded-[50px_0px] w-full h-auto max-w-sm shadow"
                        />
                    </div>
                    <div className="flex items-start">
                        <p className="text-gray-700 ">
                            Root canal treatment is a specialized procedure that is performed by a specialized doctor. An endodontist or a general practitionerare the dental surgeon treating the “inside “of the tooth which circles around us getting a bit into language knowledge where, “endo” is a Greek word meaning “inside” and “odont” meaning “tooth”. Vraj group of dental clinics has done thousands and thousands of root canal treatments throughout all these years of practice. And VGDC is considered to be one of the best dental clinics in Vadodara for all kind of dental treatments. And all the doctors at VGDC are highly experienced at doing ROOT CANAL TREATMENTS.
                        </p>
                    </div>
                </div>

                {/* ----------- FAQ SECTION ----------- */}
                <section>
                    <h3 className="text-[#005d98] font-bold text-xl uppercase mb-1">
                        Frequently Asked Questions
                    </h3>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                        Get Every Single Answer
                    </h2>

                    <div className="space-y-3">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-gray-300 rounded-md overflow-hidden"
                            >
                                <button
                                    onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                                    className={`w-full flex items-center justify-between px-4 py-3 text-left font-semibold transition-colors ${index === activeIndex ? "bg-[#b3c83f] text-white" : "bg-gray-50 text-gray-800"
                                        }`}
                                >
                                    <span>{index + 1}. {faq.question}</span>
                                    <span className="text-xl">{index === activeIndex ? "−" : "+"}</span>
                                </button>
                                {index === activeIndex && (
                                    <div className="p-4 text-gray-700 bg-white">{faq.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* ----------- CONTENT SECTIONS ----------- */}
                <section className="mt-12 space-y-10 text-gray-700 leading-relaxed">
                    {/* Overview */}
                    <div className="border border-[#b3c83f] p-6 rounded-md bg-[#f9f9f9]">
                        <h3 className="text-[#005d98] font-semibold uppercase mb-3">
                            The Overview to the Root Canal Treatment:
                        </h3>
                        <p>
                            This treatment goes deeper inside the tooth. It requires a proper understanding
                            of tooth anatomy, including enamel, dentin, and pulp layers.
                        </p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>ENAMEL</li>
                            <li>DENTIN</li>
                            <li>PULP</li>
                        </ul>
                    </div>

                    {/* Initiation */}
                    <div>
                        <h3 className="text-[#005d98] font-semibold uppercase mb-2">
                            The Initiation:
                        </h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>When you suffer toothache because of tooth decay.</li>
                            <li>
                                It begins with a small carious spot on the tooth which, if left untreated, spreads deeper.
                            </li>
                            <li>
                                When untreated, infection reaches the pulp and causes irreversible pain.
                            </li>
                        </ul>
                    </div>

                    {/* Signs and Symptoms */}
                    <div>
                        <h3 className="text-[#005d98] font-semibold uppercase mb-2">
                            The Signs and Symptoms:
                        </h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>
                                Pain involving the pulp varies depending on triggering factors.
                            </li>
                            <li>Taking painkillers might give temporary relief only.</li>
                            <li>
                                It is advised to get treatment as soon as possible to avoid further discomfort.
                            </li>
                        </ul>
                    </div>

                    {/* How VGDC Works */}
                    <div>
                        <h3 className="text-[#005d98] font-semibold uppercase mb-2">
                            How Does VGDC Work for Root Canal Treatment?
                        </h3>
                        <ul className="list-decimal pl-6 space-y-1">
                            <li>Examination and radiographic diagnosis.</li>
                            <li>Assessing root shape and length.</li>
                            <li>Identifying infections or lesions.</li>
                            <li>Using advanced techniques to ensure painless treatment.</li>
                        </ul>
                    </div>

                    {/* Procedure Steps */}
                    <div>
                        <h3 className="text-[#005d98] font-semibold uppercase mb-2">
                            Root Canal Procedure Includes:
                        </h3>
                        <ul className="list-decimal pl-6 space-y-1">
                            <li>Caries removal</li>
                            <li>Removing pulp tissue</li>
                            <li>Access opening</li>
                            <li>Cleaning and shaping canals</li>
                            <li>Obturation</li>
                            <li>Restoration</li>
                        </ul>
                    </div>
                </section>
            </div>
        </section>
    );
}
