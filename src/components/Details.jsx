import React,{useState} from 'react' 
import { useParams , useNavigate} from 'react-router-dom'
import {projct} from  './data/data'
import {AiOutlineArrowLeft , AiOutlineArrowRight} from 'react-icons/ai'



export default function Details() {
   
  let { userId } = useParams();

   const d = projct.find(d => d. id ==  userId )


   const [active , setactive] = useState(0);
   console.log(active)

  const heandelclick = (str)=>{
    if(str === 'next'){
       active < 3 ? setactive(active +1) : setactive(0)
    }else{
        active > -0 ? setactive(active -1) : setactive(3)
    }
  }
   
      return (
        <div className='w-full max-w-5xl mx-auto mt-10'>
           <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-5">
               <span className='text-xl' onClick={()=> useNavigate('./')}>⇖</span> go back
               </span>
            </button>

             
            <div className='flex justify-center mt-6 mx-auto items-center'>
               <div onClick={()=> heandelclick('next')}className='cursor-pointer'> <AiOutlineArrowLeft size={30}/></div>
               <div className='relative w-[80%] mx-auto h-[30rem] '>
               
                 {d.imgs.map((img , i) => {
                  return (
                  
                    <img src={img} className={ active === i  ? `absolute  h-full z-10 top-0  left-0 right-0` : ` absolute  h-full z-10 top-0 left-[-333rem]`}/>

                  )
                 })}
               </div>
               <div onClick={()=> heandelclick('prv')} className='cursor-pointer'> <AiOutlineArrowRight size={30}/></div>
            </div> 
            

            <div className='flex justify-center gap-10 mt-10'>
               <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-5">
                live
              </span>
            </button>

            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-5">
              github
              </span>
            </button>
            </div>
        </div>
      )
    }


