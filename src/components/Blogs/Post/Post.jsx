import {Card, CardActions, CardContent, CardMedia, TextField, Button, Typography, Paper } from '@material-ui/core'

import { AiOutlineHeart, AiFillHeart, AiOutlineLike, AiFillLike, AiOutlineDislike, AiFillDislike, AiOutlineMore} from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { CiShare1 } from 'react-icons/ci';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import { useDispatch, useSelector } from 'react-redux';
import { removePost, likePost, lovePost, sharePost} from '../../../actions/posts';

const Post = ({post, update }) => {
  const dispatch = useDispatch();

  const deletePost = (id) => {
    dispatch(removePost(id))
  }

  return(
    <Card className='grid'>
      <div className="">
        {post?.creator}
      </div>
      <img className="rounded-lg w-80 h-80 " src={post?.image} alt={post.title} />
        <p>{post?.title}</p>
      <div className="flex gap-4 mx-6 bg-[red] justify-between">
        <div onClick={() => dispatch(lovePost(post._id))} className="cursor-pointer text-gray-500 hover:text-hover transition duration-200">
          <AiOutlineHeart />
          <div className="" >{post?.loveCount}</div>
        </div>
        <div onClick={() => dispatch(likePost(post._id))} className="cursor-pointer text-gray-500 hover:text-hover transition duration-200">
          <AiFillLike />
          <div className="" >{post?.likeCount}</div>
        </div>
        <div  onClick={() => dispatch(sharePost(post._id))} className="cursor-pointer text-gray-500 hover:text-hover transition duration-200">
          <CiShare1 />
          <div className="" >{post?.shareCount}</div>
        </div>
        <div onClick={() => update(post._id)} className="cursor-pointer text-gray-500 hover:text-hover transition duration-200">
          <HiOutlinePencilSquare />
        </div>
        <div className="cursor-pointer text-gray-500 hover:text-hover transition duration-200" onClick={() => deletePost(post._id)}>
          <MdDelete />
        </div>
      </div>
    </Card>
  )
}

export default Post;
