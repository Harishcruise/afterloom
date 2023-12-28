import React from 'react'
import { Typography } from '../../components/typography'
import { Button } from '../../components/buttons'
import { CardSlider, ImageSlider } from '../../components/carousels'
import { TextReveal } from '../../components/textSlider'

const ProjectSections = () => {
  return (
    <div id='work' className='w-full flex-col flex py-24'>
        <div className='w-full flex flex-1 justify-between mobile:flex-col mobile:items-start mobile:gap-4'>
            <TextReveal>
            <Typography type="bold36" color='text-light-100'>Our Accomplishments</Typography>
            <Typography type="regular16" color='text-grey-300'>Consists of creative designs and works done by our team!</Typography>
            </TextReveal>
            
            
            <a target='_blank' href='https://dribbble.com/mukeshdan20'>
            <Button responsive={true}>
            View all »
            </Button>
            </a>
            
        </div>
        <ImageSlider/>
        {/* <CardSlider/> */}
    </div>
  )
}

export default ProjectSections