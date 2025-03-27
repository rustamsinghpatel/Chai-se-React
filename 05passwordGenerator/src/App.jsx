import { useState, useCallback } from 'react'

import './App.css'

function App() {
  const [lenth, setLenth] = useState(8)
  const [numberAllowed, setNumberAllowed]= useState(false);
  const [ Password, setPassword] = useState("");
 
  const passwordGenerator = useCallback(() =>{
    let pass  = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&8[]{}"

    for(let i= 1; i<= array.length; i++){
      let char = math.floor(math.random() * str.length + 1)
      pass =mstr.charAt(char)
      setPassword(pass)
    }
  }, [lenght, numberAllowed, charAllowed, setPassword])

  return (
    <>
      <div className='w-full max-w-md max-auto
       shadow-md rounded-lg px-4 my-8 text-orange-500 bf-gray-700'>
<div className='flex shadow rounded-lg overflow-hidden mb-4'>ll
  <input
  type='text'
  value={Password}
  className='outline-one w-full py-1 px-3'
  placeholder='password'
  readOnly
  />

</div>
      </div>
    </>
  )
}

export default App
