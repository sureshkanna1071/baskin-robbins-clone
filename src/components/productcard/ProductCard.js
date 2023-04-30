import React from 'react'
import "./productcard.css"
import Mississippi_Mud from "../../assets/Mississippi_Mud.webp"

const ProductCard = () => {
  return (
    <div className='br__card' >
        <img src={Mississippi_Mud} alt="product" />
        <h2>Mississippi Mud</h2>
        <button>ORDER NOW</button>
    </div>
  )
}

export default ProductCard