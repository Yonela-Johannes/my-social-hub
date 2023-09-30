import './styles.css'
import { useState } from 'react'
import { MdEmail } from 'react-icons/md';
import { FaGithubAlt, FaSpotify } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { SiCodewars } from 'react-icons/si';


import DarkMode from '../hooks/DarkMode';
function Navbar({scroll, active, setActive}) {
  const [switchTheme, setSwitchTheme] = useState(true)
  return (
    <div className={scroll ? 'static-navbar' : 'scroll-navbar'}>
        <div className='navbar'>
            <div className='wrapper'>
                  <div className="landing-right">
                    <div className="homeSocial">
                        <div className="navListOne">
                            <div className="listItemsOne"><a href="mailto:johannesyonela@gmail.com"><MdEmail className="icon" /></a></div>
                            <div className="listItemsOne"><a href="https://github.com/Yonela-Johannes" rel="norefferer" target="_blank"><FaGithubAlt className="icon" /></a></div>
                            <div className="listItemsOne"><a href="https://www.linkedin.com/in/yonela-johannes/" target="_blank"rel="norefferer"><BsLinkedin className="linked-in icon" /></a></div>
                        </div>
                      </div>
                      <div className="homeSocial">
                        <div className="navListOne">
                            <div className="listItemsOne"><a href="https://open.spotify.com/user/31ud6yhw2lmlt7q746a3skn4gsgm" target="_blank"><FaSpotify className="icon" /></a></div>
                            <div className="listItemsOne"><a href="https://www.instagram.com/therealtaalpha/" rel="norefferer" target="_blank"><AiFillInstagram className="icon" /></a></div>
                            <div className="listItemsOne"><a href="https://www.codewars.com/users/Yonela-Johannes" target="_blank"rel="norefferer"><SiCodewars className="linked-in icon" /></a></div>
                        </div>
                    </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
