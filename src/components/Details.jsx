import React from 'react' 
import { useParams} from 'react-router-dom'
import {projct} from  './data/data'
export default function Details() {


  let { userId } = useParams();





   const d = projct.find(d => d. id ==  userId )
   
     console.log(userId , d)
  return (
    <div>
      {d.name}
    </div>
  )
}


