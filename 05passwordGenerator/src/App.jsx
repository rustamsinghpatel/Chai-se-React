import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*[]{}"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipbord = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center px-4 py-10">
      <div className="flex w-full max-w-5xl mx-auto gap-10 mt-10 items-start">
        {/* Password Generator Section */}
        <div className="w-full max-w-md shadow-md rounded-lg px-4 py-6 text-orange-500 bg-gray-700">
          <h1 className="text-white text-center my-3 text-xl">Password Generator</h1>

          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3 text-black"
              placeholder="password"
              readOnly
              ref={passwordRef}
            />
            <button 
              onClick={copyPasswordToClipbord}
              className="bg-blue-500 text-white px-3 py-1 hover:bg-blue-600">
              Copy
            </button>
          </div>

          <div className="flex text-sm gap-x-2 mt-4 flex-wrap">
            <div className="flex items-center gap-x-1">
              <input type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => setLength(e.target.value)}
              />
              <label>Length: {length}</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input type="checkbox"
                checked={numberAllowed}
                id="numberInput"
                onChange={() => setNumberAllowed(prev => !prev)}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input type="checkbox"
                checked={charAllowed}
                id="characterInput"
                onChange={() => setCharAllowed(prev => !prev)}
              />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
        </div>

        {/* Learning & Revision Section */}
        <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-md text-white">
          <h2 className="text-xl font-semibold mb-4">Technologies Used:</h2>
          <ul className="list-disc pl-5">
            <li><strong>React:</strong> For building UI with stateful components.</li>
            <li><strong>useState:</strong> To manage dynamic values like length, checkboxes, and password.</li>
            <li><strong>useEffect:</strong> Auto-generates password on input change.</li>
            <li><strong>useCallback:</strong> Optimizes function re-creation during re-renders.</li>
            <li><strong>useRef:</strong> For selecting the input when copying password.</li>
            <li><strong>Clipboard API:</strong> To copy password with `navigator.clipboard.writeText()`.</li>
            <li><strong>Tailwind CSS:</strong> For fast and responsive styling.</li>
          </ul>

          <h3 className="mt-5 text-lg font-medium">Explanation of Key Concepts:</h3>

          <h4 className="mt-3 font-semibold">1. useState:</h4>
          <p>Manages states like <code>length</code>, <code>numberAllowed</code>, <code>charAllowed</code>, and <code>password</code>.</p>

          <h4 className="mt-3 font-semibold">2. useEffect:</h4>
          <p>Triggers password regeneration whenever any input changes.</p>

          <h4 className="mt-3 font-semibold">3. useCallback:</h4>
          <p>Memoizes functions (<code>passwordGenerator</code> and <code>copyPasswordToClipboard</code>) to prevent re-renders.</p>

          <h4 className="mt-3 font-semibold">4. useRef:</h4>
          <p>Used for DOM reference to the input field for selecting text during copying.</p>

          <h4 className="mt-3 font-semibold">5. Event Handling:</h4>
          <p>Used for range input, checkboxes, and button click to manage states and trigger actions.</p>

          <h4 className="mt-3 font-semibold">Code Snippet Example:</h4>
          <pre className="bg-gray-900 p-4 rounded-md overflow-auto text-orange-400">
{`const passwordRef = useRef(null);

const copyPasswordToClipboard = () => {
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password);
}`}
          </pre>
        </div>
      </div>
    </div>
  )
}

export default App
