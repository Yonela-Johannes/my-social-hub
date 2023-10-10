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
      <LandingFooter />
      <div className="md:px-[100px] mb-[100px] md:mb-[120px]">
        <MainFooter />
      </div>
    </div>
  )
}

export default HomeScreen
