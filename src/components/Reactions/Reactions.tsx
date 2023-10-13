import { AiFillLike, AiOutlineLike, AiFillHeart, AiOutlineHeart, AiOutlineComment, AiOutlineShareAlt, AiFillEye, AiOutlineEye } from 'react-icons/ai';
import {RiUserHeartFill, RiUserHeartLine } from 'react-icons/ri';

const Reactions = () => {
  return (
    <div className="flex p-6 justify-between">
      <div className="flex items-center text-center justify-between  w-[300px] rounded-2xl">
        <div className="">
          <AiOutlineHeart />
        </div>
        <div className="">
          <RiUserHeartLine />
        </div>
        <div className="">
          <AiOutlineLike />
        </div>
        <div className="">
          <AiOutlineComment />
        </div>
        <div className="">
          <AiOutlineShareAlt />
        </div>
        <div className="">
          {/* <AiFillEye /> */}
          <AiOutlineEye />
        </div>
      </div>
    </div>
  )
}

export default Reactions
