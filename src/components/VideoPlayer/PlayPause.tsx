import  {FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({isPlaying, activeVideo, video, handlePause, handlePlay }) => (isPlaying && activeVideo?._id === video?._id ? (
  <FaPauseCircle
    size={35}
    onClick={handlePause}
  />
): (
  <FaPlayCircle
    size={35}
    onClick={handlePlay}
  />
))

export default PlayPause;
