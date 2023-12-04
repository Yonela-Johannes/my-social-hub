
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import landing from '../../assets/ART.png';
import { useDispatch } from 'react-redux';
import { aboutModal, blogModal, contactModal, portfolioToggle, reviewsModal, teamModal, toggleBookSessionModal, workModal } from '../../app/features/auth/authSlice';
import Service from '../Service/Service';
import lottie from "lottie-web";
import React, { useRef, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import animationData from "../../assets/projects.json"

const Landing = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
    time_slot: "",
  });

  const [text, count] = useTypewriter({
    words: ["Hi, My name is Yonela🚀💡", "I'm on a relentless journey of learning and growth💻🚀", "Lets learn", "I Love to code💻🌟 "],
    loop: true,
    delaySpeed: 400,
  });
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }, [animationData]);

  return (
    <div className="flex flex-col items-center justify-center sm:h-[70vh] lg:min-h-[80vh] w-full bg-bg_alt text-white">
      <div className="items-center text-lighter flex-wrap mt-10 px-4">
        <div className="flex gap-2 items-center flex-wrap lg:flex-nowrap">
        <p className='rounded-md border border-bg_light py-1 px-2'>Software engineer</p>
          <p className='rounded-md border border-bg_light py-1 px-2'>Full Stack Developer</p>
        </div>
      </div>

      <div className="relative sm:flex items-center justify-around  w-[90%] sm:w-[1200px] gap-20 h-[100%]">
        <div className="flex flex-col pt-3 sm:pt-0 justify-center h-full flex-wrap">
          <p className='text-[18px] sm:text-[30px] h-[60px] text-green font-bold m-0 p-0 mb-3'>{text}</p>
          <p className='text-[18] sm:text-[20px] text-white m-0 p-0 mb-3'>
            Let's work on you project</p>
          <div className="">
            <div className="items-center text-lighter flex-wrap">
              <div className="flex gap-2 items-center flex-wrap lg:flex-nowrap">
              <p className='rounded-md border border-bg_light py-1 px-2'>Software Engineering</p>
                <p className='rounded-md border border-bg_light py-1 px-2'>Full Stack Development</p>
                <p className='rounded-md border border-bg_light py-1 px-2'>Web Development</p>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap md:flex-nowrap mt-4 mb-5">
              <button onClick={() => dispatch(aboutModal())} className="rounded-md text-[18px] py-2 px-4  bg-bg_cl text-green font-semibold hover:text-bg_cl hover:font-bold hover:bg-green duration-300">About me</button>
              <button onClick={() => dispatch(teamModal())} className="rounded-md text-[18px] py-2 px-4  bg-bg_cl text-green font-semibold hover:text-bg_cl hover:font-bold hover:bg-green duration-300">My journey</button>
              <button onClick={() => dispatch(contactModal())} className="rounded-md text-[18px] py-2 px-4  bg-bg_cl text-green font-semibold hover:text-bg_cl hover:font-bold hover:bg-green duration-300">Contact me</button>
              <button onClick={() => dispatch(portfolioToggle())} className="rounded-md text-[18px] py-2 px-4  bg-bg_cl text-green font-semibold hover:text-bg_cl hover:font-bold hover:bg-green duration-300">Portfolio</button>
            </div>
          </div>
          <Service />
        </div>
        <div className="md:block md:absolute md:w-[500px] h-[300px] z-20 right-0 bottom-0">
          <div className="container" ref={container}></div>
        </div>
      </div>
    </div>
  )
}

export default Landing
