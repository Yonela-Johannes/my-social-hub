import React from 'react';
import { MdClose } from "react-icons/md";
import { blogModal } from '../app/features/auth/authSlice';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../app/features/blogs/blogsSlice';
import { sortBlogs } from '../utils';
import BlogLayoutTwo from '../components/Blogs/BlogLayoutTwo';

const BlogModal = () => {
  const { blogs } = useSelector(state => state.blogs)
  const dispatch = useDispatch()
  const location = useLocation();
  const { pathname } = location;
  const sortedBlogs = sortBlogs(blogs);
  React.useEffect(() => {
    dispatch(getBlogs())
  }, [pathname]);

  return (
    <div className="absolute flex z-40 w-full h-full items-center backdrop-blur-[67px] justify-center">
      <div className="relative h-min flex items-center flex-col justify-center bg-bg_alt w-full md:pt-10 pb-4 md:w-min rounded-lg">
        <div
            onClick={() => dispatch(blogModal())}
            className="absolute top-4 right-4 cursor-pointer"
          >
            <MdClose size={20} />
          </div>
          <p className="text-center font-bold text-3xl pb-4">Featured Blogs</p>
          <p className="text-center text-lighter text-md">
            Sharing stories and ideas!
          </p>
          <div className="flex w-full flex-col sm:flex-row items-center gap-8 justify-center pt-10 px-16 pb-16 overflow-y-scroll sm:overflow-hidden">
              <div className="flex gap-4 flex-col cursor-pointer rounded-2xl w-[300px] h-full md:w-min md:h-full">
                <article>
                  {sortedBlogs[0] && (<BlogLayoutTwo blog={sortedBlogs[0]} />)}
                </article>
                <article>
                  {sortedBlogs[1] && (<BlogLayoutTwo blog={sortedBlogs[1]} />)}
                </article>
              </div>
              <div className="flex gap-4 flex-col cursor-pointer rounded-2xl w-[300px] h-full md:w-min md:h-full">
                <article>
                  {sortedBlogs[2] && (<BlogLayoutTwo blog={sortedBlogs[2]} />)}
                </article>
                <article>
                  {sortedBlogs[3] && (<BlogLayoutTwo blog={sortedBlogs[3]} />)}
                </article>
              </div>
          </div>
      </div>
    </div>
  )
}

export default BlogModal
