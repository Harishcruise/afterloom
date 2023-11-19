import React,{ useEffect , useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"
import { Typography } from '../typography'

const TextReveal = ({width="fit-content",children}) => {
  return (
    <div style={{width}} className='relative overflow-hidden'>
        <div>
          <Typography color=''>{children}</Typography>
        </div>
    </div>
  )
}

export default TextReveal