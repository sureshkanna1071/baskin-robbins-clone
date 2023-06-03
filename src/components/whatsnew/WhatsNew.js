import React from 'react'
import ice from "../../assets/ice.avif"
import curves from "../../assets/curves.png"
import "./whatsnew.css"
import ProductCard from '../productcard/ProductCard'
import Slider from 'react-slick'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      // className={className}
      style={{ ...style, display: "block", textAlign: "end"  }}
      onClick={onClick}
    ><ArrowForwardIosIcon sx={{color: "hotpink", fontSize: "50px", position: "relative", bottom: "250px", left: "80px" }} /></div>
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      // className={className}
      style={{ ...style, display: "inline", position: "relative", top:"250px", right: "100px" }}
      onClick={onClick}
    ><ArrowBackIosIcon sx={{color: "hotpink", fontSize: "50px"}} /></div>
  );
}

const WhatsNew = () => {


  const  settings = {
    infinite: true,
    slidesToShow: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className='br__whatsnew'>
      <div className='br__whatsnew_heading'>
        <img className='br__whatsnew_heading-logo' src={ice} alt="logo" />
        <span style={{color: "#08279d"}}>WHAT'S <span style={{color: "#F20C90"}}>NEW?</span></span>
        <img style={{padding: "20px 0 0"}} src={curves} alt="lines" />
      </div>
      <div className='br__whatsnew_carousal'>
        <Slider {...settings}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Slider>
      </div>
    </div>
  )
}

export default WhatsNew