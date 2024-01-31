import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#383838] flex justify-center items-center p-4'>
        <form  className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'></p>
            </div>
            <input className='bg-[#ffffff] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ffffff]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ffffff] p-2' name="message" rows="5" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-grey-600 hover:border-grey-600 px-4 py-3 my-8 mx-auto flex items-center'>Connect</button>
        </form>
    </div>
  )
}

export default Contact