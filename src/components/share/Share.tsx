import React from 'react'
import { AiOutlineLinkedin, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'
import { clientBaseUrl } from '../../constants/base_urls'

const Share = () => {
  const url = encodeURI(clientBaseUrl)
  return (
    <div className="h-min bg-primary p-2 rounded-full w-min">
      <div className="flex items-center gap-4">
        <p className="text-[16px]">share:</p>
        <div className="flex gap-4 social-media text-[22px] items-center justify-items-center">
          <a rel="noreferrer" target='_blank' href={`https://www.linkedin.com/shareArticle?url=${url}`} className="cursor-pointer bg-primary border border-lighter text-white rounded-full p-2 hover:bg-green duration-300"><AiOutlineLinkedin /></a>
          <a rel="noreferrer" target='_blank' href={`https://api.whatsapp.com/send/?text=${url}`} className="cursor-pointer bg-primary border border-lighter text-white rounded-full p-2 hover:bg-green duration-300"><AiOutlineWhatsApp /></a>
          <a rel="noreferrer" target='_blank' href={`https://twitter.com/intent/tweet?url=${url}`} className="cursor-pointer bg-primary border border-lighter text-white rounded-full p-2 hover:bg-green duration-300"><AiOutlineTwitter /></a>
        </div>
      </div>
    </div>
  )
}

export default Share
