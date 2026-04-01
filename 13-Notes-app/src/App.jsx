import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <form className='flex flex-col items-start gap-4 p-10'>

        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 py-2 border-2 rounded w-1/2'
        />

        <input
          type="text"
          placeholder='Write Details'
          className='px-5 py-2 h-20 border-2 rounded w-1/2'
        />

        <button className='bg-white text-black px-5 py-2 rounded w-1/2'>Add Notes</button>

      </form>
    </div>
  )
}

export default App
