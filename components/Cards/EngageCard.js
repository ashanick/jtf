import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'

function EngageCard({id, title}) {
  return (
    <div className="border-2 border-[#f8f8f8]  bg-[#f2f2f2] p-4 w-[24rem] md:w-[40rem] mx-auto flex space-x-6">
        <ArrowRightCircleIcon className="text-[#ff4b00] pt-1 font-bold h-6 lg:h-10"></ArrowRightCircleIcon>
        <h2 className="h2">{title}</h2>
    </div>
  )
}

export default EngageCard