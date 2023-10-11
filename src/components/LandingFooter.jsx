import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import logo from  "../assets/AlphaWhite.png"
const LandingFooter = () => {
  return (
    <footer className='w-[90%] md:mb-20 mt-16'>
          <div className="bg-bg_alt p-3 border border-secondary pt-7 rounded-md">
          <div className="md:px-20">
            <div className="flex">
              <img src={logo}  className="w-[25px] h-[25px] object-contain" loading="lazy" alt="Yonela Johannes logo" />
              <p>Yonela Johannes</p>
            </div>
              <p className="md:w-[940px]">
              I'm passionate about sharing people's success stories, delving into their backgrounds and life journeys. My blog is all about offering motivation and guidance on crafting a successful career or life path. Moreover, I'm excited to share my personal journey with my readers. Along the way, I'll be featuring posts about individuals who have profoundly influenced my life, and the individuals and companies that have been a part of my professional and educational journey.
              </p>
          </div>

          <div className="flex flex-col md:flex-row md:px-8 py-2 md:py-11 justify-between md:items-center md:justify-around">

            <p className="flex gap-2 text-[12px] font-semibold md:text-[14px]">
              &copy; Developed by <a href="#" className="text-green font-semibold">Yonela Johannes.</a>
            </p>

            <ul className="flex items-center text-[26px] gap-8 pt-3">

              <a href="https://github.com/Yonela-Johannes" target='_blank'>
                  <AiFillGithub />
              </a>

              <a href="https://www.facebook.com/JohannesYonela" target='_blank'>
                  <AiFillFacebook />
              </a>

              <a href="https://www.instagram.com/yonelajohannes" target='_blank'>
                  <AiFillInstagram />
              </a>

              <a href="https://www.linkedin.com/in/yonela-johannes/" target='_blank'>
                  <AiFillLinkedin />
              </a>
            </ul>

          </div>

        </div>
  </footer>
  )
}

export default LandingFooter
