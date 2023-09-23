import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaCommentDots} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const VideoLikes = ({post}) => {
  const navigate = useNavigate(  )
  const userLiked = false
  const [liked, setLiked] = React.useState(false)
  const [comments, setComments] = React.useState([])
  const [likes, setLikes] = React.useState([])

  const likeOrUnlike = () => {

  }

  return (
    <div id={`${post?.id}`} className='relative mr-[75px]'>
        <div className="absolute bottom-0 pl-2">
          <div className="pb-4 text-center">
            <button
              disabled={liked}
              onClick={() => likeOrUnlike}
            >
            {liked ? (
              <AiFillHeart color={post?.likes.length > 0 && userLiked ? '#ff2626' : '' } size={25} />
            ) : (
              <AiOutlineHeart className='' size={25} />
            )}
              <span className='text-white text-sm font-semibold'>
                {likes?.length}
              </span>
            </button>
          </div>
          <button
              onClick={() => navigate(`/video/${post?.id}`)}
            >
              <FaCommentDots size={25} />
              <span className='text-white text-sm font-semibold'>
                {comments?.length}
              </span>
            </button>
        </div>
    </div>
  )
}

export default VideoLikes
