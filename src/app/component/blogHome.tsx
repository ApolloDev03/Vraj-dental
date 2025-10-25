import BlogCard from './blogCard';

import blog2 from '@/asserts/1684924885.jpg';
import blog3 from '@/asserts/1680696890.png';

// const posts = [
//   {
//     href: '/blog/potential-risk-of-cavities-from-black-mold',
//     imageSrc: '/images/blog/b1.jpg',
//     imageAlt: 'black mold blog',
//     dateText: 'Jun 15 2023',
//     title: 'THE POTENTIAL RISK OF CAVITIES FROM BLACK MOLD',
//     excerpt:
//       'The potential risk of cavities from black mold…',
//   },
//   {
//     href: '/blog/how-does-sugar-affects-your-teeth',
//     imageSrc: blog2.src,
//     imageAlt: 'sugar affects teeth',
//     dateText: 'May 24 2023',
//     title: 'HOW DOES SUGAR AFFECTS YOUR TEETH?',
//     excerpt:
//       'Sugars—The term sugar refers to common household sucrose as well as free sugars present in drinks and processed foods…',
//   },
//   {
//     href: '/blog/loose-tooth',
//     imageSrc: blog3.src,
//     imageAlt: 'loose tooth chart',
//     dateText: 'Apr 05 2023',
//     title: 'LOOSE TOOTH',
//     excerpt:
//       'What to do about a loose tooth that does not fall out? It is quite common for your…',
//   },
// ];

export default function BlogSection({blogs}:any) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-[100px]">
      <div className="text-center mb-[55px]">
        <div className="text-[14px] font-bold uppercase mb-2 " style={{color:"#b6c651",fontWeight:900}}>
          Our Blog
        </div>
        <h2 className=" text-[42px] font-normal leading-tight" style={{color:"#005d98"}}>
          Read Our Latest Blog
        </h2>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog:any, index:any) => {
          const imageUrl = blog.blogImage.startsWith("http")
            ? blog.blogImage
            : `https://www.vrajdentalclinic.com/images/gallery/${blog.blogImage}`;

          return (
            <BlogCard
              key={index}
              href={`/blog/${blog.urlParameter}`}
              imageSrc={imageUrl}
              imageAlt={blog.blogTitle}
              dateText={new Date(blog.created_at).toDateString()}
              title={blog.blogTitle}
              excerpt={
                blog.blogDescription
                  .replace(/<[^>]+>/g, "") // remove HTML tags
                  .slice(0, 120) + "..."
              }
            />
          );
        })}
      </div>
    </section>
  );
}
