import React, { useEffect, useRef, useState } from "react";
import './index.css';
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRecententStories } from "../app/features/videos/videoSlice";
import { BsFillPlayFill } from "react-icons/bs";


const LandingStories = () => {
  const { recentStories } = useSelector((state) => state.stories);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    dispatch(getRecententStories());
  }, [pathname]);


  return (
    <>
      {recentStories?.length && (
          <section className="section recent-post">
          <div className="container">

            <div className="post-main">

              <h2 className="text-green text-[25px] font-bold md:text-[40px]">
                Recent stories
              </h2>

              <p className="pb-10 text-[16px] md:text-[20px]">
                Don't miss the latest trends
              </p>

              <ul className="grid-list">
                {recentStories?.length ? (
                  recentStories?.map((story) => (
                    <li>
                      <div className="recent-post-card">

                        <div className="relative">
                        <figure className="card-banner img-holder w-[270px] h-[280px]">
                          <video
                            muted
                            src={story?.story}
                            className="w-full h-[280px] object-cover  rounded-2xl cursor-pointer"
                            loading="lazy"
                          >

                          </video>
                        </figure>
                          <div className="z-20 absolute top-0 left-0 flex items-center justify-center w-full h-full">
                              <div  onClick={() => navigate(`/details/${story?._id}`)} className="cursor-pointer h-min text-white rounded-full p-2 bg-primary duration-300 hover:text-white">
                                <BsFillPlayFill size={40}/>
                              </div>
                          </div>
                        </div>

                        <div className="card-content">

                          <a href="#" className="bg-bg_alt p-2 rounded-2xl font-semibold cursor-pointer">Working Tips</a>

                          <h3 className="headline headline-3 card-title">
                            <a href="#" className="">{story?.caption}</a>
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
                  ))
                ):'No stories'
                }
              </ul>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default LandingStories
