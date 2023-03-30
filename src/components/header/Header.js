import React from 'react'
import "./header.css"
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <div className='br__header'>
      <div>
        <a href='/'><img  className='br__header-logo' src={logo} alt="logo" /></a>
      </div>
      <div className='br__header_container'>
        <button>SHOP</button>
        <h3 className='br__header_container-link'>Partner with Us</h3>
      </div>
    </div>
  )
}

export default Header