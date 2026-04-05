import React from 'react'

const App = () => {

  // What is a API?
  // API stands for Application Programming Interface. It is a set of rules and protocols that allows different software applications to communicate with each other.

  // In simple words, an API is like a messenger that takes requests and tells a system what you want to do, and then returns the response back to you.


  // How to fetch data from an API in React?
  // We have two ways to fetch data from an API in React:  1. fetch() method  2. axios library




  // Using fetch method:
  async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    console.log(data)
  }






  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App
