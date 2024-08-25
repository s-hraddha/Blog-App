import React, { useEffect, useState } from 'react'
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

const PostDetails = () => {
    const postId = useParams().id
    const [post, setPost] = useState({})
    const [username, setUsername] = useState("")
    const [comment, setComment] = useState("")
    const navigate = useNavigate();

    const fetchPost = async () => {
        try {
            const res = await axios.get("http://localhost:3000/posts/" + postId)
            setPost(res.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleDeletePost = async () => {

        try {
            const res = await axios.delete("http://localhost:3000/posts/" + postId, { withCredentials: true })
            console.log(res.data)
            navigate("/")

        }
        catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        fetchPost()
    }, [postId])

    const handleComment = async (e) => {
        e.preventDefault();
        const Comment = {
          username,
          comment
        }
        try {
          const res = await axios.post("http://localhost:3000/comment", Comment, { credentials: true })
          console.log(res.data)
          navigate('/posts'+postId)
    
        }
        catch (err) {
          console.log(err)
        }
      }

    return (
        <div>
            <div className='px-8 md:px-[200px] mt-8'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-2xl font-bold text-black md:text-3xl'>{post.title}</h1>
                    <div className='flex items-center justify-center space-x-2'>
                        <p className="cursor-pointer" onClick={() => navigate("/update/" + postId)} ><BiEdit /></p>
                        <p className="cursor-pointer" onClick={handleDeletePost}><MdDelete /></p>
                    </div>
                </div>
                <div className='flex items-center justify-between mt-2 md:mt-4'>
                    <p>{post.createdBy}</p>
                    <div className='flex space-x-2'>
                        <p>{new Date(post.createdAt).toString().slice(0, 15)}</p>
                    </div>
                </div>
                <p className='flex space-x-1 py-3'><span className='font-bold'>summary:</span>{post.summary}</p>
                <p className='text-justify'>{post.detail}</p>
                <div className='flex flex-col mt-4'>
                    <h3 className='mt-6 mb-4 font-bold'>Comments</h3>
                    <div className='px-2 py-2 bg-slate-200 rounded-lg my-2'>
                        <div className='flex items-center justify-between'>
                            <h3 className='font-bold '>@sia</h3>
                            <div className='flex justify-center items-center space-x-4'>
                                <p className='text-md'> 21-8-24</p>
                                <div className='flex items-center justify-center space-x-2'>
                                    <p><BiEdit /></p>
                                    <p><MdDelete /></p>
                                </div>
                            </div>
                        </div>
                        <p className='px-4 mt-2'>Nice information</p>
                    </div>
                </div>
                <div className='flex flex-col mt-4 md:flex-row md:items-center'>
                    <input onChange={(e) =>setComment(e.target.value)} type='text' placeholder='Write comment' className=' w-full md:w-[90%] border-2 border-blue-800 outline-0 rounded-md px-4 py-2 mt-2 md:mt-0 md:mr-2' />
                    <button  onClick={handleComment} className='bg-blue-800 px-4  py-2 text-sm text-white w-full md:w-auto mt-2 md:mt-0'>Add Comment</button>
                </div>
            </div>
        </div>
    )
}

export default PostDetails
