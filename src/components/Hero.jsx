import React from 'react'
import man from '../assets/man.svg'

export default function Hero() {
  return (
    <div className='flex justify-between w-full max-w-5xl  mx-auto '>
        <div className=' flex-1  w-full'>
         <h1 className='text-4xl leading-snug mt-20 font-bold '>
         <span className='spanblac'>  I’m a <span>Self-Taught Developer</span></span> 
          <span className='spanblac'> who builds immersive  and</span> 
             ueser-friendly <span className='under'> appplications .</span> 
            
            </h1>
            <button className="relative mt-20 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
             <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
               get in tutch 🡶
             </span>
           

            </button>
         </div>
        <div className=' flex-1 w-full  pl-10'> 
            <img src={man} className='w-[30rem] mt-[-7rem]'/>
        </div>
    </div>
  )
}
