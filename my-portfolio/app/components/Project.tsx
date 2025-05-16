"use client";
// import React from 'react'

// function Project() {
//   return (
//    <section className='relative w-full overflow-hidden'>
//         <Title title='Things I&apos;ve Built' icon={<FaFolderOpen />} />
//         </section>
//   )
// }

// export default Project
 // Add this for Next.js App Router
import { FaFolderOpen  } from 'react-icons/fa'

import Title from './ui/Title'
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const projects = [
    {
      name: "Developer Portfolio",
      description: "A personal portfolio showcasing skills, projects, and blogs with smooth animations.",
      liveLink: "#",
      githubLink: "https://github.com/Nazrul003/portfolio",
      image: "/images/dev.png",
      techStack: ["NextJs", "TypeScript", "Reactjs", "Tailwind", "Framer-motion"]
    },
    {
      name: "Resume Builder",
      description: "A sleekly designed resume builder with real-time preview, customizable templates, and seamless PDF export",
      liveLink: "https://resume-builder-mhz1.vercel.app/",
      githubLink: "https://github.com/Nazrul003/Resume-builder",
      image: "/images/resume.png",
      techStack: ["Reactjs", "CSS3", "JavaScript"],
    },
  ];
  

const Project = () => {
    const { ref, inView } = useInView({ triggerOnce: false }); // Animation plays every time it's in view
    const sliderRef = useRef<Slider | null>(null); // Reference to control slider

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1, // Show one slide at a time
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false, // Hide default arrows
    };
  
    return (
        <section className="relative w-full overflow-hidden p-6 " id='projects'>
      <motion.div
       
       ref={ref}
     
       style={{ willChange: "transform, opacity", transform: "translate3d(0, 0, 0)" }}
       initial={{ opacity: 1, y: 0 }} // Ensure it's visible initially
       animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.90 }}
       transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
       <Title title='Things I&apos;ve Built' icon={<FaFolderOpen />}/>
       <div className="relative w-full max-w-3xl mx-auto">
    
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 p-3 rounded-full text-white hover:bg-gray-600 transition"
      >
        <FaArrowLeft size={20} />
      </button>

    
      <Slider ref={sliderRef} {...settings}>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="relative w-full sm:w-[52rem] overflow-hidden rounded-lg border border-slate-600 transition dark:hover:bg-primary-foreground bg-white/5 hover:bg-purple-500/25 hover:backdrop-blur-lg backdrop-blur-md cursor-pointer border-transparent group-hover:border-purple-500 "
         
        >
         
          <div className='group md:min-w[500px] md:max-w-[600px] md:min-h-[350px] md:max-h-[350px]'>
          <div className="flex flex-col  gap-2 pb-7 pt-4 sm:max-w-[50%] md:pl-10 px-10 sm:pt-10">
            <h3 className="md:text-2xl w-[400px] font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600 whitespace-nowrap z-10"  >
              {project.name}
            </h3>
            <p className="mt-0 text-xs text-justify text-slate-300">{project.description}</p>

           
            <div className="mt-4 flex gap-4">
              <a className="text-white border border-rose-500 hover:bg-rose-700 px-4 py-2 text-sm" href={project.liveLink} target='_blank'>
                Live View
              </a>
              <a className="text-white border border-rose-500 hover:bg-rose-700 px-4 py-2 text-sm" href={project.githubLink} target='_blank'>
                Github Code
              </a>
            </div>

           
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <li key={idx} className="rounded-full bg-rose-700 px-3 py-1 text-[0.7rem] uppercase tracking-wider  hover:bg-rose-900 text-white">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

   
          <img
            alt="Project Image"
            className="absolute hidden sm:block w-0 -right-20 top-16 md:max-w-[450px] md:min-w-[450px] rounded-t-lg transition group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04]"
            src={project.image}
          />
          </div>
        </motion.div>
      ))}
      </Slider>

  
      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 p-3 rounded-full text-white hover:bg-gray-600 transition"
      >
        <FaArrowRight size={20} />
      </button>
    </div>
      </motion.div>

      </section>
    );
};

export default Project;
