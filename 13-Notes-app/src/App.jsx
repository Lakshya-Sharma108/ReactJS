import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('form submitted');
    
  }

  return (
    <div className='h-screen bg-black text-white'>
      <form onSubmit={submitHandler} className='flex items-start justify-between p-10'>

        <div className='w-1/2 flex items-start flex-col gap-4'>
          <input
            type="text"
            placeholder='Enter Notes Heading'
            className='px-5 py-2 border-2 rounded font-medium outline-none w-full'
          />

          <textarea
            type="text"
            placeholder='Write Details'
            className='px-5 py-2 h-32 border-2 rounded font-medium outline-none w-full'
          />

          <button className='bg-white text-black px-5 py-2 rounded font-medium outline-none w-full'>Add Notes</button>
        </div>

      </form>
    </div>
  )
}

export default App
