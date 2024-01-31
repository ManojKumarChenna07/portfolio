import React from "react";  
import { useState } from "react";
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi'
import { FaBars,FaTimes,FaGithub,FaLinkedinIn, FaFacebook } from 'react-icons/fa';
function Navbar(){

    const [nav,setNav]=useState(false);
    const handleClick=()=>setNav(!nav);

    return(
        <div  className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <h2 className="font-mono text-2xl font-bold ">ManojKumar</h2>
            </div>

            <ul className="hidden md:flex">
                <li>home</li>   
                <li>about</li>
                <li>skills</li>
                <li>work</li>
            </ul>
            
            <div onClick={handleClick} className=" md:hidden z-10">
               {!nav ? <FaBars/>:<FaTimes/>}
            </div>
                
    {/*mobile*/}
        <ul className={!nav? 'hidden':"absolute left-0 top-0  w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
            <li className="py-6 text-4xl">home</li>   
            <li className="py-6 text-4xl">about</li>
            <li className="py-6 text-4xl">skills</li>
            <li className="py-6 text-4xl">work</li>
        </ul>
        
        {/*Socials*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Linkedin <FaLinkedinIn size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#EA4624]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
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