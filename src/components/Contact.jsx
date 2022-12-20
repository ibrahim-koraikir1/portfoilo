import React from 'react' 
import {FiTwitter ,FiGithub ,FiPhoneCall , FiLinkedin} from 'react-icons/fi'

export default function Contact() {
  return (
    <div>

 
   <div className='max-w-5xl  mx-auto text-black h-screen'>
      <h1 className='text-5xl flex font-DynaPuff mt-[-1rem] mb-10  '>  <span  className=" text-5xl transform rotate-180 text-center" style={{ writingMode: 'vertical-rl' }}>03 </span> — contact </h1>
         <section className="bg-white dark:bg-gray-900">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact me</h2>
     
      <form action="#" className="space-y-8">
          <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>
          </div>
          <div>
              <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">name</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="ibrahim" />
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a message..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>
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
</div>
  )
}
