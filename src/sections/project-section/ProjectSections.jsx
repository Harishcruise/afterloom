import React from 'react'
import { Typography } from '../../components/typography'
import { Button } from '../../components/buttons'
import { CardSlider } from '../../components/carousels'
import { TextReveal } from '../../components/textSlider'

const ProjectSections = () => {
  return (
    <div id='work' className='w-full flex-col flex py-24'>
        <div className='w-full flex flex-1 justify-between mobile:flex-col mobile:items-start mobile:gap-4'>
            <TextReveal>
            <Typography type="bold36" color='text-light-100'>Our Accomplishments</Typography>
            <Typography type="regular16" color='text-grey-300'>Consists of creative designs and works done by our team!</Typography>
            </TextReveal>
            
            
            <Button responsive={true}>
            View all »
            </Button>
            
        </div>
        {/* <ImageSlider/> */}
        <CardSlider/>
    </div>
  )
}

export default ProjectSections