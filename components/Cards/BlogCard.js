import Image from 'next/image'
import Link from 'next/link'
import PrintDate from './PrintDate'

function BlogCard({id, items}) {
  return (
    <div className="border-2 border-[#ff4b00] p-2 max-w-sm min-w-[24rem]
        text-center rounded-md
        hover:scale-105 transform transition duration-300
        easeout space-y-2
        " id={id}>
            <Link 
                href={{
                    pathname:`/Blogs/[blogId]`,
                    query:{blogId:id}
                }}>
                <div className="hidden md:block relative w-[23rem] h-[24rem] ">
                    <Image 
                        src="/images/KavyaSharma.webp"
                        alt="Asha"
                        fill={true}
                    />
                </div>
            <h2 className="h2">{items.title}</h2>
            <p className="p italic">{items.authorBlog}</p>
            <PrintDate id={id} item={items.blogDate} />
        </Link>
    </div>
  )
}

export default BlogCard