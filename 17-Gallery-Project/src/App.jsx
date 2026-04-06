import React from 'react'
import axios from 'axios'

const App = () => {

  const getData = () => {
    console.log('Data aa gaya');
    
  }

  return (
    <div className='bg-black h-screen p-4 text-white'>
      <button
        onClick={getData}
        className='bg-green-600 active:scale-95 px-5 py-2 rounded '
      >Get Data</button>
    </div>
  )
}

export default App
