// import React from 'react'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";

const EditPost = () => {

    const postId = useParams().id
    const navigate = useNavigate();
    const [title, setTitle] = useState("")
    const [summary, setSummary] = useState("")
    const [detail, setDetail] = useState("")

    const fetchPost = async () => {
        try {
            const res = await axios.get("http://localhost:3000/posts/" + postId)
            setTitle(res.data.title)
            setSummary(res.data.summary)
            setDetail(res.data.detail)
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        const post = {
            title,
            summary,
            detail,
        }
        try {
            const res = await axios.put("http://localhost:3000/posts/" + postId,post, { withCredentials: true })
            navigate("/posts/"+res.data._id)
        }
        catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        fetchPost()
    }, [postId])

    return (
        <div>
            <div className='px-6 md:px-[200px] mt-8  bg-slate-300'>
                <h1 className='font-bold md:text-2xl text-xl mt-8 text-center'>Update a Post</h1>
                <form className='w-full flex flex-col space-y-4 md:space-y-8'>
                    <input onChange={(e) => setTitle(e.target.value)} value={title} type='text' placeholder='Enter post Title' className='px-4 py-2' />
                    <input onChange={(e) => setSummary(e.target.value)} value={summary} type='text' placeholder='Enter post summary' className='px-4 py-2' />
                    <textarea onChange={(e) => setDetail(e.target.value)} value={detail} rows={10} cols={30} className='px-4 py-2' placeholder='Enter Post Details' />
                    <button onClick={handleUpdate} className='bg-blue-800 px-4 w-full py-2 text-white font-semibold md:w-auto mt-2 md:mt-0 md:text-xl text-lg hover:bg-slate-200 hover:text-black hover:border-2 border-blue-800 '>Update Post</button>
                </form>
            </div>
        </div>
    )
}

export default EditPost