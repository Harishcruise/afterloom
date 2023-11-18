import React from 'react'
import { Typography } from '../typography'
import { Button } from '../buttons'

function Header() {
  return (
    <div className='flex flex-1 h-[122px] w-full items-center justify-between'>
        <Typography type="regular16" color="white">Logo</Typography>

        <div className='px-6 py-4 flex items-center justify-center gap-4 border-white'>
            <div className='hover:cursor-pointer hover:opacity-75'>
            <Typography type="regular20" color="light-100">Services</Typography>
            </div>
            <div className='hover:cursor-pointer hover:opacity-75'>
            <Typography type="regular20" color="light-100">Works</Typography>
            </div>
            <div className='hover:cursor-pointer hover:opacity-75'>
            <Typography type="regular20" color="light-100">Our Flow</Typography>
            </div>

        </div>

        <Button>looking forward !</Button>
    </div>
  )
}

export default Header