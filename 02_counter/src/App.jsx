import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(1);

  const incrementValue = () => {
    counter = counter + 1;
    setCounter(counter);
    /*
      Interview:- 
        setCounter(prevCounter => prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1) 
    */
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
