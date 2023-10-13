import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import { getPosts } from "../app/features/post/postsSlice";
import { MdCreate } from "react-icons/md";
import PostListPopup from "../components/Posts/postlist/PostListPopup";
import Layout from "../components/Layout/Layout";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Image",
    dataIndex: "image",
    sorter: (a, b) => a.image - b.image,
  },
  {
    title: "Post",
    dataIndex: "post",
    sorter: (a, b) => a.post.length - b.post.length,
  },
  {
    title: "Heart",
    dataIndex: "heart",
  },
  {
    title: "Admin",
    dataIndex: "admin",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const PostsList = () => {
  const [createPostModal, setCreatePostModal] = useState(false);
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    dispatch(getPosts());
  }, [pathname]);

  const data = [];
  for (let i = 0; i < posts.length; i++) {
    data.push({
      key: i + 1,
      post: posts[i].post ? parse(posts[i].post) : '',
      heart: posts[i].loveCount,
      admin: posts[i].user?.given_name,
      image: posts[i].image ? <img src={posts[i].image} className="w-[28px] h-[28px] object-cover rounded-lg" /> : '',
      action: (
        <div className="flex gap-4">
          <Link to="/" className=" fs-3 text-danger">
            <BiEdit size={18} />
          </Link>
          <Link className="ms-3 fs-3 text-danger" to="/">
            <AiFillDelete size={18} />
          </Link>
        </div>
      ),
    });
  }

  return (
    <Layout>
      <div className="flex flex-col items-center h-screen w-full pt-10">
        {createPostModal && (<PostListPopup close={setCreatePostModal} />)}
        <div className="flex items-center justify-between w-[1000px] mb-8 pr-8">
          <h3 className="mb-4 title">Posts</h3>
          <div onClick={() => setCreatePostModal(true)} className="bg-bg_light p-2 rounded-xl cursor-pointer">
            <MdCreate size={20} />
          </div>
        </div>
        <div className="w-[1000px]">
          <Table
            columns={columns}
            dataSource={data}
            bordered
            title={() => 'Posts'}
            className="bg-red rounded-md"
          />
        </div>
      </div>
    </Layout>
  );
};

export default PostsList;
