import React from "react";
import yonela from '../assets/yonela.jpg';
import { MdClose } from "react-icons/md";
import { aboutModal } from "../app/features/auth/authSlice";
import { useDispatch } from "react-redux";
import lewagon from '../assets/lewagon.mp4'

function Aboutme() {
  const dispatch = useDispatch();
  const popularServicesData = [
    {
      name: "Yonela Johannes",
      label: "Manager, Software engineer & Full-Stack Developer, Contract/Freelance Developer",
      image: yonela,
      quote: "You can start out with nothing, and out of nothing, and out of no way, a way will be made.",
      message: `🚀 I cut my teeth in the tech world at Codex, where I honed my skills in JavaScript, Node.js, Postgres, and more. Later, I deepened my knowledge at Lewagon, mastering Ruby and Ruby on Rails, as well as SQLite. These experiences have armed me with the tools needed to craft digital solutions that solve real-world problems.
      `,
      messageBody: `💼 Currently, I'm part of the dynamic team at Hype Digital, where I continue to push boundaries and create cutting-edge web and SaaS applications for forward-thinking companies.

      🌌 Beyond the code, I'm a seeker of wisdom. I've spent countless hours immersing myself in the teachings of Jiddu Krishnamurti and Alan Watts, discussing profound topics that transcend the world of coding. These insights inform not only my work but also my philosophy on life.
      `,
      end: `🌟 My ultimate goal? To provide for my family and be the guiding light that ensures they never endure the hardships I faced. I'm passionate about sharing my journey and knowledge with others, empowering them to follow their dreams and make a positive impact on the world.
      `,
   }
  ];
  return (
    <div className="absolute flex flex-col h-full items-center justify-center w-full backdrop-blur-[67px] z-40 overflow-hidden">
      <div className="relative bg-bg_alt pt-10 pb-4 p-5 w-[310px] md:w-[1000px] rounded-lg overflow-y-scroll overflow-x-hidden sm:overflow-hidden">
            <div
              onClick={() => dispatch(aboutModal())}
              className="absolute top-4 right-4 cursor-pointer"
            >
              <MdClose size={20} />
            </div>
          <h2 className="text-[22px] sm:text-4xl md:mb-5 mb-2 text-title md:text-center font-bold">
          Crafting Digital Dreams: Meet Yonela Johannes
          </h2>
          <p className='text-base md:text-lg md:text-center mb-5 text-lighter'>Coding, Creativity, and Consciousness</p>
          <ul className="flex flex-wrap md:mb-0 gap-8 lg:gap-16 items-center justify-center">
            {popularServicesData.map(({ name, label, image, quote, message, messageBody, end }) => {
              return (
                <div
                  key={name}
                  className="cursor-pointer md:p-5 flex flex-col md:w-[850px] bg-bg_light lg:mx-5 gap-2 rounded-2xl mb-10"
                >
                  <div className="flex flex-col md:flex-row gap-4 p-2 w-[100%]">
                    <div className="flex item-center round-xl md:w-[2000px] cursor-pointer h-[200px] md:h-[500px]">
                      <video
                        id={`video-${name}`}
                        autoPlay
                        loop
                        controls
                        muted
                        className='rounded-xl object-cover w-full mx-auto h-full'
                        src={lewagon}
                        type="video/mp4"
                      />
                    </div>
                    <div>
                      <p className="w-full text-[14px] md:text-[18px] text-white font-bold py-2">{quote}</p>
                      <p className="w-full text-[14px] md:text-[16px] text-white pb-2">{message}</p>
                      <p className="w-full text-[14px] md:text-[16px] text-white pb-4">{messageBody}</p>
                      <p className="w-full text-[14px] md:text-[16px] text-white pb-2">{end}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </ul>
      </div>
    </div>
  );
}

export default Aboutme;
