import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([]);

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=30')
    
    setUserData(response.data)

    console.log(userData);
  }

  let printUserData = 'No User Available'

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return idx
    })
  }

  return (
    <div className='bg-black h-screen p-4 text-white'>
      <button
        onClick={getData}
        className='bg-green-600 active:scale-95 px-5 py-2 rounded '
      >
      Get Data</button>

      <div>
        {printUserData}
      </div>
    </div>
  )
}

export default App
