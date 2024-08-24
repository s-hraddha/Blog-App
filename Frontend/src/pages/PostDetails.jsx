import React from 'react'
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const PostDetails = () => {
    return (
        <div>
            <div className='px-8 md:px-[200px] mt-8'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-2xl font-bold text-black md:text-3xl'>Uses of Blogging</h1>
                    <div className='flex items-center justify-center space-x-2'>
                        <p><BiEdit /></p>
                        <p><MdDelete /></p>
                    </div>
                </div>
                <div className='flex items-center justify-between mt-2 md:mt-4'>
                    <p>@anonymous</p>
                    <div className='flex space-x-2'>
                        <p>20-08-2024</p>
                    </div>
                </div>
                <p className='flex space-x-1 py-3'><h3 className='font-bold'>summary:</h3> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt corporis facere mollitia, culpa voluptate ullam.</p>
                <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur impedit blanditiis fugiat non unde! Minus doloremque ea aspernatur commodi rem, sit eveniet asperiores voluptatibus illo omnis laboriosam optio maxime deleniti odio dignissimos tempore. Quod corrupti reprehenderit non vel accusamus doloribus error quisquam iure tempore optio porro labore, architecto sint illum, aperiam qui veniam maxime quis sequi. Illum vero ipsam iusto quos nihil velit sed dolore totam molestias hic blanditiis consequuntur cum, enim explicabo soluta fuga natus magnam animi dolorum deserunt! Dolorem iusto nulla reprehenderit eos veniam vero. Repellendus, corporis eligendi.</p>
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
                 <input type='text' placeholder='Write comment' className=' w-full md:w-[90%] border-2 border-blue-800 outline-0 rounded-md px-4 py-2 mt-2 md:mt-0 md:mr-2'/>
                 <button className='bg-blue-800 px-4  py-2 text-sm text-white w-full md:w-auto mt-2 md:mt-0'>Add Comment</button>
                </div>
            </div>
        </div>
    )
}

export default PostDetails
