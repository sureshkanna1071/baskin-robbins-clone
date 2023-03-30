import React from 'react'
import "./productcard.css"
import vanilla from "../../assets/vanilla.webp"

const ProductCard = () => {
  return (
    <div className='br__card' >
        <img src={vanilla} alt="product" />
        <h2>Vegan Vanilla</h2>
        <button>ORDER NOW</button>
    </div>
  )
}

export default ProductCard