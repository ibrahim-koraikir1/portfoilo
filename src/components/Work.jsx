import React from 'react'
import man from '../assets/man.svg'
import Card from './Card'
const projct = [
 
    {
        name: "ibrahim" ,
        date: 'April 2022',
        img:  '../assets/man.svg'
    },
    {
        name: "ibrahim" ,
        date: 'April 2022',
        img:  '../assets/man.svg'
    },
    {
        name: "ibrahim" ,
        date: 'April 2022',
        img:  '../assets/man.svg'
    },
    {
        name: "ibrahim" ,
        date: 'April 2022',
        img:  '../assets/man.svg',
        cas: true
    },
]

export default function Work() {
  return (
    <div className='w-full max-w-5xl mx-auto px-32 '>
        <h1> <span>01 </span>work.</h1>
     <ul className='flex flex-wrap gap-10'>
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
