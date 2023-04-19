import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsItem from "./NewsItem";

import { ReactComponent as NextIcon } from "../../../assets/img/icons/arrow-right.svg";
import { ReactComponent as PrevIcon } from "../../../assets/img/icons/arrow-left.svg";

const NewsSlider = ({ news }) => {
  const [isMobile, setIsMobile] = useState(false);

  const resize = () => {
    if (window.innerWidth > 1000) setIsMobile(false);
    if (window.innerWidth <= 1000) setIsMobile(true);
  };

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);
  const sliderRef = useRef(null);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <NextIcon />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <PrevIcon />
      </div>
    );
  }

  const settings = {
    arrows: true,
    dots: false,
    // infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : news.length < 3 ? news.length : 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  if (!isMobile && news.length < 3)
    return (
      <div style={{ display: "flex" }}>
        {news.map((item, index) => (
          <div key={index} style={{ maxWidth: 1280 / 3 }}>
            <NewsItem item={item} />
          </div>
        ))}
      </div>
    );
  else
    return (
      <Slider {...settings} ref={sliderRef}>
        {news.map((item, index) => (
          <NewsItem key={index} item={item} />
        ))}
      </Slider>
    );
};

export default NewsSlider;
