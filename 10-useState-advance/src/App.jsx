import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(10);

  const btnClicked = () => {

    console.log("value of num before : ", num);

    setNum(num + 5);   // This function is asynchronous, it will not update the value of num immediately. It will schedule the update and re-render the component after the current function execution is completed.
    
    console.log("value of num after : ", num);
    
  }

  return (
    <div>
      <h1>The value of num is: {num}</h1>
      <button onClick={btnClicked}>Click me</button>
    </div>
  )
}

export default App
