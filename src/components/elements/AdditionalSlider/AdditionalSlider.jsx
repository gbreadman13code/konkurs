import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./AdditionalSlider.module.scss";

import { ReactComponent as NextIcon } from "../../../assets/img/icons/arrow-right.svg";
import { ReactComponent as PrevIcon } from "../../../assets/img/icons/arrow-left.svg";

const AdditionalSlider = ({ photos, photoClickHandler }) => {
  const [imgHeight, setImgHeight] = useState(260);
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
  const imgRef = useRef();

  useEffect(() => {
    if (!imgRef.current || imgRef.current === null) return;
    setImgHeight(imgRef.current.clientWidth);
  }, [imgRef]);

  useEffect(() => {
    // Accessing the slick instance to control the slider
    const sliderInstance = sliderRef.current && sliderRef.current.slick;

    // Example: Start autoplay
    sliderInstance && sliderInstance.play();

    return () => {
      // Example: Pause autoplay on unmount
      sliderInstance && sliderInstance.pause();
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
  return (
    <>
      <Slider {...settings} ref={sliderRef}>
        {photos.map((item, index) => (
          <div
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.item}
            ref={imgRef}
            onClick={() => (isMobile ? null : photoClickHandler(item.id))}
          >
            <img
              src={item.cropped_image}
              alt={item.title}
              style={{ height: imgHeight }}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default AdditionalSlider;
