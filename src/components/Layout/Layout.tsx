import React from 'react'
import Navbar from '../Navbar'

const Layout = ({children}) => {
  return (
    <div className="flex flex-wrap w-full gap-8">
      <div className='mb-10 z-40'>
        <Navbar />
      </div>
      <div className='flex flex-wrap w-full items-center justify-center gap-8 py-4 sm:py-8 px-0 2xl:px-20'>
        {children}
      </div>
    </div>
  )
}

export default Layout
