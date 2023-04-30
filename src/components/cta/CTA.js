import React from 'react'
import "./cta.css"
import ctalogo from "../../assets/cta-logos.png"

const CTA = () => {
  return (
    <div className='br__cta'>
      <img src={ctalogo} alt="logo" />
      <div className='br__cta_links'>
        <a href='/'><p>Home</p></a>
        <a><p>About Us</p></a>
        <a><p>Our Stores</p></a>
        <a><p>Blog</p></a>
      </div>
      <div className='br__cta_links'>
        <a><p>Home</p></a>
        <a><p>About Us</p></a>
        <a><p>Our Stores</p></a>
        <a><p>Blog</p></a>
      </div>
      <div className='br__cta_newsletter'>
        <h3 className='br__cta_newsletter_title'>Subscribe to news letter</h3>
        <input placeholder='enter your email' />
        <button>SUBMIT</button>
      </div>
    </div>
  )
}

export default CTA