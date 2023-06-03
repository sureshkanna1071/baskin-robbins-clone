import React from 'react'
import "./herobanner.css"
import Herobanner1 from "../../assets/herobanner1.webp"
import HeroBanner01 from "../../assets/Homepage-01_1024x.webp"
import HeroBanner02 from "../../assets/banner-02_1024x.webp"
import HeroBanner03 from "../../assets/banner-03_1024x.webp"
import HeroBanner04 from "../../assets/Homepage_04_1024x.webp"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

const HeroBanner = () => {
  
  const  settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    prevArrow: <></>,
    nextArrow: <></>,
  };

  return (
    <div className='br__herobanner'>
      <Slider {...settings}>
        <div>
          <img src={HeroBanner01} alt="banner" />
        </div>
        <div>
          <img src={HeroBanner02} alt="banner" />
        </div>
        <div>
          <img src={HeroBanner03} alt="banner" />
        </div>
        <div>
          <img src={HeroBanner04} alt="banner" />
        </div>
        <div>
          <img src={Herobanner1} alt="banner" />
        </div>
      </Slider>
     </div>
  )
}

export default HeroBanner