import React from 'react'
interface TitleProps {
    title: string;
    icon: React.ReactNode; 
  }
const  Title : React.FC<TitleProps> = ({title, icon})=> {
  return (
    <h2 className="md:text-3xl text-[28px] font-bold md:my-20 my-10 text-white flex items-center justify-center 
    relative group hover:cursor-pointer ">
      <span className="group-hover:text-[#61DAFB] transition-all duration-300">{title}</span> 
      <span className='ml-2 group-hover:text-green-500 transition-all group-hover:rotate-12'>{icon}</span>
      <span className="ml-2 transition-transform duration-300 group-hover:rotate-12 group-hover:text-green-400">
      </span>
      <div className="absolute -bottom-2 w-0 h-[2px] bg-[rgb(97,218,251)] transition-all duration-300 group-hover:w-full  "></div>
    </h2>
  )
}

export default Title
// Skills & Technologies