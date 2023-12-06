import React from "react";
import yonela from '../../assets/yonela.jpg';
import { MdClose } from "react-icons/md";
import { teamModal } from "../../app/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

function Team() {
  const dispatch = useDispatch();
  const popularServicesData = [
    {
      name: "Yonela Johannes",
      label: "Manager, Software engineer & Full-Stack Developer, Contract/Freelance Developer",
      image: yonela,
      quote: "You can start out with nothing, and out of nothing, and out of no way, a way will be made.",
      message: `I come from a poor family, with so much drama going on, and being financially unprepared.
      I thought about ending it all.  Then, I became wiser and accepted reality for what it is.
      You can always improve. You can always learn. You can always choose a better path.
      Personal development taught me not to blame anyone.
      The greatest joy in life is pushing yourself beyond what you thought you were capable of. Only tolerate your best. Nothing less. Day in and day out. That’s the way.

      `
   }
  ];
  return (
    <div className="absolute flex flex-col h-full items-center justify-center w-full backdrop-blur-[67px] z-40">
      <div className="relative bg-bg_alt pt-10 pb-4 p-5 rounded-lg overflow-y-scroll sm:overflow-hidden">
            <div
              onClick={() => dispatch(teamModal())}
              className="absolute top-4 right-4 cursor-pointer"
            >
              <MdClose size={20} />
            </div>
          <h2 className="text-[22px] sm:text-4xl md:mb-5 mb-2 text-title md:text-center font-bold">
          My Journey: From Struggles to<br /> Success
          </h2>
          <p className='text-base md:text-lg md:text-center mb-5 text-lighter'>Navigating Life's Challenges, Embracing Growth,<br /> and Shaping a Brighter Future</p>
          <div className="flex flex-wrap md:mb-0 gap-8 lg:gap-16 items-center justify-center mb-8">
            {popularServicesData.map(({ name, label, image, quote, message }) => {
              return (
                <div
                  key={name}
                  className="cursor-pointer flex flex-col md:w-[450px] bg-bg_light lg:mx-5 gap-2 rounded-2xl mb-10"
                >
                  <div className="flex gap-4 p-2 w-[100%]">
                    <img src={image} className='w-[100px] h-[100px] object-cover rounded-full' alt="service" />
                    <div>
                    <p className="w-full text-[13px] md:text-[14px] text-white font-bold pt-2">{quote}</p>
                    </div>
                  </div>
                  <p className="w-full text-[13px] md:text-[16px] text-white px-2 md:px-10">"{message}"</p>
                  <div className="drop-shadow-md shadow-black py-2 rounded-md text-white top-0 left-1 px-2 pb-4 md:px-10">
                    <h6 className="drop-shadow-sm pt-2 text-[12px] md:text-2xl shadow-black">{name}</h6>
                    <p className="drop-shadow-md shadow-black  md:font-semibold text-lighter text-[13px] md:text-[17px]">{label}</p>
                  </div>
                </div>
              );
            })}
          </div>
      </div>
    </div>
  );
}

export default Team;
