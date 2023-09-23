import React from 'react'
import { Link } from 'react-router-dom'
import VideoLikes from './VideoLikes'

const Video = ({post}) => {
  return (
    <div id={`${post?.id}`} className='flex border-b py-6'>
      <div className="cursor-pointer">
        <img src={post?.image} alt='profile' className='rounded-full max-h-[60px]' width={60} />
      </div>
      <div className="pl w-full px-4">
        <div className="flex items-center justify-between pb-0.5">
          <div className='font-bold'>
            {post?.profile?.name}
          </div>
        </div>
        <p className='text-[15px] pb-0.5 break-words md:max-w-[400px] max-w[300px]'>{post?.text}</p>
        <p className='text-[14px] text-gray-500 md:max-w-[400px] max-w[300px]'>#funny #cool #superawesome</p>
        <p className='text-[15px] pb-0.5 break-words flex items-center font-semi-bold md:max-w-[400px] max-w[300px]'>{post?.text}</p>
        <div className="mt-2.5 flex">
          <div className="relative flex item-center round-xl cursor-pointer min-h-[480px] max-h-[580px] max-w-[260px]">
            <video
              id={`video-${post.id}`}
              loop
              controls
              muted
              className='rounded-xl object-cover mx-auto h-full'
              src={post?.videoUrl}
            />
          </div>
          <img
            className='absolute right-2 bottom-7'
            width={90}
            src=''
          />
        </div>
      </div>
        <VideoLikes post={post} />
    </div>
  )
}

export default Video
