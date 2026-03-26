import React from 'react'

const RightCard = () => {
    return (
        <div className='h-full w-80 rounded-4xl overflow-hidden relative'>
            <img className='h-full w-full object-cover' src="https://i.pinimg.com/736x/55/82/e3/5582e315cd1adbee00a58665b198eba2.jpg" alt="" />
            <div className='absolute top-0 left-0 p-8 h-full w-full flex flex-col justify-between'>
                <h2 className='bg-white text-2xl font-semibold rounded-full h-14 w-14 flex justify-center items-center '>1</h2>
                <div>
                    <p className='text-xl leading-normal text-white mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit ea officia, voluptatibus mollitia!</p>
                    <div className='flex justify-between'>
                        <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>Satisfied</button>
                        <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RightCard
