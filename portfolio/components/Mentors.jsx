import './mentors.css'
import { projects } from '../data/data'
const Mentors = () => {
  return (
    <div className="about mentors">
      <div className="title">Basic CV</div>
      <div className="left align-start">
            <h2 className="about__title">About Me</h2>
            <div className="w-[300px] md:w-full">
              <p className="">
              I'm Yonela Johannes, a Le Wagon and Codex_ alumni seeking internships to enhance my practical work experience in tech. My passion lies in software development, full-stack development, web development, and programming. I'm detail-oriented, can manage tight deadlines, and use creative problem-solving to make a positive impact on projects. I have strong communication, teamwork, and decision-making skills, with a focus on building professional connections.
              </p>
              <br />
            </div>
      </div>
      <div className="mentors-container">
        <div className="left align-start">
            <h2 className="about__heading">Software/Fullstack Developer</h2>
            <div className="w-[300px] md:w-full">
              <h2 className="about__heading">Yonela Johannes</h2>
              <p className=" quote">
              My life attitude is to learn as much as I can. Learning keeps me fit and motivated.
              </p>
            </div>
        </div>
        <div className="left align-start">
            <h2 className="about__title">Tech Skills</h2>
            <div className="w-[300px] md:w-full">
                <h2 className="about__heading">Languages</h2>
                <p className='date'>
                JavaScript, Ruby
              </p>
              <h2 className="about__heading">Frameworks & Libraries</h2>
                <p className='date'>
                  HTML, CSS, Sass, Bootstrap, Rails, Handlebars, ReactJs, Vite, NextJs, & Native, TypeScript, Angular, NodeJs, Express,
                  Unit Testing, SQL, MongoDB
              </p>
              <h2 className="about__heading">Tools</h2>
              <p className="">
                Figma, Adobe Suite
              </p>
            </div>
            <div className="w-[300px] md:w-full">
                <h2 className="about__heading">Project Management</h2>
              <p className='date'>
                  Agile, Kanban, Scrum, workflows with git/Github
              </p>
            </div>
            <div className="w-[300px] md:w-full">
                <h2 className="about__heading">Soft Skills</h2>
              <p className='date'>
                  Product mindset, UX/UI basics, Communication & Pitch skills, collaboration
              </p>
            </div>
        </div>
      </div>
      <div className="left align-start">
            <h2 className="about__title">Professional Profile</h2>
            <div className="w-[300px] md:w-full">
              <p className="">
              As an ambitious African male, I thrive on challenges and work hard to achieve my goals. I'm a committed team player who performs well under pressure, handling stress in a professional manner. I'm tenacious in pursuing plans of action until objectives are met, and believe I have great potential to be an asset to any institution.
              </p>
              <br />
            </div>
      </div>
      <div className="mentors-container">
        <div className="left align-start mb-10">
            <h2 className="about__title">Education</h2>
            <div className="w-[300px] md:w-full">
                <h2 className="about__heading">Le Wagon Cape Town</h2>
                <p className='date'>
                  January 2023 - March 2023
              </p>
              <p className="">
                  Fullstack Developer
              </p>
              <p className="">
              Le Wagon Cape Town Batch #1177
              </p>
            </div>
            <div className="w-[300px] md:w-full">
                <h2 className="about__heading">CodeX Cape Town</h2>
              <p className='date'>
                  February 2022 - December 2022
              </p>
              <p className="">
                  Agile Fullstack Developer
              </p>
              <p className="">
                AWD className of 2022
              </p>
              <p className='date'>
                  Fullstack Certificate
              </p>
            </div>
            <div className="w-[300px] md:w-full">
                <h2 className="about__heading">College of Cape Town</h2>
                <p className='date'>
                  2015 -  2016
              </p>
              <p className="">
                  IT & Computer Science
              </p>
              <p className=""></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Mentors
