import Image from "next/image";
import toothImg from "../../asserts/tooth-mission.jpg"; // real path
import visionImg from "../../asserts/tooth-vision.jpg"; // real path

export default function AboutMissionVisionSection() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-16 text-black">
            <div className="flex flex-col md:flex-row md:gap-10 items-center mb-16">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <div className="aspect-video relative rounded-lg overflow-hidden shadow">
                        <iframe
                            src="https://www.youtube.com/embed/PiWzaz1X7gQ?si=Ud9WBWGST4qtZNk8"
                            title="Clinic opening"
                            allowFullScreen
                            className="w-full h-full"
                        />
                    </div>
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-sm font-bold mb-2" style={{ color: "#b6c651" }}>
                        ABOUT US
                    </h2>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Experienced & Specialized Dental Surgeon
                    </h1>
                    <p className="text-base md:text-lg leading-relaxed" style={{ marginBottom: 0, color: "#000", lineHeight: 1.3, fontSize: " 16px", fontWeight: 400 }}>
                        Vraj Group of Dental Clinics (VGDC) was founded by Dr. Ujas Shah (MDS, Director of Vraj Dental Clinics Pvt. Ltd.), who began his practice in 2012. With over a decade of experience, he envisioned providing affordable dental services to society without compromising on quality. Through well-structured systems and processes, VGDC has grown into a successful chain of clinics, introducing the concept of “System-Based Dentistry” – ensuring standardized, reliable, and patient-centric care across all branches. Our team of expert dentists has been earning the trust of patients for more than 13 years.
                    </p>
                </div>
            </div>
            <div className="grid md:grid-cols-1 gap-8">
                {/* Mission Card */}
                <div className="flex flex-col md:flex-row items-stretch bg-white rounded-[2.5rem] shadow-xl border-2 p-0 mb-8" style={{ borderColor: '#e1ed87', border: "1px solid #b3c83f", boxShadow: "5px 5px 10px #b3c83f" }}>
                    <div className="md:w-1/3 flex items-stretch h-[220px]">
                        <Image
                            src={toothImg}
                            alt="Tooth in glove mission"
                            className="rounded-[2.5rem] object-cover w-full h-full"
                            width={330}
                            height={220}
                        />
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-start items-start">
                        <h3 className="text-3xl font-semibold text-[#256097] mb-2">Our Mission</h3>
                        <ul className="list-disc ml-6  space-y-1">
                            <li>To expand dental services to diverse locations, ensuring accessibility for all.</li>
                            <li>To provide dental care that is affordable without compromising on quality.</li>
                            <li>To follow the principles of system-based dentistry for consistent and reliable treatment.</li>
                            <li>To spread awareness and promote oral health, creating a healthier, smiling society.</li>
                        </ul>
                    </div>
                </div>
                {/* Vision Card */}
                <div className="flex flex-col md:flex-row items-stretch bg-white rounded-[2.5rem] shadow-xl border-2 p-0" style={{ borderColor: '#e1ed87', border: "1px solid #b3c83f", boxShadow: "5px 5px 10px #b3c83f" }}>
                    <div className="md:w-1/3 flex items-stretch h-[220px]">
                        <Image
                            src={visionImg}
                            alt="Tooth vision"
                            className="rounded-[2.5rem] object-cover w-full h-full"
                            width={330}
                            height={220}
                        />
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-start items-start">
                        <h3 className="text-3xl font-semibold text-[#256097] mb-2">Our Vision</h3>
                        <ul className="list-disc ml-6 space-y-1">
                            <li> To build a healthier society by delivering accessible, affordable, and high-quality dental care through advanced technology and standardized systems, reaching every community we serve.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
