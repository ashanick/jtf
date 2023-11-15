import Image from 'next/image'  

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 p-6 py-6 md:px-12 md:space-x-32 text-center
    border-y-2 border-[#ff4b00] ">
      <div className="md:block relative w-16 h-16 mx-auto">
        <Image 
            src="/images/JTF-Footer.webp"
            alt="Asha"
            fill={true}
        />
      </div>
      <div >
        <p>28037 Arastradero Road</p>
        <p>Los Altos Hills, CA 94022</p>
      </div>
      <div>
        <p>T:	408-216-7025</p>
        <p>E:	 info@joythomasfoundation.org </p>
      </div>
      <div>
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer