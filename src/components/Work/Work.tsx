import man from '../../assets/man.webp';
import nkosinati from '../../assets/nkosinati.jpg';
import woman from '../../assets/woman.jpg';
import bonang from '../../assets/bonang.jpg'
import pixelGen from '../../assets/PixelGen.jpg'
import Slider from '../Carousel/Slider';


function Work() {
  const reviews = [
    {image: nkosinati, name: "Nkosinati Sopangisa", rate: 5, post: "You work is and you helped me with what I wanted for years.", company: 'PixelGen', title: 'Founder', logo: pixelGen, website: "https://www.facebook.com/LishawnJohannes"},
    {image: man, name: "Mawethu Gym", rate: 5, post: "Excellent work!" , company: "Mawethu Magnificent Gym", title: "Manager", logo: pixelGen, website: "https://www.facebook.com/LishawnJohannes"},
    {image: bonang, name: "Thembisa Hewu", rate: 3, post: 'You doing an amaizing job!', company: 'QTee cosmetics', title: "Self Employed", logo: pixelGen, website: "https://www.facebook.com/LishawnJohannes"},
    {image: woman, name: "Thembisa Hewu", rate: 4, post: "I am pleased way beyond my imaginatiion!", company: 'QTee cosmetics', title: "Self Employeed", logo: pixelGen, website: "https://www.facebook.com/LishawnJohannes"},
  ]
  return (
    <div className="flex flex-col bg-bg_cl justify-center w-[90%] text-white min-h-screen">
    <h2 className="text-[22px] sm:text-4xl md:text-center mb-2 md:mb-5 mt-10 text-title font-bold">
      Showcasing our Journey and Transforming Vision into Reality
    </h2>
    <p className="text-base md:text-lg md:text-center mb-5 text-lighter">Through our tailored solutions, we collaborate closely with our clients to understand their unique needs and goals.</p>
    <div className="flex items-center justify-around py-6">
      <Slider array={reviews} />
    </div>
  </div>
  );
}

export default Work;
