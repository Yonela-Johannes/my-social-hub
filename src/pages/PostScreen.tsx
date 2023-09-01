import { useState, useEffect } from 'react';
import { getPosts, lovePost } from '../app/features/post/postsSlice'
import Layout from '../components/Layout/Layout';
import Post from '../components/Posts/Post';
import CreatePostPopup from '../components/Posts/CreatePostPopup';
import NewPost from '../components/NewPost/NewPost';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import { BiUserCheck } from 'react-icons/bi';

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
        <div className="flex w-full items-center gap-2 text-[14px]">
            <button onClick={() => setActivePopup(true)}>
            <p>New Post</p>
            <BiUserCheck size={15} />
          </button>
        </div>
      )}
      <div className='flex flex-col text-center justify-start items-center h-full w-full'>
        {activePopup && (
          <CreatePostPopup
            activePopup={activePopup}
            setActivePopup={setActivePopup}
          />
        )}
        {!posts?.length ? (<p className='text-base'>No Posts...</p>) : posts.map(post =>
          (post?.post && <Post post={post} key={post._id} />) ||
          (post?.image && <Post post={post} key={post._id} />)
        )}
      </div>
    </Layout>
  )
}
export default PostScreen;
