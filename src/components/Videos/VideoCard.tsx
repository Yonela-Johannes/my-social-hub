import React, {useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import PlayPause from '../VideoPlayer/PlayPause'
// import { viewVideo, playCountSong } from '../../actions/videos';
import { FaPlay, FaPlayCircle } from 'react-icons/fa';
import { getUser } from '../../actions/users';
import moment from "moment";


const VideoCard = ({
  video,
  videos,
  videoPlayerState,
  setPlayerState,
  setVideoPlayerState
}) => {
  const navigate = useNavigate();
  const [creator, setCreator] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      setCreator(await getUser(video?.userId))
    }
    fetchUser()
  }, []);

  const handlePauseClick = () => {
    setVideoPlayerState({ ...videoPlayerState, isPlaying: false });
  }


  const handlePlayClick = () => {
    setVideoPlayerState({
      currentVideos: videos,
      currentIndex: video?._id,
      isActive: true,
      isPlaying: true,
      showComments: true,
      playlist: false,
      max: false,
      activeVideo: video,
    });
    setPlayerState({
      currentSongs: [],
      currentIndex: 0,
      isActive: false,
      isPlaying: false,
      activeSong: {
        userId: '',
        artist: '',
        songUrl: '',
        description: '',
        releaseDate: '',
        download: '',
        title: '',
        imageUrl: '',
        cover: '',
        tags: '',
        tagUsers: '',
      },
    });
    // dispatch(playCountVideo(video._id));
  }

  const handleClick = (id) => {
    // dispatch(viewSong(id));
  }

  return (
    <div className={`bg-bg_alt rounded-xl cursor-pointer py-4 my-[20px] rounded-b-md hover:bg-bg_light duration-300`}>
      <div className="relative h-full group w-full align-center justify-center flex">
        <img src={video?.cover} className='w-full rounded-t-md object-cover' />
        <div className={`absolute inset-0 justify-center items-center font-bold bg-black bg-opacity-50 group-hover:flex rounded-t-md
          ${videoPlayerState?.activeVideo?.title === video?.title ? ' bg-opacity-70': 'hidden'}`}>
            <p className="text-base">{video?.title}</p>
            <PlayPause
              isPlaying={videoPlayerState?.isPlaying}
              activeVideo={videoPlayerState?.activeVideo}
              video={video}
              handlePause={handlePauseClick}
              handlePlay={handlePlayClick}
            />
        </div>
      </div>
      <div onClick={() => handleClick(video?._id)}>
        <div className="flex text-center items-center rounded-2xl justify-between p-2 px-4 text-base">
          <p className="text-base">{video?.title}</p>
          <p className="text-base">{moment(video?.releaseDate).fromNow()}</p>
        </div>
        <div className="flex justify-between px-4 gap-4 rounded-b-md py-1">
          <div className="flex gap-2 text-center items-center">
            <img src={creator?.image} className="w-[30px] h-[30px] object-cover rounded-full" alt='logo' />
            <p className="text-base">{creator?.name}</p>
          </div>
          <p className="text-base">{video?.playCount + video?.viewsCount + video?.likesCount + video?.loveCount + video?.supportCount} reactions</p>
        </div>
      </div>
    </div>
  )
};

export default VideoCard;
