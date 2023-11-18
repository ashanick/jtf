import Image from 'next/image'
import Link from 'next/link'
import PrintDate from './PrintDate'

function BlogCard({id, items}) {
  return (
    <div className="border-2 border-[#ff4b00] p-2 max-w-[20rem] min-w-[20rem]
        text-center rounded-lg
        hover:scale-105 transform transition duration-300
        easeout space-y-2
        " id={id}>
            <Link 
                href={{
                    pathname:`/Blogs/[blogId]`,
                    query:{blogId:id}
                }}>
                <div className="hidden md:block relative w-[19rem] h-[19rem] ">
                    <Image 
                        src="/images/KavyaSharma.webp"
                        alt="Asha"
                        fill={true}
                    />
                </div>
            <h3 className="h3">{items.title}</h3>
            <div className="p italic inline-flex space-x-2">{items.authorBlog}, <PrintDate id={id} item={items.blogDate} />
            </div>
            
        </Link>
    </div>
  )
}

export default BlogCard