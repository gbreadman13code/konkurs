import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./PartnersSlider.module.scss";

import { ReactComponent as NextIcon } from "../../../assets/img/icons/arrow-right.svg";
import { ReactComponent as PrevIcon } from "../../../assets/img/icons/arrow-left.svg";
const PartnersSlider = ({ partners }) => {
  const [imgHeight, setImgHeight] = useState(260);
  const [isMobile, setMobile] = useState(false);
  const sliderRef = useRef(null);
  const imgRef = useRef();

  const resize = () => {
    if (window.innerWidth > 1000) setMobile(false);
    if (window.innerWidth <= 1000) setMobile(true);
  };

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    if (!imgRef.current || imgRef.current === null) return;
    setImgHeight(imgRef.current.clientWidth * 1);
  }, [imgRef]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 2 : 5,
    slidesToScroll: isMobile ? 1 : 2,
    draggable: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

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

  if (partners.length < 3)
    return (
      <div style={{ display: "flex" }}>
        {partners.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.item}
            ref={imgRef}
            style={isMobile ? { maxWidth: 320 / 2 } : { maxWidth: 1280 / 5 }}
          >
            <img
              src={item.logo}
              alt={item.title}
              style={{ height: imgHeight }}
            />
          </a>
        ))}
      </div>
    );
  else
    return (
      <>
        <Slider {...settings} ref={sliderRef}>
          {partners.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.item}
              ref={imgRef}
              style={isMobile ? { maxWidth: 320 / 2 } : { maxWidth: 1280 / 5 }}
            >
              <img
                src={item.logo}
                alt={item.title}
                style={{ height: imgHeight }}
              />
            </a>
          ))}
        </Slider>
      </>
    );
};

export default PartnersSlider;
