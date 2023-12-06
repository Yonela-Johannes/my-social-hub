import './styles.css'
import { useState } from 'react'
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

function Navbar({scroll, active, setActive}) {
  const [switchTheme, setSwitchTheme] = useState(true)
  return (
    <div className={scroll ? 'static-navbar' : 'scroll-navbar'}>
        <div className='navbar'>
            <div className='wrapper'>
                  <div className="landing-right">
                    <div className="homeSocial">
                        <div className="navListOne">
                            <div className="listItemsOne"><a href="https://github.com/Yonela-Johannes" rel="norefferer" target="_blank"><AiFillGithub className="icon" /></a></div>
                            <div className="listItemsOne"><a href="https://www.linkedin.com/in/yonela-johannes/" target="_blank"rel="norefferer"><AiFillLinkedin className="linked-in icon" /></a></div>
                        </div>
                      </div>
                      <div className="homeSocial">
                        <div className="navListOne">
                            <div className="listItemsOne"><a href="https://www.facebook.com/JohannesYonela" target="_blank"rel="norefferer"><AiFillFacebook className="linked-in icon" /></a></div>
                            <div className="listItemsOne"><a href="https://www.instagram.com/yonelajohannes/" rel="norefferer" target="_blank"><AiFillInstagram className="icon" /></a></div>
                        </div>
                    </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
