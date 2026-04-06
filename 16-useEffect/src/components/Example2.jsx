import React, { useEffect, useState } from 'react'

const Example2 = () => {

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function aChange() {
    console.log('A ki value change ho gayi');
  }

  function bChange() {
    console.log('B ki value change ho gayi');
  }

  useEffect(() => {
    aChange();
    console.log('use effect is running...')
  }, [a]);

  return (
    <div className='flex flex-col justify-center items-center gap-5 h-screen w-screen bg-sky-950 text-white text-2xl font-bold'>

      <h1>A is -- {a}</h1>
      <h1>B is -- {b}</h1>

      <div className='flex gap-5 text-lg font-normal'>
        <button
          className='py-3 px-6 rounded-3xl bg-gray-500'
          onClick={() => {
            setA(a + 1);
          }}

        >Change A</button>
        <button
          className='py-3 px-6 rounded-3xl bg-gray-500'
          onClick={() => {
            setB(b - 1);
          }}
        >Change B</button>
      </div>
    </div>
  )
}

export default Example2
