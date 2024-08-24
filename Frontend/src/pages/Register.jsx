import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='w-full flex justify-center items-center h-[75vh] '>
            <div className='w-[90%] md:w-[50%] lg:w-[40%] p-6 bg-slate-200  border border-gray-300 rounded-lg shadow-lg'>
                <div className='flex flex-col space-y-4'>
                    <h1 className='text-xl font-bold text-center'>Create an Account</h1>
                    <div className='flex p-6 space-x-4'>
                        <input className='w-full px-4 py-2 border-2 border-blue-800 outline-0 rounded-md' type='text' placeholder='Enter your Username' />
                        <input className='w-full px-4 py-2 border-2 border-blue-800 outline-0 rounded-md' type='text' placeholder='Enter your email' />
                    </div>
                    <div className='flex p-6 space-x-4'>
                        <input className='w-full px-4 py-2 border-2 border-blue-800 outline-0 rounded-md' type='password' placeholder='Enter Your Password' />
                        <input className='w-full px-4 py-2 border-2 border-blue-800 outline-0 rounded-md' type='password' placeholder='Enter Your Phone No.' />
                    </div>
                    <button className='px-4 py-2 text-lg font-bold text-white bg-blue-800 rounded-lg hover:bg-slate-200 hover:text-black hover:border-2 border-blue-800 '>Log In</button>
                    <div className='flex justify-center items-center space-x-4'>
                        <p>Already Registered ?</p>
                        <p className='hover:underline '><Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register