import React from "react";
import { useNavigate } from "react-router-dom";
import youth from '../../assets/services/youth.jpg';
import yonela from '../../assets/yonela.jpg';
import hlomla from '../../assets/okuhle.jpg';
import fannie from '../../assets/boizen.png'

function Team() {
  const navigate = useNavigate();
  const popularServicesData = [
    { name: "Yonela Johannes", label: "Manager & Full-Stack Developer", image: yonela, quote: "You can start out with nothing, and out of nothing, and out of no way, a way will be made." },
    { name: "Okuhle Tapuko", label: "Quality Assurance Specialist & Administrator", image: hlomla, quote: "You can rise up from anything. You can completely recreate yourself. Nothing is permanent. All that matters is that you decide today and never look back." },
    { name: "Fannie Johnson", label: "IT Systems and Network Specialist & Front-End Developer", image: fannie, quote: 'Always dare to dream. For as long as there’s a dream, there is hope, and as long as there is hope, there is joy in living. Never lose the child like wonder. Help others.' },
  ];
  return (
    <div className="flex flex-col min-h-screen md:h-screen items-center justify-center w-[90%]">
      <h2 className="text-[22px] sm:text-4xl md:mb-5 mb-2 text-title md:text-center font-bold">
      Meet the Visionary Team Behind Nomi
      </h2>
      <p className='text-base md:text-lg md:text-center mb-5 text-lighter'>Our talented team of developers at Nomi drives digital transformation and empowers businesses through innovative solutions,<br /> fueled by expertise, passion, and a commitment to excellence.</p>
      <ul className="grid grid-cols-1 md:grid-cols-3 flex-wrap gap-16 items-center justify-center">
        {popularServicesData.map(({ name, label, image, quote }) => {
          return (
            <div
              key={name}
              className="cursor-pointer flex flex-col md:w-[450px] bg-bg_light mx-5 mb-20 gap-2 rounded-2xl h-[200px]"
              // onClick={() => navigate(`/search?q=${name.toLowerCase()}`)}
            >
              <div className="flex gap-4 p-2 w-[100%] h-80">
                <img src={image} className='w-[180px] h-[180px] object-cover rounded-full' alt="service" />
                <p className="w-full text-[14px] text-bg_alt font pt-2">{quote}</p>
              </div>
              <div className="drop-shadow-md shadow-black py-2 rounded-md text-white top-0 left-1 h-[100px] w-[220px] ">
                <h6 className="drop-shadow-sm pt-2 text-[16px] md:text-2xl shadow-black">{name}</h6>
                <p className="drop-shadow-md shadow-black text-base font-semibold text-lighter text-[17px] sm:text-[15px]">{label}</p>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Team;
