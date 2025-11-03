import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaRegCalendarDays } from "react-icons/fa6";

export type BlogCardProps = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  dateText: string;        // e.g., "Posted On Jun 15 2023"
  title: string;
  excerpt: string;
  slug: string
};



export default function BlogCard(props: BlogCardProps) {
  const { href, imageSrc, imageAlt, dateText, title, excerpt, slug } = props;
  const route = useRouter()
  const  handleDetail = (slug:any) => {
    route.push(`/blogdetail/${slug}`)
  }

  return (
    <article
      className="
        group relative flex h-full flex-col rounded-lg bg-white
        shadow-[0_25px_40px_rgba(0,0,0,0.06)]
        ring-1 ring-slate-100 transition-shadow
        hover:shadow-[0_35px_60px_rgba(0,0,0,0.10)]
      "
    >
      <div className="relative h-56 w-full overflow-hidden rounded-t-lg bg-slate-100">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
          className="object-contain transition-transform duration-500 group-hover:scale-[1.3] group-hover:rotate-[4deg] group-hover:cursor-pointer"
          priority
          onClick={() => handleDetail(slug)}
        />

        <div
          className="
            absolute bottom-0 left-0 m-0
            inline-flex items-center gap-2
            rounded-tr-md
            bg-white/95 px-[25px] pt-[10px]
            text-[13px] font-medium text-slate-700
            shadow-[0_6px_16px_rgba(0,0,0,0.12)]
            backdrop-blur
          "
        >
          <FaRegCalendarDays className="h-4 w-4 text-[#005d98]" />
          <span className='font-light'>Posted On {dateText}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-6 py-6">
        {/* <div className="flex items-center gap-2 text-[13px] text-slate-500">
          <FaRegCalendarDays className="h-4 w-4 text-sky-700" />
          <span>Posted On {dateText}</span>
        </div> */}

        <h3 className="text-[17px] md:text-[20px] font-semibold !text-black hover:cursor-pointer  hover:!text-[#005d98]" onClick={() => handleDetail(slug)}>
          {title}
        </h3>

        <p className="line-clamp-3 !text-[14px] md:!text-[16px] leading-7 text-slate-500">
          {excerpt}
        </p>

        <div className="mt-auto pt-2">
          <Link
            href={href}
            onClick={() => handleDetail(slug)}
            className="inline-flex items-center gap-2 text-[13px] font-semibold !text-[#005d98] "
          >
            READ MORE
            <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path d="M7 5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
