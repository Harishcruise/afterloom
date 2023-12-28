import React from 'react'
import { Typography } from '../../components/typography'
import { Card } from '../../components/card'
import { TextReveal } from '../../components/textSlider'
import { v1, v2, v3 } from '../../assets/images'

const data=[
  {
    title:"Product Design",
    ser1:"Webapp/ Mobile design",
    ser2:"User Experience",
    ser3:"Research",
    ser4:"Automation Solution",
    ser5:"Design systems and UI Guidelines",
    src:v1
  },
  {
    title:"Websites",
    ser1:"Marketing Websites",
    ser2:"Landing Pages",
    ser3:"E-commerce design",
    ser4:"Shopify site development",
    ser5:"Optimization and Maintenance",
    src:v2
  },
  {
    title:"Creative Marketing",
    ser1:"Digital marketing",
    ser2:"Campaign management",
    ser3:"Search Engine Optimization",
    ser4:"Google Ads",
    ser5:"Social media marketing",
    src:v3
  }
]

const ServiceSection = () => {
  return (
    <div id='service' className='flex flex-1 flex-col w-full py-[52px]'>
        <div className='flex flex-col gap-3 '>
        <TextReveal>
        <Typography type="bold36" color='text-light-100'>What do we offer</Typography>
        <Typography type="regular16" color='text-grey-300'>We are a team of creative artists, help businesses to build high quality products. </Typography>
        </TextReveal>
        </div>
        <div className='flex w-full justify-between py-6 flex-wrap gap-5'>
          {/* <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4'> */}
          {data.map((data)=><Card src={data.src} title={data.title} ser1={data.ser1} ser2={data.ser2} ser3={data.ser3} ser4={data.ser4} ser5={data.ser5} />)}
          {/* </div> */}
          
        </div>
    </div>
  )
}

export default ServiceSection