import {useRouter} from "next/dist/client/router"
import Image from 'next/image'
import { useState } from 'react';
import {  AtSymbolIcon, BookOpenIcon, Cog8ToothIcon, HandRaisedIcon, UsersIcon  } from '@heroicons/react/24/solid'

function Header() {
    const router = useRouter()
    const [isOpen, setOpen] = useState(false);

    const handleDropDown = () => {
      setOpen(!isOpen);
    };

  return (
    <header className="sticky top-0 z-50  md:flex 
        border-b-2 border-[#ff4b00] h-22 px-12 md:px-20 py-6 bg-[#f4f1f1]">
        <div className="md:w-1/4 flex justify-center md:block">
            <div className="relative w-[120px] h-[60px] items-center cursor-pointer" onClick={()=> router.push('/')}>
                <Image 
                    src="/images/JTF-Logo.png"
                    alt="Asha"
                    fill={true}
                />
            </div>
        </div>
        <section className="flex justify-start space-x-2 md:space-x-4 mx-auto md:pt-4 pt-2 md:w-1/2">
            <div className="menu focus:ring-[#ff4b00]"
                onClick={()=> router.push(`/OurStory`)}>
                <Cog8ToothIcon className="hidden md:block text-#092555] pt-1 font-bold h-6 lg:h-6"></Cog8ToothIcon>
                Our Story
            </div>
            <div className="dropdown">
                <button
                    className="menu hover:underline  rounded-lg  text-center inline-flex items-center"
                    onClick={handleDropDown}>
                    <HandRaisedIcon className="hidden md:block text-#092555] pt-1 font-bold h-6 lg:h-6"></HandRaisedIcon>
                    What We Do
                    <svg
                    className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="2" d="M19 9l-7 7-7-7"
                    ></path>
                    </svg>
                </button>

                <div
                    id="dropdown"
                    className={`z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ${
                    isOpen ? "block" : "hidden"
                    }`}>
                    <ul className="absolute z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ">
                        <li>
                            <a href="/OurStory" className="block py-2 px-4 hover:bg-gray-100">Inspire</a>
                        </li>
                        <li>
                            <a href="/Contact" className="block py-2 px-4 hover:bg-gray-100">Nurture</a>
                        </li>
                        <li>
                            <a href="/Blogs" className="block py-2 px-4 hover:bg-gray-100">Mentor</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="menu"
                onClick={()=> router.push(`/Contact`)}>
                <AtSymbolIcon className="hidden md:block text-#092555] pt-1 font-bold h-6 lg:h-6"></AtSymbolIcon>
                Contact
            </div>
            <div className="dropdown">
                <button
                    className="menu hover:underline  rounded-lg  text-center inline-flex items-center"
                    onClick={handleDropDown}>
                    <UsersIcon className="hidden md:block text-#092555] pt-1 font-bold h-6 lg:h-6"></UsersIcon>
                    About Us
                    <svg
                    className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="2" d="M19 9l-7 7-7-7"
                    ></path>
                    </svg>
                </button>

                <div
                    id="dropdowna"
                    className={`z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ${
                    isOpen ? "block" : "hidden"
                    }`}>
                    <ul className="absolute z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ">
                        <li>
                            <a href="/OurStory" className="block py-2 px-4 hover:bg-gray-100">Our Team</a>
                        </li>
                        <li>
                            <a href="/Contact" className="block py-2 px-4 hover:bg-gray-100">Donor Circle</a>
                        </li>
                        <li>
                            <a href="/Blogs" className="block py-2 px-4 hover:bg-gray-100">Partners</a>
                        </li>
                        <li>
                            <a href="/Blogs" className="block py-2 px-4 hover:bg-gray-100">Impact Reports</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="menu"
                onClick={()=> router.push(`/Blogs`)}>
                    <BookOpenIcon className="hidden md:block text-#092555] pt-1 font-bold h-6 lg:h-6"></BookOpenIcon>
                Blogs
            </div>
        </section>

        <section className="flex md:justify-end justify-center lg:px-24 space-x-2 md:w-1/4">
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
        </section>
        
    </header>
  )
}

export default Header