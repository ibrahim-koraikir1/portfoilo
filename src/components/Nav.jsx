import React from 'react'

export default function Nav() {
  return (
    <div className='w-full flex justify-between items-center mt-[3rem] max-w-5xl  mx-auto'>
     <div className='cursor-pointer group hover:bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800'>
        <span> koraikir366@gmail.com 🡵</span>
     </div>
     <div className='flex gap-36 items-center ' >
        <ul className='flex justify-between items-start gap-[5rem]'>
            <li className=' font-bold cursor-pointer relative before:absolute before:content-[".01"] before:right-[3rem]  before:text-gray-600'>work</li>
            <li  className=' font-bold cursor-pointer relative before:absolute before:content-[".02"] before:right-[3rem]  before:text-gray-600'>work</li>
            <li  className=' font-bold cursor-pointer relative before:absolute before:content-[".03"] before:right-[3rem] before:text-gray-600'>work</li>
        </ul>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
             <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
               Cyan to blue
             </span>
           

        </button>
     </div>
   
    </div>
  )
}
