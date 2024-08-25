import React, { useEffect, useState } from 'react'
import HomePosts from '../Component/HomePosts'
import axios from 'axios'

const Front = () => {
  const [posts, setPosts] = useState([])
  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/posts")
      console.log(res.data)
      setPosts(res.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])
  return (
    <div className='flex flex-col items-center p-4 ml-[100px]  md:px-[200px]'>
      {/* <HomePosts />
      <HomePosts />
      <HomePosts />
      <HomePosts />
      <HomePosts /> */}
      {posts.map((post)=>(
        <HomePosts key={post._id} post={post}/>
      ))}
    </div>
  )
}

export default Front
