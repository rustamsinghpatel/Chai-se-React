import { useState } from 'react'
import './App.css'

function App() {
  // Counter ke liye state
  const [counter, setCounter] = useState(0)

  // Show/hide karne ke liye state
  const [showTopics, setShowTopics] = useState(false)

  // Value badhane ka function
  const addValue = () => {
    setCounter(counter + 1)
  }

  // Value ghatane ka function
  const removeValue = () => {
    setCounter(counter - 1)
  }

  // List show/hide karne ka function
  const toggleTopics = () => {
    setShowTopics(!showTopics)
  }

  // Jo jo seekha uski list
  const topics = [
    "useState hook ka use",
    "Counter banana",
    "Button click par kaam karwana",
    "JSX syntax samajhna",
    "React me component ka use"
  ]

  return (
    <>
      <h1>React Counter App</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br /><br />

      <button onClick={removeValue}>Remove Value</button>
      <br /><br />

      <button onClick={toggleTopics}>
        {showTopics ? "Hide What I Learned" : "Show What I Learned"}
      </button>

      {/* Ye list tabhi dikhayega jab showTopics true hoga */}
      {showTopics && (
        <div>
          <h3>Jo Seekha:</h3>
          <ul>
            {topics.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <p>Output: {counter}</p>
    </>
  )
}

export default App
