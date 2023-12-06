import React from "react";
import BlogSkeleton from "./BlogSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs, loveBlog } from "../../app/features/blogs/blogsSlice";
import SocialShareButtons from "./SocialShareButtons";
import Comments from "../../pages/blog/comments/Comments";
import parse from "html-react-parser";
import moment from "moment/moment";
import {
  AiFillHeart,
  AiOutlineComment,
  AiOutlineEye,
  AiOutlineHeart,
} from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../pages/blog/footer/Footer";
import { clientBaseUrl } from "../../constants/base_urls";

const BlogDetailsScreen = () => {
  const { blogs } = useSelector((state) => state.blogs);
  const params = useParams();
  const { _id } = useSelector((state) => state.auth);
  const [blog, setBlog] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const [commentsCount, setCommentsCount] = React.useState();
  const { id } = params;

  React.useEffect(() => {
    dispatch(getBlogs());
  }, []);

  React.useEffect(() => {
    setLoading(true);
    if (blogs.length > 0) {
      const getData = blogs?.find((blog) => blog?._id === id);
      setBlog(getData);
    } else {
      setLoading(false);
    }
    setLoading(false);
  }, [blogs, blog]);

  const handleLike = async () => {
    if (!_id) return toast("Sorry you have to sign in to like blog post");
    dispatch(loveBlog({ blogId: blog?._id, userId: _id }));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Toaster />
      {loading ? (
        <BlogSkeleton />
      ) : (
        <section className="mx-auto max-w-5xl flex flex-col px-5 py-5 lg:gap-x-5">
          <article className="md:w-[1000px]">
            <img
              className="rounded-xl w-full md:h-[600px] md:w-[1000px] object-cover"
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
                    <div
                      onClick={handleLike}
                      className={`${
                        blog?.lovedUsers?.find((user) => user._id === _id)
                          ? "text-red"
                          : ""
                      } flex text-[12px] gap-2 items-center hover:text-red duration-300 cursor-pointer`}
                    >
                      {blog?.loveCount}
                      {blog?.lovedUsers?.find((user) => user._id === _id) ? (
                        <AiFillHeart size={18} />
                      ) : (
                        <AiOutlineHeart size={18} />
                      )}
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
              <div className="flex items-end justify-end gap-4 mt-2">
                <h2 className="text-primary text-[14px]">
                  Share on
                </h2>
                <SocialShareButtons
                  url={encodeURI(clientBaseUrl + blog?._id)}
                  title={encodeURIComponent(blog?.title)}
                />
              </div>
              <p className="font-roboto mt-2 text-dark-hard md:text-[18px]">
                {parse(`${blog?.message}`)}
              </p>
            </div>
          </article>
          <div></div>
          <div>
            <Comments
              blogId={blog?._id}
              userId={_id}
              setCommentsCount={setCommentsCount}
            />
          </div>
        </section>
      )}
      <div className="mb-40 mt-10 px-2 md:px-10">
        <Footer />
      </div>
    </div>
  );
};

export default BlogDetailsScreen;
