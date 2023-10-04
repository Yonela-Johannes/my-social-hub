import React from "react";
import BlogSkeleton from "./BlogSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs, loveBlog } from "../../app/features/blogs/blogsSlice";
import { MdClose } from "react-icons/md";
import SocialShareButtons from "./SocialShareButtons";
import { blogDetailsToggle } from "../../app/features/auth/authSlice";
import Comments from "../../pages/blog/comments/Comments";
import parse from "html-react-parser";
import moment from "moment/moment";
import { AiFillHeart, AiOutlineComment, AiOutlineExpand, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { blogs } = useSelector((state) => state.blogs);
  const { _id, selectedBlog } = useSelector((state) => state.auth);
  const [blog, setBlog] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [commentsCount, setCommentsCount] = React.useState();
  const { pathname } = location;

  React.useEffect(() => {
    dispatch(getBlogs());
  }, [blogs]);

  React.useEffect(() => {
    setLoading(true)
    if (blogs?.length > 0) {
      const getData = blogs?.find((blog) => blog?._id === selectedBlog);
      setBlog(getData);
    }else{
      setLoading(false)
    }
    setLoading(false)
  }, [blogs, blog]);

  const handleLike = async () => {
    if (!_id) return toast("Sorry you have to sign in to like blog post");
    dispatch(loveBlog({blogId: blog?._id, userId: _id}))
  }

  const handleExpand = () => {
    dispatch(blogDetailsToggle())
    navigate(`blogs/${blog._id}`)
  }

  return (
    <div className="absolute flex flex-col h-full items-center justify-center w-full backdrop-blur-[67px] z-40 pb-20">
      <Toaster />
      {loading ? (
        <BlogSkeleton />
      ): (
      <div className="relative h-[80vh] bg-bg_alt pt-10 pb-4 p-5 w-full lg:w-[1000px] rounded-lg overflow-y-scroll">
        <div className="flex w-full gap-4">
          <div title="Exit"
            onClick={() => dispatch(blogDetailsToggle())}
            className="cursor-pointer"
          >
            <MdClose size={20} />
          </div>
          <div title="Expand"
            onClick={handleExpand}
            className="cursor-pointer"
          >
            <AiOutlineExpand size={20} />
          </div>
        </div>
        <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 overflow-y-scroll sm:overflow-hidden">
          <article className="flex-1">
            <img
              className="rounded-xl w-full h-[400px] object-cover"
              src={blog?.image}
              alt={blog?.title}
            />
            <div className="">
              <div className="">
                <div className="flex items-center w-full justify-between">
                  <h1 className="text-xl font-medium font-roboto mt-2 text-dark-hard md:text-[26px]">
                    {blog?.title}
                  </h1>
                  <h1 className="font-medium text-lighter mt-2 text-dark-hard md:text-[15px]">
                    {moment(blog?.createdAt).fromNow()}
                  </h1>
                </div>
                <div className="flex items-center justify-between text-lighter">
                  <h1 className="font-medium text-lighter mt-2 text-dark-hard md:text-[15px]">
                    {blog?.user?.given_name} {blog?.user?.family_name}
                  </h1>
                  <div className="flex gap-4">
                    <div onClick={handleLike} className={`${blog?.lovedUsers?.find((user) => user._id === _id) ? "text-red": ""} flex text-[12px] gap-2 items-center hover:text-red duration-300 cursor-pointer`}>
                      {blog?.loveCount}
                      {blog?.lovedUsers?.find((user) => user._id === _id) ? <AiFillHeart size={18} /> : <AiOutlineHeart size={18} />}
                    </div>
                    <div className="flex text-[12px] gap-2 items-center">
                      {blog?.viewCount}
                      <AiOutlineEye size={18} />
                    </div>
                    <div className="flex text-[12px] gap-2 items-center">
                      {commentsCount}
                      <AiOutlineComment size={18} />
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-roboto mt-2 text-dark-hard md:text-[18px]">
                {parse(`${blog?.message}`)}
              </p>
            </div>
            <Comments blogId={blog?._id} userId={_id} setCommentsCount={setCommentsCount} />
          </article>
          <div>
            <div className="mt-7">
              <h2 className="font-roboto font-medium text-dark-hard mb-4 md:text-xl">
                Share on:
              </h2>
              <SocialShareButtons
                url={encodeURI(window.location.href+"/"+blog?._id)}
                title={encodeURIComponent(blog?.title)}
              />
            </div>
          </div>
        </section>
      </div>
      )}
    </div>
  );
};

export default BlogDetails;
