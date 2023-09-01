import React, { useState } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineClose, AiOutlineExpand, AiOutlineMenu } from 'react-icons/ai';
import { MdOutlinePlaylistRemove } from 'react-icons/md';
import { BsBoxArrowDownRight } from 'react-icons/bs';
import VideoDetailsPlayer from '../Videos/Video/VideoDetailsPlayer';
import Player from './Player';
import Seekbar from './Seekbar';
import Track from './Track';

const VideoPlayer = ({
  playerState,
  setPlayerState,
  videoPlayerState,
  setVideoPlayerState,
  videoPlayerSidebar,
  setVideoPlayerSidebar,
  reelPlayerState,
  setReelPlayerState,
}) => {
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  // useEffect(() => {
  //   if (currentSongs.length) dispatch(playPause(true));
  // }, [currentIndex]);

  const handlePlayPause = () => {
    if (!videoPlayerState?.isActive) return;
    if (videoPlayerState.isPlaying) {
      setVideoPlayerState({ ...videoPlayerState, isPlaying: false });
    } else {
      setVideoPlayerState({ ...videoPlayerState, isPlaying: true });
    }
    setPlayerState({ ...playerState, isPlaying: false });
  };

  const handleClose = () => {
    if (!videoPlayerState?.isActive) return;
    setVideoPlayerState({ ...videoPlayerState, isPlaying: false, activeVideo: '', isActive: false });
  };

  const handleExpand = () => {
    if (videoPlayerState?.max) {
      setVideoPlayerState({ ...videoPlayerState, max: false });
    } else {
      setVideoPlayerState({ ...videoPlayerState, max: true });
    }
  };

  const handlePlaylist = () => {
    if (videoPlayerState?.playlist) {
      setVideoPlayerState({ ...videoPlayerState, playlist: false });
    } else {
      setVideoPlayerState({ ...videoPlayerState, playlist: true });
    }
  };

  // const handleNextSong = () => {
  //   dispatch(playPause(false));

  //   if (!shuffle) {
  //     dispatch(nextSong((currentIndex + 1) % currentSongs.length));
  //   } else {
  //     dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
  //   }
  // };

  // const handlePrevSong = () => {
  //   if (currentIndex === 0) {
  //     dispatch(prevSong(currentSongs.length - 1));
  //   } else if (shuffle) {
  //     dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
  //   } else {
  //     dispatch(prevSong(currentIndex - 1));
  //   }
  // };


  return (
    <div className="relative flex flex-col items-center justify-between">
      <div className="flex items-center justify-between w-full m-2 px-2">
        <div className={`${videoPlayerState.max && 'mt-4'} w-full flex gap-4 items-end justify-end cursor-pointer`}>
          {videoPlayerState?.playlist ? (
            <div onClick={handlePlaylist}>
              <MdOutlinePlaylistRemove className="text-[20px]" />
            </div>
          ) : (
            <div onClick={handlePlaylist}>
              <AiOutlineMenu className="text-[18px]" />
            </div>
          )}
          {videoPlayerState?.max ? (
            <div onClick={handleExpand}>
              <BsBoxArrowDownRight className="text-[16px]" />
            </div>
          ) : (
            <div onClick={handleExpand}>
              <AiOutlineExpand className="text-[18px]" />
            </div>
          )}
          <div onClick={handleClose}>
            <AiOutlineClose className="text-[18px]" />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <Player
          activeVideo={videoPlayerState?.activeVideo}
          volume={volume}
          setVolume={setVolume}
          isPlaying={videoPlayerState?.isPlaying}
          isActive={videoPlayerState?.isActive}
          seekTime={seekTime}
          repeat={repeat}
          setRepeat={setRepeat}
          shuffle={shuffle}
          setShuffle={setShuffle}
          currentVideos={videoPlayerState?.currentVideos}
          appTime={appTime}
          currentIndex={videoPlayerState?.currentIndex}
          onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
          onLoadedData={(event) => setDuration(event.target.duration)}
          handlePlayPause={handlePlayPause}
          setSeekTime={setSeekTime}
          { ...videoPlayerState?.activeVideo }
          value={appTime}
          min="0"
          max={duration}
        />
      </div>
      <VideoDetailsPlayer
        className=""
        { ...videoPlayerState?.activeVideo }
      />
    </div>
  );
};

export default VideoPlayer;
