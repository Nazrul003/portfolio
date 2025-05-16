"use client";

import React, { useEffect } from 'react'
import { FaHome, FaCode, FaLaptopCode, FaBriefcase, FaUser } from "react-icons/fa";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import { FaMinus } from "react-icons/fa";

import { useState } from 'react'
export default function Navbar() {
  const [isSmall, setIsSmall] = useState(true)

  const navData = [
    {
      id: 1,
      name: "Home",
      icon: <FaHome />,
      link: "#home",
    },
    {
      id: 2,
      name: "Skills",
      icon: <FaCode />,
      link: "#skills",
    },
    {
      id: 3,
      name: "Projects",
      icon: <FaLaptopCode />,
      link: "#projects",
    },
    {
      id: 4,
      name: "Experience",
      icon: <FaBriefcase />,
      link: "#experience",
    },
    {
      id: 5,
      name: "About Me",
      icon: <FaUser />,
      link: "#about",
    },
  ];
   
  useEffect(() => {
    const handleResize = () => window.innerWidth >= 768 && setIsSmall(true);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className='hidden md:flex flex-row justify-between sticky top-0 z-50 bg-[#18191a]/50 backdrop-blur-md'>
        <div className='relative flex justify-center items-center'>
          <h2 className='absolute top-[18px] -right-[82px] text-white text-3xl font-bold'>
            N
          </h2>
          <PiBracketsCurlyBold className='absolute top-2 -right-25 text-6xl text-gray-500 font-bold ' />
        </div>
        <div>
          <ul className='flex flex-row gap-10  py-4'>
            {
              navData.map((nav, index) => (
                <li key={index} className={`px-3 py-2 hover:bg-[#0D0D0D] rounded-lg ${nav.id === 5 ? 'md:mr-5' : ''}`}>
                  <a
                    href={nav.link}
                    className='text-white font-semibold flex flex-row ' >
                    <span className='mt-1 mr-1'>
                      {nav.icon}
                    </span>
                    {nav.name}

                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>

      <div className="md:hidden sticky top-0  flex flex-row justify-between z-50 bg-[#18191a] p-2">
        <div className='relative flex justify-center items-center'>
          <h2 className='absolute -top-0 -right-[50px] text-white text-lg font-bold'>
            N
          </h2>
          <PiBracketsCurlyBold className='absolute -top-0 -right-[58px] text-3xl text-gray-500 font-bold ' />
        </div>
        <div className=' flex justify-end'>
       <button className='text-white text-3xl text-right' onClick={()=>setIsSmall(!isSmall)}>
       {isSmall===true?<IoMenu />:<FaMinus />}
        </button>
       </div>
    
       {!isSmall && (
        <div className="md:hidden flex flex-col items-start bg-[#18191a] transition-all duration-300 ease-in-out p-4 absolute top-[46px] right-0 w-[250px] z-40">
          {navData.map((nav) => (
            <a key={nav.id} href={nav.link} className="text-white py-2 rounded-lg px-3 hover:bg-[#0D0D0D] text-lg flex items-center gap-2">
              {nav.icon}
              {nav.name}
            </a>
          ))}
        </div>
      )}
      </div>
    </>
  )
}
