import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([]);

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=50')

    setUserData(response.data)

    console.log(userData);
  }

  let printUserData = 'No User Available'

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {

      return <div key={idx}>
        <a href={elem.url}>
          <div className='h-40 w-44 overflow-hidden rounded'>
            <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
          </div>
          <h2 className='font-bold text-lg'>{elem.author}</h2>
        </a>
      </div>
    })
  }

  return (
    <div className='bg-black h-screen overflow-auto p-4 text-white'>
      <button
        onClick={getData}
        className='bg-green-600 active:scale-95 px-5 py-2 rounded '
      >
        Get Data</button>

      <div className='flex flex-wrap gap-4'>
        {printUserData}
      </div>
    </div>
  )
}

export default App
