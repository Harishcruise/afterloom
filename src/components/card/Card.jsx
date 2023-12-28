import React from 'react'
import { Typography } from '../typography'
const Card = ({title,ser1,ser2,ser3,ser4,ser5,src}) => {
  return (
    <div className='w-96 h-96 rounded-md overflow-hidden shadow-lg border-[1px] border-white flex justify-center flex-col gap-3 p-8 hover:border-2 hover:cursor-pointer hover:border-white'>

      <img src={src} width={50} height={50} alt=''/>
      <Typography type="light32" color='text-light-100'>{title}</Typography>
      <Typography type="regular20" color='text-grey-300'>{ser1}</Typography>
      <Typography type="regular20" color='text-grey-300'>{ser2}</Typography>
      <Typography type="regular20" color='text-grey-300'>{ser3}</Typography>
      <Typography type="regular20" color='text-grey-300'>{ser4}</Typography>
      <Typography type="regular20" color='text-grey-300'>{ser5}</Typography>
    </div>
  )
}

export default Card