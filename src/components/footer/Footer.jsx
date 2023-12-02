import React from 'react'
import { TextReveal } from '../textSlider'
import { Typography } from '../typography'
import { copy } from '../../assets/images'
import { afterloom } from '../../assets/images'

const Footer = () => {
  return (
    <div className='flex flex-col flex-1 w-full pt-32 pb-10'>
        <div className='flex flex-col gap-3 '>
        <TextReveal>
        <Typography type="bold36" color='text-light-100'>Relax we got you!</Typography>
        <Typography type="regular16" color='text-grey-300'>Connect with us to create impactful and great products {':)'}</Typography>
        </TextReveal>
        </div>

        <div className='flex w-full justify-between py-6 gap-4 flex-wrap'>

            <div className='flex flex-col h-[210px] w-[435px] p-7 justify-between rounded-xl border border-background-700'>
                 <img src={copy} alt='' width={64} height={64} />
                 <Typography type="regular20" color='text-light-100'>Copy our mail!</Typography>
            </div>

            <div className='flex flex-col h-[210px] w-[435px] p-7 justify-between rounded-xl border border-background-700'>
                 <img src={copy} alt='' width={64} height={64} />
                 <Typography type="regular20" color='text-light-100'>Message us on Whatsapp!</Typography>
            </div>

            <div className='flex flex-col h-[210px] w-[435px] p-7 justify-between rounded-xl border border-background-700'>
                 <img src={copy} alt='' width={64} height={64} />
                 <Typography type="regular20" color='text-light-100'>Connect on call now!</Typography>
            </div>

        </div>

        <div className='flex flex-1 w-full items-center gap-36 mobile:gap-8 mt-16 py-14 border border-b-background-400'>
        <Typography type="light64" color='text-light-100' responsive="true" underline='underline'>Instagram</Typography>
        <Typography type="light64" color='text-light-100' responsive="true" underline='underline'>X</Typography>
        <Typography type="light64" color='text-light-100' responsive="true" underline='underline'>Linkedin</Typography>
        </div>

        <div className='flex flex-1 w-full items-center justify-between py-8'>
            <div className='flex items-center justify-between gap-4'>
                <Typography type="regular20" color='text-background-400' responsive="true" >Services</Typography>
                <Typography type="regular20" color='text-background-400' responsive="true" >Works</Typography>
                <Typography type="regular20" color='text-background-400' responsive="true" >Our Flow</Typography>  
            </div>
            <div>
                <Typography type="regular20" color='text-background-400' responsive="true" >ALL RIGHTS RESERVED. AFTERLOOM. 2023</Typography>
            </div>
        </div>

        <div className='flex w-full h-[470px] rounded-[20px] border border-background-500 items-center justify-center'>
            <img src={afterloom} alt='' />
        </div>
    </div>
  )
}

export default Footer