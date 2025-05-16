"use client";
import React from 'react'
import Title from './ui/Title'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { FaBriefcase } from "react-icons/fa";

function Experience() {
    const {ref,inView}=useInView({triggerOnce:false})

    const ExpData =[
        {
            Cname: 'LeopardRuns Innovations and Technology',
            position:'Junior Software Developer Intern',
            date:'Dec 2024 - Feb 2025',      
            desc: 'Gained hands-on experience in HTML, CSS, JavaScript, React, and Tailwind CSS. Developed a static authentication module with login and signup functionality. Built a responsive dashboard with interactive UI components.'    ,
                  
        }
    ]
  return (
    <section id='experience' className='p-6'>
       
   <motion.div
       
       ref={ref}
    //    layoutId="card"
       style={{ willChange: "transform, opacity", transform: "translate3d(0, 0, 0)" }}
       initial={{ opacity: 1, y: 0 }} // Ensure it's visible initially
       animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.90 }}
       transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
  >

 
        <Title title='Experience' icon={<FaBriefcase />} />
        <div className='flex flex-col gap-10 mb-10'>
        {
            ExpData.map((data, index) => (
                <div className=' justify-center items-center flex' key={index}>
                <div className='relative w-ful md:w-[800px] h-auto md:p-10 p-6 flex flex-col text-white bg-gray-900 rounded-2xl gap-2 hover:bg-blue-950 hover:cursor-pointer' key={index}>
                    <h1 className='md:text-[30px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-purple-600'>
                        {data.Cname}
                    </h1>
                    <h2 className='md:text-[22px] font-semibold'>
                        {data.position}
                    </h2>
                    <div className=' md:text-[18px]'>
                        <p className='md:mr-20'>
                        {data.desc}
                        </p>
                    <p className='absolute text-sm right-2 md:bottom-4 bottom-2 right md:text-[16px]'>
                        {data.date}
                    </p>
                    </div>
                </div>
                </div>
            ))
        }
        </div>
        </motion.div>
        </section>
  )
}

export default Experience