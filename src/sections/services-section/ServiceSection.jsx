import React from 'react'
import { Typography } from '../../components/typography'
import { Card } from '../../components/card'
import { TextReveal } from '../../components/textSlider'

const ServiceSection = () => {
  return (
    <div className='flex flex-1 flex-col w-full py-[52px]'>
        <div className='flex flex-col gap-3 '>
        <TextReveal>
        <Typography type="bold36" color='text-light-100'>What do we offer</Typography>
        <Typography type="regular16" color='text-grey-300'>We are a team of creative artists, help businesses to build high quality products. </Typography>
        </TextReveal>
        </div>
        <div className='flex w-full justify-between py-6 flex-wrap'>
          {/* <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4'> */}
          <Card/>
          <Card/>
          <Card/>
          {/* </div> */}
          
        </div>
    </div>
  )
}

export default ServiceSection