import React from 'react'
import './index.css'
import shadowOne from "../assets/images/shadow-1.svg";
import shadowTwo from "../assets/images/shadow-2.svg";
import heroBanner from "../assets/images/hero-banner.png";
import patternOne from "../assets/images/pattern-2.svg";
import patternThree from "../assets/images/pattern-3.svg";

const LandingStories = () => {
  return (
    <section className="section recent-post" id="recent" aria-labelledby="recent-label">
    <div className="container">

      <div className="post-main">

        <h2 className="text-green text-[25px] font-bold md:text-[40px]">
          Recent stories
        </h2>

        <p className="pb-10 text-[16px] md:text-[20px]">
          Don't miss the latest trends
        </p>

        <ul className="grid-list">
          <li>
            <div className="recent-post-card">

              <figure className="card-banner img-holder w-[270px] h-[280px]">
                <img src="./assets/images/recent-post-1.jpg" width="271" height="258" loading="lazy"
                  alt="Helpful Tips for Working from Home as a Freelancer" className="img-cover"/>
              </figure>

              <div className="card-content">

                <a href="#" className="bg-bg_alt p-2 rounded-2xl font-semibold cursor-pointer">Working Tips</a>

                <h3 className="headline headline-3 card-title">
                  <a href="#" className="">Helpful Tips for Working from Home as a Freelancer</a>
                </h3>

                <p className="text-lighter">
                  Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard
                  roadrunner flapped lynx far that and jeepers giggled far and far
                </p>

                <div className="card-wrapper">
                  <div className="card-tag">
                    <a href="#" className="text-[14px] text-lighter font-semibold"># Travel</a>

                    <a href="#" className="text-[14px] text-lighter font-semibold"># Lifestyle</a>
                  </div>
                </div>

              </div>

            </div>
          </li>
        </ul>
      </div>

      <div className="post-aside grid-list">

        <div className="card aside-card">

          <h3 className="headline headline-2 aside-title">
            <span className="span">Popular Posts</span>
          </h3>

          <ul className="popular-list">

            <li>
              <div className="popular-card">

                <figure className="card-banner img-holder">
                  <img src="./assets/images/popular-post-1.jpg" className="w-[60px] h-[60px] object-cover object-center" loading="lazy"
                    alt="Creating is a privilege but it’s also a gift" />
                </figure>

                <div className="card-content">

                  <h4 className="headline headline-4 card-title">
                    <a href="#" className="link hover-2">Creating is a privilege but it’s also a gift</a>
                  </h4>

                  <div>
                    <p className="text-[14px] text-lighter">15 April 2022</p>
                  </div>

                </div>

              </div>
            </li>
          </ul>

        </div>
      </div>

    </div>
  </section>
  )
}

export default LandingStories
