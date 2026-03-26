import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const Users = [
    {
      img: 'https://i.pinimg.com/736x/af/5c/72/af5c72b04d1331cc3bafc11a97e0ab34.jpg',
      intro: '',
      tag: 'Satisfied'
    },
    {
      img: '',
      intro: '',
      tag: ''
    },
    {
      img: '',
      intro: '',
      tag: ''
    }
  ]

  return (
    <div>
      <Section1 />
      <Section2 />
    </div>
  )
}

export default App