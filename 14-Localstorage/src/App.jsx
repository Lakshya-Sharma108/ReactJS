import React from 'react'

const App = () => {

  // What is local storage?
  // Local storage is a web storage API that allows you to store data in the browser. It is a key-value pair storage that can be accessed using JavaScript. The data stored in local storage is persistent, meaning it will remain even after the browser is closed.


  // How to use local storage using methods?
  // 1. setItem(key, value)
  localStorage.setItem('name', 'Lakshaya')
  localStorage.setItem('age', '21')
  localStorage.setItem('city', 'Delhi')


  // 2. getItem(key)
  const name = localStorage.getItem('name')
  const age = localStorage.getItem('age')
  const city = localStorage.getItem('city')
  console.log(name, age, city)  // check on console

  
  // 3. removeItem(key)
  localStorage.removeItem('city')


  // 4. clear() - This method is used to clear all the data stored in local storage.
  localStorage.clear()





  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default App
