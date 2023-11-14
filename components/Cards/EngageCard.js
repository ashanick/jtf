import React from 'react'

function EngageCard({id, title}) {
  return (
    <div className="border-2 border-[#f8f8f8]  w-[24rem] md:w-[30rem] mx-auto my-6">
        <h2 className="h2">{title}</h2>
    </div>
  )
}

export default EngageCard