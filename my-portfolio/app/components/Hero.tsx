import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '../../lib/utils'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { FaFileAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from './ui/MagicButton'
function Hero() {
  return (
    <section className=' relative w-full h-screen  flex px-0 overflow-x-hidden' id='home'>
      <div className=' w-full min-h-[500px] z-10  pb-20 pt-36 '>
        <Spotlight className='-top-4 -left-10 md:-left-32 md:-top-20 h-screen pointer-events-none'
          fill='white' />
        <Spotlight className='top-10 left-full  h-[80vh]
         w-[50vw] pointer-events-none'
          fill='purple' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw] pointer-events-none'
          fill='blue' />
      </div>
      <div className=" flex w-full h-[300px] items-center justify-center bg-white dark:bg-black-100">
        <div
          className={cn(
            "absolute  inset-0 pointer-events-none",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}

        />

        <div className=" absolute inset-0 flex
     items-center justify-center bg-white 
     [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]
      dark:bg-black-100" />

      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
         flex flex-col items-center justify-center z-10 max-w-[300px]  md:max-w-[600px]">
        <div className=' w-fit flex flex-col
           items-center justify-center '>
          <h2 className='uppercase tracking-widest text-xs text-center
        text-blue-100  w-fit '>
            Code with Purpose, Design with Passion</h2>
          <TextGenerateEffect
            className='text-center text-[30px] md:text-[40px] '
            words='Code, Create, Innovate – Building Engaging Web Experiences.'
          />
          <p className='z-100 text-center md:tracking-wider
             mb-4 text-sm md:text-lg lg:text-2xl text-white'>
            I&apos;m Nazrul, coding seamless interfaces.             </p>
          <div className='flex justify-center flex-row gap-2 min-w-[400px]'>
            <a href='#projects' >
              <MagicButton
                title='See My Work'
                icon={<FaLocationArrow />}
              />
            </a>
            <a href='/nazrul.pdf'
              target='blank'>
              <MagicButton
                title='Resume'
                icon={<FaFileAlt />} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero