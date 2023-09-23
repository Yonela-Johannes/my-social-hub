import { useState, useEffect } from 'react';
import { getPosts } from '../app/features/post/postsSlice'
import Layout from '../components/Layout/Layout';
import Post from '../components/Posts/Post';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { togglePostModal } from '../app/features/auth/authSlice';
import { MdAdd } from 'react-icons/md';

const PostScreen = () => {
  const location = useLocation();
  const { pathname } = location
  const dispatch = useDispatch()
  const { posts, lovePost } = useSelector(state => state.post)
  const { given_name, email, picture, message } = useSelector(state => state.auth)
  const [ activePopup, setActivePopup ] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getPosts());
    }
    fetchData();
  }, [pathname, lovePost]);

  return (
    <Layout>
      {email && (
        <div className="flex items-center justify-between w-[1000px] mb-8 pr-8">
          <h3 className="text-center font-bold text-3xl pb-4">Posts</h3>
          <p className="text-center text-lighter text-md">Bring Your Ideas to Life - Write Your Next Post Today!</p>
          <div onClick={() => dispatch(togglePostModal())} className="bg-bg_light p-2 rounded-xl cursor-pointer">
            <MdAdd size={20} />
          </div>
        </div>
      )}
      <div className='flex flex-col text-center justify-start items-center h-full w-full'>
        {!posts?.length ? (<p className='text-base'>No Posts...</p>) : posts.map(post =>
          (post?.post && <Post post={post} key={post._id} />) ||
          (post?.image && <Post post={post} key={post._id} />)
        )}
      </div>
    </Layout>
  )
}
export default PostScreen;
