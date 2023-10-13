import React from "react";
import Landing from '../components/Landing/Landing';
import Footer from '../components/Footer';
import Intro from "../components/Intro";
import LandingPosts from "../components/LandingPosts";
import Feature from "../components/Feature";
import LandingFooter from "../components/LandingFooter";
import LandingStories from "../components/LandingStories";
import MainFooter from "./blog/footer/Footer";

const HomeScreen = () => {
  return (
    <div className="flex flex-col items-center">
      <Landing />
      <Footer />
      <Intro />
      <Feature />
      <LandingPosts />
      <LandingStories />
<<<<<<< HEAD
      <LandingFooter />
=======
      <div className="w-full flex items-center justify-center md:w-[1200px]">
        <LandingFooter />
      </div>
>>>>>>> db2174b1a4ce2f15892f4d8d87c033d2d021989f
      <div className="md:px-[100px] mb-[100px] md:mb-[120px]">
        <MainFooter />
      </div>
    </div>
  )
}

export default HomeScreen
