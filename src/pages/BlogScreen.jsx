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

const BlogScreen = ({user}) => {
  const { given_name, email, picture, message } = useSelector(state => state.auth)
  const { blogs, loveBlogs } = useSelector(state => state.blogs)

  const dispatch = useDispatch()
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    dispatch(getBlogs())
  }, [pathname]);


  return (
    <Layout>
      {email && (
        <div className="flex items-center justify-between w-[1000px] my-8 pr-8">
          <h3 className="text-center font-bold text-3xl pb-4">Blogs</h3>
          <p className="text-center text-lighter text-md">Bring Your Ideas to Life - Write Your Next Post Today!</p>
          <div onClick={() => dispatch(toggleBlogModal())} className="bg-bg_light p-2 rounded-xl cursor-pointer">
            <MdAdd size={20} />
          </div>
        </div>
      )}
    <Featured />
      <div className='flex flex-wrap text-center items-center gap-8 w-full mt-20'>
        {blogs?.length > 0 ? blogs?.map((blog) => <Blog blog={blog} key={blog._id}/>) : (<p className='text-base w-full'>No Blogs...</p>)}
      </div>
      <div className="pb-40">
        <Footer />
      </div>
    </Layout>
  )
}
export default BlogScreen;
