import React from 'react'
import "./herobanner.css"
import herobanner1 from "../../assets/herobanner1.webp"

const HeroBanner = () => {
  return (
    <div className='br__herobanner'>
      <img src={herobanner1} alt="banner" />
    </div>
  )
}

export default HeroBanner