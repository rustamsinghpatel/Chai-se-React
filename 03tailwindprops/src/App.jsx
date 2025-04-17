import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Card from '../components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   let myObj ={
    username :"rustam",
    age:30
   }
let newArr =[1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'> Tailwind Test</h1>

      <Card username="Rahul" btnText='click me' />
      <Card username="Jagat" btnText='visit me' />
     
  
    </>
  )
}

export default App
