import { useState } from 'react'

import man from './assets/man.svg'
import { Hero, Nav, Work } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Nav/>
      <Hero/>
      <Work/>
    </div>
  )
}

export default App
