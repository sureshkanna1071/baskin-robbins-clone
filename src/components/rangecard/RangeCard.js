import React from 'react'
import "./rangecard.css"
import rolls from "../../assets/rolls.webp"
import drip from "../../assets/drip.png"

const RangeCard = () => {
  return (
    <div className='br__rangecard'>
        <div className='br__rangecard_container'>
            <img src={rolls} alt="product" />
            <h4>Ice Cream Roll Cakes</h4>
            <button>ORDER NOW</button>
        </div>
    </div>
  )
}

export default RangeCard;