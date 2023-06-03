import React from 'react'
import cart from "../../assets/cart.avif"
import curves from "../../assets/curves.png"
import "./shopbyrange.css"
import RangeCard from '../rangecard/RangeCard'
import Slider from 'react-slick'
import { SamplePrevArrow, SampleNextArrow } from '../whatsnew/WhatsNew'

const ShopByRange = () => {

  const  settings = {
    infinite: true,
    slidesToShow: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className='br__shopbyrange'>
      <div className='br__shopbyrange_heading'>
        <img className='br__shopbyrange_heading-logo' src={cart} alt="logo" />
        <span style={{color: "#08279d"}}>SHOP BY <span style={{color: "#F20C90"}}>RANGE</span></span>
        <img style={{padding: "20px 0 0"}} src={curves} alt="lines" />
      </div>
      <div className='br__shopbyrange_carousal'>
        <Slider {...settings}>
          <div>
            <RangeCard />
          </div>
          <div>
            <RangeCard />
          </div>
          <div>
            <RangeCard />
          </div>
          <div>
            <RangeCard />
          </div>
          <div>
            <RangeCard />
          </div>
          <div>
            <RangeCard />
          </div>
          <div>
            <RangeCard />
          </div>
          <div>
            <RangeCard />
          </div>
          <div>
            <RangeCard />
          </div>
          <div>
            <RangeCard />
          </div>
          <div>
            <RangeCard />
          </div>
          <div>
            <RangeCard />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default ShopByRange