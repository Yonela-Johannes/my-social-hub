import { useState, useEffect } from 'react';
import Blog from '../../components/Blogs/Blog';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../../app/features/blogs/blogsSlice';

function LandingBlog({user}) {
  const { blogs, loveBlogs } = useSelector(state => state.blogs)
  const location = useLocation();
  const [writer, setWriter] = useState();
  const navigate = useNavigate();
  const { pathname } = location;
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getBlogs())
    }
    fetchData();
}, [pathname]);

  return (
    <div className="flex flex-col bg-bg_cl justify-center w-[90%] text-white min-h-screen">
      <h2 className="text-[22px] sm:text-4xl md:text-center mb-2 md:mb-5 mt-10 text-title font-bold">
        Captivating Blogs for Growth and Success
      </h2>
      <p className="text-base md:text-lg md:text-center mb-5 text-lighter">Our journey to Success and Empowering Growth Through Inspiring Blog Stories</p>
      <div className="flex flex-wrap text-center items-center justify-center gap-8 h-full w-full pb-10">
        {blogs?.length > 0 ? blogs?.map((blog: any) => <Blog blog={blog} key={blog._id}/>) : (<p className='text-base'>No Blog...</p>)}
      </div>
    </div>
  );
}

export default LandingBlog;
