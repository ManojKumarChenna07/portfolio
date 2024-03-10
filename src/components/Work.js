import React from 'react';
import { data } from '../data/data';

const Work = () => {
  // Projects data
  const projects = data;

  return (
    <div name='work' className='w-full h-screen bg-[#383838] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
          {/* You can add more description if needed */}
          <p className='py-4'>{/* Description or additional content here */}</p>
        </div>

        {/* Grid for projects */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center py-8'>
          {/* Individual Project Items */}
          {projects.map((project, index) => (
            <div
              key={index}
              className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md p-4'
            >
              {/* Project Name */}
              <p className='my-4 text-xl font-bold'>{project.name}</p>
              {/* Optional: Project description, if available */}
              {project.description && <p>{project.description}</p>}
              {/* GitHub Link */}
              <div className='mt-4'>
                <a href={project.github} target='_blank' rel='noopener noreferrer'>
                  <button className='bg-white text-gray-700 font-bold py-2 px-4 rounded-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
