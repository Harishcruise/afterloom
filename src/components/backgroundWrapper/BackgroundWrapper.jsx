import React from 'react'

function BackgroundWrapper({children}) {
  return (
    <div className='px-12 h-full w-full flex flex-1 items-center justify-center'>
        {children}
    </div>
  )
}

export default BackgroundWrapper