import { AiFillLike, AiOutlineLike, AiFillHeart, AiOutlineHeart, AiOutlineComment, AiOutlineShareAlt, AiOutlinePlayCircle } from 'react-icons/ai';
import {RiUserHeartFill, RiUserHeartLine } from 'react-icons/ri';
import React, { useRef, useEffect } from 'react';
import Controls from './Controls';
import Track from './Track';
import VolumeBar from './VolumeBar';

const Player = ({
  value, min, max, onInput,
  commentsCount,
  likesCount,
  loveCount,
  shareCount,
  supportCount,
  viewsCount,
  playCount,
  activeVideo,
  isPlaying,
  volume,
  seekTime,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  repeat,
  setVolume,
  setRepeat,
  shuffle,
  setShuffle,
  currentVideos,
  handlePlayPause,
  isActive,
  setSeekTime,
  appTime
}) => {
  const ref = useRef(null);
  // eslint-disable-next-line no-unused-expressions
  if (ref.current) {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  useEffect(() => {
    ref.current.volume = volume;
  }, [volume]);
  // updates audio element only on seekTime change (and not on each rerender):
  useEffect(() => {
    ref.current.currentTime = seekTime;
  }, [seekTime]);
  return (
    <div className="relative">
      <div className="relative w-full ">
        <div className="absolute left-2 top-2">
          <Track
            isPlaying={isPlaying}
            isActive={isActive}
            activeVideo={activeVideo}
          />
        </div>
        <div className="absolute right-2 top-2 flex justify-between">
          <div className="flex flex-col items-center text-center justify-between w-full rounded-2xl">
            <div className="flex text-center items-center gap-2 p-2 text-base" >
              {playCount}
              <AiOutlinePlayCircle className='text-[18px]' />
            </div>
            <div className="flex text-center items-center gap-2 rounded-full p-2 text-base" >
              {loveCount}
              <AiOutlineHeart className='text-[18px]' />
            </div>
            <div className="flex text-center items-center gap-2 rounded-full p-2 text-base" >
              {supportCount}
              <RiUserHeartLine className='text-[18px]' />
            </div>
            <div className="flex text-center items-center gap-2 rounded-full p-2 text-base" >
              {likesCount}
              <AiOutlineLike className='text-[18px]' />
            </div>
            <div className="flex text-center items-center gap-2 rounded-full p-2 text-base">
              {commentsCount}
              <AiOutlineComment className='text-[18px]' />
            </div>
            <div className="flex text-center items-center gap-2 rounded-full p-2 text-base">
              {shareCount}
              <AiOutlineShareAlt className='text-[18px]' />
            </div>
            </div>
          </div>
        <video
          src={activeVideo?.videoUrl}
          ref={ref}
          loop={repeat}
          onEnded={onEnded}
          onTimeUpdate={onTimeUpdate}
          onLoadedData={onLoadedData}
        />
        <div className="absolute flex bottom-0 left-0 right-0 bg-transparent">
          <Controls
            isPlaying={isPlaying}
            repeat={repeat}
            setRepeat={setRepeat}
            shuffle={shuffle}
            setShuffle={setShuffle}
            currentVideo={activeVideo}
            handlePlayPause={handlePlayPause}
            onInput={(event) => setSeekTime(event.target.value)}
            setSeekTime={setSeekTime}
            appTime={appTime}
            value={value}
            min={min}
            max={max}
            />
        </div>
      </div>
      <div className="">
        {/* <VolumeBar value={volume} min="0" max="1" onChange={(event) => setVolume(event.target.value)} setVolume={setVolume} /> */}
      </div>
    </div>
  );
};

export default Player;
