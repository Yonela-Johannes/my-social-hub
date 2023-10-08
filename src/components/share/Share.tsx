import React from 'react'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'

const Share = () => {
  return (
    <div className="h-min bg-primary p-2 rounded-full w-min">
      <div className="flex items-center gap-4">
        <p className="text-[16px]">share:</p>
        <div className="flex gap-4 social-media text-[22px] items-center justify-items-center">
          <div className="cursor-pointer bg-secondary border border-lighter text-white rounded-full p-2 hover:bg-green duration-300"><AiOutlineLinkedin /></div>
          <div className="cursor-pointer bg-secondary border border-lighter text-white rounded-full p-2 hover:bg-green duration-300"><AiOutlineWhatsApp /></div>
          <div className="cursor-pointer bg-secondary border border-lighter text-white rounded-full p-2 hover:bg-green duration-300"><AiOutlineInstagram /></div>
          <div className="cursor-pointer bg-secondary border border-lighter text-white rounded-full p-2 hover:bg-green duration-300"><AiOutlineFacebook /></div>
          <div className="cursor-pointer bg-secondary border border-lighter text-white rounded-full p-2 hover:bg-green duration-300"><AiOutlineTwitter /></div>
        </div>
      </div>
    </div>
  )
}

export default Share
