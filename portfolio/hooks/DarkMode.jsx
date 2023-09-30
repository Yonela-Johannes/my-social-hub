import React from 'react'
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';


const DarkMode = ({setSwitchTheme}) => {
  let clickedClass = 'clicked';
  const body = document.body;
  const lightTheme = 'light';
  const darkTheme = 'dark'
  let theme;
  if(localStorage){
    theme = localStorage.getItem("theme")
  }

  if(theme == 'lightTheme' || theme == 'darkTheme'){
    body.classList.add(theme)
  }else{
    body.classList.add(lightTheme)
  }
  if(theme == 'lightTheme'){
    setSwitchTheme(true)
  }else if(theme == 'darkTheme'){
    setSwitchTheme(false)
  }

  const switchTheme = (e) => {
    if(theme == darkTheme){
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass)
      localStorage.setItem("theme", "light")
      setSwitchTheme(true)
      theme = lightTheme
    }else{
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass)
      localStorage.setItem("theme", "dark")
      setSwitchTheme(false)
      theme = darkTheme
    }
  }

  return (
    <button
      onClick={(e) => switchTheme(e)}
      id="darkMode"
    >
      {theme == 'dark' ? <BsFillSunFill className="icon" /> : <BsFillMoonStarsFill className="icon" />}
    </button>
  )
}

export default DarkMode
