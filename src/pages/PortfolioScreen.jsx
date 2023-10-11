import React from 'react'
import { useDispatch } from 'react-redux';
import { MdClose } from "react-icons/md";
import { portfolioToggle } from "../app/features/auth/authSlice";
import App from '../../portfolio/App';
import Navbar from '../../portfolio/components/Navbar';


const PortfolioScreen = () => {
  const dispatch = useDispatch();


  return (
    <div className="absolute flex flex-col h-full items-center justify-center w-full backdrop-blur-[67px] z-40">
      <div className="relative bg-bg_alt mt-[100px] pt-10 pb-4 p-5 md:w-full lg:w-[1000px] rounded-lg overflow-scroll w-[320px]">
        <div
            onClick={() => dispatch(portfolioToggle())}
            className="fixed cursor-pointer"
          >
            <MdClose size={25} />
          </div>
          <h2 className="text-[22px] sm:text-4xl md:mb-5 mb-2 text-title md:text-center font-bold">
          Unlocking Possibilities in Software Development
          </h2>
          <p className='text-base md:text-lg md:text-center mb-5 text-lighter'>Navigating Life's Challenges, Embracing Growth,<br /> and Shaping a Brighter Future</p>
          <Navbar />
          <App />
      </div>
    </div>
  )
}

export default PortfolioScreen
