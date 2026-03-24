import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      
      {/* Here we are passing props to the Card component -- name, age, description are the props */}
      <Card name='Lakshaya Awasthi' age={21} description='I am a software engineer, passionate about creating innovative solutions.' />
    </div>
  )
}

export default App


// Simple definition of props: Props are a way to pass data from a parent component to a child component in React. They allow you to customize the behavior and appearance of a component by providing it with specific values or functions. Props are read-only, meaning that a child component cannot modify the props it receives from its parent. Instead, the parent component is responsible for managing the state and passing down any necessary data through props. This makes props an essential part of React's component-based architecture, enabling reusability and separation of concerns.

// Pops is just like passing arguments to a function.
