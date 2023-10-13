import React from 'react'
import auth from '../../assets/services/auth.jpg';
import talk from '../../assets/services/talk.jpg';
import community from '../../assets/services/support.png';
import network from '../../assets/services/network.png';
import personalised from '../../assets/services/personalised.jpg';

const About = () => {
  return (
  <div className="flex flex-col bg-bg_cl justify-center w-[90%] text-white min-h-screen">
    <h2 className="text-[22px] sm:text-4xl md:text-center mb-2 md:mb-5 mt-10 text-title font-bold">
      Empowering Authentic Engagement and Growth
    </h2>
    <p className="text-base md:text-lg md:text-center mb-5 text-lighter">Unleash Your Potential, Amplify Your Voice, and Thrive</p>
    <div className="flex items-center justify-around py-6">
        <div className="sm:flex gap-8 justify-around sm:w-[65%]">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="flex mb-8 md:w-[450px] gap-2">
              <img src={auth} alt='logo' className="w-[80px] h-[120px] object-cover rounded-md" />
              <div className="flex flex-col gap-1 md:gap-2 mb-1 md:mb-2">
                <p className='text-[18px] md:text-2xl'>Connect</p>
                <p className='text-base'>Connect and Engage with Us to Unlock the Power of a Sleek, Seamless, and High-Quality Website.</p>
              </div>
            </div>
            <div className="flex mb-8 md:w-[450px] gap-2">
                <img src={talk} alt='logo' className="w-[80px] h-[120px] object-cover rounded-md" />
              <div className="flex flex-col gap-1 md:gap-2 mb-1 md:mb-2">
                <p className='text-[18px] md:text-2xl'>Amplify Your Voice</p>
                <p className='text-base'>Share Your Ideas and Creations, Let Us Handle the Tech for You!</p>
              </div>
            </div>
            <div className="flex mb-8 md:w-[450px] gap-2">
                <img src={community} alt='logo' className="w-[80px] h-[120px] object-cover rounded-md" />
              <div className="flex flex-col gap-1 md:gap-2 mb-1 md:mb-2">
                <p className='text-[18px] md:text-2xl'>Support</p>
                <p className='text-base'>Benefit from our support and encouragement, fostering growth and personal development.</p>
              </div>
            </div>
            <div className="flex mb-8 md:w-[450px] gap-2">
              <img src={personalised} alt='logo' className="w-[80px] h-[120px] object-cover rounded-md" />
              <div className="flex flex-col gap-1 md:gap-2 mb-1 md:mb-2">
                <p className='text-[18px] md:text-2xl'>Personalization and Customization</p>
                <p className='text-base'>We tailor your website to reflect your unique brand identity, ensuring a distinct and memorable online presence.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
  )
}

export default About
