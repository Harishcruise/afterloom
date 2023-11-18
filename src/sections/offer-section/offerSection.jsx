import React from 'react'
import { Typography } from '../../components/typography'

const offerSection = () => {
  return (
    <div className='flex flex-1 flex-col w-full py-[52px]'>
        <div className='flex flex-col gap-3 '>
        <Typography type="bold36" color='text-light-100'>What do we offer</Typography>
        <Typography type="regular16" color='text-grey-300'>We are a team of creative artists, help businesses to build high quality products. </Typography>
        </div>
    </div>
  )
}

export default offerSection