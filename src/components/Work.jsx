import React from 'react'
import man from '../assets/man.svg'
import Card from './Card'
import {projct} from './data/data'

export default function Work() {
  return (
   
    <div className='w-full max-w-5xl mx-auto mb-20  '>
      <h1 className='text-5xl flex font-DynaPuff mt-[-1rem] mb-10  '>  <span  className=" text-5xl transform rotate-180 text-center" style={{ writingMode: 'vertical-rl' }}>01 </span> — work </h1>
     <ul className='flex justify-between flex-wrap w-full h-full  gap-5'>
      {projct.map((projct)=> {
        return(
            <>
            <Card projct={projct}/>
            </>
        )
      })}
      </ul>
        
        
    </div>
  )
}
