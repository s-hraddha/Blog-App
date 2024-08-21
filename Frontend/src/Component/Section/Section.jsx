import React from 'react'
import bg from '../../assets/bg.jpg'
const Section = () => {
  return (
    <div
      className="w-full h-screen bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: '100% 100%' }}>
      <h1 className='text-5xl font-bold text-center py-20 text-blue-800'>WELCOME TO CONNECT BLOG</h1>
      <div className='flex justify-center'>
      <button type='button' className='bg-blue-800 text-white px-3 py-2 cursor-pointer rounded-full mr-7 justify-center'>Create Post</button>
      </div>
    </div>
  )
}

export default Section
