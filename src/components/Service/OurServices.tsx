import React from "react";
import graphic from "../../assets/services/service-1.svg";
import tech from "../../assets/services/service-6.svg";

function OurServices() {
  // const router = useRouter();

  const categories = [
    { name: "Graphic Design", logo: graphic },
    { name: "Tech", logo: tech },
  ];


  return (
    <div className="flex flex-col bg-bg_alt items-center justify-center w-screen py-8 my-8">
      <div className="flex flex-col w-[90%]">
        <h2 className="text-[22px] sm:text-4xl md:mb-5 mb-2 text-title md:text-center font-bold">
          What We Do
        </h2>
        <p className='text-base md:text-lg md:text-center mb-5 text-lighter'>Seamlessly Grow Your Business with Custom Websites, Ongoing Support, and Beyond.</p>
        <ul className="flex self-center gap-4">
          {categories.map(({ name, logo }) => {
            return (
              <li
                key={name}
                className="flex flex-col md:flex-row justify-center items-center"
                // onClick={() => router.push(`/search?category=${name}`)}
              >
                <img src={logo} alt="dev" height={50} width={50} />
                <span>{name}</span>
              </li>
            );
          })}
        </ul>

      </div>
    </div>
  );
}

export default OurServices;
