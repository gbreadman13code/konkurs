import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import defaultStyles from "./defaultStyles.scss";
import styles from "./ResultSlider.module.scss";

const ResultItemPhotoSlider = ({ photos, resultId, photoClickHandler }) => {
  const sliderRef = useRef(null);

  // useEffect(() => {
  //   // Accessing the slick instance to control the slider
  //   const sliderInstance = sliderRef.current && sliderRef.current.slick;

  //   // Example: Start autoplay
  //   sliderInstance && sliderInstance.play();

  //   return () => {
  //     // Example: Pause autoplay on unmount
  //     sliderInstance && sliderInstance.pause();
  //   };
  // }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div className={styles.slider_container} id="photos">
      <Slider {...settings} ref={sliderRef}>
        {photos.map((item, index) => (
          <div key={index}>
            <img
              src={item.cropped_image}
              alt="Slide 1"
              onClick={() => photoClickHandler(resultId, item.id)}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ResultItemPhotoSlider;
