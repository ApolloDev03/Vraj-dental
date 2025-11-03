"use client";

export default function Branches( { branches }:any) {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-6xl px-4 pt-15 md:pt-20">
                <p className="text-center uppercase mb-2 !text-[14px] font-black" style={{ color: "#b6c651" }}>
                    OUR BRANCHES
                </p>

                <h2 className=" text-center text-[25px] md:text-[42px] leading-tight text-[#0b4773]">
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
