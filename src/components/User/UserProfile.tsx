import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { likeUser, getUser, supportUser, loveUser, rateUser, viewUser } from '../../actions/users';
import Alpha from '../../assets/AlphaWhite.png';
import { AiFillLike, AiOutlineLike, AiFillHeart, AiOutlineHeart, AiOutlineComment, AiOutlineShareAlt, AiFillEye, AiOutlineEye } from 'react-icons/ai';
import {RiUserHeartFill, RiUserHeartLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import StarsRating from 'react-star-rate';

const UserProfile = ({user}) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState()
  const [updatedUser, setUpdatedUser] = useState(user);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      setUpdatedUser(await getUser(user?._id));
    }
    fetchUser();
  }, [getUser(user?.id)]);

  const viewUserHandler = () => {
    dispatch(viewUser(updatedUser?._id));
    navigate(`/users/${user?._id}`)
  }

  return (
      <div
        className='relative w-full flex text-center rounded-md justify-start items-center mb-7 cursor-pointer text-base flex-col bg-bg_alt duration-2'
        >
          <img onClick={viewUserHandler} src={updatedUser?.cover || updatedUser?.image} className="w-full h-[420px] object-cover rounded-t-md" alt="cover" />
          {updatedUser ? (
          <div onClick={viewUserHandler} className="flex mt-[-40px] mb-2 align-start w-full px-4">
            <img src={updatedUser?.image} className="w-[100px] h-[100px] object-cover rounded-full" alt="avatar" />
          </div>

          ):(
            <Link to='/'>
            <img src={Alpha}  alt='logo' className="w-4 h-4 rotate-180"/>
          </Link>
          )}
          <div className="w-full px-4 pb-4">
              <p className="text-[16px] text-start">{`${updatedUser?.name} ${updatedUser?.last_name}`}</p>
            <div className="p-2 text-base">{updatedUser?.bio}</div>
            <div className="px-2 border-t border-bg_light">
              <div className="flex justify-between items-center text-center text-base text-gray-200 border-b border-bg_light py-4">
                <p>{updatedUser?.likesCount + updatedUser?.loveCount + updatedUser?.supportersCount + updatedUser?.supportCount} reactions</p>
                <StarsRating />
                {updatedUser?.rate} votes
              </div>
            <div className="flex px-1 py-6 w-full justify-between">
              <div className="" onClick={() => dispatch(loveUser(updatedUser?._id))}>
                {updatedUser?.loveCount}
                <AiOutlineHeart size={18} />
              </div>
              <div className="" onClick={() => dispatch(supportUser(updatedUser?._id))}>
                {updatedUser?.supportCount}
                <RiUserHeartLine size={18} />
              </div>
              <div className="" onClick={() => dispatch(likeUser(updatedUser?._id))}>
                {updatedUser?.likesCount}
                <AiOutlineLike size={18} />
              </div>
              <div className="">
                {updatedUser?.commentsCount}
                <AiOutlineComment size={18} />
              </div>
              <div className="">
                {updatedUser?.shareCount}
                <AiOutlineShareAlt size={18} />
              </div>
              <div className="">
                {updatedUser?.viewsCount}
                <AiOutlineEye size={18} />
              </div>
            </div>
            </div>
          </div>
      </div>
  )
}

export default UserProfile
