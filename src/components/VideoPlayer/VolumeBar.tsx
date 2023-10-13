import React from 'react';
import { BsFillVolumeUpFill, BsVolumeDownFill, BsFillVolumeMuteFill } from 'react-icons/bs';
import Controls from './Controls';


const VolumeBar = ({ value, min, max, onChange, setVolume }) => (
  <div className="hidden lg:flex flex-1 items-center justify-end">
    {value <= 1 && value > 0.5 && <BsFillVolumeUpFill size={20} className="text-bg_light" onClick={() => setVolume(0)} />}
    {value <= 0.5 && value > 0 && <BsVolumeDownFill size={20} className="text-bg_light" onClick={() => setVolume(0)} />}
    {value === 0 && <BsFillVolumeMuteFill size={20} className="text-bg_light" onClick={() => setVolume(1)} />}
    <input
      type="range"
      step="any"
      value={value}
      min={min}
      max={max}
      onChange={onChange}
      className="w-[200px] h-0 bg-transparent rounded-lg appearance-none cursor-pointer text-bg-bg_light dark:bg-gray-700"
    />
  </div>
);

export default VolumeBar;
