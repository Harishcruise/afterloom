import React from 'react'
import classNames from 'classnames'

function Typography({children,color,type,responsive=false}) {
  const variant = {
    bold16:{
      style:classNames({
        'font-bold text-[16px] leading-[24px]':true,
        [color]:true
      }),
      font:'Apercu-Pro-Bold'
    },
    bold64:{
      style:classNames({
        'font-bold text-[64px] leading-[72px]':true,
        [color]:true
      }),
      font:'Apercu-Pro-Bold'
    },
    bold36:{
      style:classNames({
        'font-bold text-[36px] leading-[44px]':true,
        [color]:true
      }),
      font:'Apercu-Pro-Bold'
    },
    light64:{
      style:classNames({
        'font-light text-[64px]  leading-[72px]':true,
        [color]:true,
        'mobile:text-[32px] mobile:leading-[40px]':responsive
      }),
      font:'Apercu-Pro-Light'
    },
    light32:{
      style:classNames({
        'font-light text-[32px] leading-[40px]':true,
        [color]:true
      }),
      font:'Apercu-Pro-Light'
    },
    regular14:{
      style:classNames({
        'font-normal text-[14px] leading-[22px]':true,
        [color]:true
      }),
      font:'Apercu-Pro-Light',
    },
    regular16:{
      style:classNames({
        'font-normal text-[16px] leading-[24px]':true,
        [color]:true,
        'mobile:text-[10px] mobile:leading-[18px]':responsive,
      }),
      font:'Apercu-Pro-Light'
    },
    regular20:{
      style:classNames({
        'font-normal text-[20px] leading-[28px]':true,
        [color]:true
      }),
      font:'Apercu-Pro-Light'
    },
    regular36:{
      style:classNames({
        'font-normal text-[36px] leading-[44px]':true,
        [color]:true
      }),
      font:'Apercu-Pro-Light'
    }
  }
  return (
    <>
    <p style={{fontFamily:variant[type]["font"]}} className={variant[type]["style"]}>
        {children}
    </p>
    </>
  )
}

export default Typography