import { useState } from 'react';
import PText from '../components/PText';
import AboutImg from '../img/selected.jpeg'
import AboutImgTwo from '../img/selectedtwo.jpeg'
import { MdSchool } from 'react-icons/md';
import { IoIosArrowDropdown } from 'react-icons/io';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './about.css'

export default function About() {
  const [hide, setHide] = useState(false)
  return (
      <div className='about' id="about">
          <div className="title">About</div>
            <div className="left">
              <div className="about__info">
              <h2 className="about__title">TLTR</h2>
              <h2 className="about__heading">Hi. I'm Yonela</h2>
                <PText>
                  I'm a software/full-stack developer from Cape Town. I love to create simple yet beautiful websites which speaks with great user interfaces.
                </PText>
                <div className="right">
                  <img src={AboutImg} className='me' alt="me" />
                </div>
              </div>
            </div>
            <div className="left">
              <div className="about__info">
              <div className="about_more_button">
                <h2 className="about__title">LONG VERSION</h2>
                <div className='about_button' onClick={()=> setHide(!hide)}>
                {
                  !hide ? (
                    <>
                      <p>more</p>
                      <IoIosArrowDropdown className='icon' />
                    </>
                  ) :
                  (
                    <>
                      <p>close</p>
                      <AiOutlineCloseCircle className='icon' />
                    </>
                  )
                }
                </div>
              </div>
              {
                hide && (
                  <>
                    <PText>
                        Computers has fascinated me since childhood.
                        Ever since was a child. I had no idea what computers actually did, or how they worked,

                        but I jumped on every chance I could to get near them.
                        <br />
                        <br />
                        Whether a friend had a broken computer at home I would tell him to let me fix it.
                        People could not believe how I could fix computers without any computer schooling.
                        Friends and acquantance would mention my name whenever the talk was about tech.
                        <br />
                        <br />
                        Can you believe that computer understand our commands?<br />
                        It's electric signals 0s and 1s that the computer actually understands. Magical isn't it?<br />
                        <br />
                        We can't see those signals but signals make a computer work. Again a big magic.
                        What is a programming language? Let me learn!

                        <br />
                        <br />
                        As I grew up, in the schooling days my cousin ran a small computer repair business. At the age 14 he outsource all his computer reparing work to me since he had other interests.
                        I was excited that there was so many computer for me to fix. I would spend night awake mechaninic-ing computer hardwares; then install operating systems, and softwares.<br />
                        For him to come a pick a few up the next day.<br />
                        <br />
                        Although he did not pay me. I gave no mind, I loved what I was doing. I was learning more and as long as he kept on bringing computers for me to fix.
                        I was happy!<br />
                        I was a kid and I was not thinking about money then, nor did I need any.
                        <br />
                        <br />
                        What's more suprising is that I would start college a few years after that and discover that there was something more fascinating called computer language(s).
                          <br />
                          <br />
                          It's complexity shocked! me, But I could sleep without figuring out what it is, how it works and what it  was used for!
                          <br />
                          <br />
                        It sparked my interest; amaizing.< br />
                        I wanted to know more. I was challenged into solving problems and trying to figure out how to make real life softwares.
                        <br />
                        I got bit software development pretty bad.
                        <br />
                        <br />
                        As I soon discover that was something called when development where you can build websites and applications and share it for everyone to see. <br />
                        <br />
                        I never chose web & app development, it chose me.
                        Something about logical thinking is appealing to me.

                        And then I tried teaching myself Javascript and this time I was really picking up. Programming was getting much more fun and rewarding.
                        <br />
                        <br />
                        I got into tech bootcamps, fast-paced intensive peer to peer learning and problem solving environments that teaches students how to learn and solve problems in a sort amount of time,
                        how to teach themselves, solve problem whether it is in interactive groups or by themselves.
                        <br />
                        And I love it
                    </PText>
                    <div className="right">
                      <img src={AboutImgTwo} className='me' alt="me" />
                  </div>
                  </>
                )
              }
              </div>
              <div className="left">
                  <h2 className="about__title">Education<MdSchool className='icon' /></h2>
                  <div>
                      <h2 className="about__heading">Le Wagon Cape Town</h2>
                      <p className='date'>
                        January 2023 - March 2023
                    </p>
                    <p className="sub">
                        Software Developer
                    </p>
                    <p className="sub">
                        Attending Le Wagon Cape Town Batch 1177
                    </p>
                    <p className="para-g">
                      9-week full-time intensive coding bootcamp learning HTML/CSS/Bootstrap,
                      JavaScript ES6, Stimulus JS, Figma/Sketch git, GitHub, SQL, PostgesSql, Heroku, Cloudinary and Ruby on Rails. Designed and shipped
                      to production.
                    </p>
                  </div>
                  <div>
                      <h2 className="about__heading">Project CodeX Cape Town</h2>
                    <p className='date'>
                        February 2022 - December 2022
                    </p>
                    <p className="sub">
                        Agile Fullstack Developer
                    </p>
                    <p className="para-g">
                      9-month full-time agile coding bootcamp learning HTML, CSS,
                      JavaScript Es6, git, GitHub, NodeJs and PostgresSql.
                      Kanban and agile methodologies.
                    </p>
                  </div>
                  <div>
                      <h2 className="about__heading">College of Cape Town</h2>
                      <p className='date'>
                        2015 -  2016
                    </p>
                    <p className="sub">
                        IT & Computer Science
                    </p>
                    <p className="para-g">
                      I'm a full-stack developer from Cape Town. I love to create simple yet beautiful websites which speaks with great user experience,
                    </p>
                  </div>
              </div>
            </div>
      </div>
  );
}
