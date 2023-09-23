import React from 'react'
import BlogSkeleton from './BlogSkeleton'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBlogs } from '../../app/features/blogs/blogsSlice';
import { MdClose } from "react-icons/md";
import SocialShareButtons from './SocialShareButtons';
import CommentsContainer from '../comments/CommentsContainer';
import { blogDetailsToggle } from "../../app/features/auth/authSlice";


const BlogDetails = () => {
  const [loading, setLoading] = React.useState(false)
  const params = useParams()
  const { blogs } = useSelector(state => state.blogs);
  const { _id, selectedBlog } = useSelector(state => state.auth);
  const [blog, setBlog] = React.useState()
  const dispatch = useDispatch();

  React.useEffect(() => {
    setLoading(true)
    dispatch(getBlogs())
    setLoading(false)
  }, []);

  React.useEffect(() => {
    if(blogs.length > 0){
      const getData = blogs?.find(blog => blog?._id === selectedBlog);
      setBlog(getData)
    }
  }, []);

  return (
    <div className="absolute flex flex-col h-full items-center justify-center w-full backdrop-blur-[67px] z-40">
    {/* <BlogSkeleton /> */}
          <div className="relative bg-bg_alt pt-10 pb-4 p-5 w-full lg:w-[90%] rounded-lg">
            <div
                onClick={() => dispatch(blogDetailsToggle())}
                className="absolute top-4 right-4 cursor-pointer"
              >
                <MdClose size={20} />
              </div>
            <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 overflow-y-scroll sm:overflow-hidden" >
                <article className="flex-1">
                  {/* <BreadCrumbs blog={breadCrumbsData} /> */}
                  <img
                    className="rounded-xl w-full h-[400px] object-contain"
                    src={blog?.image}
                    alt={blog?.title}
                  />
                  <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
                    {blog?.title}
                  </h1>
                  <CommentsContainer
                    comments={blog?.comments}
                    className="mt-10"
                    userId={_id}
                  />
                </article>
                <div>
                  <div className="mt-7">
                    <h2 className="font-roboto font-medium text-dark-hard mb-4 md:text-xl">
                      Share on:
                    </h2>
                    <SocialShareButtons
                      url={encodeURI(window.location.href)}
                      title={encodeURIComponent(blog?.title)}
                    />
                  </div>
                </div>
            </section>
          </div>
        </div>

  )
}

export default BlogDetails
