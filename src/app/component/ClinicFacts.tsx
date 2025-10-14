"use client"
import CountUp from 'react-countup';
 
export default function ClinicFacts() {
    return (
        <section className="py-12">
            <div
                className="px-2 md:px-8 py-8 md:py-12 border-[10px] md:border-[13px] mx-auto"
                style={{
                    borderColor: "#c2d14e",
                    background: "#0d4272",
                    maxWidth: "100%",
                }}
            >
                <div className="text-white max-w-6xl mx-auto flex  flex-col md:flex-row md:justify-between md:items-center">
                    {/* LEFT SIDE: Headline */}
                    <div className="md:w-1/3 mb-8 md:mb-0">
                        <h3 className="uppercase text-base font-semibold tracking-wide mb-6" style={{ color: "white" }}>
                            Our Facts
                        </h3>
                        <h2 className="text-2xl md:text-4xl font-light leading-relaxed mb-0" style={{ color: "white" }}>
                            Discover the milestones that define <br />
                            the journey of Vraj Group of Dental Clinics (VGDC)
                        </h2>
                    </div>
                    {/* RIGHT SIDE: Stats */}
                    <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
                        {/* FACT 1 */}
                        <div className="flex flex-col items-center w-full md:w-1/3">
                            <div className="text-4xl font-normal mb-1">
                                <CountUp end={5000} duration={2.5} separator="," />
                                <span className="text-3xl align-text-top">+</span>
                            </div>
                            <div className="text-sm md:text-base font-light text-center">
                                Dental Implants successfully completed
                            </div>
                        </div>
                        {/* FACT 2 */}
                        <div className="flex flex-col items-center w-full md:w-1/3">
                            <div className="text-4xl font-normal mb-1">
                                <CountUp end={15000} duration={2.5} separator="," />
                                <span className="text-3xl align-top">+</span>
                            </div>
                            <div className="text-sm md:text-base font-light text-center">
                                Happy Patients spreading smiles
                            </div>
                        </div>
                        {/* FACT 3 */}
                        <div className="flex flex-col items-center w-full md:w-1/3">
                            <div className="text-4xl font-normal mb-1">
                                <CountUp end={15} duration={2.5} />
                                <span className="text-3xl align-top">+</span>
                            </div>
                            <div className="text-sm md:text-base font-light text-center">
                                Expert Dentists dedicated to quality care
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}