import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import Comment from "../../Comment/Comment";
// import {loveSong, supportSong, likeSong, playCountSong } from '../../../actions/music';
import { AiFillLike, AiOutlineLike, AiFillHeart, AiOutlineHeart, AiOutlineComment, AiOutlineShareAlt, AiOutlinePlayCircle } from 'react-icons/ai';
import {RiUserHeartFill, RiUserHeartLine } from 'react-icons/ri';
const VideoDetailsPlayer = ({
  commentsCount,
  likesCount,
  loveCount,
  shareCount,
  supportCount,
  viewsCount,
  playCount,
}) => {

  return(
      <div className="relative w-full flex border-t-bg_light px-2">
            <div className="w-full bottom-0">
              <div className="px-1">
                <div className="flex justify-between items-center text-center text-base text-gray-200 py-4">
                  <div className="flex gap-1 text-center items-center justify-center">
                    <div className='flex'>
                      <AiFillLike className='text-[#4267B2]'/>
                      <AiFillHeart className="text-[#f03939]"/>
                      <RiUserHeartFill className="text-[red]" />
                    </div>
                    {playCount + loveCount + likesCount + supportCount + viewsCount}
                  </div>
                  <div className="">
                    <p>{commentsCount} comments - {shareCount} shared - {viewsCount} views</p>
                  </div>
                </div>
              </div>
            </div>
        {/* <Comment user={user} /> */}
      </div>
)};

export default VideoDetailsPlayer;
