import React from 'react'
import { useDispatch } from 'react-redux';
import { MdClose } from "react-icons/md";
import { portfolioToggle } from "../app/features/auth/authSlice";
import App from '../../portfolio/App';
import Navbar from '../../portfolio/components/Navbar';
<<<<<<< HEAD
=======
import { AiOutlineArrowRight } from 'react-icons/ai';
>>>>>>> db2174b1a4ce2f15892f4d8d87c033d2d021989f


const PortfolioScreen = () => {
  const dispatch = useDispatch();


  return (
    <div className="absolute flex flex-col h-full items-center justify-center w-full backdrop-blur-[67px] z-40">
<<<<<<< HEAD
      <div className="relative bg-bg_alt mt-[100px] pt-10 pb-4 p-5 md:w-full lg:w-[1000px] rounded-lg overflow-scroll w-[320px]">
        <div
            onClick={() => dispatch(portfolioToggle())}
            className="fixed cursor-pointer"
          >
            <MdClose size={25} />
          </div>
=======
    <div className="flex absolute top-5 items-center gap-8 cursor-pointer bg-primary p-2 rounded-md">
        <div
            onClick={() => dispatch(portfolioToggle())}
            className=""
          >
            <MdClose size={25} />
          </div>
            <a title="External website" href="https://yonela-johannes.github.io/yonelajohannes/" target='_blank' className="flex items-center gap-2 cursor-pointer">
                <p>Go to full portfolio website</p>
              <AiOutlineArrowRight size={25} />
            </a>
    </div>
      <div className="relative bg-bg_alt mt-[100px] pt-10 pb-4 p-5 md:w-full lg:w-[1000px] rounded-lg overflow-scroll w-[320px]">
>>>>>>> db2174b1a4ce2f15892f4d8d87c033d2d021989f
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
