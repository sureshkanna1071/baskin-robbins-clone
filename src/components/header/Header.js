import React, { useContext } from 'react'
import "./header.css"
import logos from "../../assets/logos.png"
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeContext } from "../../App";
import Modal from '../modal/Modal';

const Header = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);

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
      </div>
    </div>
    <Modal />
    </>
    
  )
}

export default Header