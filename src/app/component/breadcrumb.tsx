import innerBg from '@/asserts/inner-bg.png'
import shape from '@/asserts/banner-shape.png'
import Link from 'next/link';

// components/BreadcrumbHero.tsx
type Crumb = { label: string; href?: string };

type Props = {
  title: string;
  crumbs?: Crumb[];
  
};

export default function BreadcrumbHero({
  title,
  crumbs = [{ label: "Home", href: "/" }],
  
}: Props) {
  return (
    <section
      className="relative w-full h-[500px] py-0 overflow-hidden text-white"
      style={{
        height: 500,
        backgroundImage: `url(${innerBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* :before replacement */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          backgroundImage: `url(${shape.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          mixBlendMode: "normal",
          minWidth:"100%",
          opacity: 1,
        }}
      />
      {/* optional blue gradient wash */}
      <span
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(53,103,179,0.85) 0%, rgba(107,152,219,0.55) 40%, rgba(255,255,255,0) 75%)",
        }}
      />

      <div className="relative z-[1] mx-auto max-w-6xl h-full px-4 flex flex-col mt-[100px] justify-center">
        <h1 className="text-3xl md:text-[42px] font-semibold " style={{color:"#ffffff"}}>
          {title}
        </h1>
        <nav className="mt-3 text-white">
          <ol className="flex items-center gap-3 text-sm md:text-base">
            {crumbs.map((c, i) => {
              const last = i === crumbs.length - 1;
              return (
                <li key={i} className="flex items-center gap-3" style={{color:"#ffffff"}}>
                  {c.href && !last ? (
                    <Link href={c.href} className="hover:text-white transition-colors" style={{color:"#ffffff"}}>
                      {c.label}
                    </Link>
                  ) : (
                    <span className="" style={{color:"#ffffff "}}>{c.label}</span>
                  )}
                  {!last && <span className="text-white" style={{color:"#005d98"}}>•</span>}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
}
