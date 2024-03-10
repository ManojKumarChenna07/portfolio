import React from "react";  
import { Link } from "react-scroll";
import resume from '../assests/resume.jpg'
import { useState } from "react";
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi'
import { FaBars,FaTimes,FaGithub,FaLinkedinIn } from 'react-icons/fa';
function Navbar(){

    const [nav,setNav]=useState(false);
    const handleClick=()=>setNav(!nav);

    return(
        <div  className='fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#383838] text-gray-300'>
            <div>
                <h2 className="font-mono text-2xl font-bold ">ManojKumar</h2>
            </div>
            <ul className='hidden md:flex'>
            <li>
              <Link to='home' smooth={true} duration={1000}>
                Home
              </Link>
            </li>
            <li>
              <Link to='about' smooth={true} duration={1000}>
                About
              </Link>
            </li>
            <li>
              <Link to='skills' smooth={true} duration={1000}>
                Skills
              </Link>
            </li>
            <li>
              <Link to='work' smooth={true} duration={1000}>
                Work
              </Link>
            </li>
            <li>
              <Link to='contact' smooth={true} duration={1000}>
                Contact
              </Link>
            </li>
          </ul>
            
            <div onClick={handleClick} className=" md:hidden z-10">
               {!nav ? <FaBars/>:<FaTimes/>}
            </div>
                
    {/*mobile*/}
          {/* Mobile menu */}
      <ul
      className={
        !nav
          ? 'hidden'
          : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
      }
    >
      <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to='home' smooth={true} duration={500}>
          Home
        </Link>
      </li>
      <li className='py-6 text-4xl'>
        {' '}
        <Link onClick={handleClick} to='about' smooth={true} duration={500}>
          About
        </Link>
      </li>
      <li className='py-6 text-4xl'>
        {' '}
        <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
          Skills
        </Link>
      </li>
      <li className='py-6 text-4xl'>
        {' '}
        <Link onClick={handleClick} to='work' smooth={true} duration={500}>
          Work
        </Link>
      </li>
      <li className='py-6 text-4xl'>
        {' '}
        <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
          Contact
        </Link>
      </li>
    </ul>
        
        {/*Socials*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/manojkumar-chenna-a9555a25b/'
            >
              Linkedin <FaLinkedinIn size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/ManojkumarChenna'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#EA4624]'>
          <a
          className='flex justify-between items-center w-full text-gray-300'
          href='mailto:chennamanojkumar57@gmail.com'
        >
          Email <HiOutlineMail size={30} />
        </a>
        
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={resume}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
    )
}

export default Navbar