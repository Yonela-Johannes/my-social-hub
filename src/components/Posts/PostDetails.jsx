import React from "react";
import BlogSkeleton from "./BlogSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { MdClose } from "react-icons/md";
import { postDetailsToggle } from "../../app/features/auth/authSlice";
import parse from "html-react-parser";
import moment from "moment/moment";
import { AiFillHeart, AiOutlineComment, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { getPosts, lovePost } from "../../app/features/post/postsSlice";
import PostDetailsComments from "./PostDetailsComments";

const PostDetails = () => {
  const { posts, commentCount } = useSelector((state) => state.posts);
  const { _id, selectedPost } = useSelector((state) => state.auth);
  const [post, setPost] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPosts());
  }, []);

  React.useEffect(() => {
    setLoading(true)
    if (posts?.length > 0) {
      const getData = posts?.find((post) => post?._id === selectedPost);
      setPost(getData);
    }else{
      setLoading(false)
    }
    setLoading(false)
  }, []);

  const handleLike = async () => {
    if (!_id) return toast("Sorry you have to sign in to like post post");
    dispatch(lovePost({postId: post?._id, userId: _id}))
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
            onClick={() => dispatch(postDetailsToggle())}
            className="cursor-pointer"
          >
            <MdClose size={20} />
          </div>
        </div>
        <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 overflow-y-scroll sm:overflow-hidden">
          <article className="flex-1">
          {post?.image && (
            <img
              className="rounded-xl w-full h-[400px] object-cover"
              src={post?.image}
              alt={post?.title}
            />
          )}
            <div className=" mb-4">
              <div className="">
                <div className="flex items-center w-full justify-between">
                  <h1 className="text-xl font-medium font-roboto mt-2 text-dark-hard md:text-[26px]">
                    {post?.title}
                  </h1>
                  <h1 className="font-medium text-lighter mt-2 text-dark-hard md:text-[15px]">
                    {moment(post?.createdAt).fromNow()}
                  </h1>
                </div>
                <div className="flex items-center justify-between text-lighter">
                  <h1 className="font-medium text-lighter mt-2 text-dark-hard md:text-[15px]">
                    {post?.user?.given_name} {post?.user?.family_name}
                  </h1>
                  <div className="flex gap-4">
                    <div onClick={handleLike} className={`${post?.lovedUsers?.find((user) => user._id === _id) ? "text-red": ""} flex text-[12px] gap-2 items-center hover:text-red duration-300 cursor-pointer`}>
                      {post?.loveCount}
                      {post?.lovedUsers?.find((user) => user._id === _id) ? <AiFillHeart size={18} /> : <AiOutlineHeart size={18} />}
                    </div>
                    <div className="flex text-[12px] gap-2 items-center">
                      {post?.viewCount}
                      <AiOutlineEye size={18} />
                    </div>
                    <div className="flex text-[12px] gap-2 items-center">
                      {commentCount}
                      <AiOutlineComment size={18} />
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-roboto mt-2 text-dark-hard md:text-[18px]">
                {parse(`${post?.post}`)}
              </p>
            </div>
            <PostDetailsComments postId={post?._id} userId={_id} />
          </article>
          <div>
            <div className="mt-7">
              <h2 className="font-roboto font-medium text-dark-hard mb-4 md:text-xl">
                Share on:
              </h2>
            </div>
          </div>
        </section>
      </div>
      )}
    </div>
  );
};

export default PostDetails;
