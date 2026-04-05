import React from 'react'

const App = () => {

  // What is local storage?
  // Local storage is a web storage API that allows you to store data in the browser. It is a key-value pair storage that can be accessed using JavaScript. The data stored in local storage is persistent, meaning it will remain even after the browser is closed.


  // How to use local storage using methods?
  // 1. setItem(key, value)
  // localStorage.setItem('name', 'Lakshaya')
  // localStorage.setItem('age', '21')
  // localStorage.setItem('city', 'Delhi')


  // 2. getItem(key)
  // const name = localStorage.getItem('name')
  // const age = localStorage.getItem('age')
  // const city = localStorage.getItem('city')
  // console.log(name, age, city)  // check on console

  
  // 3. removeItem(key)
  // localStorage.removeItem('city')

  // 4. clear() - This method is used to clear all the data stored in local storage.
  // localStorage.clear()




  const user = {
    name: 'Lakshaya',
    age: 21,
    city: 'Delhi'
  }

  // We cannot store objects in local storage directly, we need to convert them to strings using JSON.stringify() method.
  // localStorage.setItem('user', JSON.stringify(user))

  const userData = localStorage.getItem('user')
  console.log(userData)  // Now it will give me in string format, but want it in object format, so we need to parse it using JSON.parse() method.

  console.log(JSON.parse(userData));
  






  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default App
