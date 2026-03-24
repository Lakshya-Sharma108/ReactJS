import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      
      {/* Here we are passing props to the Card component -- name, age, description are the props */}
      <Card img="https://images.unsplash.com/photo-1617972882867-3707f274c115?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name='Lakshaya Awasthi' age={21} description='I am a software engineer.' />
      <Card img="https://images.unsplash.com/photo-1773633071680-a1b53fcb4e90?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name='Yogesh' age={28} description='I am a AI engineer.' />
      <Card img="https://images.unsplash.com/photo-1773408151429-4add3b61d7bb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name='Deependra' age={32} description='I am a fucking asshole.' />
    </div>
  )
}

export default App


// Simple definition of props: Props are a way to pass data from a parent component to a child component in React. They allow you to customize the behavior and appearance of a component by providing it with specific values or functions. Props are read-only, meaning that a child component cannot modify the props it receives from its parent. Instead, the parent component is responsible for managing the state and passing down any necessary data through props. This makes props an essential part of React's component-based architecture, enabling reusability and separation of concerns.

// Pops is just like passing arguments to a function.
