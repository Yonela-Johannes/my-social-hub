import './landing.css'
import { BsFillFileEarmarkPdfFill } from 'react-icons/bs';
import './main.css'
import cv from '../img/cv.pdf'
import landingImg from '../img/selected.jpeg'
function Landing() {
  return (
    <div id="home" className='landing'>
      <div className="landing-left">
          <div className="landing-left-wrapper">
            <p className="landing-intro">Software/Fullstack Developer</p>
            <p className="landing-desc">
              I develop mobile applications and web site/applications.
            </p>
          </div>
      </div>
        <div className="landing-left">
          <div className="landing-left-wrapper">
          <img src={landingImg} className='landing-img' alt=" Yonela Johannes" />
            <h1 className="landing-name">YONELA JOHANNES</h1>
            <div className="landing-title">
              <div className="landing-title-wrapper">
                <div className="landing-title-item">Software/ Fullstack Engineer</div>
                <div className="landing-title-item">Contract Developer</div>
                <div className="landing-title-item">Software Developer</div>
                <div className="landing-title-item">Web Developer</div>
              </div>
            </div>
              <a href={cv} target='_blank' className="cv">TLTR? Download CV <BsFillFileEarmarkPdfFill className='icon' /></a>
          </div>
        </div>
        <div className="landing-left">
          <div className="landing-left-wrapper">
            <p className="landing-intro">Mobile, Web applications Developer</p>
            <p className="landing-desc">
            ReactJS, JavaScript, Ruby + Rails
            </p>
          </div>
      </div>
    </div>
  )
}

export default Landing
