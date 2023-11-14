import { ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'

function NewCard({title, desc}) {
    const [infoState, setInfoState] = useState(false)
  return (
    <div className="w-[60vw] mx-auto my-6">
    <div className="border-2 border-[#f8f8f8] ">
        <div className="flex justify-between p-4">
            <h1 className="titleclass">{title}</h1>
            <div>
                {infoState ?
                    <ArrowDownCircleIcon className="font-light h-8 lg:h-12 cursor-pointer"
                        onClick={(()=>setInfoState(!infoState))}></ArrowDownCircleIcon>
                : <ArrowUpCircleIcon className="font-light h-8 lg:h-12 cursor-pointer"
                onClick={(()=>setInfoState(!infoState))}></ArrowUpCircleIcon>
                }
            </div>
        </div>
    </div>
    {
        infoState && 
        <p className="m-4">{desc}</p>
    }
    </div>
  )
}

export default NewCard