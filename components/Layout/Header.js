import {useRouter} from "next/dist/client/router"
import Image from 'next/image'
import {  AtSymbolIcon, BookOpenIcon, Cog8ToothIcon, HandRaisedIcon  } from '@heroicons/react/24/solid'

function Header() {
    const router = useRouter()
  return (
    <header className="sticky top-0 z-50  
        border-b-2 border-[#ff4b00] h-22 px-20 
        text-stone-600 bg-[#f4f1f1]">
        <div className="grid sm:grid-cols-1 md:grid-flow-col md:auto-cols-[minmax(0,_1fr)] py-4"
            onClick={()=> router.push('/')}>
            <div className="relative w-[120px] h-[60px] items-center">
                <Image 
                    src="/images/JTF-Logo.PNG"
                    alt="Asha"
                    fill={true}
                />
            </div>
            <div className="flex justify-start space-x-4 md:px-4 md:pt-4 pt-2">
                <div className="menu"
                    onClick={()=> router.push(`/OurStory`)}>
                    <Cog8ToothIcon className="hidden md:block text-#092555] pt-1 font-bold h-6 lg:h-6"></Cog8ToothIcon>
                    Our Story
                </div>
                <div className="menu"
                    onClick={()=> router.push(`/WhatWeDo`)}>
                    <HandRaisedIcon className="hidden md:block text-#092555] pt-1 font-bold h-6 lg:h-6"></HandRaisedIcon>
                    What We Do
                </div>
                <div className="menu"
                    onClick={()=> router.push(`/Contact`)}>
                    <AtSymbolIcon className="hidden md:block text-#092555] pt-1 font-bold h-6 lg:h-6"></AtSymbolIcon>
                    Contact
                </div>
                <div className="menu"
                    onClick={()=> router.push(`/Blogs`)}>
                     <BookOpenIcon className="hidden md:block text-#092555] pt-1 font-bold h-6 lg:h-6"></BookOpenIcon>
                    Blogs
                </div>
            </div>
            <div className="flex md:justify-end justify-center lg:px-24 space-x-2">
                <div className="flex justify-center">
                    <button className="text-lg text-[#f8f8f8] bg-[#ff4b00]
                        px-4 py-2 rounded-lg m-2 
                        border-2"
                        // onClick={(e)=>{goToAdd(e)}}
                        >
                        Sponsor
                    </button>
                </div> 
                <div className="flex justify-center">
                    <button className="text-lg  bg-[#092555] text-[#f8f8f8]
                        px-4 py-2 rounded-lg m-2 
                        border-2"
                        // onClick={(e)=>{goToAdd(e)}}
                        >
                        Donate
                    </button>
                </div> 
            </div>
        </div>
        
    </header>
  )
}

export default Header