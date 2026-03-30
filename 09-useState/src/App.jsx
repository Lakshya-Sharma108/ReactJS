import React, { useState } from 'react'

const App = () => {

  // Can't change the value directly like this, it will not re-render the component because React doesn't know that the value has changed. It will only re-render when the state changes.
  // let a = 20;



  // useState: It is a hook that allows us to add state to functional components. It returns an array with two elements: the current state value and a function to update that value. When we call the update function, React will re-render the component with the new state value.
  let [a, setA] = useState(0);

  function increaseA() {
    setA(a+1);
  }

  function decreaseA() {
    setA(a-1);
  }

  return (
    <div>
      <h1>The value of a is : {a}</h1>
      <div className='btn'>
        <button onClick={increaseA}>Increase value</button>
      <button onClick={decreaseA}>Decrease value</button>
      </div>
    </div>
  )
}

export default App
