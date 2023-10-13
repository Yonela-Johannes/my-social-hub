import React from 'react'

const PostLayout = ({children}) => {
  return (
    <div className='absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center bg-[#ffffff4d] md:w-screen m:px-[485px] h-screen z-[99999]'>
      {children}
    </div>
  )
}

export default PostLayout
