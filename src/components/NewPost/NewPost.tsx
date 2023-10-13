import React from 'react'
import cover from '../../assets/lewagon.jpeg';

const NewPost = ({user, setActivePopup, activePopup}) => {

  return (
    <div onClick={() => setActivePopup(!activePopup)} className='bg-bg_alt w-[340px] md:w-[600px] rounded-xl cursor-pointer py-4 my-[20px]'>
      <div className="flex text-center items-center rounded-2xl justify-between p-2 text-base">
        <div className="flex gap-2 text-center items-center">
          <div className="flex">
            <img src={user?.cover} className="w-8 h-8 object-cover rounded-full" alt='logo' />
          </div>
          <div className="text-start">
            <p>{user?.name}</p>
          </div>
        </div>
      </div>
      <div className="px-10">
        <div className="flex gap-2 justify-between items-center text-center text-base text-gray-200 py-4">
          <img src={user?.image} alt="avatar" className='w-8 h-8 object-cover rounded-full' />
          <div className="w-full cursor-pointer">
            <input disabled placeholder='What is on your mind...' className='flex flex-1 h-8 cursor-pointer rounded-full bg-bg_light px-4 w-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewPost
