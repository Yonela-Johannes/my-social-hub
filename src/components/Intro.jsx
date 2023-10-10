import React from 'react'
import heroBanner from "../assets/younelacover.jpg";

const Intro = () => {
  return (
    <section className="hero" id="home" aria-label="home">
      <div className="w-full md:w-[1000px] px-5 flex flex-col md:flex-row gap-4 items-center md:justify-between item-center">

        <div>

          <p className="text-[15px] font-bold">Hello Everyone!</p>

          <div className="flex gap-2">I'm
            <h1 className="font-bold text-[30px] md:text-[60px] text-green">
              Yonela Johannes
            </h1>
          </div>

          <p className="md:w-[400px]">
            I use animation as a third dimension by which to simplify experiences and kuiding thro each and every
            interaction. I’m not adding motion just to spruce things up, but doing it in ways that.
          </p>
        </div>
          <img src={heroBanner} title='Yonela Johannes' alt="Yonela Johannes" className="w-[340px] h-[450px] rounded-xl cursor-pointer object-center object-cover" />
      </div>
  </section>
  )
}

export default Intro
