import React from 'react'

function Team() {
  return (
    <div>
        <section className="bg-[#092555] h-[10vw] w-[100vw] text-center text-[#f8f8f8] 
            pt-10 px-6 md:px-20 lg:px-40 xl:px-80 pb-10 md:pt-40 md:pb-40">
            <p className="titlep">The Foundation has brought together a large and diverse group of STEM professionals, all of whom are "Friends of Joy”. </p>
        </section>
        <section className="text-center p-4 md:p-10 lg:p-20 ">
            <h1 className="h1">Foundation Board of Directors</h1>
            <div className="flex justify-between space-x-6 allignx">
                <div>Tony Thomas Brother</div>
                <div>Priya Pattathil</div>
                <div>Shyam Pillalamari</div>
            </div>
        </section>
        <section className="text-center p-4 md:p-10 lg:p-20 bg-[#fafafa]">
        <h1 className="h1">Foundation Operating Group</h1>
        </section>
    </div>
  )
}

export default Team