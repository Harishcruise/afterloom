import React from 'react'
import { Typography } from '../typography'
import { Button } from '../buttons'
import logo from '../../assets/logo/AfterLoom Logo.jpg'
import { useWindowDimensions } from '../../hooks';
import HeaderDropdown from './HeaderDropdown';

function Header() {
  const { width } = useWindowDimensions();

  return (
    <div className='flex flex-1 h-[122px] w-full items-center justify-between'>
        <img alt='' className='w-[150px] mobile:w-[60px] object-contain' src={logo}/>

        {width>480 ?
        <div className='px-6 py-4 flex items-center justify-center gap-4 border-white'>
        <div className='hover:cursor-pointer hover:opacity-75'>
        <Typography type="regular20" color="text-light-100">Services</Typography>
        </div>
        <div className='hover:cursor-pointer hover:opacity-75'>
        <Typography type="regular20" color="text-light-100">Works</Typography>
        </div>
        <div className='hover:cursor-pointer hover:opacity-75'>
        <Typography type="regular20" color="text-light-100">Our Flow</Typography>
        </div>
       </div>:
        // 
        ""
        }
        

        <Button responsive={true}>looking forward !</Button>
    </div>
  )
}

export default Header