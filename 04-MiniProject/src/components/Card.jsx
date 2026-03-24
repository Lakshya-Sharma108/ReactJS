import React from 'react'
import { Bookmark } from 'lucide-react'


const Card = () => {
  return (
    <div>
      <div className="card">
        <div>
          <div className="top">
            <img src="https://i.pinimg.com/736x/89/61/31/8961313816abd158bb3beae2edf64f63.jpg" alt="" />
            <button>Save <Bookmark /></button>
          </div>
          <div className="center">
            <h3>Amazon<span>5 days ago</span></h3>
            <h2>Senior UI/UX Designer</h2>
            <div className='tag'>
              <h4>Part Time</h4>
              <h4>Senior Level</h4>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>$120/hr</h3>
            <p>Mumbai, India</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
