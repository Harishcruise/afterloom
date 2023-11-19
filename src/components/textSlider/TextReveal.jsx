import React,{ useEffect , useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"
import { Typography } from '../typography'

const TextReveal = ({width="fit-content",children,type,color}) => {
  
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation();
    const sliderControls = useAnimation();

    useEffect(()=>{
      if(isInView){
        mainControls.start("visible");
        sliderControls.start("visible");
      }
    },[isInView]);

  return (
    <div ref={ref} style={{width}} className='relative overflow-hidden'>
        <motion.div
        variants={{
            hidden:{opacity:0, y: 75},
            visible:{opacity:1, y:0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
            duration:0.5,
            delay:0.25
        }}
        >
        <Typography type={type} color={color}>{children}</Typography>
        </motion.div>
        <motion.div
        variants={{
            hidden:{left:0},
            visible:{left:"100%"}
        }}
        initial="hidden"
        animate={sliderControls}
        className='absolute top-1 bottom-1 left-0 right-0 bg-light-100 z-20'
        >   
        </motion.div>
    </div>
  )
}

export default TextReveal