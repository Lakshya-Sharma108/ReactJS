import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const Users = [
    {
      img: 'https://i.pinimg.com/1200x/15/0d/d0/150dd0550b8190ad7ae5cd562c7488d5.jpg',
      intro: '',
      tag: 'Satisfied'
    },
    {
      img: 'https://i.pinimg.com/736x/fd/c2/ab/fdc2ab27724a2baefcaeded05d8adef2.jpg',
      intro: '',
      tag: 'Underserved'
    },
    {
      img: 'https://i.pinimg.com/1200x/47/a5/dd/47a5dd6770c10146868fde4e50fc6524.jpg',
      intro: '',
      tag: 'Underbanked'
    },
    {
      img: 'https://i.pinimg.com/736x/28/bb/f9/28bbf9a6ca0604e82d6e7a01964a02db.jpg',
      intro: '',
      tag: 'Underbanked'
    }
  ]

  return (
    <div>
      <Section1 Users={Users} />
      <Section2 />
    </div>
  )
}

export default App