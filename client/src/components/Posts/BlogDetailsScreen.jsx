import React from "react";
import BlogSkeleton from "./BlogSkeleton";
import { useDispatch, useSelector } from "react-redux";
import SocialShareButtons from "./SocialShareButtons";
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
import Footer from "../../pages/post/footer/Footer";
import { getPosts, lovePost } from "../../app/features/post/postsSlice";
import PostDetailsComments from "./PostDetailsComments";

const PostDetailsScreen = () => {
  const { posts } = useSelector((state) => state.posts);
  const params = useParams();
  const { _id } = useSelector((state) => state.auth);
  const [post, setPost] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const [commentsCount, setCommentsCount] = React.useState();
  const { id } = params;

  React.useEffect(() => {
    dispatch(getPosts());
  }, [posts]);

  React.useEffect(() => {
    setLoading(true);
    if (posts.length > 0) {
      const getData = posts?.find((post) => post?._id === id);
      setPost(getData);
    } else {
      setLoading(false);
    }
    setLoading(false);
  }, [posts, post]);

  const handleLike = async () => {
    if (!_id) return toast("Sorry you have to sign in to like post");
    dispatch(lovePost({ postId: post?._id, userId: _id }));
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
              src={post?.image}
              alt={post?.title}
            />
            <div className="">
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
                    <div
                      onClick={handleLike}
                      className={`${
                        post?.lovedUsers?.find((user) => user._id === _id)
                          ? "text-red"
                          : ""
                      } flex text-[12px] gap-2 items-center hover:text-red duration-300 cursor-pointer`}
                    >
                      {post?.loveCount}
                      {post?.lovedUsers?.find((user) => user._id === _id) ? (
                        <AiFillHeart size={18} />
                      ) : (
                        <AiOutlineHeart size={18} />
                      )}
                    </div>
                    <div className="flex text-[12px] gap-2 items-center">
                      {post?.viewCount}
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
                  url={encodeURI(window.location.href + "/" + post?._id)}
                  title={encodeURIComponent(post?.title)}
                />
              </div>
              <p className="font-roboto mt-2 text-dark-hard md:text-[18px]">
                {parse(`${post?.message}`)}
              </p>
            </div>
          </article>
          <div></div>
          <div>
            <PostDetailsComments
              blogId={post?._id}
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

export default PostDetailsScreen;
