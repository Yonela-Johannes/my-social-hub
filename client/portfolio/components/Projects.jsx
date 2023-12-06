import { AiFillGithub } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import './projects.css'
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/data'

const Projects = () => {
  const navigation = useNavigate()
  return (
    <div>
      <section id="projects">
        <div className="container">
        <div className="about_more_button">
          <h2 className="title">My work!</h2>
        </div>
          <div className='pr'>
            {projects.map((project) => (
              <div key={project.key} className='projects__cards'>
                <div className='about__header'>
                  <div className="about__title">{project.name}</div>
                  {project.sub_v_name && (<div className="about__title">{project.sub_v_name}</div>)}
                  <img src={project.logo} className='logo' alt={project.name} />
                  {project.sub_v_name && (<img src={project.sub_v_logo} className='logo' alt={project.name} />)}
                </div>
                <p className="sub">{project.description}</p>
                <br />
                <div className="tech__container">
                    {project.technologies.map((tech, i) => (
                      <p className='tech__tag' key={project.key + i + 2}>{tech} </p>
                    ))}
                </div>
                  {project.app_technologies && (
                    <div className="tech__container">
                    {project.app_technologies.map((tech, i) => (
                      <p className='tech__tag app__tech' key={project.key + i + 2}>{tech} </p>
                    ))}
                </div>
                  )
                  }
                <div className="links">
                  <div>
                    <a target="_blank" href={project.repo} className="primary-btn outline external-link"> <span><AiFillGithub className='icon'/></span></a>
                    {project.native_repo && (<a target="_blank" href={project.repo} className="primary-btn outline external-link"> <span><AiFillGithub className='icon'/></span></a>)}
                    {project.web && (<a target="_blank" href={project.web} className="primary-btn outline external-link"> <span><FaReact className='icon'/></span></a>)}
                    {project.sub_v_name && (<a target="_blank" href={project.sub_v_web} className="primary-btn outline external-link"> <span><FaReact className='icon'/></span></a>)}

                  </div>
                  <button onClick={() => navigation(`/project/${project.name}`, {project})} className="redirect_button">more..</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
