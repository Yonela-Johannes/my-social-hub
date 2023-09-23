import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { getPosts } from '../actions/posts'
import Layout from '../components/Layout/Layout';
import UserProfile from '../components/Profile/UserProfile';

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(getPosts())
    };
  }, [dispatch]);

  let range = []
  for(let i = 0; i < 100; i++){
    range.push(i)
  }

  return (
  <div className='flex flex-col text-center justify-center items-center'>
      {/* <div className='w-full flex justify-between items-center px-4 sm:flex-row flex-col mt-4 mb-4'>
          <h2 className='font-bold text-3xl text-[#008c7788]'>Profiles</h2>
      </div> */}
      <Layout>
        <UserProfile />
      </Layout>
  </div>
  )
}
export default Users;
