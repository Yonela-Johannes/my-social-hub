import React, { useEffect, useRef, useState } from "react";
import { GoVerified } from "react-icons/go";
import { MdClose, MdOutlineCancel } from "react-icons/md";
import { BsFillPlayFill } from "react-icons/bs";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import {
  AiFillHeart,
  AiFillPlayCircle,
  AiOutlineComment,
  AiOutlineEye,
  AiOutlineHeart,
} from "react-icons/ai";
// import LikeButton from '../../components/LikeButton';
import { useNavigate, useParams } from "react-router-dom";
import { getStories, loveStory } from "../app/features/videos/videoSlice";
import { useDispatch, useSelector } from "react-redux";
import Comments from "../components/video/Comments";

const VideoDetailsScreen = () => {
  const { stories } = useSelector((state) => state.stories);
  const [loading, setLoading] = useState(false);
  const [story, setStory] = React.useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const { _id, given_name, family_name, email, isAdmin } = useSelector(
    (state) => state.auth
  );
  const [commentsCount, setCommentsCount] = React.useState();
  const params = useParams();
  const { id } = params;
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStories());
  }, []);

  useEffect(() => {
    setLoading(true);
    if (stories.length > 0) {
      const getData = stories?.find((story) => story?._id === id);
      setStory(getData);
    } else {
      setLoading(false);
    }
    setLoading(false);
  }, [story]);

  const handleLike = async () => {
    if (!_id) return toast("Sorry you have to sign in to like story post");
    dispatch(loveStory({ storyId: story?._id, userId: _id }));
  };

  const onVideoClick = () => {
    if (isPlaying) {
      videoRef?.current?.pause();
      setIsPlaying(false);
    } else {
      videoRef?.current?.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    setIsPlaying(true);
    if (story && videoRef?.current) {
      videoRef.current.muted = isVideoMuted;
    }
  }, [story, isVideoMuted]);

  return (
    <>
      {story && (
        <div className="flex w-full flex-wrap lg:flex-nowrap absolute h-full items-center justify-center z-40 pb-20">
          <div className="fixed top-24 rounded-full p-1 right-8 bg-red gap-4">
            <div
              title="Exit"
              onClick={() => navigate(-1)}
              className="cursor-pointer"
            >
              <MdClose size={25} />
            </div>
          </div>
          <div className="flex h-[80vh] bg-bg_alt pt-10 pb-4 p-5 w-full lg:w-[1200px] rounded-lg ">
            <div className="flex-2 w-[1000px] lg:w-9/12 flex justify-center items-center bg-blurred-img bg-no-repeat bg-cover bg-center">
              <div className="relative flex bg-primary items-center md:w-[500px] md:h-[720px] rounded-xl">
                <video
                  ref={videoRef}
                  onClick={onVideoClick}
                  loop
                  muted
                  autoPlay
                  src={story?.story}
                  className="object-contain w-full h-full cursor-pointer"
                ></video>
              <div className="absolute lg:bottom-10  right-16  cursor-pointer">
                {isVideoMuted ? (
                  <div onClick={() => setIsVideoMuted(false)}>
                    <HiVolumeOff className="text-white text-3xl lg:text-2xl" />
                  </div>
                ) : (
                  <div onClick={() => setIsVideoMuted(true)}>
                    <HiVolumeUp className="text-white text-3xl lg:text-2xl" />
                  </div>
                )}
              </div>
              </div>
            </div>
            <div className="relative w-[1100px]">
              <div className="lg:mt-20 mt-10">
                <div>
                  <div className="flex gap-4 mb-4 w-full pl-10 cursor-pointer">
                    <img
                      alt="user-profile"
                      className="w-16 h-16 object-center object-contain rounded-full"
                      src={story?.user?.picture}
                    />
                    <div>
                      <div className="text-xl font-bold tracking-wider text-secondary flex gap-2 items-center justify-center">
                        {story?.user?.given_name}{" "}
                        <GoVerified className="text-blue-400 text-xl" />
                      </div>
                      <p className="text-md">
                        {" "}
                        {story?.user?.given_name} {story?.user?.family_name}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="px-10">
                    <p className=" text-md text-gray-600">{story?.caption}</p>
                  </div>
                  <div className="flex gap-4">
                    <div
                      onClick={handleLike}
                      className={`${
                        story?.lovedUsers?.find((user) => user._id === _id)
                          ? "text-red"
                          : ""
                      } flex text-[12px] gap-2 items-center hover:text-red duration-300 cursor-pointer`}
                    >
                      {story?.loveCount}
                      {story?.lovedUsers?.find((user) => user._id === _id) ? (
                        <AiFillHeart size={18} />
                      ) : (
                        <AiOutlineHeart size={18} />
                      )}
                    </div>
                    <div className="flex text-[12px] gap-2 items-center">
                      {story?.viewCount}
                      <AiOutlineEye size={18} />
                    </div>
                    <div className="flex text-[12px] gap-2 items-center">
                      {commentsCount}
                      <AiOutlineComment size={18} />
                    </div>
                  </div>
                </div>
                <div className="mt-10 px-10">
                </div>
                <Comments
                  storyId={story?._id}
                  userId={_id}
                  setCommentsCount={setCommentsCount}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoDetailsScreen;
