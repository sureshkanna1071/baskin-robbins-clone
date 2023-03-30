import React from 'react'
import "./favoritescard.css"
import classic from "../../assets/classic.webp"

const FavoritesCard = () => {
  return (
    <div className='br__favoritescard'>
        <h2>Classic Vannila</h2>
        <img src={classic} alt="product" />
        <button>ORDER NOW</button>
    </div>
  )
}

export default FavoritesCard