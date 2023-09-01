import { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import NewPost from '../components/NewPost/NewPost';
import CreateVideoPopup from '../components/Videos/Video/CreateVideoPopup';
import { getVideos } from '../actions/videos';
import VideoCard from '../components/Videos/VideoCard';
import Loader from '../components/Loader/Loader';

const breakpointObj = {
  default: 3,
  3000: 3,
  2000: 3,
  1200: 3,
  1000: 3,
  500: 1,
}

const VideoScreen = ({videoPlayerState, setVideoPlayerState, setPlayerState}) => {
  const [ activePopup, setActivePopup ] = useState(false);
  const [videos, setVideos] = useState([]);
  const location = useLocation();
  const [user, setUser] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setVideos(await getVideos());
    }
    fetchData();
  }, [location, getVideos()]);

  return (
    <Layout>
      <div className='flex h-full flex-col text-center justify-start items-center w-full'>
        {activePopup && (
          <CreateVideoPopup
            activePopup={activePopup}
            setActivePopup={setActivePopup}
            user={user}
          />
        )}
        {user?.title === 'Artist' && (
          <NewPost setActivePopup={setActivePopup} activePopup={activePopup} user={user} />
        )}
        <Masonry className="flex gap-4 animate-slide-fwd items-center justify-center w-[340px] md:w-[600px] rounded-xl cursor-pointer py-4 my-[20px]" breakpointCols={breakpointObj}>
          {videos?.length > 0 ? videos?.map((video) =>
          <VideoCard
            {...videos}
            videos={videos}
            key={video._id}
            video={video}
            videoPlayerState={videoPlayerState}
            setVideoPlayerState={setVideoPlayerState}
            setPlayerState={setPlayerState}
          />) : (
            <Loader />
          )}
        </Masonry>
    </div>
  </Layout>
  )
}
export default VideoScreen;
