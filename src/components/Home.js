import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#383838]'>
    {/* Container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <p className='text-[#ffffff] font-bold'>Hi, my name is</p>
      <h1 className='text-4xl sm:text-6xl font-bold text-[#ffffff]'>
        Manoj Kumar
      </h1>
      <h2 className='text-4xl sm:text-7xl font-bold text-[#ffffff]'>
        I'm a Web Developer.
      </h2>
      <p className='animate-pulse text-[#ffffff] py-4 max-w-[700px]'>
        I’m a Web developer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building responsive full-stack web applications.
      </p>
      <div>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-amber-900 hover:border-white-600'>
          View Work
          <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3 ' />
          </span>
        </button>
      </div>
    </div>
  </div>
  )
}

export default Home