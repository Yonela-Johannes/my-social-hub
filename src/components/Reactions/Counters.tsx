import { AiFillLike, AiOutlineLike, AiFillHeart, AiOutlineHeart, AiOutlineComment, AiOutlineShareAlt, AiFillEye, AiOutlineEye } from 'react-icons/ai';
import {RiUserHeartFill, RiUserHeartLine } from 'react-icons/ri';

const Counters = () => {
  return (
    <div className="flex justify-between items-center text-center text-base text-gray-200">
    <div className="flex gap-1 text-center items-center justify-center">
      <div className='flex'>
        <AiFillLike className='text-[#4267B2]'/>
        <AiFillHeart className="text-[#f03939]"/>
        <RiUserHeartFill className="text-[red]" />
      </div>
      95
    </div>
    <div className="">
      <p>25 comments - 12 shared - 100 views</p>
    </div>
  </div>
  )
}

export default Counters
