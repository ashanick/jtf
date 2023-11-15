// Blog types are: 1- text array only
// 2: text and image in description Array
import Image from 'next/image'
import Link from 'next/link'
import path from 'path';
import fs from 'fs/promises';
import PrintDate from '@/components/Cards/PrintDate';

function IndivBlog(props) {
    const blog = props.loadedBlog
    console.log('In Indiv Log: ', blog.blogType)
  return (
    <div className="pb-4">
        <section className="text-center m-4">
            <h2 className="h2">{blog.title}</h2>
            <p className="italic text-[#ff4b00]">{blog.tagLine}</p>
            <div className="inline-flex space-x-2">{blog.authorBlog} -- 
                <PrintDate id={blog.id} item={blog.blogDate} />
            </div>
        </section>
        {
            blog.blogType === "1" ?
            <div>
                <div className="space-y-6 px-4 md:px-24 lg:px-40 xl:px-60">
                    {
                        blog.dbdesc?.map((m, index)=>(
                            <p key={index}>{m}</p>
                        ))
                    }
                </div>
                <div className="space-y-1 px-4 md:px-24 lg:px-40 xl:px-60">
                    {
                        blog.singledesc?.map((s, index)=>(
                            <p key={index}>{s}</p>
                        ))
                    }
                </div>
            </div>
            :
                <div>Type 2</div>
        }
    </div>
  )
}

export async function getStaticProps(context){
  const fId = context.params.blogId;
  console.log('Porps:', fId)
  const filePath = path.join(process.cwd(), 'data', 'blogs.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  const blog = data.find((f)=>f.id === fId)

  console.log('In export async', blog)

  return {
    props: {
        loadedBlog: blog
    }
  }
}

export async function getStaticPaths(){
    const filePath = path.join(process.cwd(), 'data', 'blogs.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    const paths = data.map(blogs=>({params:{blogId:blogs.id}}))
    return {
        paths:paths,
        fallback:false
    }
}

export default IndivBlog