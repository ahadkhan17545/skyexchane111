import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";
import bnr from "../../assets/images/banner.jpg";
import Marquee from "../Marquee";

const newsItems = [
  {
    date: "07 Dec 2024",
    event: "New Zealand v England",
    market: "30 Over NZ '96.300.500' (IST 03:46:09 - 03:47:12)",
    message:
      "Bets Voided Because Wrong Rate Offered By Mistake .. Sorry for the Inconvenience Caused",
  },
  {
    date: "07 Dec 2024",
    event: "Victoria v Rangpur Riders",
    market: "11 Over VIC '89.75.125' (IST 07:32:54 - 07:33:10)",
    message:
      "Bets Voided Because of Wrong Rate Offered By Mistake .. Sorry for the Inconvenience Caused",
  },
];

const Banner = () => {
  const userId = localStorage.getItem("userId");
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="slider-container">
      <div className={`desk-marquee ${userId ? `login-marquee` : ''}`}>
        <Marquee newsItems={newsItems} />
      </div>

      {/* Mobile Marquee */}
      <div className={`mobile-marquee ${userId ? `login-marquee` : ''}`}>
        <Marquee newsItems={newsItems} />
      </div>
      {/* Mobile Marquee */}

      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="slide">
          <img src={bnr} alt="Slide 1" className="slide-image" />
        </div>

        {/* Slide 2 */}
        <div className="slide">
          <img src={bnr} alt="Slide 2" className="slide-image" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
