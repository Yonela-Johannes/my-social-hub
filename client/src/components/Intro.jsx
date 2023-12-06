import React from 'react'
import heroBanner from "../assets/younelacover.jpg";

const Intro = () => {
  return (
    <section className="hero" id="home" aria-label="home">
      <div className="w-full md:w-[1000px] px-5 flex flex-col md:flex-row gap-4 md:justify-between ">

        <div>

          <p className="text-[22px]">Hello, I'm</p>

          <div className="flex gap-2">
            <h1 className="font-bold text-[35px] text-green">
              Yonela Johannes
            </h1>
          </div>

          <p className="md:w-[400px] text-[20px]">
          Cape Town coding maestro , weaving digital wonders with JavaScript, React, Node.js, Ruby, and more. Off-duty, I'm a creative maven—books, songwriting, graphic design—my secret weapons. From Codex to Le Wagon, I've honed my skills for the coding crusade. Philosophical musings with Krishnamurti and Watts add depth to the coding adventure. Goal: Family first, financial freedom, and inspiring others with my diverse talents. 🌟
          </p>
        </div>
          <img src={heroBanner} title='Yonela Johannes' alt="Yonela Johannes" className="w-[340px] h-[260px] md:h-[450px] rounded-xl cursor-pointer object-center object-cover" />
      </div>
  </section>
  )
}

export default Intro
