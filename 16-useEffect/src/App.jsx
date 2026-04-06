import React, { useEffect, useState } from 'react'

const App = () => {

  // What is useEffect?
  // useEffect is a hook that allows us to perform side effects in our components. It is a replacement for the lifecycle methods in class components. It is called after the component is rendered and it can be used to fetch data, update the DOM, and perform other side effects.

  const [num, setnum] = useState(0);
  const [num2, setnum2] = useState(100);

  useEffect(() => {
    console.log('use effect is running...');

  }, [num]);


  return (
    <div>
      <h1>num: {num}</h1>
      <h1>num2: {num2}</h1>

      <button
        onMouseEnter={
          () =>{ setnum(num + 1)
        }}

        onMouseLeave={()=>{
          setnum2(num2 + 10)
        }}
      >
        Hover
      </button>
    </div>
  )
}

export default App
