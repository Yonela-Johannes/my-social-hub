import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import logo from  "../assets/AlphaWhite.png"
const LandingFooter = () => {
  return (
    <footer className='md:mb-20'>
          <div className="bg-bg_alt p-2 border border-secondary pt-7 rounded-md">
          <div className="md:px-20">
            <div className="flex">
              <img src={logo}  className="w-[25px] h-[25px] object-contain" loading="lazy" alt="Yonela Johannes logo" />
              <p>Yonela Johannes</p>
            </div>
              <p className="p-2 w-[320px] md:w-[940px]">
                When an unknown prnoto sans took a galley and scrambled it to make specimen book not only five When an
                unknown prnoto sans took a galley and scrambled it to five centurie.
              </p>
          </div>

          <div className="flex flex-col md:flex-row md:px-8 py-11 items-center justify-around">

            <p className="flex gap-2">
              &copy; Developed by <a href="#" className="text-green font-semibold">Yonela Johannes.</a>
            </p>

            <ul className="flex items-center text-[26px] gap-8">

              <li>
                <a href="#">
                  <AiFillFacebook />
                </a>
              </li>

              <li>
                <a href="#">
                  <AiFillInstagram />
                </a>
              </li>

              <li>
                <a href="#">
                  <AiFillLinkedin />
                </a>
              </li>

            </ul>

          </div>

        </div>
  </footer>
  )
}

export default LandingFooter
