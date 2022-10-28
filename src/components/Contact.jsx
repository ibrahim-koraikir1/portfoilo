import React from 'react' 
import {FiTwitter ,FiGithub ,FiPhoneCall , FiLinkedin} from 'react-icons/fi'

export default function Contact() {
  return (
   <div className='max-w-5xl  mx-auto text-black h-screen'>
      <h1 className='text-5xl flex font-DynaPuff mt-[-1rem] mb-10  '>  <span  className=" text-5xl transform rotate-180 text-center" style={{ writingMode: 'vertical-rl' }}>03 </span> — contact </h1>
    <div className='flex flex-wrap justify-center gap-16'>
      <div className='w-[7rem] h-[6rem]
        flex flex-col items-center justify-around shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded cursor-pointer py-3'>
        <FiGithub size={60}/>
        github
      </div>
      
       <div className='w-[7rem] h-[6rem]
        flex flex-col items-center justify-around shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded cursor-pointer py-3'>
        <FiPhoneCall size={60}/>
        github
      </div>
       <div className='w-[7rem] h-[6rem]
        flex flex-col items-center justify-around shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded cursor-pointer py-3'>
        <FiLinkedin size={60}/>
        github
      </div>
       <div className='w-[7rem] h-[6rem]
        flex flex-col items-center justify-around shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded cursor-pointer py-3'>
        <FiTwitter size={60}/>
        github
      </div>
    </div>
</div>
  )
}
