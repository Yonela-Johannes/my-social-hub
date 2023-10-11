import React from "react";
import { useNavigate } from "react-router-dom";
import next from '../../assets/next.png';
import react from '../../assets/react.webp';
import vite from '../../assets/vite.png';
import tailwind from '../../assets/tailwind.png';
import javascript from '../../assets/javascript.webp';
import typescript from '../../assets/typescript.jpg';
import nodejs from '../../assets/nodejs.jpg';
import rails from '../../assets/rails.webp';
import mongodb from '../../assets/mongodb.png';
import postgresql from '../../assets/postgresql.png';


import Marquee from "react-fast-marquee";


function Service() {
  const navigate = useNavigate();
  const popularServicesData = [
    { name: "Vite", image: vite },
    { name: "React", image: react },
    { name: "NextJs", image: next },
    { name: "TailwindCss", image: tailwind},
    { name: "JavaScript", image: javascript},
    { name: "Typescript", image: typescript},
    { name: "NodeJs", image: nodejs },
    { name: "Ruby on Rails", image: rails },
    { name: "MongoDb", image: mongodb },
    { name: "PostgreSql",image: postgresql},
  ];

  const servicesData = [
    { name: "Writers & Readers", label: "Read success stories", image: vite },
    { name: "Artist", label: "Display your art", image: react },
    { name: "Entrepreneurs", label: "Grow your business", image: next },
    {
      name: "Programmers",
      label: "Make connections through projects",
      image: tailwind,
    },
    {
      name: "Programmers",
      label: "Make connections through projects",
      image: javascript,
    },
    {
      name: "Programmers",
      label: "Make connections through projects",
      image: typescript,
    },
    { name: "Influencers", label: "Share your story", image: nodejs },
    {
      name: "Nomi",
      label: "We share our ideas",
      image: rails,
    },
    {
      name: "Nomi",
      label: "We share our ideas",
      image: mongodb,
    },
    {
      name: "Nomi",
      label: "We share our ideas",
      image: postgresql,
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center lg:w-full pt-5 bg-bg_alt">
      <div className="grid grid-cols-1 items-center justify-center">
        <Marquee
          direction="left"
        >
          {popularServicesData.map(({ name, label, image }) => {
            return (
              <div
                key={name}
                className="relative cursor-pointer mx-2 h-min">
                <div className="absolute z-10 drop-shadow-md shadow-black px-2 rounded-md bg-opacity-[.2] text-black top-1 left-1 bg-white">
                  <p className="drop-shadow-md shadow-black text-[14px] sm:text-base">{label}</p>
                  <h6 className="font-extrabold drop-shadow-sm text-[16px] shadow-black">{name}</h6>
                </div>
                <div className="">
                  <img src={image} className='w-[100px] h-[100px] md:w-[120px] rounded-full md:h-[120px] object-cover' alt="service" />
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}

export default Service;
