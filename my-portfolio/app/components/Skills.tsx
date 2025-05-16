"use client"; 
import React from 'react';
import { FaReact, FaNodeJs, FaCode, FaLaptopCode, FaCubes } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiC, SiCplusplus, SiGraphql, SiMongodb, SiPostgresql, SiRedux, SiNextdotjs, SiJavascript, SiTypescript
  ,SiHtml5, SiCss3
 } from "react-icons/si";
import { HiCode } from "react-icons/hi";
import Title from './ui/Title';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

function Grid() {
  const {ref, inView} = useInView({triggerOnce: false}); // Animation plays every time it's in view
  const hoverClasses = {
    HTML5: "hover:border-[#E34F26] hover:shadow-[#E34F26] hover:text-[#E34F26]",
    CSS3: "hover:border-[#1572B6] hover:shadow-[#1572B6] hover:text-[#1572B6]",
    React: "hover:border-[#61DAFB] hover:shadow-[#61DAFB] hover:text-[#61DAFB]",
    Tailwind: "hover:border-[#38BDF8] hover:shadow-[#38BDF8] hover:text-[#38BDF8]",
    Redux: "hover:border-[#764ABC] hover:shadow-[#764ABC] hover:text-[#764ABC]",
    NextJS: "hover:border-[#FFFFFF] hover:shadow-[#FFFFFF] hover:text-[#FFFFFF]",
    JavaScript: "hover:border-[#F7DF1E] hover:shadow-[#F7DF1E] hover:text-[#F7DF1E]",
    TypeScript: "hover:border-[#3178C6] hover:shadow-[#3178C6] hover:text-[#3178C6]",
    NodeJS: "hover:border-[#68A063] hover:shadow-[#68A063] hover:text-[#68A063]",
    MongoDB: "hover:border-[#47A248] hover:shadow-[#47A248] hover:text-[#47A248]",
    C: "hover:border-[#A8B9CC] hover:shadow-[#A8B9CC] hover:text-[#A8B9CC]",
    CPlusPlus: "hover:border-[#00599C] hover:shadow-[#00599C] hover:text-[#00599C]",
    OOP: "hover:border-[#E44D26] hover:shadow-[#E44D26] hover:text-[#E44D26]",
    DataStructures: "hover:border-[#E535AB] hover:shadow-[#E535AB] hover:text-[#E535AB]",
    DBMS: "hover:border-[#336791] hover:shadow-[#336791] hover:text-[#336791]",
  };
  
  return (
    <section id='skills' className="relative w-full  p-6" >
       
<motion.div
       
       ref={ref}
      //  layoutId="card"
       style={{ willChange: "transform, opacity", transform: "translate3d(0, 0, 0)" }}
       initial={{ opacity: 1, y: 0 }} // Ensure it's visible initially
       animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.90 }}
       transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
     >

         <Title title='Skills & Technologies' icon={<FaLaptopCode />} />
       

      <div className='relative flex flex-wrap justify-center md:justify-evenly text-white p-0 m-0 '>

        <div className="w-full md:w-1/3 mb-6 md:mx-10 max-w-full">
          <h3 className="text-2xl font-bold w-full mb-6 flex flex-row justify-center group hover:text-[#61DAFB] hover:cursor-pointer">
            Web Development 
            <span className='ml-2 mt-2 duration-500 group-hover:rotate-180 transition-transform'>
              <FaCode />
            </span>
          </h3>

          <ul className='grid grid-cols-1 md:grid-cols-2 gap-5 text-center w-full'>
            {[
              {name:'HTML5', icon: <SiHtml5 />, color: '#E34F26'},
              { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
              { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
              { name: 'Tailwind CSS', icon: <RiTailwindCssFill />, color: '#38BDF8' },
              { name: 'Redux Toolkit', icon: <SiRedux />, color: '#764ABC' },
              { name: 'Next.js', icon: <SiNextdotjs />, color: '#FFFFFF' },
              { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
              { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
              { name: 'Node.js', icon: <FaNodeJs />, color: '#68A063' },
              { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
            ].map((tech, index) => (
              <li key={index} className={`border rounded-lg border-gray-500 px-4 py-2 flex flex-row 
                transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-[${tech.color}] hover:shadow-md hover:shadow-[${tech.color}] text-[20px] hover:text-[${tech.color}] cursor-pointer group`}
                >
                <span className='mr-2 mt-[7px] transition-transform duration-300 group-hover:animate-bounce' style={{ color: tech.color }}>
                  {tech.icon}
                </span>
                {tech.name}
                {hoverClasses.HTML5 === 'HTML1'?"":"" }
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-1/3 mb-6  max-w-full">
          <h3 className="text-2xl font-bold w-full mb-6 flex flex-row justify-center group hover:text-[#00599C] hover:cursor-pointer">
            Programming Languages
            <span className='ml-2 mt-2 duration-500 group-hover:rotate-180 transition-transform'>
              <HiCode />
            </span>
          </h3>

          <ul className='grid grid-cols-1 md:grid-cols-2 gap-5 text-center w-full'>
            {[
              { name: 'C', icon: <SiC />, color: '#A8B9CC' },
              { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
              { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
              { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
            ].map((lang, index) => (
              <li key={index} className={`border rounded-lg border-gray-500 px-4 py-2 flex flex-row 
                transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-[${lang.color}] hover:shadow-md hover:shadow-[${lang.color}] text-[20px] hover:text-[${lang.color}] cursor-pointer group`}>
                <span className='mr-2 mt-[7px] transition-transform duration-300 group-hover:animate-bounce' style={{ color: lang.color }}>
                  {lang.icon}
                </span>
                {lang.name}
              </li>
            ))}
          </ul>
        </div>
     
        <div className="w-full md:w-1/3 mb-6 md:mx-10 max-w-full">
          <h3 className="text-2xl font-bold w-full mb-6 flex flex-row justify-center group hover:text-[#E44D26] hover:cursor-pointer">
            Core CS Concepts 
            <span className="ml-2 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110">
              <FaCubes />
            </span>
          </h3>

          <ul className='grid grid-cols-1 md:grid-cols-2 gap-5 text-center  md:min-w-[500px] '>
            {[
              { name: 'OOP', icon: <FaCubes />, color: '#E44D26' },
              { name: 'Data Structures', icon: <SiGraphql />, color: '#E535AB' },
              { name: 'DBMS', icon: <SiPostgresql />, color: '#336791' },
            ].map((concept, index) => (
              <li key={index} className={`border rounded-lg border-gray-500 px-4 py-2 flex flex-row 
                transition-all duration-300  ease-in-out hover:-translate-y-2 hover:border-[${concept.color}] hover:shadow-md hover:shadow-[${concept.color}] text-[20px] hover:text-[${concept.color}] cursor-pointer group`}>
                <span className='mr-2 mt-[7px] transition-transform duration-300 group-hover:animate-bounce' style={{ color: concept.color }}>
                  {concept.icon}
                </span>
                {concept.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      </motion.div>
    </section>
  );
}

export default Grid;
