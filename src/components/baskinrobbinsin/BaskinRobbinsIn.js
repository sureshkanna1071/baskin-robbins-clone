import React from 'react'
import "./baskinrobbinsin.css"
import br from "../../assets/br.png"
import curves from "../../assets/curves.png"

const BaskinRobbinsIn = () => {
  return (
    <div className='br__insidescoop'>
      <div className='br__insidescoop_heading'>
        <img className='br__insidescoop_heading-logo' src={br} alt="logo" />
        <span style={{color: "#F20C90"}}>@ <span style={{color: "#08279d"}}>BASKINROBBINSIN</span></span>
        <img style={{padding: "20px 0 0"}} src={curves} alt="lines" />
      </div>
      <div className='br__insidescoop_carousal'>
        
      </div>
    </div>
  )
}

export default BaskinRobbinsIn