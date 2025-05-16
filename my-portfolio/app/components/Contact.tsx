"use client";
import React from 'react'
import { FaBriefcase  } from "react-icons/fa"; 
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { FaWhatsapp } from 'react-icons/fa';     

function Contact() {
    const {ref, inView} = useInView({triggerOnce: false});

  return (
    <section id='about'>
       <motion.div
              
       ref={ref}
  
       style={{ willChange: "transform, opacity", transform: "translate3d(0, 0, 0)" }}
       initial={{ opacity: 1, y: 0 }} // Ensure it's visible initially
       animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.90 }}
       transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <h2 className="md:text-3xl text-[28px] font-bold my-10 text-white flex items-center justify-center 
    relative group hover:cursor-pointer ">
      <span className="group-hover:text-[#61DAFB] transition-all duration-300">Get in Toucn</span> 
      <span className='ml-2 group-hover:text-green-500 transition-all group-hover:rotate-12'><FaBriefcase/></span>
      <span className="ml-2 transition-transform duration-300 group-hover:rotate-12 group-hover:text-green-400">
      </span>
      <div className="absolute -bottom-2 w-0 h-[2px] bg-[rgb(97,218,251)] transition-all duration-300 group-hover:w-full  "></div>
    </h2>
              <div className=' flex justify-center items-center'>
               <div className='flex flex-col md:w-[600px] '>
                <p className='text-white text-center'>I&apos;m a passionate <span className='text-green-400 font-bold'>Frontend Developer </span> specializing in React, Next.js, and Tailwind CSS, creating sleek, user-friendly web experiences.</p>
              
               <div className='flex items-center flex-wrap  text-white my-10 gap-5 md:gap-4  justify-center'>
                <a className=' flex flex-row  px-6 py-2 rounded-lg transition duration-300 ease-in-out bg-cyan-950 hover:bg-cyan-700 hover:cursor-pointer active:bg-cyan-500 focus:border-2 focus:border-cyan-200'
                 href='https://www.linkedin.com/in/mohammad-nazrul-islam-baa001353/'
                 target='_blank'>
                  <FaLinkedin className='mt-1 mr-2 text-[#0077B5]'/>LinkedIn 
                </a>
                <a className='flex items-center px-6 py-2 rounded-lg transition duration-300 ease-in-out bg-cyan-950 hover:cursor-pointer hover:bg-cyan-700 active:bg-cyan-500 focus:border-2 focus:border-cyan-200'
                 href='https://github.com/Nazrul003'
                 target='_blank'>
                <FaGithub className=' mr-2 text-[#FFFFFF]'
                />Git hub
                  </a>
                  <a className='flex items-center px-6 py-2 rounded-lg transition duration-300 ease-in-out bg-cyan-950 hover:cursor-pointer hover:bg-cyan-700 active:bg-cyan-500 focus:border-2 focus:border-cyan-200'
                  href="mailto:nazrul.codes@gmail.com"
                  target='_blank'>
                  <FaEnvelope className='mr-2 text-[#D14836]'/> <span>E-mail</span>
                  
                  </a>
                  <a className='flex ml-4 md:ml-0 items-center px-6 py-2 rounded-lg transition duration-300 ease-in-out bg-cyan-950 hover:cursor-pointer hover:bg-cyan-700 active:bg-cyan-500 focus:border-2 focus:border-cyan-200'
                 href="/nazrul.pdf"
                 target='_blank' >
                  <FaFileAlt className=' mr-2 text-[#4285F4]'/>
                  Resume
                  </a>
                                    <a className='flex ml-4 md:ml-0 items-center px-6 py-2 rounded-lg transition duration-300 ease-in-out bg-cyan-950 hover:cursor-pointer hover:bg-cyan-700 active:bg-cyan-500 focus:border-2 focus:border-cyan-200'
                 href="https://wa.me/+918800531881"
                 target='_blank' >
                  <FaWhatsapp className=' mr-2 text-[#25D366]'/>
                  Chat on WhatsApp
                  </a>
               </div>
               </div>
              
              </div>
              <div className='flex justify-center items-center mt-14 mb-5'>
              <p className='md:w-[500px] text-gray-400 text-center'>
               Designed & Developed by Mohammad Nazrul Islam. Built with Next.js, Tailwind CSS & Framer Motion. Deployed on Vercel.
               </p>
               </div>
              </motion.div>
        
    </section>
  )
}

export default Contact