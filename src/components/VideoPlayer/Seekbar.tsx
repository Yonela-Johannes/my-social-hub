import React from 'react';

const Seekbar = ({ value, min, max, onInput }) => {
  // converts the time to format 0:00
  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;
  return (
    <div className="hidden sm:flex flex-row items-center justify-center text-[#184A45FF] ">
      <p className="text-base">{value === 0 ? '0:00' : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className="w-[350px] h-0 rounded-lg bg-transparent appearance-none cursor-pointer text-bg-bg_light dark:bg-gray-700 mx-2"
      />
      <p className="text-base">{max === 0 ? '0:00' : getTime(max)}</p>
    </div>
  );
};

export default Seekbar;
