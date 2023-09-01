import React from "react";
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const BlogCard = ({blog}) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/blogs/${blog?._id}`)} className="w-[300px] rounded-md cursor-pointer text-[14px]">
      <div className="card-image">
        <img src={blog?.image} className="h-[200px] w-[300px] object-cover rounded-t-md" alt="blog" />
      </div>
      <div className="px-2 pt-1 mb-4">
        <p className="date">{moment(blog?.createdAt).fromNow()}</p>
        <h5 className="title">A beautiful sunday morning renaissance</h5>
        <p className="desc">{blog?.message?.slice(0, 50)}</p>
        <p>
          Read More ..
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
