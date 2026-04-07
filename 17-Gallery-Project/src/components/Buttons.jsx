import React from 'react'

const Buttons = (props) => {
    return (
        <div>
            <div className='flex justify-center gap-6 items-center mt-7 p-4'>
                <button
                    style={{opacity: props.index == 1 ? 0.5 : 1}}
                    className='bg-amber-400 text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold'
                    onClick={() => {
                        if (props.index > 1) {
                            props.setIndex(props.index - 1)
                            props.setUserData([])
                        }
                    }}
                >Prev</button>

                <h4>Page {props.index}</h4>

                <button
                    className='bg-amber-400 text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold'
                    onClick={() => {
                        props.setUserData([])
                        props.setIndex(props.index + 1)
                    }}
                >Next</button>
            </div>
        </div>
    )
}

export default Buttons
