import React, { useState } from 'react'
import "./fadeinbox.css"
import classic from "../../assets/classic.webp"

const FadeInBox = () => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
       className='br__fadeinbox' 
       onMouseEnter={() => setIsHovered(true)} 
       onMouseLeave={() => setIsHovered(false)}
    >
        <p className='br__fadeinbox-text' style={{opacity: isHovered ? "1" : "0"}} >
            Hiiiiiiii iiiiiiii iiiiii iiii 
            Hiiiiiiii iiiiiiii iiiiii iiii
            Hiiiiiiii iiiiiiii iiiiii iiii
            Hiiiiiiii iiiiiiii iiiiii iiii
            Hiiiiiiii iiiiiiii iiiiii iiii
            Hiiiiiiii iiiiiiii iiiiii iiii
            Hiiiiiiii iiiiiiii iiiiii iiii
        </p>
    </div>
  )
}

export default FadeInBox