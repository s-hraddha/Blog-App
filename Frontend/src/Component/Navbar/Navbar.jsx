import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from "react-icons/bs";


const Navbar = () => {
    const user= false
    return (
        <div className='flex justify-between px-3 py-4 border-b-4 items-center'>
            <h1 className='text-lg md:text-xl font-extrabold text-blue-800 mi-2'><Link to="/">Connect Blog</Link></h1>
            <div className='flex justif items-center space-x-0 sm:px-4 ml-8'>
                <p className='cursor-pointer'><BsSearch /></p>
                <input className=' outline-none px-1 ' placeholder='search' type='text' />
            </div>

            <div className='flex items-center justify-center space-x-2 md:space-x-4 px-3 sm:px-0'>
                {user ? <h3><Link to="/posts">New Post</Link></h3> : <h3><Link to="/login">Login</Link></h3>}
                {user ? <h3>Profile</h3> : <h3><Link to="/register">Register</Link></h3>}
            </div>
        </div>
    )
}

export default Navbar
