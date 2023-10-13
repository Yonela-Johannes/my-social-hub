import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBlogs } from "../app/features/blogs/blogsSlice";
import { useLocation, useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import { MdCreate } from "react-icons/md";
import WorkPopup from "../components/Work/WorkPopup";
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
    title: "Title",
    dataIndex: "title",
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: "Post",
    dataIndex: "post",
    sorter: (a, b) => a.post.length - b.post.length,
  },
  {
    title: "Views",
    dataIndex: "views",
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

const WorkList = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogs);
  const location = useLocation();
  const { pathname } = location;
  const [createProjectModal, setCreateProjectModal] = useState(false)

  useEffect(() => {
    dispatch(getBlogs());
  }, [pathname]);

  const data = [];
  for (let i = 0; i < blogs.length; i++) {
    data.push({
      key: i + 1,
      title: blogs[i].title,
      post: blogs[i].message ? parse(blogs[i].message) : '',
      views: blogs[i].viewCount,
      heart: blogs[i].loveCount,
      admin: blogs[i].user?.given_name,
      image: blogs[i].image ? <img src={blogs[i].image} className="w-[28px] h-[28px] object-cover rounded-lg" /> : '',
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
      <div className="relative flex flex-col items-center h-screen w-full pt-10">
        {createProjectModal && (<WorkPopup close={setCreateProjectModal} />)}
        <div className="flex items-center justify-between w-[1000px] mb-8 pr-8">
          <h3 className="mb-4 title">Work</h3>
          <div onClick={() => setCreateProjectModal(true)} className="bg-bg_light p-2 rounded-xl cursor-pointer">
            <MdCreate size={20} />
          </div>
        </div>
        <div className="w-[1000px]">
          <Table
            columns={columns}
            dataSource={data}
            bordered
            title={() => 'Work'}
            className="bg-red rounded-md"
          />
        </div>
      </div>
    </Layout>
  );
};

export default WorkList;
