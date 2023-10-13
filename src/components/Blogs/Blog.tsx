import React, {useState, useEffect } from 'react'
import parse from 'html-react-parser';
import { AiFillLike, AiFillHeart } from 'react-icons/ai';
import {RiUserHeartFill} from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { getUser, getWriter } from '../../actions/users';


const Blog = ({blog}) => {
  const [writer, setWriter] = useState();
  const dispatch = useDispatch();

  return (
    <div className="relative bg-bg_alt w-[340px] h-[330px] md:w-[320px] rounded-xl cursor-pointer py-4 my-[20px]">
      <div className="absolute top-0 right-1 flex justify-between items-center text-center text-base text-bg_cl py-4">
        <div className="flex gap-1 text-center items-center justify-center">
          <div className='flex'>
            <AiFillHeart className="text-[#f03939]"/>
          </div>
          {blog?.loveCount}
        </div>
      </div>
      <div className="absolute flex text-base text-bg_alt p-1 rounded-b-md left-2 gap-2">
        <img src={blog?.user.picture} className="w-[30px] h-[30px] object-cover rounded-full" alt='logo' />
        <div className="flex flex-col justify-start items-start text-start gap-0">
          <p className='m-0 p-0 text-[14px]'>{blog?.user.name}</p>
          <div className="m-0 p-0">{writer?.title}</div>
        </div>
      </div>
      <div>
      <img src={blog?.image} alt={blog?.name} className="h-[200px] w-[360px] object-cover" />
        <div className=''>
          <div className="flex text-start rounded-2xl justify-between p-2 px-4 text-base">
              <p className="text-[16px]">{blog.title}</p>
              <p className="">{moment(blog.createdAt).fromNow()}</p>
          </div>
          <div className="flex px-4 gap-4">
            <div className="pb-6 text-start text-[14px]">
              <p className='flex-wrap mb-2 m-0'>{parse(blog?.message?.slice(0, 140) + "...") }</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
