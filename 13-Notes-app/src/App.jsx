import React, { use, useActionState, useState } from 'react'
import { X } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task]

    copyTask.push({title, details})
    setTask(copyTask)    

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
        <div className='flex flex-wrap items-start gap-5 mt-5 h-full overflow-auto'>
          {task.map(function(elem, idx){

            return <div key={idx} className='relative h-50 w-47 rounded-xl py-8 px-4 text-black bg-[url("https://imgs.search.brave.com/pCoCe5YPIJki9c8Eu94uAF4g55o-BawHsAQTImhJCok/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzcv/MTUyLzY3MS9zbWFs/bC9zdGlja3ktbm90/ZS1wYXBlci1iYWNr/Z3JvdW5kLWZyZWUt/cG5nLnBuZw")] bg-cover bg-center'>
              <h2><X /></h2>
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-2 leading-tight font-medium text-gray-500'>{elem.details}</p>
            </div>
          })}
        </div>
      </div>
    </div> 
  )
}

export default App
