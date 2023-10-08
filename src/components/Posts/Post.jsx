import { useState, useEffect } from "react";
import { baseUrl } from "../../constants/base_urls";
import parse from "html-react-parser";
import toast, { Toaster } from "react-hot-toast";
import moment from "moment";
import DocumentMeta from "react-document-meta";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { postDetailsToggle } from "../../app/features/auth/authSlice";
import {
  AiFillEye,
  AiFillHeart,
  AiOutlineComment,
  AiOutlineEye,
  AiOutlineHeart,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Comments from "./Comments";
import {
  lovePost,
  postComments,
  viewPost,
} from "../../app/features/post/postsSlice";

const Post = ({ post }) => {
  const [data, setData] = useState([]);
  const { _id } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const postId = post?._id;
  const postHandler = () => {
    dispatch(postDetailsToggle(postId));
    dispatch(viewPost(postId));
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `${baseUrl}post-comment/all-comments/${postId}`
        );
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          console.error(`Error: ${response.status}`);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchComments();
  }, []);

  useEffect(() => {
    dispatch(postComments(data?.length));
  }, [data]);

  const handleLike = async () => {
    if (!_id) return toast("Sorry you have to sign in to like post");
    dispatch(lovePost({ postId: post?._id, userId: _id }));
  };

  // Function to handle button clicks
  const handleShare = (e, shareUrl) => {
    e.preventDefault();
    window.open(shareUrl, "Share", "width=600,height=400");
  };

  const url = window.location.href; // Get the current URL
  const title = post?.title;

  const meta = {
    title: post.title,
    description: post.post,
    canonical: url,
    meta: {
      charset: "utf-8",
      name: {
        keywords: "react, meta, document, html, tags",
      },
    },
  };

  return (
    <DocumentMeta {...meta}>
    <Toaster />
      <div className="group flex flex-col my-4 rounded-xl bg-bg_alt">
        <div className="">
          <div className="flex items-center mt-2 ml-2">
            <p className="text-[12px] flex flex-col justify-start px-2 py-1 text-lighter rounded-md bg-bg_alt items-start text-start gap-0">
              @posted by
            </p>
            <div className="flex items-center text-base text-lighter p-1 rounded-b-md left-2 gap-2">
              <img
                src={post?.user?.picture}
                className="w-[50px] h-[50px] object-cover rounded-full"
                alt="logo"
              />
              <div className="flex flex-col justify-start px-2 py-1 rounded-md bg-bg_alt items-start text-start gap-0">
                <p className="m-0 p-0 text-[14px] text-facebook">
                  {post?.user?.given_name} {post?.user?.family_name}
                </p>
              </div>
            </div>
          </div>
          <div className="flex text-start pb-4 justify-between p-2 px-4 text-base">
            <p className="text-[16px]">{post?.title}</p>
            <p className="text-[12px] text-lighter">
              {moment(post?.createdAt).fromNow()}
            </p>
          </div>
        </div>
        <div
          onClick={postHandler}
          className="relative flex flex-col items-center text-center w-[340px] md:w-[700px] rounded-xl cursor-pointer duration-300"
        >
          <div className="absolute top-0 right-1 flex  gap-2 justify-between items-center text-center text-base text-bg_cl py-4">
            <div className="flex gap-1 text-center items-center justify-center">
              <div className="flex">
                <AiFillEye size={22} className="text-primary" />
              </div>
              {post?.viewCount}
            </div>
          </div>
          <div className="w-full">
            {post?.image && (
              <img
                src={post?.image}
                alt={post?.name}
                className="h-[200px] w-[380px] md:w-full md:h-[400px] object-cover object-center transition-all ease self-center"
              />
            )}
            <div className="">
              {post?.post && (
                <div className="flex text-start pb--4 justify-between p-2 px-4 text-base border-b border-b-primary">
                  <p className="text-[16px]">
                    {parse(`${post?.post.slice(0, 200)}`)}
                  </p>
                </div>
              )}
              <Comments postId={post?._id} userId={_id} data={data} />
            </div>
          </div>
        </div>
        <div className="flex items-center ml-2 pb-3 justify-between">
          <div className="flex items-center text-base text-white p-1 rounded-b-md left-2 gap-2">
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
                  <div className="cursor-pointer border border-red rounded-full p-2 hover:bg-green duration-300 hover:text-white">
                    <AiFillHeart size={18} />
                  </div>
                ) : (
                  <div className="cursor-pointer border border-lighter text-lighter rounded-full p-2 hover:bg-green duration-300 hover:text-white">
                    <AiOutlineHeart size={18} />
                  </div>
                )}
              </div>
              <div className="flex text-[12px] gap-2 items-center">
                {post?.viewCount}
                <div className="cursor-pointer border border-lighter text-lighter rounded-full p-2 hover:bg-green duration-300 hover:text-white">
                  <AiOutlineEye size={18} />
                </div>
              </div>
              <div className="flex text-[12px] gap-2 items-center">
                {post?.commentCount}
                <div className="cursor-pointer border border-lighter text-lighter rounded-full p-2 hover:bg-green duration-300 hover:text-white">
                  <AiOutlineComment size={18} />
                </div>
              </div>
            </div>
          </div>
          <div className="text-[12px] flex flex-col justify-start px-2 py-1 text-lighter rounded-md items-start text-start gap-0">
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 social-media text-[18px] px-2 text-lighter items-center justify-items-center">
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    url
                  )}`}
                  onClick={(e) =>
                    handleShare(
                      e,
                      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                        url
                      )}`
                    )
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer border border-lighter text-lighter rounded-full p-2 hover:bg-green duration-300 hover:text-white"
                >
                  <AiOutlineLinkedin />
                </a>
                <a
                  href={`whatsapp://send?text=${encodeURIComponent(
                    title
                  )}%20${encodeURIComponent(url)}`}
                  data-action="share/whatsapp/share"
                  className="cursor-pointer border border-lighter text-lighter rounded-full p-2 hover:bg-green duration-300 hover:text-white"
                >
                  <AiOutlineWhatsApp />
                </a>
                <a
                  href={`instagram://library?AssetPath=${encodeURIComponent(
                    url
                  )}&Caption=${encodeURIComponent(title)}`}
                  data-action="share/instagram/share"
                  className="cursor-pointer border border-lighter text-lighter rounded-full p-2 hover:bg-green duration-300 hover:text-white"
                >
                  <AiOutlineInstagram />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    url
                  )}`}
                  onClick={(e) =>
                    handleShare(
                      e,
                      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        url
                      )}`
                    )
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer border border-lighter text-lighter rounded-full p-2 hover:bg-green duration-300 hover:text-white"
                >
                  <AiOutlineFacebook />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    url
                  )}&text=${encodeURIComponent(title)}`}
                  onClick={(e) =>
                    handleShare(
                      e,
                      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        url
                      )}&text=${encodeURIComponent(title)}`
                    )
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer border border-lighter text-lighter rounded-full p-2 hover:bg-green duration-300 hover:text-white"
                >
                  <AiOutlineTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocumentMeta>
  );
};

export default Post;
