import React from 'react'
import HomePosts from '../Component/HomePosts'

const Front = () => {
  return (
    <div className='flex flex-col items-center p-4 ml-[100px]  md:px-[200px]'>
      <HomePosts/>
      <HomePosts/>
      <HomePosts/>
      <HomePosts/>
      <HomePosts/>
    </div>
  )
}

export default Front
