import React from 'react'
import "./footer.css"
import flow from "../../assets/flow.webp"
import youtube from "../../assets/youtube.webp"
import twitter from "../../assets/twitter.webp"
import instagram from "../../assets/instagram.webp"
import facebook from "../../assets/facebook.webp"

const Footer = () => {
  return (
    <div className='br__footer'>
      <img src={flow} alt="flow" />
      <div className='br__footer_container'>
        <p>Copyright | Baskins Robbins India</p>
        <div className='br__footer_container-logos'>
          <img src={youtube} alt="youtube" />
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
          <img src={facebook} alt="facebook" />
        </div>
        <p>Sitemap</p>
      </div>
    </div>
  )
}

export default Footer