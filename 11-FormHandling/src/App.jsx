import React from 'react'

const App = () => {


  // Form submitting has a default behavior of refreshing the page. To prevent this, we can use the preventDefault() method on the event object in the form's onSubmit handler.

  const handleSubmit = (e) => {
    e.preventDefault();   // this prevents the default behavior of refreshing the page.
    console.log('Form submitted!');
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
