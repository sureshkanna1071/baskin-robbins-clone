import React from 'react'
import "./baskinrobbinsin.css"
import br from "../../assets/brs.png"
import curves from "../../assets/curves.png"
import FadeInBox from '../../cards/fadeinbox/FadeInBox'

const BaskinRobbinsIn = () => {
  return (
    <div className='br__baskinrobbinsin'>
      <div className='br__baskinrobbinsin_heading'>
        <img className='br__baskinrobbinsin_heading-logo' src={br} alt="logo" />
        <span style={{color: "#F20C90"}}>@ <span style={{color: "#08279d"}}>BASKINROBBINSIN</span></span>
        <img style={{padding: "20px 0 0"}} src={curves} alt="lines" />
      </div>
      <div className='br__baskinrobbinsin_carousal'>
         <FadeInBox />
         <FadeInBox />
         <FadeInBox />
      </div>
    </div>
  )
}

export default BaskinRobbinsIn