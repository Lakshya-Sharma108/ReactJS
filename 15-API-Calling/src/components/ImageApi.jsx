import axios from 'axios';
import React from 'react'
import { useState } from 'react';


const ImageApi = () => {

    const [data, setData] = useState();

    const getData = async () => {
        const response = await axios.get('https://picsum.photos/v2/list');
        setData(response.data);

        console.log(response.data[0].url);
    }

  return (
    <div>
      <button onClick={getData}>Get Images</button>
      <div>
        {data && data.map(function (elem, idx){
            return <img key={idx} src={elem.download_url} alt="image" width="200px" height="200px" style={{margin: "10px"}} />
        })}
      </div>
    </div>
  )
}

export default ImageApi
