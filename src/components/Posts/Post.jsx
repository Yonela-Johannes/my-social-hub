import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { blogDetailsToggle } from "../../app/features/auth/authSlice";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { viewBlog } from "../../app/features/blogs/blogsSlice";
import Comments from "./Comments";

const Post = ({ blog }) => {
  const { _id, given_name, family_name, email, isAdmin } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const postId = blog?._id;
  const [commentsCount, setCommentsCount] = React.useState();
  const blogHandler = () => {
    dispatch(blogDetailsToggle(postId));
    dispatch(viewBlog(postId));
  };

  return (
    <div className="flex flex-col">
      <div className="">
        <div className="flex items-center mt-2 ml-2">
          <p className="text-[12px] flex flex-col justify-start px-2 py-1 text-lighter rounded-md bg-bg_alt items-start text-start gap-0">
            @posted by
          </p>
          <div className="flex items-center text-base text-white p-1 rounded-b-md left-2 gap-2">
            <img
              src={blog?.user?.picture}
              className="w-[50px] h-[50px] object-cover rounded-full"
              alt="logo"
            />
            <div className="flex flex-col justify-start px-2 py-1 rounded-md bg-bg_alt items-start text-start gap-0">
              <p className="m-0 p-0 text-[14px] text-facebook">
                {blog?.user?.given_name} {blog?.user?.family_name}
              </p>
            </div>
          </div>
        </div>
        <div className="flex text-start pb--4 justify-between p-2 px-4 text-base border-b border-b-primary">
          <p className="text-[16px]">{blog?.title}</p>
          <p className="text-[12px] text-lighter">
            {moment(blog?.createdAt).fromNow()}
          </p>
        </div>
      </div>
      <div
        onClick={blogHandler}
        className="relative flex flex-col items-center text-center group hover:scale-105 bg-bg_alt w-[340px] md:w-[700px] rounded-xl cursor-pointer py-4 my-[20px] hover:bg-bg_light duration-300"
      >
        <div className="absolute top-0 right-1 flex  gap-2 justify-between items-center text-center text-base text-bg_cl py-4">
          <div className="flex gap-1 text-center items-center justify-center">
            <div className="flex">
              <AiFillEye size={22} className="text-primary" />
            </div>
            {blog?.viewCount}
          </div>
        </div>
        <div className="w-full">
          <img
            src={blog?.image}
            alt={blog?.name}
            className="h-[200px] w-[380px] md:w-full md:h-[400px] object-cover object-center group-hover:rounded-lg transition-all ease self-center"
          />
          <div className="">
            {blog?.message && (
              <div className="flex text-start pb--4 justify-between p-2 px-4 text-base border-b border-b-primary">
                <p className="text-[16px]">{parse(`${blog?.message.slice(0, 200)}`)}</p>
              </div>
            )}
            <Comments
              blogId={blog?._id}
              userId={_id}
              setCommentsCount={setCommentsCount}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
