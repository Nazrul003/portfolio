import React from 'react'
type Props ={
  title?:string,
  icon?: React.ReactNode
}
const MagicButton = (props:Props) => {
  return (
    <button className=" flex flex-row shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent
     border border-black dark:border-white
      dark:text-white text-black rounded-lg font-bold 
      transform hover:-translate-y-1 transition duration-400
      active:bg-white"> 
    <span className='flex flex-row'>{props.title}
    <span
    className='mt-[7px] ml-2 text-[12px]'
    >
      {props.icon}
    </span>
    </span>

  </button>
  
  )
}

export default MagicButton