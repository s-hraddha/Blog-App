import React from 'react'
import { Link } from 'react-router-dom'

const HomePosts = () => {
    return (
        <div className='w-full flex flex-col md:flex-row mt-8 space-y-2 md:space-y-0 md:space-x-2'>
            <div className='flex flex-col w-full md:w-[65%] p-4 bg-white shadow-md rounded-lg border border-gray-200'>
                <h1 className='text-xl font-bold md:mb-2 mb-1 md:text-xl lg:text-2xl text-center '>Uses of Blogging</h1>
                <div className='flex flex-col md:flex-row md:items-center justify-between mb-2 md:mb-4'>
                    <p className='text-sm font-semibold mb-1 md:mb-0'>@anonymous</p>
                    <div className='flex'>
                        <p className='text-sm font-semibold'>20/06/2024</p>
                    </div>
                </div>
                <p className='text-sm md:text-base lg:text-lg text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor ea quisquam sunt, laborum excepturi culpa! Reiciendis, ipsa. Ducimus, nulla voluptatibus.</p>
                <p className='font-semibold text-end hover:underline'><Link to='/posts/:id'>View More...</Link></p>
            </div>
        </div>

    )
}

export default HomePosts
