import React from 'react'

function BackgroundWrapper({children}) {
  return (
    <div className='px-12 py-4 h-full w-full flex flex-1 items-center justify-center flex-col'>
        {children}
    </div>
  )
}

export default BackgroundWrapper