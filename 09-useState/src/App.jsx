import React from 'react'

const App = () => {

  // Can't change the value directly like this, it will not re-render the component because React doesn't know that the value has changed. It will only re-render when the state changes.
  let a = 20;

  function changeA() {
    console.log(a);
    a = 30;
    console.log(a);
    
  }

  return (
    <div>
      <h1>The value of a is : {a}</h1>
      <button onClick={changeA}>Change value</button>
    </div>
  )
}

export default App
