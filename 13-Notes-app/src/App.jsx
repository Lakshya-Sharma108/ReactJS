import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('form submitted');

  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={submitHandler} className='flex gap-4 lg:w-1/2 p-10 items-start flex-col'>

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

      </form>

      <div className=' lg:w-1/2 border-l-2 p-10'>
        <h1 className='text-3xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
        </div>
      </div>
    </div>
  )
}

export default App
