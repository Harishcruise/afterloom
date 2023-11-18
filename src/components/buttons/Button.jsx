import React from 'react'
import { Typography } from '../typography'

function Button({children,onClick}) {
  return (
    <div onClick={onClick} className='inline-flex items-center justify-center px-6 py-4 bg-gradient-to-b from-[#D9D9D9] to-[#D9D9D9] h-[49px] rounded-[80px] shadow-inner shadow-background-400 border hover:cursor-pointer hover:opacity-90 active:opacity-70'>
        <Typography color='#040404' type="regular16">{children}</Typography>
    </div>
  )
}

export default Button