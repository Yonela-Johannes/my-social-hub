import React from 'react'
import avatar from '../../assets/pic.jpeg';
import cover from '../../assets/lewagon.jpeg';
import { links } from '../../assets/constants';

const NewComment = ({setActivePopup, activePopup, user}) => {

  return (
    <div className='bg-bg_alt w-full'>
      <div className="flex text-center items-center rounded-2xl justify-between p-2 text-base">
        <div className="flex gap-1">
            <p>{`${user?.name} ${user?.last_name}`}, say something good.</p>
        </div>
      </div>
      <div className="px-10 border-t border-bg_light">
        <div className="flex gap-2 justify-between items-center text-center text-base text-white py-4">
          <img src={user?.image} alt="avatar" className='w-8 h-8 object-cover rounded-full' />
          <div  onClick={() => setActivePopup(!activePopup)} className="w-full cursor-pointer">
            <input disabled placeholder='What is on your mind...' className='flex flex-1 h-8 cursor-pointer rounded-full bg-bg_light px-4 w-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewComment
