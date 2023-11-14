import Link from "next/link";
import Image from 'next/image'  
import NewCard from "@/components/Cards/NewCard";
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/solid";
import EngageCard from "@/components/Cards/EngageCard";

export default function Home() {
  return (
    <>
      <div className="bg-[#092555] text-[#f8f8f8]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="m-auto text-center space-y-4 md:space-y-8 pt-4 pb-4">
            <div className="space-y-1 allignx ">
              <h2 className="home-main-text ">Inspire</h2>
              <p className="home-main-tag text-[#ff4b00]">Schools & Women In STEM Programs</p>
               <p className="text-sm lg-text-xl">STEM lab at the St. Josephs Boys High School in Bangalore and Women in STEM awards, 2021 & 2022</p>
            </div>
            <div className="space-y-1">
              <h2 className="home-main-text ">Nurture</h2>
              <p className="home-main-tag text-[#ff4b00]">College STEM Programs</p>
              <p className="text-sm lg-text-xl">IEEE research award</p>
            </div>
            <div className="space-y-1">
              <h2 className="home-main-text ">Mentor</h2>
              <p className="home-main-tag text-[#ff4b00]">Undergraduate students, India and US</p>
              <p className="text-sm lg-text-xl">Alumii mentors & Partnering with Foundation for Excellence</p>
            </div>
          </div>
          <div className="hidden md:block relative w-[50vw] h-[40vw] ">
            <Image 
                src="/images/home-image1.webp"
                alt="Asha"
                fill={true}
            />
          </div>
        </div>
        <div className="bg-[#092555] text-[#f8f8f8] border-y-2 border-[#ff4b00] p-2">
          <h3 className="h2 py-4 text-center">To uplift underserved students and their families through impactful STEM careers</h3>
        </div>
      </div>

      <div className="border-y-1 border-[#ff4b00] allignx py-2 md:py-8 space-x-8">
        <h2 className="h2 text-[#092555] text-center">We are a core group of 25 members, a dedicated volunteer network of 100+ and a global network.</h2>
        <div className=" grid grid-cols-1 space-y-4 lg:grid-cols-[500px_minmax(860px,_1fr)_1fr] ">
          <div className="m-auto text-center">
            <p className="text-3xl font-light text-[#ff4b00]">Our core mission is to inspire STEM students and young professionals across the globe to excel and realize their full potential.</p>
          </div>
          <div className="text-xl">
            The Foundation was created in 2020 to honor the life and legacy of 
            <Link href="/OurStory" className="text-[#ff4b00] px-1 font-semibold cursor-pointer hover:text-blue-500 hover:underline">Joy Thomas,</Link> 
            an Indian-American STEM genius. As a world-renowned researcher at Stanford University, IBM, 
            and across multiple Silicon Valley Tech startups as a Founder and Entrepreneur, 
            Joy made seminal contributions in the field of Information Theory, data analytics, and large-scale data mining. He was passionate 
            about enabling and encouraging young minds in STEM-related disciplines. 
            Joy was an alumnus of IIT, Madras and St. Joseph’s, Bangalore, India.
            
          </div>
        </div>
      </div>
      <section className=" mx-auto h-[860px] max-w-[100vw] bg-[#092555]
        bg-cover bg-fixed bg-center bg-no-repeat shadow-lg bg-[url(/images/Joy.webp)]"
        >
        <div className="pt-[50vh] md:pt-[54vh] ">
          <div className="bg-white p-4 sm:p-8 py-12">
              <h1 className="h1 text-center">We’re Inspired by the Life and Legacy of Joy Thomas</h1>
              <h2 className="h2 text-center px-6 md:px-10 lg:px-[20vw] text-[#ff4b00]">The Joy Thomas Foundation brings together a global network of 
              STEM mentors, who are dedicated to inspiring the next generation 
              of STEM students, researchers and entrepreneurs.</h2>
              <p className="font-light allignx text-sm md:text-xl lg:text-2xl">We seek and build relationships with individuals and corporations who are making a difference 
                in their communities and countries. The Foundation sponsors awards to promote STEM excellence, 
                offers mentoring, career guidance and employment assistance to college STEM students. Our High School STEM programs seek to 
                inspire students from disadvantaged backgrounds to pursue STEM 
                related careers, to secure higher paying jobs that benefit their families.</p>
          </div>
        </div>
    </section>
      <div className="bg-[#092555] border-y-2 border-[#ff4b00] text-[#f8f8f8] md:p-4 text-center">
        <h1 className="h1">What's new?</h1>
        <NewCard id="launch" title="JTF Launch" desc="Blag jjjj"/>
        <NewCard id="award" title="Women in STEM Award" desc="woamnf jjjj"/>
        <NewCard id="inaug" title="STEM Lab Inaugration" desc="iyifxcj jjjj"/>
        <div className="flex justify-center space-x-3 text-center">
          <EllipsisHorizontalCircleIcon className="font-light h-8 lg:h-12 cursor-pointer"></EllipsisHorizontalCircleIcon>
          <p className="text-xl font-medium pt-2">More</p>
        </div>
      </div>

      <div className="allignx px-4 md:py-8 lg:py-12">
        <h1 className="h1 text-center">How can you engage with the foundation?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center mb-6">
          <div>
            <h2 className="h2 ">Students</h2>
            <p className="px-2 md:px-10 lg:px-14">Inspire the next generation of STEM students</p>
            <Link className="hlink" id="learnmore"
              href="/OurStory">Learn More</Link>
           </div>
          <div>
            <h2 className="h2 ">Alumnii</h2>
            <p className="px-2 md:px-10 lg:px-14">Inspire the next generation of STEM students</p>
            <Link className="hlink" id="alumnii"
              href="/OurStory">Learn More</Link>
          </div>
          <div>
            <h2 className="h2 ">Mentors</h2>
            <p className="px-2 md:px-10 lg:px-14">Share your knowledge and life experiences</p>
            <Link className="hlink" id="mentors"
              href="/OurStory">Learn More</Link>
          </div>
          <div>
            <h2 className="h2 ">Corporate</h2>
            <p className="px-2 md:px-10 lg:px-14">Engage with our 1000+ strong global STEM network</p>
            <Link className="hlink" id="corporate"
              href="/OurStory">Learn More</Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center py-12 bg-[#f5f5f5]">
          <div>
            <div className="hidden md:block relative w-[22rem] h-[24rem] mx-24">
                <Image 
                    src="/images/blue-striped-circle.webp"
                    alt="Asha"
                    fill={true}
                />
              </div>
              <div className="hidden md:block relative w-[24rem] h-[40rem] mx-auto -m-64 ">
                <Image 
                    src="/images/young-indian-student.webp"
                    alt="Asha"
                    fill={true}
                />
              </div>
            </div>
            <div >
              <EngageCard id="stemnetwork" title="The STEM Network" />
            </div>
        </div>
      </div>
      <section className=" mx-auto h-[1000px] max-w-[100vw] bg-[#092555]
        bg-cover bg-fixed bg-top bg-no-repeat shadow-lg bg-[url(/images/sjbhs.jpg)]"
        >
        <div className="pt-[70vh]">
          <div className="bg-white p-4 sm:p-8 py-10">
              <h1 className="h1 text-center">Your Support is Powerful.</h1>
              {/* <h3 className="h3 text-center allignx text-[#ff4b00]"></h3>  */}
              <div className="space-y-4 text-sm md:text-xl px-4 md:px-16 lg:px-40 py-4 md:py-6 lg:py-8">
                <p className=" ">Are you ready to inspire the next generation of young STEM students 
                as they get ready for their journey into STEM education and STEM-related careers? </p>
                <p className="">You have the opportunity to impact the lives of individuals and their families. It’s through your generosity 
                  that we create such powerful change.</p>
                <p className="">We seek committed volunteers to help in all areas, from student mentoring, working on JTF projects to donor outreach,
                Foundation operations, volunteer coordination, and corporate sponsor and HR outreach.</p> 
              </div>
          </div>
        </div>
    </section>
      <div className="grid grid-cols-1 md:grid-cols-2 text-[#f8f8f8]">
        <div className="bg-[#ff4b00] text-center py-[80px]">
          <h1 className="h1 ">Get Involved</h1>
          <h2 className="h2 px-16">Join the JTF movement to support the next generation of STEM students</h2>
        </div>
        <div className="bg-[#092555] text-center py-[80px]">
        <h1 className="h1 ">Donate</h1>
          <h2 className="h2 px-16">Your donation could open up doors to countless STEM opportunities.</h2>
        </div>
      </div>
        {/* <div className={styles.center}>Get Involved
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div> */}

        {/* <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div> */}
    </>
  )
}
