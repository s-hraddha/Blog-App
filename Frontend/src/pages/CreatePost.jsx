import { useState } from "react"
import React from 'react'
import { Navigate, useNavigate } from "react-router-dom"
import axios from 'axios'

const CreatePost = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [summary, setSummary] = useState("")
  const [detail, setDetail] = useState("")
  const [createdBy, setCreatedBy] = useState("")

  const handleCreate = async (e) => {
    e.preventDefault();
    const post = {
      title,
      summary,
      detail,
      createdBy,
    }
    try {
      const res = await axios.post("http://localhost:3000/posts", post, { credentials: true })
      console.log(res.data)
      navigate('/')

    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <div className='px-6 md:px-[200px] mt-8  bg-slate-300'>
        <h1 className='font-bold md:text-2xl text-xl mt-8 text-center'>Create a Post</h1>
        <form className='w-full flex flex-col space-y-4 md:space-y-8'>
          <input onChange={(e) => setCreatedBy(e.target.value)} type='text' placeholder='Enter Name' className='px-4 py-2' />
          <input onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Enter post Title' className='px-4 py-2' />
          <input onChange={(e) => setSummary(e.target.value)} type='text' placeholder='Enter post summary' className='px-4 py-2' />
          <textarea onChange={(e) => setDetail(e.target.value)} rows={10} cols={30} className='px-4 py-2' placeholder='Enter Post Details' />
          <button onClick={handleCreate} className='bg-blue-800 px-4 w-full py-2 text-white font-semibold md:w-auto mt-2 md:mt-0 md:text-xl text-lg hover:bg-slate-200 hover:text-black hover:border-2 border-blue-800 '>Add Post</button>
        </form>
      </div>
    </div>
  )
}

export default CreatePost
