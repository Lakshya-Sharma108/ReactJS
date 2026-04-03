import React, { use, useActionState, useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task]

    copyTask.push({title, details})
    setTask(copyTask)

    console.log(copyTask);
    

    setTitle('');
    setDetails('');
  }


  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={submitHandler} className='flex gap-4 lg:w-1/2 p-10 items-start flex-col'>

        <h1 className='text-4xl font-bold'>Add Notes</h1>

        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 py-2 border-2 rounded font-medium outline-none w-full'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);

          }}
        />

        <textarea
          type="text"
          placeholder='Write Details Here'
          className='px-5 py-2 h-32 border-2 rounded font-medium outline-none w-full'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button
          className='bg-white active:scale-95 text-black px-5 py-2 rounded font-medium outline-none w-full'
        > Add Notes
        </button>

      </form>

      <div className=' lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
        </div>
      </div>
    </div>
  )
}

export default App
