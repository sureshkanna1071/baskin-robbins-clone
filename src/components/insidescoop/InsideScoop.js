import React from 'react'
import "./insidescoop.css"
import br from "../../assets/brs.png"
import blog from "../../assets/blog.webp"
import curves from "../../assets/curves.png"

const InsideScoop = () => {
  return (
    <div className='br__insidescoop'>
      <div className='br__insidescoop_heading'>
        <img className='br__insidescoop_heading-logo' src={br} alt="logo" />
        <span style={{color: "#08279d"}}>INSIDE <span style={{color: "#F20C90"}}>SCOOP</span></span>
        <img style={{padding: "20px 0 0"}} src={curves} alt="lines" />
      </div>
      <div className='br__insidescoop_carousal'>
        <div className='br__insidescoop_carousal-container'>
          <img src={blog} alt="details" />
          <h2 className='br__insidescoop_title'>Which Ice Cream Suits Your BFF?</h2>
          <p className='br__insidescoop_desc'>The day we all enjoyed as kids is finally here…Friendship Day! Think friendship bracelets, colorful bands, and promises to stay friends with everyone you know.</p>
          <p style={{cursor: "pointer", display: "inline"}}>Read More</p>
        </div>
      </div>
    </div>
  )
}

export default InsideScoop;