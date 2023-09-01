import React from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../../../../assets/pic.jpeg';
import cover from '../../../../assets/lewagon.jpeg';
import { AiFillLike, AiOutlineLike, AiFillHeart, AiOutlineHeart, AiOutlineComment, AiOutlineShareAlt, AiFillEye, AiOutlineEye } from 'react-icons/ai';
import {RiUserHeartFill, RiUserHeartLine } from 'react-icons/ri';
import { links } from '../../../../assets/constants';

const Blog = ({poppup, activePopup, setPostOption}) => {
  return (
    <div className='bg-bg_alt w-full rounded-2xl'>
      <div className="flex text-center items-center rounded-2xl justify-between p-4 text-base">
        <div className="flex gap-1">
          <div className="flex">
            <img src={cover} className="w-8 h-8 object-cover rounded-full" alt='logo' />
          </div>
          <div className="text-start">
            <p>company name</p>
            <p>New blog by</p>
          </div>
        </div>
        <div  onClick={() => poppup(!activePopup)} className="rounded-full bg-bg_light p-2 cursor-pointer">
          <p>Close</p>
        </div>
      </div>
      <div className="px-10 border-t border-bg_light w-full">
        <div className="flex gap-2 justify-between items-center text-center text-base text-gray-200 border-b border-bg_light py-4">
          <img src={avatar} alt="avatar" className='w-8 h-8 object-cover rounded-full self-start align-top my-1' />
          <div className="flex flex-col w-full gap-2">
            <input placeholder='title...' className='flex flex-1 h-8 rounded-full bg-bg_light p-4 w-full' />
            <textarea rows={15} placeholder='message...' className='flex flex-1 h-8 rounded-2xl bg-bg_light p-4 w-full' />
          </div>
        </div>
        <div className="flex px-2 py-2 justify-between">
          <div className="flex items-center text-center justify-between  w-[300px] rounded-2xl">
            {links && links.map(link => (
              <div onClick={() => setPostOption(link.click)} className="flex justify-center items-center text-center my-4 cursor-pointer text-base flex-col bg-bg_alt p-2 rounded-full duration-200 hover:text-hover">
                <link.icon className="w-4 h-4" />
                {link.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
