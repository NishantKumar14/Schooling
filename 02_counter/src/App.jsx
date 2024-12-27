import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(1);

  const incrementValue = () => {
    counter = counter + 1
    setCounter(counter);
  }

  const decrementValue = () => {
    counter = counter - 1;
    setCounter(counter);
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={incrementValue}>
        Increment value
      </button>
      <button onClick={decrementValue}>
        Decrement value
      </button>
    </>
  )
}

export default App
