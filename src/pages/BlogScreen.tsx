import { useState, useEffect } from 'react';
import Blog from '../components/Blogs/Blog';
import Layout from '../components/Layout/Layout';
import { BiUserCheck } from 'react-icons/bi';
import { useLocation, useNavigate } from 'react-router-dom';
import { getBlogs } from '../app/features/blogs/blogsSlice';
import { useDispatch, useSelector } from 'react-redux';

const BlogScreen = ({user}) => {
  const { given_name, email, picture, message } = useSelector(state => state.auth)
  const { blogs, loveBlogs } = useSelector(state => state.blogs)

  const dispatch = useDispatch()
  const location = useLocation();
  const [writer, setWriter] = useState();
  const navigate = useNavigate();
  const { pathname } = location;

  useEffect(() => {
    dispatch(getBlogs())
  }, [pathname]);


  return (
    <Layout>
      {email && (
        <div className="flex w-full items-center gap-2 text-[14px]">
            <button onClick={() => navigate(`/blogs/newblog`)}>
            <p>New Blog</p>
            <BiUserCheck size={15} />
          </button>
        </div>
      )}
      <div className='flex flex-wrap text-center gap-8 h-full w-full pb-10'>
        {blogs?.length > 0 ? blogs?.map((blog: any) => <Blog blog={blog} key={blog._id}/>) : (<p className='text-base'>No Blogs...</p>)}
      </div>
    </Layout>
  )
}
export default BlogScreen;
