import React from 'react'
import cart from "../../assets/cart.avif"
import curves from "../../assets/curves.png"
import "./shopbyrange.css"
import RangeCard from '../rangecard/RangeCard'

const ShopByRange = () => {
  return (
    <div className='br__shopbyrange'>
      <div className='br__shopbyrange_heading'>
        <img className='br__shopbyrange_heading-logo' src={cart} alt="logo" />
        <span style={{color: "#08279d"}}>SHOP BY <span style={{color: "#F20C90"}}>RANGE</span></span>
        <img style={{padding: "20px 0 0"}} src={curves} alt="lines" />
      </div>
      <div className='br__shopbyrange_carousal'>
        <RangeCard />
      </div>
    </div>
  )
}

export default ShopByRange