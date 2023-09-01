import React, { useEffect, useState } from 'react'
import { AiFillProfile, AiOutlineCamera, AiOutlineHome, AiOutlineUnorderedList, AiOutlineUser, AiOutlineDatabase } from 'react-icons/ai';
import { CgUserAdd, CgUserList } from 'react-icons/cg';
import Layout from '../components/Layout/Layout';
import Post from '../components/Posts/Post';
import CreatePostPopup from '../components/Posts/CreatePostPopup';
import NewPost from '../components/NewPost/NewPost';
import { storageUser } from "../actions/storageUser";
import { useLocation } from 'react-router-dom';
import { BiUserCheck } from 'react-icons/bi';
import { getDevs } from '../actions/users';
import CreateDev from '../components/Dev/CreateDev';
import DevCard from '../components/Dev/DevCard';

const Devs = ({user}) => {
  const location = useLocation();
  const [devs, setDevs] = useState();
  const [ activePopup, setActivePopup ] = useState(false);

  const { pathname } = location;

  useEffect(() => {
    const fetchDevs = async () => {
      setDevs(await getDevs());
    }
    fetchDevs();
  }, [pathname, getDevs()]);

  return (
    <Layout>
      {user?.title === 'Developer' && (
        <div className="flex w-full items-center gap-2 text-[14px]">
            <button onClick={() => setActivePopup(true)}>
            <p>New Post</p>
            <BiUserCheck size={15} />
          </button>
        </div>
      )}
      <div className='flex flex-col text-center justify-start items-center h-full w-full'>
        {activePopup && (
          <CreateDev
            activePopup={activePopup}
            setActivePopup={setActivePopup}
            user={user}
          />
        )}
        {devs?.length > 0 ?  devs.map(post => <DevCard post={post} key={post._id} />) : (<p className='text-base'>No Post...</p>)}
      </div>
    </Layout>
  )
}
export default Devs;
