import React from 'react'
import { Typography } from '../../components/typography';
import { img1, img2, img3 } from '../../assets/images';

function TopSection() {
  return (
    <div className='flex flex-1 flex-col w-full py-[52px]'>
        <div className='flex flex-col gap-3 '>
        <Typography type="bold36" color='text-light-100'>We build bridges through digital Experiences</Typography>
        <Typography type="regular16" color='text-grey-300'>We are a team of creative artists, help businesses to build high quality products.</Typography>
        </div>
       
       <div className='flex w-full justify-between py-6 flex-wrap'>
          <img src={img1} alt='' className='w-[435px] mt-20 h-[435px] object-contain rounded-md hover:-translate-y-20 transition-transform duration-[400ms] ease-linear'/>
          <img src={img2} alt='' className='w-[435px] mt-10 h-[435px] object-contain rounded-md hover:-translate-y-10 transition-transform duration-[400ms] ease-linear'/>
          <img src={img3} alt='' className='w-[435px] h-[435px] object-contain rounded-md hover:translate-y-10 transition-transform duration-[400ms] ease-linear'/>
       </div>

    </div>
  )
}

export default TopSection