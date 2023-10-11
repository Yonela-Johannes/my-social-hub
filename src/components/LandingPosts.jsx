import React, { useEffect, useRef, useState } from "react";
import './index.css';
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import { getPopularPosts, getRecentPosts } from "../app/features/post/postsSlice";
import moment from "moment";

const LandingPosts = () => {
  const { recentPosts, popularPosts } = useSelector((state) => state.posts);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    dispatch(getRecentPosts());
  }, [pathname]);

  useEffect(() => {
    dispatch(getPopularPosts());
  }, [pathname]);

  return (
    <>
      {recentPosts?.length && (
        <section className="section recent-post">
        <div className="container">

          <div className="post-main">

            <h2 className="text-green text-[25px] font-bold md:text-[40px]">
              Recent posts
            </h2>

            <p className="pb-10 text-[16px] md:text-[20px]">
              Don't miss the latest trends
            </p>

            <ul className="grid-list">
              {recentPosts?.length ? (
                recentPosts?.map((post) => (
                  <li>
                    <div className="recent-post-card">

                      <div onClick={() => navigate(`/details/${post?._id}`)} className="relative">
                        <div className="w-full">
                          {post?.image && (
                            <img
                              src={post?.image}
                              alt={post?.name}
                              className="h-[280px] rounded-2xl w-full bg-primary object-cover object-center transition-all ease"
                            />
                          )}
                          <div className="">
                            {post?.post && (
                              <div className="flex text-start pb--4 justify-between p-2 px-4 text-base border-b border-b-primary">
                                <p className="text-[16px]">
                                  {parse(`${post?.post.slice(0, 200)}`)}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="card-content">

                        <a href="#" className="bg-bg_alt p-2 rounded-2xl font-semibold cursor-pointer">{post?.title}</a>

                        <h3 className="headline headline-3 card-title">
                          <a href="#" className="">{post?.title}</a>
                        </h3>

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

          {popularPosts?.length && (
            <div className="post-aside grid-list">

              <div className="card aside-card">

                <h3 className="headline headline-2 aside-title">
                  <span className="span">Popular Posts</span>
                </h3>
                <ul className="popular-list">
                {popularPosts?.length ? (
                  popularPosts?.map((post) => (
                    <li>
                      <div className="popular-card">

                      <figure className="card-banner img-holder">
                        <img src={post?.user?.picture} className="w-[50px] h-[50px] object-cover object-center" loading="lazy"
                          alt={post?.user?.given_name} />
                      </figure>

                        <div className="card-content">

                          <h4 className="headline headline-4 card-title">
                            <a href="#" className="link hover-2">{post?.title}</a>
                          </h4>

                          <div>
                            <p className="text-[14px] text-lighter">{moment(post?.createdAt).fromNow()}</p>
                          </div>
                        </div>

                      </div>
                    </li>
                  ))
                ) : ("No posts")}
                </ul>

              </div>
            </div>
          )}
        </div>
      </section>
      )}
    </>
  )
}

export default LandingPosts
