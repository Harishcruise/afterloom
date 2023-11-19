import React from 'react'
import { Typography } from '../typography'
const Card = () => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg border-2 border-white'>

      <Typography type="light32" color='text-light-100'>Product Design</Typography>
      <Typography type="regular20" color='text-grey-300'>Web App/mobile app</Typography>
      <Typography type="regular20" color='text-grey-300'>User Experience</Typography>
      <Typography type="regular20" color='text-grey-300'>Research</Typography>
      <Typography type="regular20" color='text-grey-300'>Product Design</Typography>
    </div>
  )
}

export default Card