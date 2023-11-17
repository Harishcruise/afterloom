import React from 'react'

function Typography({children,color,type}) {
  const variant = {
    bold64:{
      style:`font-bold text-[64px] leading-[72px] text-${color}`,
      font:'Apercu-Pro-Bold'
    },
    bold36:{
      style:`font-bold text-[36px] leading-[44px] text-${color}`,
      font:'Apercu-Pro-Bold'
    },
    light64:{
      style:`font-light text-[64px] leading-[72px] text-${color}`,
      font:'Apercu-Pro-Light'
    },
    light32:{
      style:`font-light text-[32px] leading-[40px] text-${color}`,
      font:'Apercu-Pro-Light'
    },
    regular14:{
      style:`font-normal text-[14px] leading-[22px] text-${color}`,
      font:'Apercu-Pro-Light',
    },
    regular16:{
      style:`font-normal text-[16px] leading-[24px] text-${color}`,
      font:'Apercu-Pro-Light'
    },
    regular20:{
      style:`font-normal text-[20px] leading-[28px] text-${color}`,
      font:'Apercu-Pro-Light'
    },
    regular36:{
      style:`font-normal text-[36px] leading-[44px] text-${color}`,
      font:'Apercu-Pro-Light'
    }
  }
  return (
    <div>
    <p style={{fontFamily:variant[type]["font"]}} className={variant[type]["style"]}>
        {children}
    </p>
    </div>
  )
}

export default Typography