import React, { useState, useSyncExternalStore } from 'react'

const App = () => {

  const handleSubmit = (e) => {
    e.preventDefault();   // this prevents the default behavior of refreshing the page.
    console.log('Form submitted!');

  }

  // What is two-way binding?
  // Two-way binding is a concept in React where the state of a component is synchronized with the user interface (UI) elements. It allows for automatic updates of the UI when the state changes and vice versa. This means that when a user interacts with an input field, the corresponding state variable is updated, and when the state variable changes, the UI reflects those changes without needing to manually update it.

  // In simple words, two-way binding allows for a seamless connection between the data (state) and the UI, making it easier to manage and update the user interface based on user interactions.

  const [title, setTitle] = useState('');

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter your name"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value); // no direct intraction but involving react.
          }}
        />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
