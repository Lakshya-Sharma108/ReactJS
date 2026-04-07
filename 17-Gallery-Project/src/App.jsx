import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card';

const App = () => {

  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
    setUserData(response.data)
  }

  useEffect(() => {
    getData()
  }, [index]);



  let printUserData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {

      return <div key={idx}>
        <Card elem={elem} />
      </div>
    })
  }


  return (
    <div className='bg-black h-screen overflow-auto p-4 text-white'>
      <div className='flex h-[82%] flex-wrap gap-4 p-2'>
        {printUserData}
      </div>

      <div className='flex justify-center gap-6 items-center p-4'>
        <button
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold'
          onClick={()=>{
            if(index > 1){
              setIndex(index-1)
              setUserData([])
            }
          }}
        >Prev</button>

        <button
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold'
          onClick={()=>{
            setUserData([])
            setIndex(index+1)
          }}
        >Next</button>
      </div>
    </div>
  )
}

export default App
