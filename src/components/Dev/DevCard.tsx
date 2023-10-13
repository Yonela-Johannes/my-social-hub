import React, { useState , useEffect} from 'react'
import { AiFillLike, AiOutlineLike, AiFillHeart, AiOutlineHeart, AiOutlineComment, AiOutlineShareAlt, AiFillEye, AiOutlineEye } from 'react-icons/ai';
import {RiUserHeartFill, RiUserHeartLine } from 'react-icons/ri';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getDeveloper, getUser, likeDev, loveDev, supportDev, viewDev } from '../../actions/users';
import {lovePost,
  // supportPost,
   likePost, viewPost } from '../../actions/posts';

const DevCard = ({post}) => {
  const [user, setUser] = useState();
  const [developer, setDeveloper] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      setUser(await getUser(post?.userId))
    }
    fetchUser();
  }, [post]);

  useEffect(() => {
    const fetchDeveloper = async () => {
      setDeveloper(await getDeveloper(post?.userId))
    }
    fetchDeveloper();
  }, [post]);

  const view = (id) => {
    dispatch(viewDev(id))
    navigate(`/devs/${id}`)
  }

  return (
    <div className="relative bg-bg_alt w-[340px] md:w-[600px] rounded-xl cursor-pointer py-4 my-[20px] text-white">
      <p className="absolute top-0 left-2 text-bg_cl p-1 rounded-b-md bg-gold text-base ">{developer?.title}</p>
      <div className=""  onClick={() => view(post?._id)}>
        <div>
          <div className="flex text-center items-center rounded-2xl justify-between p-2 px-4 text-base">
              <p className="text-[16px]">{post?.title}</p>
              <p className="">{moment(post.createdAt).fromNow()}</p>
          </div>
          <div className="flex px-4 gap-4">
          <div className="flex gap-2 items-center text-base h-fit bg-bg_cl rounded-full pl-2">
            {user?.name}
            <img src={user?.image} className="w-[30px] h-[30px] object-cover bg-white rounded-full" alt='logo' />
          </div>
            {post?.message && (
              <div className="pb-6 text-start text-[14px]">
              <p className='flex-wrap mb-2 m-0'>{post?.message}</p>
              <p className='text-base'>...more details</p>
            </div>
            )}
          </div>
        </div>
        {post.image && (
          <img src={post?.image} alt={post?.name} className="h-full w-full object-contain" />
          )}
      </div>
      <div className="">
        <div className=" w-full bottom-0 rounded-b-lg">
          <div className="px-1">
            <div className="flex justify-between px-10 items-center text-center text-base text-gray-200 border-b border-bg_light py-4">
              <div className="flex gap-1 text-center items-center justify-center">
                <div className='flex'>
                  <AiFillLike className='text-[#4267B2]'/>
                  <AiFillHeart className="text-[#f03939]"/>
                  <RiUserHeartFill className="text-[red]" />
                </div>
                {post?.loveCount + post?.likeCount + post?.supportCount}
              </div>
              <div className="">
                <p>0 comments - {post?.shareCount} shared - {post?.viewCount} views</p>
              </div>
            </div>
          </div>
          <div className="flex px-10 py-6 justify-between">
            <div className="flex items-center text-center justify-between  w-[300px] rounded-2xl">
              <div className="flex text-center items-center gap-2 bg-bg_alt rounded-full p-2 text-base" onClick={() => dispatch(loveDev(post?._id))}>
                {post?.loveCount}
                <AiOutlineHeart className='text-[18px]' />
              </div>
              <div className="flex text-center items-center gap-2 bg-bg_alt rounded-full p-2 text-base" onClick={() => dispatch(supportDev(post?._id))}
              // onClick={() => dispatch(supportPost(post?.userId))}
              >
                {post?.supportCount}
                <RiUserHeartLine className='text-[18px]' />
              </div>
              <div className="flex text-center items-center gap-2 bg-bg_alt rounded-full p-2 text-base" onClick={() => dispatch(likeDev(post?._id))}>
                {post?.likeCount}
                <AiOutlineLike className='text-[18px]' />
              </div>
              <div className="flex text-center items-center gap-2 bg-bg_alt rounded-full p-2 text-base">
                {post?.commentCount}
                <AiOutlineComment className='text-[18px]' />
              </div>
              <div className="flex text-center items-center gap-2 bg-bg_alt rounded-full p-2 text-base">
                {post?.viewCount}
                <AiOutlineShareAlt className='text-[18px]' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DevCard
