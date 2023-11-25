import React,{ useEffect , useRef } from 'react'
import { motion,  useInView, useAnimation } from 'framer-motion'
import { Typography } from '../../components/typography'
import { TextReveal } from '../textSlider'

const WorkFlow = ({title,desc,number,img}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();

    useEffect(()=>{
        if(isInView){
          mainControls.start("animate");
        }
      },[isInView,mainControls]);
  return (
    <div className='flex flex-1 gap-32 mobile:gap-4 justify-between'>
        <div className='flex flex-col justify-between'>
            <TextReveal>
            <Typography type="bold36" color='text-light-100'>{title}</Typography>
            <Typography type="regular16" color='text-grey-300' responsive={true}>{desc}</Typography>
            </TextReveal>
            <div>
            <TextReveal>
            <p style={{fontFamily:"Apercu-Pro-Mono"}} className='text-[220px] mobile:text-[120px] text-grey-200 align-bottom'>{number}</p>
            </TextReveal>
            </div>
        </div>

        <motion.div 
        ref={ref}
        variants={{
            initial:{ scale: 0.5,x: 300 },
            animate:{ scale: 1, x: 0 }
        }}
        initial='initial'
        animate={mainControls}
        transition={{ duration: 0.9, delay: 0.1 }}
        className='flex'
        >
        <img src={img} className='flex rounded-[20px] mobile:w-[600px] mobile:h-[180px] w-[900px] h-[610px]' alt=''/>
        </motion.div>
    </div>
  )
}

export default WorkFlow