import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdArrowBack, MdArrowForward, MdOutlineArrowBack, MdOutlineArrowBackIos, MdOutlineArrowForward, MdOutlineArrowForwardIos } from "react-icons/md";
import Marquee from "react-fast-marquee";

const Slider = ({array}) => {

  return (
    <Marquee
    >
      {array?.map((arr) => (
        <a href={arr.website} target="_blank" className='relative cursor-pointer' key={`carousel-image-${arr.title}`}>
          <img
            src={arr.image}
            alt={`carousel-${arr.title}`}
            className="w-full px-8 h-[400px] object-cover rounded-sm"
          />
          <div className="absolute top-2 left-10">
            <div className="w-[50px]">
              <img
                src={arr.logo}
                alt={`carousel-${arr.title}`}
                className="w-[50px] h-[50px] object-cover rounded-md"
              />
            </div>
            <p className="text-[18px] text-black mt-2 font-bold">{arr.company}</p>
          </div>
        </a>
      ))}
    </Marquee>
  );
};

export default Slider;
