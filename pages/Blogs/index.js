import Image from 'next/image'
import blogsData from '../../data/blogs.json'
import BlogCard from '@/components/Cards/BlogCard'

function Blogs() {
  console.log('Blog Data : ', blogsData)
  return (
    <div className="pb-6">
      <div className="h-14 text-center ">
        <h2 className="h2 text-opacity-100">Filter By</h2>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-16 lg:px-28 xl:px-40 place-items-center
        space-y-2">
        {
          blogsData?.map((b)=>(
            <BlogCard id={b.id} items={b} />
          ))
        }
      </section>
    </div>
    // className="h-14 bg-gradient-to-r from-[#ff4b00] to-[#092555] opacity-20 text-center"
  )
}

export default Blogs