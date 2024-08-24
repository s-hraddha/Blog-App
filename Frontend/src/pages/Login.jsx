import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='w-full flex justify-center items-center h-[50vh] mt-20 '>
            <div className='w-[80%] md:w-[25%] p-6 bg-slate-200  border border-gray-300 rounded-lg shadow-lg'>
                <div className='flex flex-col space-y-4'>
                    <h1 className='text-xl font-bold text-center'>Log in to your Account</h1>
                    <input className='w-full px-4 py-2 border-2 border-blue-800 outline-0 rounded-md' type='text' placeholder='Enter your email' />
                    <input className='w-full px-4 py-2 border-2 border-blue-800 outline-0 rounded-md' type='password' placeholder='Enter Your Password' />
                    <button className='px-4 py-2 text-lg font-bold text-white bg-blue-800 rounded-lg hover:bg-slate-200 hover:text-black hover:border-2 border-blue-800 '>Log In</button>
                    <div className='flex justify-center items-center space-x-4'>
                     <p>New here?</p>
                     <p className='hover:underline '><Link to="/register">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
