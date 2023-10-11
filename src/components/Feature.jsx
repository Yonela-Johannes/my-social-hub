import React, { useEffect, useRef, useState } from "react";
import './index.css';
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { getRecentBlogs } from "../app/features/blogs/blogsSlice";
import moment from "moment/moment";

const Feature = () => {
  const { recentBlogs } = useSelector((state) => state.blogs);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    dispatch(getRecentBlogs());
  }, [pathname]);

  return (
    <>
      {recentBlogs?.length && (
          <section className="section feature">
          <div className="container">
            <h2 className="text-green font-bold text-[25px] md:text-[40px]">
              Recent
            </h2>

            <p className="mb-4 text-[16px]">
            Empowering great people, stories and more
            </p>

            <ul className="feature-list">
              {recentBlogs?.length ? (
                recentBlogs.map((blog) => (
                  <li onClick={() => navigate(`/blogs/${blog?._id}`)} key={blog?._id}>
                    <div className="card feature-card">
                      <figure className="card-banner img-holder w-full h-[260px]">
                        <img src={blog?.image} loading="lazy"
                          alt={blog?.title} className="object-center object-cover w-full rounded-xl h-full" />
                      </figure>

                      <div className="card-content">

                        <div className="card-wrapper">
                          <div className="card-tag">
                            <a href="#" className="text-[14px] text-lighter font-semibold">#Travel</a>

                            <a href="#" className="text-[14px] text-lighter font-semibold">#Lifestyle</a>
                          </div>
                        </div>

                        <h3 className="headline headline-3">
                          <a href="#" className="text-[16px] hover-2">
                            {blog?.title?.slice(0, 60) + '...'}
                          </a>
                        </h3>

                        <div className="card-wrapper">

                          <div className="profile-card">
                            <img src={blog?.user?.picture} width="48" height="48" loading="lazy" alt={blog?.user?.given_name}
                              className="profile-banner" />

                            <div>
                              <p className="text-[16px]">{blog?.user?.given_name}{' '}{blog?.user?.family_name}</p>

                              <p className="text-[14px] text-lighter">{moment(blog.createdAt).fromNow()}</p>
                            </div>
                          </div>

                          <a href="#" className="text-[14px]">Read more</a>

                        </div>

                      </div>

                    </div>
                  </li>
                ))
              ) : ('No Blogs')}
            </ul>

            <button onClick={() => navigate('/blogs')} className="bg-primary flex item-center p-4 m-auto my-10 hover:bg-secondary">
              <span className="span">Show More Posts</span>
              <AiOutlineArrowRight />
            </button>

          </div>
        </section>
      )}
    </>
  )
}

export default Feature
