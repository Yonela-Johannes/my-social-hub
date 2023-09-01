import React from 'react'
import avatar from '../../assets/pic.jpeg';
import cover from '../../assets/lewagon.jpeg';
import { AiFillLike, AiOutlineLike, AiFillHeart, AiOutlineHeart, AiOutlineComment, AiOutlineShareAlt, AiFillEye, AiOutlineEye } from 'react-icons/ai';
import {RiUserHeartFill, RiUserHeartLine } from 'react-icons/ri';
import { Link, useRoutes } from 'react-router-dom';
import moment from 'moment';


const Video = ({video}) => {

  return (
    <Link to={`video/1`} className="w-full rounded-lg cursor-pointer">
      <div className="flex">
        <img src={cover} className="w-full h-[140px] object-cover rounded-sm rounded-t-none" alt='logo' />
      </div>
      <div className="w-full">
        <div className="rounded-b-lg">
          <div className="px-1 text-start">
            <div className="flex flex-col px-1 text-base text-gray-200 py-4">
              <div className="flex text-center ">
                <div className="flex gap-1">
                  <img src={avatar} className="w-6 h-6 object-cover rounded-full" alt='logo' />
                </div>
                <div className="px-2 text-start text-base w-full">
                  <p className='font-bold text-base'>Hi Yonela welcome...
                  </p>
                  <div className="flex justify-between text-center w-full">
                    <p>100 views</p>
                    <p>{moment(12/22/2025).fromNow()} </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Video
