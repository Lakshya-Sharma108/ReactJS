import React from 'react'
import axios from 'axios'
import ImageApi from './components/ImageApi'




const App = () => {

  // What is a API?
  // API stands for Application Programming Interface. It is a set of rules and protocols that allows different software applications to communicate with each other.

  // In simple words, an API is like a messenger that takes requests and tells a system what you want to do, and then returns the response back to you.


  // How to fetch data from an API in React?
  // We have two ways to fetch data from an API in React:  1. fetch() method  2. axios library


  // Difference between fetch() method and axios library:
  // 1. fetch() is a built-in JavaScript method, while axios is a third-party library.
  // 2. fetch() returns a promise that resolves to the Response object, while axios returns a promise that resolves to the response data.
  // 3. fetch() does not automatically transform the response data, while axios automatically transforms the response data to JSON.
  // 4. fetch() does not support request cancellation, while axios supports request cancellation using CancelToken.
  // 5. fetch() does not support interceptors, while axios supports interceptors for request and response.
  // 6. fetch() does not support older browsers, while axios supports older browsers.
  // 7. fetch() does not have built-in support for handling timeouts, while axios has built-in support for handling timeouts.
  // 8. fetch() does not have built-in support for handling errors, while axios has built-in support for handling errors.




  // Using fetch method:
  async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/5')
    const data = await response.json()

    console.log(data)
  }


  // Using axios library:
  const getDataa = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/10')
    console.log(response.data);
    
    
  }



  return (
    <div>
      <center>
        <h2>Check the console</h2>
      <button onClick={getData}>Get Data  --fetch method</button>

      <button onClick={getDataa}>Get Data  --axios library</button>
      </center>

      <ImageApi />
    </div>
  )
}

export default App
