import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let  [counter, setCounter] = useState(0)

const addValue = () =>{
  
  setCounter(counter + 1)
}

const removeValu = () => {

  setCounter(counter - 1)
}
  return (
    <>
     <h1>chai aur react se Counter atteck</h1>
     <h2>counter valu</h2>
     <button 
     onClick={addValue}>Add valu {counter}</button>
     <br />
     <button
     onClick={removeValu}
     >Remove valu</button>
     <p>Output ..{counter}</p>
    </>
  )
}

export default App
