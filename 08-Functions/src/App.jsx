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

  return (
    <div>

      {/* The value of h1 will be changed when the button is clicked */}
      <h1>Hello, Lakshaya</h1>

      {/* Button with mouse enter and click events */}
      <button onMouseEnter={mouseEnter} onClick={clickBtn}>Change user</button>
    </div>
  )
}

export default App
