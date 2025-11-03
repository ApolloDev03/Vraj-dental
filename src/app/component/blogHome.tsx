import BlogCard from './blogCard';

export default function BlogSection({blogs}:any) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-[60px] md:py-[100px]">
      <div className="text-center mb-[55px]">
        <div className="text-[14px] font-bold uppercase mb-2 " style={{color:"#b6c651",fontWeight:900}}>
          Our Blog
        </div>
        <h2 className="text-[25px] md:text-[42px] font-normal leading-tight" style={{color:"#005d98"}}>
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
              slug={blog.urlParameter}
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
