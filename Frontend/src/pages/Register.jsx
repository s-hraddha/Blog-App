import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [error, setError] = useState("")

    const handleRegister = async () => {
        console.log({ username, email, password, phoneNumber });
        try {
            const res = await axios.post("http://localhost:3000/register", {
                username,
                email,
                password,
                phoneNumber
            })
            setUsername(res.data.username)
            setEmail(res.data.email)
            setPassword(res.data.password)
            setPhoneNumber(res.data.phoneNumber)
            setError(false)
            navigate("/login")
        }
        catch (err) {
            setError(true)
            console.log(err)
        }
    }

    console.log(username, email)
    return (
        <div className='w-full flex justify-center items-center h-[75vh] '>
            <div className='w-[90%] md:w-[50%] lg:w-[40%] p-6 bg-slate-200  border border-gray-300 rounded-lg shadow-lg'>
                <div className='flex flex-col space-y-4'>
                    <h1 className='text-xl font-bold text-center'>Create an Account</h1>
                    <div className='flex p-6 space-x-4'>
                        <input onChange={(e) => setUsername(e.target.value)} className='w-full px-4 py-2 border-2 border-blue-800 outline-0 rounded-md' type='text' placeholder='Enter your Username' />
                        <input onChange={(e) => setEmail(e.target.value)} className='w-full px-4 py-2 border-2 border-blue-800 outline-0 rounded-md' type='text' placeholder='Enter your email' />
                    </div>
                    <div className='flex p-6 space-x-4'>
                        <input onChange={(e) => setPassword(e.target.value)} className='w-full px-4 py-2 border-2 border-blue-800 outline-0 rounded-md' type='password' placeholder='Enter Your Password' />
                        <input onChange={(e) => setPhoneNumber(e.target.value)} className='w-full px-4 py-2 border-2 border-blue-800 outline-0 rounded-md' type='text' placeholder='Enter Your Phone No.' />
                    </div>
                    <button onClick={handleRegister} className='px-4 py-2 text-lg font-bold text-white bg-blue-800 rounded-lg hover:bg-slate-200 hover:text-black hover:border-2 border-blue-800 '>Log In</button>
                    {error && <h3 className='text-red-500 text-sm'>Something went wrong</h3>}
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