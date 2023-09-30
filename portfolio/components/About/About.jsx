import React, { useState} from 'react';
import frontend from '../../img/frontend.png'
import backend from '../../img/backend.png'
import mobiler from '../../img/mobiler.png'
import './about.css';

const About = () => {
  const [abouts, setAbouts] = useState([
    {
      title: "Front-End",
      image: frontend,
      description: "I a designer with a passion for creating beautiful and functional webb-applications."},
    {
      title: "Backend",
      image: backend,
      description: "I a designer with a passion for creating beautiful and functional webb-applications."},
      {
        title: "Mobile",
        image: mobiler,
        description: "I a designer with a passion for creating beautiful and functional webb-applications."},
  ]);


  return (
    <div className='about'>
      <h2 className="head-text">I Know that <span>Good Development</span> <br />means  <span>Good UX</span></h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <div key={index} className='about-container'>
            <img src={about.image} alt={about.title} className='about-img' />
            <h2 className="about-title" >{about.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About
