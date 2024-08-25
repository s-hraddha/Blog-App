import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState} from 'react'
import axios from 'axios'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleLogin = async(e)=>{
      e.preventDefault();
        try{
            const res = await axios.post("http://localhost:3000/login", {
                email,
                password
            },{withCredentials:true})

            console.log("login successfully")
            navigate('/')
          
        }
        catch (err) {
            setError("Something went wrong. Please try again.")
            console.log(err)
        }
    }
     

    return (
        <div className='w-full flex justify-center items-center h-[50vh] mt-20 '>
            <div className='w-[80%] md:w-[25%] p-6 bg-slate-200  border border-gray-300 rounded-lg shadow-lg'>
                <div className='flex flex-col space-y-4'>
                    <h1 className='text-xl font-bold text-center'>Log in to your Account</h1>
                    <input onChange={(e) => setEmail(e.target.value)}  className='w-full px-4 py-2 border-2 border-blue-800 outline-0 rounded-md' type='email' placeholder='Enter your email' value={email} required />
                    <input onChange={(e) => setPassword(e.target.value)} className='w-full px-4 py-2 border-2 border-blue-800 outline-0 rounded-md' type='password' placeholder='Enter Your Password' value={password} required />
                    <button onClick={handleLogin} className='px-4 py-2 text-lg font-bold text-white bg-blue-800 rounded-lg hover:bg-slate-200 hover:text-black hover:border-2 border-blue-800 '>Log In</button>
                    {error && <h3 className='text-red-500 text-sm'>{error}</h3>}
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