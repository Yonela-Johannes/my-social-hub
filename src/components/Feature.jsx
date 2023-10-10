import React from 'react'
import './index.css';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Feature = () => {
  const navigate = useNavigate()
  return (

    <section className="section feature">
    <div className="container">

      <h2 className="text-green font-bold text-[25px] md:text-[40px]">
        Editor's picked
      </h2>

      <p className="mb-4 text-[16px]">
        Featured and highly rated articles
      </p>

      <ul className="feature-list">

        <li>
          <div className="card feature-card">

            <figure className="card-banner img-holder w-full h-[260px]">
              <img src="./assets/images/featured-1.png" loading="lazy"
                alt="Self-observation is the first step of inner unfolding" className="object-center w-full rounded-xl h-full" />
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
                  Self-observation is the first step of inner unfolding
                </a>
              </h3>

              <div className="card-wrapper">

                <div className="profile-card">
                  <img src="./assets/images/author-1.png" width="48" height="48" loading="lazy" alt="Joseph"
                    className="profile-banner" />

                  <div>
                    <p className="text-[16px]">Joseph</p>

                    <p className="text-[14px] text-lighter">25 Nov 2022</p>
                  </div>
                </div>

                <a href="#" className="text-[14px]">Read more</a>

              </div>

            </div>

          </div>
        </li>

        <li>
          <div className="card feature-card">

            <figure className="card-banner img-holder w-full h-[260px]">
              <img src="./assets/images/featured-2.png" loading="lazy"
                alt="Self-observation is the first step of inner unfolding" className="object-center w-full rounded-xl h-full" />
            </figure>

            <div className="card-content">

              <div className="card-wrapper">
                <div className="card-tag">
                  <a href="#" className="text-[14px] text-lighter font-semibold">#Design</a>

                  <a href="#" className="text-[14px] text-lighter font-semibold">#Movie</a>
                </div>
              </div>

              <h3 className="headline headline-3">
                <a href="#" className="text-[16px] hover-2">
                  Self-observation is the first step of inner unfolding
                </a>
              </h3>

              <div className="card-wrapper">

                <div className="profile-card">
                  <img src="./assets/images/author-1.png" width="48" height="48" loading="lazy" alt="Joseph"
                    className="profile-banner" />

                  <div>
                    <p className="text-[16px]">Joseph</p>

                    <p className="text-[14px] text-lighter">25 Nov 2022</p>
                  </div>
                </div>

                <a href="#" className="text-[14px]">Read more</a>

              </div>

            </div>

          </div>
        </li>

        <li>
          <div className="card feature-card">

            <figure className="card-banner img-holder w-full h-[260px]">
              <img src="./assets/images/featured-3.png" loading="lazy"
                alt="Self-observation is the first step of inner unfolding" className="object-center w-full rounded-xl h-full" />
            </figure>

            <div className="card-content">

              <div className="card-wrapper">
                <div className="card-tag">
                  <a href="#" className="text-[14px] text-lighter font-semibold">#Design</a>

                  <a href="#" className="text-[14px] text-lighter font-semibold">#Movie</a>
                </div>
              </div>

              <h3 className="headline headline-3">
                <a href="#" className="text-[16px] hover-2">
                  Self-observation is the first step of inner unfolding
                </a>
              </h3>

              <div className="card-wrapper">

                <div className="profile-card">
                  <img src="./assets/images/author-1.png" width="48" height="48" loading="lazy" alt="Joseph"
                    className="profile-banner" />

                  <div>
                    <p className="text-[16px]">Joseph</p>

                    <p className="text-[14px] text-lighter">25 Nov 2022</p>
                  </div>
                </div>

                <a href="#" className="text-[14px]">Read more</a>

              </div>

            </div>

          </div>
        </li>

        <li>
          <div className="card feature-card">

            <figure className="card-banner img-holder w-full h-[260px]">
              <img src="./assets/images/featured-4.png" loading="lazy"
                alt="Self-observation is the first step of inner unfolding" className="object-center w-full rounded-xl h-full" />
            </figure>

            <div className="card-content">

              <div className="card-wrapper">
                <div className="card-tag">
                  <a href="#" className="text-[14px] text-lighter font-semibold">#Design</a>

                  <a href="#" className="text-[14px] text-lighter font-semibold">#Movie</a>
                </div>
              </div>

              <h3 className="headline headline-3">
                <a href="#" className="text-[16px] hover-2">
                  Self-observation is the first step of inner unfolding
                </a>
              </h3>

              <div className="card-wrapper">

                <div className="profile-card">
                  <img src="./assets/images/author-1.png" width="48" height="48" loading="lazy" alt="Joseph"
                    className="profile-banner" />

                  <div>
                    <p className="text-[16px]">Joseph</p>

                    <p className="text-[14px] text-lighter">25 Nov 2022</p>
                  </div>
                </div>

                <a href="#" className="text-[14px]">Read more</a>

              </div>

            </div>

          </div>
        </li>

        <li>
          <div className="card feature-card">

            <figure className="card-banner img-holder w-full h-[260px]">
              <img src="./assets/images/featured-5.png" loading="lazy"
                alt="Self-observation is the first step of inner unfolding" className="object-center w-full rounded-xl h-full" />
            </figure>

            <div className="card-content">

              <div className="card-wrapper">
                <div className="card-tag">
                  <a href="#" className="text-[14px] text-lighter font-semibold">#Design</a>

                  <a href="#" className="text-[14px] text-lighter font-semibold">#Movie</a>
                </div>

              </div>

              <h3 className="headline headline-3">
                <a href="#" className="text-[16px] hover-2">
                  Self-observation is the first step of inner unfolding
                </a>
              </h3>

              <div className="card-wrapper">

                <div className="profile-card">
                  <img src="./assets/images/author-1.png" width="48" height="48" loading="lazy" alt="Joseph"
                    className="profile-banner" />

                  <div>
                    <p className="text-[16px]">Joseph</p>

                    <p className="text-[14px] text-lighter">25 Nov 2022</p>
                  </div>
                </div>

                <a href="#" className="text-[14px]">Read more</a>

              </div>

            </div>

          </div>
        </li>

      </ul>

      <button onClick={() => navigate('/blogs')} className="bg-primary flex item-center p-4 m-auto my-10 hover:bg-secondary">
        <span className="span">Show More Posts</span>
        <AiOutlineArrowRight />
      </button>

    </div>
  </section>
  )
}

export default Feature
