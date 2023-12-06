import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import moment from "moment";
import { useDispatch } from "react-redux";
import { blogDetailsToggle } from "../../app/features/auth/authSlice";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { viewBlog } from "../../app/features/blogs/blogsSlice";

const Blog = ({ blog }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const blogId = blog?._id;

  const blogHandler = () => {
    dispatch(blogDetailsToggle(blogId));
    dispatch(viewBlog(blogId));
  };

  return (
    <div
      onClick={blogHandler}
      className="relative flex flex-col items-center text-center group hover:scale-105 bg-bg_alt w-[300px] h-[380px] md:w-[380px] rounded-xl cursor-pointer py-4 my-[20px] hover:bg-bg_light duration-300"
    >
      <div className="absolute top-0 right-1 flex  gap-2 justify-between items-center text-center text-base text-bg_cl py-4">
        <div className="flex gap-1 text-center items-center justify-center">
          <div className="flex">
            <AiFillEye size={22} className="text-primary" />
          </div>
          {blog?.viewCount}
        </div>
      </div>
      <div>
        <img
          src={blog?.image}
          alt={blog?.name}
          className="h-[200px] w-[280px] md:w-[380px] object-cover object-center group-hover:rounded-lg transition-all ease self-center"
        />
        <div className="">
        <div className="flex items-center mt-2 ml-2">
          <p className="text-[12px] flex flex-col justify-start px-2 py-1 text-lighter rounded-md bg-bg_alt items-start text-start gap-0">by</p>
          <div className="flex items-center text-base text-white p-1 rounded-b-md left-2 gap-2">
            <img
              src={blog?.user?.picture}
              className="w-[50px] h-[50px] object-cover rounded-full"
              alt="logo"
            />
            <div className="flex flex-col justify-start px-2 py-1 rounded-md bg-bg_alt items-start text-start gap-0">
              <p className="m-0 p-0 text-[14px] text-facebook">
                {blog?.user?.given_name} {blog?.user?.family_name}
            <p className="text-[11px]">{moment(blog?.createdAt).fromNow()}</p>
              </p>
            </div>
          </div>
        </div>
          <div className="flex text-start rounded-2xl justify-between p-2 px-4 text-base">
            <p className="text-[16px]">{blog?.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
