import man from '../../assets/man.webp';
import nkosinati from '../../assets/nkosinati.jpg';
import woman from '../../assets/woman.jpg';
import bonang from '../../assets/bonang.jpg'
import Marquee from 'react-fast-marquee'

function Reviews() {
  const reviews = [
    {image: nkosinati, name: "Nkosinati Sopangisa", rate: 5, post: "You work is and you helped me with what I wanted for years.", company: 'PixelGen', title: 'Founder'},
    {image: man, name: "Mawethu Gym", rate: 5, post: "Excellent work!" , company: "Mawethu Magnificent Gym", title: "Manager"},
    {image: bonang, name: "Thembisa Hewu", rate: 3, post: 'You doing an amaizing job!', company: 'QTee cosmetics', title: "Self Employed"},
    {image: woman, name: "Thembisa Hewu", rate: 4, post: "I am pleased way beyond my imaginatiion!", company: 'QTee cosmetics', title: "Self Employeed"},
  ]
  return (
    <div className="flex flex-col bg-bg_cl justify-center w-[90%] text-white min-h-screen">
    <h2 className="text-[22px] sm:text-4xl md:text-center mb-2 md:mb-5 mt-10 text-title font-bold">
      Voices of Success and Experience that Speaks Volume
    </h2>
    <p className="text-base md:text-lg md:text-center mb-5 text-lighter">Discover how our tailored solutions have transformed our clients businesses, boosted their online presence, and driven their success</p>
    <div className="flex items-center justify-around py-6">
        <div className="sm:flex gap-8 items-center justify-around sm:w-[65%]">
          <div className="grid grid-cols-1">
            <Marquee>
              {reviews?.map((review) => (
              <div key={review.name} className="flex md:w-[450px] mx-5 mb-20 gap-4">
                  <img src={review.image} alt='logo' className="w-[180px] h-[180px] object-cover rounded-md" />
                <div className="flex flex-col md:gap-2 mb-1 md:mb-2">
                  <p className='text-[18px] md:text-2xl'>{review.name}</p>
                  <p className='text-base'>{review.post}</p>
                <div className="">
                  <p className='text-base font-semibold text-lighter'>{review.title} @{review.company}</p>
                </div>
                <div className="">
                </div>
                </div>
              </div>
              ))}
            </Marquee>
          </div>
        </div>
    </div>
  </div>
  );
}

export default Reviews;
