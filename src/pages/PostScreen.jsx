import { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdAdd } from 'react-icons/md';
import Footer from './blog/footer/Footer';
import Post from '../components/Posts/Post';
import { getPosts } from '../app/features/post/postsSlice';

const PostScreen = () => {
  const { given_name, family_name, email, isAdmin } = useSelector(state => state.auth)
  const { posts } = useSelector(state => state.posts)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    dispatch(getPosts())
  }, [pathname]);

  return (
    <Layout>
      {email && isAdmin && (
        <div className="flex flex-col sm:flex-row items-center justify-between md:w-[1000px] my-8 pr-8">
          <h3 className="text-center font-bold text-3xl pb-4">Posts</h3>
          <div className="flex items-center px-2 w-full justify-around">
            <p className="text-center text-lighter text-md">{given_name} {family_name}, Bring Your Ideas to Life - Write Your Next Post Today!</p>
            <div onClick={() => navigate('/create-post')} className="bg-bg_light p-2 rounded-xl h-min w-min cursor-pointer">
              <MdAdd size={20} />
            </div>
          </div>
        </div>
      )}
      <div className='flex flex-col flex-wrap text-center justify-center items-center gap-10 w-full mt-5'>
        {posts?.length > 0 ? posts?.map((post) => <Post post={post} key={post._id}/>) : (<p className='text-base w-full'>No Posts...</p>)}
      </div>
      <div className="mb-12 md:mb-20">
        <Footer />
      </div>
    </Layout>
  )
}
export default PostScreen;
