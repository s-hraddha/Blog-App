// import React from 'react'

const EditPost = () => {
    return (
        <div>
            <div className='px-6 md:px-[200px] mt-8  bg-slate-300'>
                <h1 className='font-bold md:text-2xl text-xl mt-8 text-center'>Create a Post</h1>
                <form className='w-full flex flex-col space-y-4 md:space-y-8'>
                    <input type='text' placeholder='Enter post Title' className='px-4 py-2' />
                    <input type='text' placeholder='Enter post summary' className='px-4 py-2' />
                    <textarea rows={10} cols={30} className='px-4 py-2' placeholder='Enter Post Details' />
                    <button className='bg-blue-800 px-4 w-full py-2 text-white font-semibold md:w-auto mt-2 md:mt-0 md:text-xl text-lg hover:bg-slate-200 hover:text-black hover:border-2 border-blue-800 '>Update Post</button>
                </form>
            </div>
        </div>
    )
}

export default EditPost