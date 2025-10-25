import { Service } from "@/types/type";
import ServiceCard from "./serviceCard";
// i
//  } from "./icons/outline";
// import type { Service } from "@/types/service";

// const services: Service[] = [
//   { id: "xray", title: "X‑ray", blurb: "Get a complete oral health assessment at no cost.", href: "/services/x-ray"
    
//    },
//   { id: "root-canal", title: "Root Canal", blurb: "Save your natural tooth with painless and effective care.", href: "/services/root-canal"
    
//    },
//   { id: "implants", title: "Dental Implants", blurb: "Permanent replacement for missing teeth with natural function.", href: "/services/implants"
    
//    },
//   { id: "cosmetic", title: "Cosmetic Dentistry", blurb: "Enhance your smile with advanced aesthetic solutions.", href: "/services/cosmetic"
    
//    },
//   { id: "laser", title: "Laser Dentistry", blurb: "Modern, pain‑free treatments with faster healing.", href: "/services/laser"
    
//    },
//   { id: "diamond", title: "Diamond on Tooth", blurb: "Add a touch of sparkle to your smile with safe tooth jewelry.", href: "/services/diamond"
    
//    },
//   { id: "veneers", title: "Laminates (Veneers)", blurb: "Correct imperfections and get a flawless smile.", href: "/services/veneers"
    
//    },
//   { id: "whitening", title: "Teeth Whitening", blurb: "Brighten your smile safely and effectively.", href: "/services/whitening"
    
//    },
//   { id: "pediatric", title: "Pediatric Dentistry", blurb: "Gentle dental care for children of all ages.", href: "/services/pediatric"
    
//    },
//   { id: "orthodontics", title: "Orthodontics (Braces & Aligners)", blurb: "Straighten teeth for a perfect, confident smile.", href: "/services/orthodontics"
    
//    },
//   { id: "full-mouth", title: "Full Mouth Rehabilitation", blurb: "Restore function and aesthetics for complete.", href: "/services/full-mouth-rehab"
    
//    },
//   { id: "crowns", title: "Crowns & Bridges", blurb: "Strong, natural‑looking solutions to replace damaged teeth.", href: "/services/crowns-bridges"
    
//    },
//   { id: "gum", title: "Gum Surgery", blurb: "Advanced treatments for healthier gums and lasting smiles.", href: "/services/gum-surgery"
    
//    }
// ];

interface ServicesSectionProps {
  services: {
    categoryName: string;
    categoryIcon: string | null;
    briefDescription: string;
    slug: string;
  }[];
}


export default function ServicesSection({services}:ServicesSectionProps) {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
      <p className="mx-auto mb-3 max-w-2xl text-center text-xs font-semibold uppercase tracking-wide " style={{color:"#0d6efd"}}>
        Our Services
      </p>
      <h2 className="mx-auto  text-center text-3xl font-semibold leading-tight text-slate-800 sm:text-4xl">
        Healthy Smiles with Advanced, Affordable Dentistry.
      </h2>
      <p className="mx-auto mt-3  text-center text-base text-brand-gray">
        We prioritize our patients’ well‑being and offer a wide range of dental services performed by a team of skilled specialists. Explore our services below.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((service:any, index:any) => (
          <ServiceCard
            key={index}
            service={{
              title: service.categoryName,
              blurb: service.briefDescription,
              href: `/services/${service.slug}`,
              icon: service.categoryIcon,
            }}
          />
        ))}
      </div>
    </section>
  );
}
