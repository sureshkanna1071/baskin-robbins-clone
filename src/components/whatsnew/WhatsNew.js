import React from 'react'
import ice from "../../assets/ice.avif"
import curves from "../../assets/curves.png"
import "./whatsnew.css"
import ProductCard from '../productcard/ProductCard'

const WhatsNew = () => {
  return (
    <div className='br__whatsnew'>
      <div className='br__whatsnew_heading'>
        <img className='br__whatsnew_heading-logo' src={ice} alt="logo" />
        <span style={{color: "#08279d"}}>WHAT'S <span style={{color: "#F20C90"}}>NEW?</span></span>
        <img style={{padding: "20px 0 0"}} src={curves} alt="lines" />
      </div>
      <div className='br__whatsnew_carousal'>
        <ProductCard />
      </div>
    </div>
  )
}

export default WhatsNew