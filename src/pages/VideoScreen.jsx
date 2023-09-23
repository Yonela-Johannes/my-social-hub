import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { getVideos } from '../actions/videos';
import { useDispatch, useSelector } from 'react-redux';
import { toggleVideoModal } from '../app/features/auth/authSlice';
import { MdAdd } from 'react-icons/md';
import Video from '../components/Video';

const breakpointObj = {
  default: 3,
  3000: 3,
  2000: 3,
  1200: 3,
  1000: 3,
  500: 1,
}

const VideoScreen = ({videoPlayerState, setVideoPlayerState, setPlayerState}) => {
  const { given_name, email, picture, message } = useSelector(state => state.auth)
  const [ activePopup, setActivePopup ] = useState(false);
  const [videos, setVideos] = useState([]);
  const location = useLocation();
  const [user, setUser] = useState('');
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      setVideos(await getVideos());
    }
    fetchData();
  }, [location, getVideos()]);

  return (
    <Layout>
      <div className='flex h-full flex-col text-center justify-start items-center w-full'>
        {email && (
          <div className="flex items-center justify-between w-[1000px] mb-8 pr-8">
            <h3 className="text-center font-bold text-3xl pb-4">Videos</h3>
            <p className="text-center text-lighter text-md">Bring Your Ideas to Life - Write Your Next Post Today!</p>
            <div onClick={() => dispatch(toggleVideoModal())} className="bg-bg_light p-2 rounded-xl cursor-pointer">
              <MdAdd size={20} />
            </div>
          </div>
        )}
        <div className="w-[1000px]">
          <Video
          post={{
            id: 123,
            userId: 123456789,
            videoUrl:'',
            text:"This is some comment on the video",
            createdAt:new Date(),
            profile: {
              userId: '456',
              name: 'Yonela Johannes',
              image: '',
            }
          }}
          />
        </div>
    </div>
  </Layout>
  )
}
export default VideoScreen;
