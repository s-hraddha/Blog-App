import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between px-3 py-4 border-b-4 items-center'>
        <h1 className='text-xl font-extrabold text-blue-800 mi-2'>Connect Blog</h1>
        <div className='flex flex-row'>
            <ul className='flex flex-row space-x-7 px-15'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <button type="button" className='bg-blue-800 text-white px-3 py-2 cursor-pointer rounded-full mr-7'>Sign In</button>
        </div>
    )
}

export default Navbar
