import Effect from "./Component/Effect"
import Navbar from "./Component/Navbar"
import State from "./Component/State"
import { useState } from "react"

function App() {
  const [toggle, setToggle] = useState(true)

  return (
    <>
    <Navbar  setToggle={setToggle}/>
    
    
{toggle ? <Effect /> : <State /> }

          </>
  )
}

export default App
