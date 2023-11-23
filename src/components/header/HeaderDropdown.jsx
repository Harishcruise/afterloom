import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Typography } from '../typography'
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const HeaderDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [head, setHead] = useState("Home");
  return (
    <>
    <div onClick={()=>setIsOpen(!isOpen)} className='flex items-center justify-center px-6 py-4 gap-1 h-[49px] hover:cursor-pointer hover:opacity-90 active:opacity-70'>
        <Typography color='text-light-100' type="bold16"> {head} </Typography>
        {isOpen?<FiChevronUp color='#FFFFFF'/>:<FiChevronDown color='#FFFFFF'/>}
    </div>

    <motion.div 
    variants={{
        enter: {
            opacity: 1,
            rotateX: 0,
            transition: {
              duration: 0.5
            },
            display: "block"
          },
          exit: {
            opacity: 0,
            rotateX: -15,
            transition: {
              duration: 0.5,
              delay: 0.3
            },
            transitionEnd: {
              display: "none"
            }
          }
    }}
    initial="exit"
    animate={isOpen?"enter":"exit"}
    className='absolute flex flex-col ml-32 mt-32'>

        <a onClick={()=>{
            setHead("Home")
            setIsOpen(!isOpen)
            }}>
        <Typography color='text-light-100' type="bold16"> Home </Typography>
        </a>
        <a onClick={()=>{
            setHead("Services")
            setIsOpen(!isOpen)
            }}>
        <Typography color='text-light-100' type="bold16"> Services </Typography>
        </a>
        <a onClick={()=>{
            setHead("Works")
            setIsOpen(!isOpen)
            }}>
        <Typography color='text-light-100' type="bold16"> Works </Typography>
        </a>
        <a onClick={()=>{
            setHead("Our Flows")
            setIsOpen(!isOpen)
            }}>
        <Typography color='text-light-100' type="bold16"> Our Flows </Typography>
        </a>

    </motion.div>
    </>
  )
}

export default HeaderDropdown