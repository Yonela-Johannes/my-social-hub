import { useState, useEffect } from 'react';
import Blog from '../components/Blogs/Blog';
import Layout from '../components/Layout/Layout';
import { useLocation, useNavigate } from 'react-router-dom';
import { getBlogs } from '../app/features/blogs/blogsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { MdAdd } from 'react-icons/md';
import { toggleBlogModal } from '../app/features/auth/authSlice';
import Featured from './blog/featured/Featured';
import Footer from './blog/footer/Footer';
import Post from '../components/Posts/Post';

const PostScreen = () => {
  const { given_name, family_name, email, isAdmin } = useSelector(state => state.auth)
  const { blogs } = useSelector(state => state.blogs)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    dispatch(getBlogs())
  }, [pathname, blogs]);

  return (
    <Layout>
      {email && isAdmin && (
        <div className="flex flex-col sm:flex-row items-center justify-between md:w-[1000px] my-8 pr-8">
          <h3 className="text-center font-bold text-3xl pb-4">Blogs</h3>
          <div className="flex items-center px-2 w-full justify-around">
            <p className="text-center text-lighter text-md">{given_name} {family_name}, Bring Your Ideas to Life - Write Your Next Post Today!</p>
            <div onClick={() => navigate('/create-blog')} className="bg-bg_light p-2 rounded-xl h-min w-min cursor-pointer">
              <MdAdd size={20} />
            </div>
          </div>
        </div>
      )}
      <div className="px-2">
        <Featured />
      </div>
      <div className='flex flex-col flex-wrap text-center justify-center items-center gap-10 w-full mt-20'>
        {blogs?.length > 0 ? blogs?.map((blog) => <Post blog={blog} key={blog._id}/>) : (<p className='text-base w-full'>No Blogs...</p>)}
      </div>
      <div className="mb-12 md:mb-20">
        <Footer />
      </div>
    </Layout>
  )
}
export default PostScreen;
