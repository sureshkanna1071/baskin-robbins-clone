import React from 'react'
import cone from "../../assets/cone.avif"
import curves from "../../assets/curves.png"
import "./alltimefavorites.css"
import FavoritesCard from '../favoritescard/FavoritesCard'

const AllTimeFavorites = () => {
  return (
    <div className='br__alltimefavorites'>
      <div className='br__alltimefavorites_heading'>
        <img className='br__alltimefavorites_heading-logo' src={cone} alt="logo" />
        <span style={{color: "#08279d"}}>ALL TIME <span style={{color: "#F20C90"}}>FAVORITES</span></span>
        <img style={{padding: "20px 0 0"}} src={curves} alt="lines" />
      </div>
      <div className='br__alltimefavorites_carousal'>
        <FavoritesCard />
      </div>
    </div>
  )
}

export default AllTimeFavorites