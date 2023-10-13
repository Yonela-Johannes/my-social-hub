import React, { useState , useEffect} from 'react'
import { AiFillLike, AiOutlineLike, AiFillHeart, AiOutlineHeart, AiOutlineComment, AiOutlineShareAlt, AiFillEye, AiOutlineEye } from 'react-icons/ai';
import {RiUserHeartFill, RiUserHeartLine } from 'react-icons/ri';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../actions/users';
import {lovePost} from '../../app/features/post/postsSlice';

const Post = ({post}) => {
  const dispatch = useDispatch()
  const {_id, given_name, email, picture, message } = useSelector(state => state.auth)

  return (
    <div className="relative bg-bg_alt w-[340px] md:w-[600px] rounded-xl cursor-pointer py-4 my-[20px]">
      <p className='absolute top-0 left-2 bg-green rounded-b-md p-1 text-bg_cl text-[14px] '>{post?.user?.title}</p>
      <div>
        <div>
          <div className="flex text-center items-center rounded-2xl justify-between p-2 px-4 text-base">
              <p className="text-[22px]">{post?.user.name}</p>
              <p className="">{moment(post.createdAt).fromNow()}</p>
          </div>
          <div className="flex px-4 gap-4">
              <img src={post.user?.picture} className="w-[50px] h-[50px] object-cover rounded-full" alt='logo' />
            {post?.post && (
            <div className="pb-6 text-start text-[14px]">
              <p className='flex-wrap mb-2 m-0'>{post?.post.slice(0, 240)}</p>
            </div>
            )}
          </div>
        </div>
        {post?.image && (
          <img src={post?.image} alt={post?.name} className="h-full w-full object-contain" />
        )}
      </div>
      <div className="">
        <div className="bg-bg_alt w-full bottom-0 rounded-b-lg">
          <div className="px-1">
            <div className="flex justify-between px-10 items-center text-center text-base text-gray-200 border-b border-bg_light py-4">
              <div className="flex gap-1 text-center items-center justify-center">
                <div className='flex'>
                  <AiFillHeart className="text-[#f03939]"/>
                </div>
                {post?.loveCount}
              </div>
              <div className="">
                <p>{post.commentsCount} comments</p>
              </div>
            </div>
          </div>
          <div className="flex px-10 py-6 justify-between">
            <div className="flex items-center text-center gap-4  w-[300px] rounded-2xl">
              <div className="flex text-center items-center gap-2 bg-bg_alt rounded-full p-2 text-base" onClick={() => dispatch(lovePost({postId: post?._id, userId: _id}))}>
                {post?.loveCount}
                {post.lovedUsers?.includes(_id) ? (
                    <AiFillHeart className='text-[18px] text-[red]' />
                  ) : (
                    <AiOutlineHeart className='text-[18px] ' />
                )}
              </div>
              <div className="flex text-center items-center gap-2 bg-bg_alt rounded-full p-2 text-base">
                {post?.commentsCount}
                <AiOutlineComment className='text-[18px]' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
