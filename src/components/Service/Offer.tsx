import negoTwo from '../../assets/services/negoTwo.webp';
import React from "react";

import { BsCheckCircle } from "react-icons/bs";
function Offer() {
  const everythingData = [
    {
      title: "Budget-Friendly",
      subtitle:
        "We offer flexibility and customization, allowing you to negotiate and reach a mutually agreed-upon deal with us."
    },
    {
      title: "Tailored to Your Satisfaction",
      subtitle:
        "Websites and services to meet your exact specifications and preferences.",
    },
    {
      title: "Flexible Payment Options",
      subtitle:
        "Secure Your Project with Upfront Payment of 50% for a Successful Online Launch",
    },
    {
      title: "Reliable Assistance Anytime, Anywhere",
      subtitle:
        "You can rely on our availability to assist you anytime, anywhere.",
    },
    {
      title: "Continuous Support and Website Updates",
      subtitle:
        "Regular website updates, ensuring your online presence remains secure and up to date.",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen md:h-screen items-center justify-center w-[90%]">
      <h2 className="text-[22px] sm:text-4xl md:mb-5 mb-2 text-title md:text-center font-bold">
      Revolutionizing Small Business Support
      </h2>
      <p className='text-base md:text-lg md:text-center mb-5 text-lighter'>Empowering Youth Success Through Customized Websites and Ongoing Support</p>
      <div className="flex justify-evenly items-center flex-col md:flex-row md:w-[70%] gap-8">
        <div className="">
          <ul className="flex flex-col gap-10">
            {everythingData.map(({ title, subtitle }) => {
              return (
                <li key={title}>
                  <div className="flex gap-2 items-center text-[16px] md:text-xl">
                    <BsCheckCircle className="text-[#b4b4b4]" />
                    <h4>{title}</h4>
                  </div>
                  <p className="text-[#b4b4b4]">{subtitle}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-2">
          <img src={negoTwo} className="h-[500px] w-[480px] object-cover rounded-md" alt="everything" />
        </div>
      </div>
    </div>
  );
}

export default Offer;
