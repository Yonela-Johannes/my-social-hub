import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import { MdAdd } from "react-icons/md";
import Layout from "../components/Layout/Layout";
import { toggleWorkModal } from "../app/features/auth/authSlice";

const Projects = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const { pathname } = location;
  const [createProjectModal, setCreateProjectModal] = useState(false)

  useEffect(() => {

  }, [pathname]);


  return (
    <Layout>
      <div className="relative flex flex-col items-center h-[calc(100vh-200px)] w-full pt-10">
        <div className="flex items-center justify-between w-[1000px] mb-8 pr-8">
          <h3 className="text-center font-bold text-3xl pb-4">Projects</h3>
          <p className="text-center text-lighter text-md">Give your server a personality with a name and an image.<br />
          You can always change it later
        </p>
          <div onClick={() => dispatch(toggleWorkModal())} className="bg-bg_light p-2 rounded-xl cursor-pointer">
            <MdAdd size={20} />
          </div>
        </div>
        <div className="w-[1000px]">

        </div>
      </div>
    </Layout>
  );
};

export default Projects;
