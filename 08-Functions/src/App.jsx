import React from 'react'

const App = () => {

  // Event handler functions
  function clickBtn() {
    let h1 = document.querySelector('h1')
    h1.textContent = 'Hello, Boss'
  }

  // Mouse enter event handler
  function mouseEnter() {
    console.log('Mouse entered');
  }

  function inputChanging() {
    console.log('User is typing...');
    
  }

  return (
    <div>

      {/* The value of h1 will be changed when the button is clicked */}
      <h1>Hello, Lakshaya</h1>

      {/* Button with mouse enter and click events */}
      <button onMouseEnter={mouseEnter} onClick={clickBtn}>Change user</button>

      {/* Function inside button */}
      <button onClick={() => {
        let h1 = document.querySelector('h1')
        h1.textContent = 'For this button, we used a function inside the onClick event handler'
      }}>Click me</button>



      {/* Input field with onChange event */}
      <input type="text" onChange={function(e) {
        console.log(e.target.value);
      }} placeholder='Type something...' />
    </div>
  )
}

export default App
