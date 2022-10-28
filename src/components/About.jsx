import React from 'react'
import pro from '../assets/pro.png'
import blob from '../assets/blob.svg'
export default function About() {
  return (
    <div className='w-full max-w-5xl mx-auto h-screen'>
        <h1 className='text-5xl flex font-DynaPuff '>  <span  className=" text-5xl transform rotate-180 text-center" style={{ writingMode: 'vertical-rl' }}>02 </span> — about </h1>

        <div className='flex justify-center  '>
        
         
          <img  className=' ibr w-[10rem] h-[10rem]  rounded-full ' src={pro}/>
         
          
        </div>
    
        <div className='flex justify-center'>
            <h1 className='flex flex-col text-6xl DynaPuff mr-[-3rem] font-medium'> <span className='ml-[-9rem] font-DynaPuff'>ibrahim</span> <span className='mr-[-6rem] font-DynaPuff'>koraikir</span></h1>
        </div>




        <h1 >jjjjjjjj</h1>





    </div>
  )
}
