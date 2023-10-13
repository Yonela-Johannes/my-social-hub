import React, { useState } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineClose, AiOutlineExpand, AiOutlineMenu } from 'react-icons/ai';
import { MdOutlinePlaylistRemove } from 'react-icons/md';
import { BsBoxArrowDownRight } from 'react-icons/bs';

const PostModel = ({
  postPopup,
  setPostPopup
}) => {
  const handleClose = () => {
    // if (!postPopup?.isActive) return;
    // setVideoPlayerState({ ...postPopup, isPlaying: false, activeVideo: '', isActive: false });
  };

  const handleExpand = () => {
    // if (postPopup?.max) {
    //   setVideoPlayerState({ ...postPopup, max: false });
    // } else {
    //   setVideoPlayerState({ ...postPopup, max: true });
    // }
  };

  return (
    <div className="relative flex flex-col items-center justify-between">
      <div className="flex items-center justify-between w-full m-2 px-2">
        <div className={`${postPopup.max && 'mt-4'} w-full flex gap-4 items-end justify-end cursor-pointer`}>
          {postPopup?.playlist ? (
            <div onClick={handlePlaylist}>
              <MdOutlinePlaylistRemove className="text-[20px]" />
            </div>
          ) : (
            <div onClick={handlePlaylist}>
              <AiOutlineMenu className="text-[18px]" />
            </div>
          )}
          {postPopup?.max ? (
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

    </div>
  );
};

export default PostModel;
