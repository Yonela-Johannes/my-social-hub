import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle, BsFillFastForwardFill  } from 'react-icons/bs';

const Controls = ({value, min, max, onInput, isPlaying, repeat, setRepeat, shuffle, setShuffle, currentVideo, handlePlayPause, handlePrevSong, handleNextSong, setSeekTime, appTime }) => {
 // converts the time to format 0:00
 const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

  return (
  <div className="flex items-center justify-around w-full">
     <p className="text-base">{value === 0 ? '0:00' : getTime(value)}</p>
    {currentVideo?.length && <MdSkipPrevious size={30} color="#FFF" className="cursor-pointer" onClick={handlePrevSong} />}
    <div onClick={() => setSeekTime(appTime - 5)} className="hidden lg:mr-4 lg:block text-white">
      <BsFillFastForwardFill size={22} className="rotate-180  text-white cursor-pointer p-1 rounded-full hover:bg-primary duration-300" />
      </div>
    {isPlaying ? (
      <BsFillPauseFill size={22} color="#fff" onClick={handlePlayPause} className="mb-2 cursor-pointer" />
    ) : (
      <BsFillPlayFill size={22} color="#FFF" onClick={handlePlayPause} className="mb-2 cursor-pointer" />
    )}
    <div onClick={() => setSeekTime(appTime + 5)} className="hidden lg:ml-4 lg:block">
      <BsFillFastForwardFill size={22} className="text-white cursor-pointer p-1 rounded-full hover:bg-primary duration-300" />
    </div>
    {currentVideo?.length && <MdSkipNext size={30} color="#FFF" className="cursor-pointer" onClick={handleNextSong} />}
    <p className="text-base">{max === 0 ? '0:00' : getTime(max)}</p>
  </div>
  );
}
export default Controls;
