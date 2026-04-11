import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-4 px-8 bg-cyan-900'>
      <h2 className='text-xl font-bold'>Lakshaya</h2>
      <div className='flex gap-8'>
        <a className='text-lg font-bold' href="/">Home</a>
        <a className='text-lg font-bold' href="/about">About</a>
        <a className='text-lg font-bold' href="/contact">Contact</a>
      </div>
    </div>
  )
}

export default Navbar
