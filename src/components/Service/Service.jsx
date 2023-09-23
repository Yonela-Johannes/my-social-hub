import React from "react";
import { useNavigate } from "react-router-dom";
import youth from '../../assets/services/youth.jpg';
import rapper from '../../assets/services/rapper.jpeg';
import writer from '../../assets/services/writer.jpg';
import artist from '../../assets/services/artist.webp';
import business from '../../assets/services/business.jpg';
import developer from '../../assets/services/developer.jpeg';
import photographer from '../../assets/services/photographer.jpg';
import blogger from '../../assets/services/bloger.jpg';
import Marquee from "react-fast-marquee";


function Service() {
  const navigate = useNavigate();
  const popularServicesData = [
    { name: "Writers & Readers", label: "Read success stories", image: writer },
    { name: "Artist", label: "Display your art", image: artist },
    { name: "Entrepreneurs", label: "Grow your business", image: business },
    {
      name: "Programmers",
      label: "Make connections through projects",
      image: developer,
    },
    { name: "Influencers", label: "Share your story", image: blogger },
    {
      name: "Nomi",
      label: "We share our ideas",
      image: youth,
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-[90%] lg:w-full pt-5 bg-bg_alt">
      <ul className="grid grid-cols-1 items-center justify-center">
        <Marquee
          direction="left"
        >
          {popularServicesData.map(({ name, label, image }) => {
            return (
              <li
                key={name}
                className="relative cursor-pointer mx-8 h-min">
                <div className="absolute z-10 drop-shadow-md shadow-black px-2 rounded-md bg-opacity-[.2] text-black top-1 left-1 bg-white">
                  <p className="drop-shadow-md shadow-black text-[14px] sm:text-base">{label}</p>
                  <h6 className="font-extrabold drop-shadow-sm text-[18px] md:text-2xl shadow-black">{name}</h6>
                </div>
                <div className="w-[160px] lg:h-80 md:w-72">
                  <img src={image} className='w-[160px] md:w-72 h-50 object-cover rounded-md' alt="service" />
                </div>
              </li>
            );
          })}
        </Marquee>
      </ul>
    </div>
  );
}

export default Service;
