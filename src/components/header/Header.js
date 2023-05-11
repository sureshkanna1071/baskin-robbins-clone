import React, { useContext, useEffect, useState } from 'react'
import "./header.css"
import logos from "../../assets/logos.png"
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeContext } from "../../App";
import Modal from '../modal/Modal';

const Header = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const [temp, setTemp] = useState("");

  useEffect(() => {
    if(navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(getWeatherStats);
    } else {
      return
    }
  }, [])

  const getWeatherStats = (data) => {
    let lat = data.coords.latitude
    let lon = data.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`; 
     fetch(url, {method: 'get'})
     .then((res) => res.json())
     .then((res) => {
      setTemp({temp: res.list[0].temp.day, city: res.city.name})
     })
  }
 
  console.log(temp)

  return (
    <>
    <div className='br__header'>
      <div>
        <a href='/'><img  className='br__header-logo' src={logos} alt="logo" /></a>
      </div>
      <div className='br__header_container'>
        <button className='br__header_container_button'>SHOP</button>
        <h3 className='br__header_container-link'>Partner with Us</h3>
          <IconButton onClick={() => toggleTheme()} sx={{marginLeft: "25px"}} >{theme === "light" ? <LightModeIcon sx={{color: "#07219B"}} /> : <DarkModeIcon sx={{color: "#07219B"}} />}</IconButton>
          <h4 className='br__header_temp'>{temp.temp ? `${temp.temp}°C ${temp.city}` : null}</h4>
      </div>
    </div>
    <Modal />
    </>
    
  )
}

export default Header