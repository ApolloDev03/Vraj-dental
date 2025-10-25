"use client";

// type Branch = {
//     id: number;
//     title: string;
//     address: string;
// };

// const branches: Branch[] = [
//     {
//         id: 1,
//         title: "VGDC : AJWA ROAD BRANCH",
//         address:
//             "21/FF, divya plaza complex, Besides Atul bakery, Ajwa Rd, above harsh super store, Kamla Nagar, Vadodara, Gujarat",
//     },
//     {
//         id: 2,
//         title: "VGDC : VADODARA-HARNI ROAD",
//         address:
//             "18/GF, Red Coral,Opp Gada Circle, Harni Road, Vadodara, Gujarat",
//     },
//     {
//         id: 3,
//         title: "VGDC : Dental IMPLANT CENTER RAOPURA",
//         address:
//             "1st Floor Ashok House 2, Inside Santhavasahat Gate, Raopura, Vadodara, Gujarat.",
//     },
//     {
//         id: 4,
//         title: "VGDC : VADODARA-SAMA-SAVLI",
//         address:
//             "14/1 Second floor Shukan hub Above JAGDIH FARSAN, Sama Savli Road .",
//     },
//     {
//         id: 5,
//         title: "VGDC : GOTRI SEVASI",
//         address:
//             "149, prince villa, Phase 2, Gotri - Sevasi Rd, behind SHIVAY HOSPITAL, behind collabera,Vadodara, Gujarat",
//     },
//     {
//         id: 6,
//         title: "VGDC : VASNA BHAYLI",
//         address:
//             "GF/6, AKSHAR pavilion Road 4, Vasna Bhayli Main Rd, opp. to Rosedale Heights, Vadodara, Gujarat",
//     },
//     {
//         id: 7,
//         title: "VGDC : SUN PHARMA ATLADARA",
//         address:
//             "SHOP NO -105 Tower -C/FF- Sunrise Heights ,near Sun pharma Atladara",
//     },
//     {
//         id: 8,
//         title: "VGDC : MANJALPUR",
//         address:
//             "2/2nd floor, Brookfieldz Vinaaya Hub, Near Tulsidham Char Rasta, Manjalpur, Vadodara, Gujarat",
//     },
// ];

export default function Branches( { branches }:any) {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-6xl px-4 pt-20">
                <p className="text-center uppercase mb-2 text-[14px] font-black" style={{ color: "#b6c651" }}>
                    OUR BRANCHES
                </p>

                <h2 className=" text-center text-[44px] leading-tight text-[#0b4773]">
                    Our Branches
                </h2>

                {/* Card grid */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2">
                    {branches.map((branch:any, i:any) => {
                        // Add lime border on top of each row and between columns to imitate screenshot
                        const isLeft = i % 2 === 0;
                        return (
                            <div
                                key={branch.displayUrl}
                                className={[
                                    "bg-white px-5 py-5",
                                    "shadow-[10px_10px_10px_#ccc]",
                                    "border border-[#b0cb1f]",
                                    isLeft ? "md:border md:border-[#b0cb1f]" : "",
                                ].join(" ")}
                            >
                                <h3 className="text-[24px] leading-snug text-[#0b4773] font-semibold">
                                    {branch.name}
                                </h3>
                                <p className="mt-3 text-[16px] leading-7 " style={{ color: "#6d7a8c" }}>
                                    {branch.mapLink ? (
                                    <a
                                        href={branch.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#6d7a8c] underline underline-offset-2 decoration-[#b0cb1f] hover:text-[#0b4773] hover:decoration-[#0b4773] transition-colors"
                                        aria-label={`Open ${branch.name} in Google Maps`}
                                    >
                                    {branch.address}
                                    </a> 
                                    ) : (
                                        <span>{branch.address}</span>
                                    )}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
