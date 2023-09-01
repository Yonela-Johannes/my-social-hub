import React, { useEffect, useState} from 'react'
import Footer from '../components/Footer';
import Service from '../components/Service/Service';
import OurServices from '../components/Service/OurServices';
import Offer from '../components/Service/Offer';
import Team from '../components/Service/Team';
import Contact from '../components/Contact/Contact';
import Reviews from '../components/Client/Reviews';
import About from '../components/About/About';
import Landing from '../components/Landing/Landing';
import Work from '../components/Work/Work';
import LandingBlog from '../components/LandingBlogs/LandingBlog';

const HomeScreen = ({homeScreen}) => {

  return (
    <div className="flex flex-col items-center pb-[800px]">
      <Landing />
      <About />
      <Offer />
      <OurServices />
      <Service />
      <Work />
      <Team />
      <LandingBlog/>
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomeScreen
