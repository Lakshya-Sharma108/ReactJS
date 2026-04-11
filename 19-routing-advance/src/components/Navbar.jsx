import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-4 px-8 bg-cyan-900'>
      <h2 className='text-xl font-bold'>Lakshaya</h2>
      <div className='flex gap-8'>

        {/* 
            Why to use Link instead of anchor tag <a> in react router dom?
            Ans: Because when we use anchor tag <a> it will reload the whole page and we will lose the state of our application but when we use Link it will not reload the page and it will only change the url and render the component which is associated with that url.
        */}
        <Link className='text-lg font-medium' to="/">Home</Link>
        <Link className='text-lg font-medium' to="/about">About</Link>
        <Link className='text-lg font-medium' to="/product">Product</Link>
      </div>
    </div>
  )
}

export default Navbar
