import React from 'react';

const Track = ({ isPlaying, isActive, activeVideo }) => (
  <div className="">
    <div className={`${isPlaying && isActive && 'animate-[spin_3s_linear_infinite]'} hidden sm:block`}>
      <img src={activeVideo?.cover} alt="cover art" className="object-cover rounded-full h-[30px] w-[30px]" />
    </div>
  </div>
);

export default Track;
