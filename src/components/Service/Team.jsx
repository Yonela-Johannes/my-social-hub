import React from "react";
import { useNavigate } from "react-router-dom";
import youth from '../../assets/services/youth.jpg';
import yonela from '../../assets/yonela.jpg';
import hlomla from '../../assets/okuhle.jpg';
import fannie from '../../assets/boizen.png'
import { MdClose } from "react-icons/md";
import { teamModal } from "../../app/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

function Team() {
  const dispatch = useDispatch();
  const popularServicesData = [
    { name: "Yonela Johannes", label: "Manager, Software engineer & Full-Stack Developer", image: yonela, quote: "You can start out with nothing, and out of nothing, and out of no way, a way will be made." },
    { name: "Okuhle Tapuko", label: "Quality Assurance Specialist & Administrator", image: hlomla, quote: "You can rise up from anything. You can completely recreate yourself. Nothing is permanent. All that matters is that you decide today and never look back." },
    { name: "Fannie Johnson", label: "IT Systems and Network Specialist & Front-End Developer", image: fannie, quote: 'Always dare to dream. For as long as there’s a dream, there is hope, and as long as there is hope, there is joy in living. Never lose the child like wonder. Help others.' },
  ];
  return (
    <div className="absolute flex flex-col h-full items-center justify-center w-full backdrop-blur-[67px] z-40">
      <div className="relative bg-bg_alt pt-10 pb-4 p-5 w-full lg:w-[90%] rounded-lg overflow-y-scroll sm:overflow-hidden">
            <div
              onClick={() => dispatch(teamModal())}
              className="absolute top-4 right-4 cursor-pointer"
            >
              <MdClose size={20} />
            </div>
          <h2 className="text-[22px] sm:text-4xl md:mb-5 mb-2 text-title md:text-center font-bold">
          Meet the Visionary Team Behind Nomi
          </h2>
          <p className='text-base md:text-lg md:text-center mb-5 text-lighter'>Our talented team at Nomi drives digital transformation and empowers businesses through innovative solutions,<br /> fueled by expertise, passion, and a commitment to excellence.</p>
          <ul className="grid grid-cols-1 md:grid-cols-3 flex-wrap mb-20 md:mb-0 gap-8 lg:gap-16 items-center justify-center">
            {popularServicesData.map(({ name, label, image, quote }) => {
              return (
                <div
                  key={name}
                  className="cursor-pointer flex flex-col md:w-[450px] bg-bg_light lg:mx-5 lg:mb-20 gap-2 rounded-2xl"
                >
                  <div className="flex gap-4 p-2 w-[100%] h-80">
                    <img src={image} className='w-[100px] h-[100px] object-cover rounded-full' alt="service" />
                    <p className="w-full text-[14px] text-white font-bold font pt-2">"{quote}"</p>
                  </div>
                  <div className="drop-shadow-md shadow-black py-2 rounded-md text-white top-0 left-1 h-[100px] px-10">
                    <h6 className="drop-shadow-sm pt-2 text-[16px] md:text-2xl shadow-black">{name}</h6>
                    <p className="drop-shadow-md shadow-black text-base font-semibold text-lighter text-[17px] sm:text-[15px]">{label}</p>
                  </div>
                </div>
              );
            })}
          </ul>
      </div>
    </div>
  );
}

export default Team;
