import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      <h1>React Components</h1>
      <div className="card">
        <h2>Card Title</h2>
        <p>Card content goes here.</p>
      </div>

      {Card()}
    </div>
  )
}

export default App
