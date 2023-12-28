import React from 'react'
import { Typography } from '../typography'
import { Button } from '../buttons'
import logo from '../../assets/logo/AfterLoom Logo.jpg'
import { useWindowDimensions } from '../../hooks';
import HeaderDropdown from './HeaderDropdown';

function Header() {
  const { width } = useWindowDimensions();

  return (
    <div className='flex flex-1 h-[122px] mobile:h-[90px] w-full items-center justify-between fixed z-50 bg-[#040404]'>
      <a href='#'>
        <img alt='' className='w-[150px] mobile:w-[60px] object-contain' src={logo}/>
      </a>
        {width>480 ?
        <div className='px-6 py-4 flex items-center justify-center gap-4 border-2 border-background-400 rounded-full'>
        <a href='#service' className='hover:cursor-pointer hover:opacity-75'>
        <Typography type="regular20" color="text-light-100">Services</Typography>
        </a>
        <a href='#work' className='hover:cursor-pointer hover:opacity-75'>
        <Typography type="regular20" color="text-light-100">Works</Typography>
        </a>
        <a href='#flow' className='hover:cursor-pointer hover:opacity-75'>
        <Typography type="regular20" color="text-light-100">Our Flow</Typography>
        </a>
       </div>:
        // 
        ""
        }
        
        <a href='#contact'>
        <Button responsive={true}>looking forward !</Button>
        </a>
    </div>
  )
}

export default Header