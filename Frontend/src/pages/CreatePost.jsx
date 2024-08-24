import React from 'react'

const CreatePost = () => {
  return (
    <div>
      <div className='px-6 md:px-[200px] mt-8'>
        <h1 className='font-bold md:text-2xl text-xl mt-8 text-center'>Create a Post</h1>
        <form className='w-full flex flex-col space-y-4 md:space-y-8'>
          <input type='text' placeholder='Enter post Title' className='px-4 py-2'/>
          <input type='text' placeholder='Enter post summary' className='px-4 py-2'/>
          <input type='text' placeholder='Enter post Detail' className='px-4 py-2'/>
        </form>

      </div>
    </div>
  )
}

export default CreatePost
