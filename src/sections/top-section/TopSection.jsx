import React from 'react'
import { Typography } from '../../components/typography';
import { img1, img2, img3 } from '../../assets/images';
import { Button } from '../../components/buttons';
import { TextReveal } from '../../components/textSlider';
import { useWindowDimensions } from '../../hooks';


function TopSection() {

  const { width } = useWindowDimensions();

  return (
    <div className='flex flex-1 flex-col w-full pt-[70px] pb-[52px]'>
        <div className='flex flex-col gap-3 '>
        <TextReveal>
        <Typography type="bold36" color='text-light-100'>We build bridges through digital Experiences</Typography>
        <Typography type="regular16" color='text-grey-300'>We are a team of creative artists, help businesses to build high quality products.</Typography>
        </TextReveal>
        <div>
        <a href='#contact'>
        <Button responsive="true">
          Schedule a call right now »
        </Button>
        </a>
        </div>
        </div>
       
       <div className='flex w-full justify-between py-6 flex-wrap'>

        {width>480 && <><div className="w-[435px] mt-20 h-[435px] overflow-hidden cursor-pointer rounded-md relative group hover:-translate-y-20 transition-transform duration-[400ms] ease-linear">
          <img alt="" className="object-cover w-full aspect-square group-hover:scale-110 transition duration-[400ms] ease-in-out" src={img1}/>
        </div>

        <div className="w-[435px] mt-10 h-[435px] overflow-hidden cursor-pointer rounded-md relative group hover:-translate-y-10 transition-transform duration-[400ms] ease-linear">
          <img alt="" className="object-cover w-full aspect-square group-hover:scale-110 transition duration-[400ms] ease-in-out" src={img2}/>
        </div></>}
        
        <div className="w-[435px] h-[435px] overflow-hidden cursor-pointer rounded-md relative group hover:translate-y-10 transition-transform duration-[400ms] ease-linear">
          <img alt="" className="object-cover w-full aspect-square group-hover:scale-110 transition duration-[400ms] ease-in-out" src={img3}/>
        </div>

       </div>

    </div>
  )
}

export default TopSection