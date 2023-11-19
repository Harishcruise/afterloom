import React from 'react'
import { Typography } from '../typography'
const Card = () => {
  return (
    <div className='w-96 h-96 rounded overflow-hidden shadow-lg border-2 border-white flex justify-center flex-col gap-3 p-8'>

      <Typography type="light32" color='text-light-100'>Product Design</Typography>
      <Typography type="regular20" color='text-grey-300'>Web App/mobile app</Typography>
      <Typography type="regular20" color='text-grey-300'>User Experience</Typography>
      <Typography type="regular20" color='text-grey-300'>Research</Typography>
      <Typography type="regular20" color='text-grey-300'>Product Design</Typography>
    </div>
  )
}

export default Card