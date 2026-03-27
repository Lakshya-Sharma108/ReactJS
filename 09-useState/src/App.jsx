import React from 'react'
import { use } from 'react'
import { useState } from 'react'

const App = () => {

  let [num, setNum] = useState(0)

  return (



    <div>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>Increment</button>
    </div>
  )
}

export default App
