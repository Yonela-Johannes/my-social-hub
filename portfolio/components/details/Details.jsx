import { AiFillGithub } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import { useParams } from 'react-router-dom'
import { projects } from '../../data/data'
const Details = () => {
  const params = useParams()
  const { name } = params
  const project = projects.find(project => project.name == name)
  return (
    <section id="projects">
    <div className="container">
    <div className="about_more_button">
      <h2 className="title">{name} - web</h2>
    </div>
      {project?.barcode && (
        <div className="barcode__wrapper">
        <div className="barcode__container">
          <img src={project.barcode} alt={project.name} className="barcode"/>
        </div>
          <p>Scan QR code to open app</p>
        </div>
      )}
      <div className='pr'>
          <div key={project?.key} className='projects__cards'>
          <div>
              <div>
                  <div className="about__title">{project?.name}</div>
                  {project?.sub_v_name && (<div className="about__title">{project?.sub_v_name}</div>)}
              </div>
              <div>
              <img src={project?.logo} className='logo' alt={project?.name} />
              {project?.sub_v_name && (<img src={project?.sub_v_logo} className='logo' alt={project?.name} />)}
              </div>
          </div>

            <p className="sub">{project?.description}</p>

            <br />
              <div className='about__info'>{project?.about.map((abt, i) => (
                <p key={project?.key + i}>{abt}</p>
              ))}
              </div>
              {project?.about_native && (<h2 className="title">{name} - app</h2>)}
              {project?.about_native && (
              <div className='about__info'>{project?.about_native.map((abt, i) => (
                <p key={project?.key + i}>{abt}</p>
                ))}
              </div>
              )}
            <div className="tech__container">{project?.technologies.map((tech, i) => (
              <p className='tech__tag' key={project?.key + i + 2}>{tech} </p>
            ))}
            </div>
            {project?.app_technologies && (
                    <div className="tech__container">
                    {project?.app_technologies?.map((tech, i) => (
                      <p className='tech__tag app__tech' key={project?.key + i + 2}>{tech} </p>
                    ))}
                </div>
                  )
                  }
            <div className="links">
              <div>
                <a target="_blank" href={project?.repo} className="primary-btn outline external-link"> <span><AiFillGithub className='icon'/></span></a>
                {project?.web && (<a target="_blank" href={project?.web} className="primary-btn outline external-link"> <span><FaReact className='icon'/></span></a>)}
                {project?.sub_v_name && (<a target="_blank" href={project?.sub_v_web} className="primary-btn outline external-link"> <span><FaReact className='icon'/></span></a>)}
              </div>
            </div>
          </div>
      </div>
    </div>
  </section>
  )
}

export default Details
