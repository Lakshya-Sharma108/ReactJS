import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = () => {
    return (
        <div className='h-full w-80 rounded-4xl overflow-hidden relative'>
            <img className='h-full w-full object-cover' src="https://i.pinimg.com/736x/55/82/e3/5582e315cd1adbee00a58665b198eba2.jpg" alt="" />

            <RightCardContent />
        </div>
    )
}

export default RightCard
