import React from 'react'

const Center1 = () => {
    return (
        <div className='flex justify-between'>
            <div className="px-15 font-medium text-neutral-500">
                <h2>ELEVATE YOUR GAME</h2>
                <h1 className='text-6xl text-black font-bold py-2 tracking-tight'>Comprehensive Tennis <br /> Training for Everyone</h1>
            </div>
            <div className='flex gap-2 items-end mx-20'>
                <h1 className='px-4 py-3 bg-black rounded-full text-white flex items-center'>←</h1>
                <h1 className='px-4 py-3 bg-black rounded-full text-white flex items-center'>→</h1>
            </div>
        </div>
    )
}

export default Center1;