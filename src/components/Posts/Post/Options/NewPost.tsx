import React from 'react'
import cover from '../../../../assets/lewagon.jpeg';

const NewPost = ({setActivePopup, activePopup, user}) => {
  return (
    <div className='bg-bg_alt w-full rounded-2xl'>
      <div className="flex text-center items-center rounded-2xl justify-between p-4 text-base">
        <div className="flex gap-1">
          <div className="flex">
            <img src={cover} className="w-8 h-8 object-cover rounded-full" alt='logo' />
          </div>
          <div className="text-start">
            <p>company name</p>
            <p>New post by</p>
          </div>
        </div>
        <div  onClick={() => setActivePopup(!activePopup)} className="rounded-full bg-bg_light p-2 cursor-pointer">
          <p>Close</p>
        </div>
      </div>
      <div className="px-10 border-t border-bg_light">
        <div className="flex gap-2 justify-between items-center text-center text-base text-gray-200 border-b border-bg_light py-4">
          <img src={user?.image} alt="avatar" className='w-8 h-8 object-cover rounded-full' />
          <input placeholder='What is on your mind...' className='flex flex-1 h-8 rounded-full bg-bg_light px-4' />
        </div>
      </div>
    </div>
  )
}

export default NewPost
