import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const [showTopics, setShowTopics] = useState(false)

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  const toggleTopics = () => {
    setShowTopics(!showTopics)
  }

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
