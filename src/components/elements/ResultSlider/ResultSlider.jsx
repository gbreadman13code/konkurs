import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ReactComponent as NextIcon } from "../../../assets/img/icons/arrow-right.svg";
import { ReactComponent as PrevIcon } from "../../../assets/img/icons/arrow-left.svg";
import { useSelector } from "react-redux";
import ResultItem from "./ResultItem";
import ModalPhoto from "../ModalPhoto/ModalPhoto";

const ResultSlider = () => {
  const [contest, setContest] = useState();
  const [currentSlide, setCurrentSlide] = useState();
  const [currentResultId, setCurrentResultId] = useState();
  const [isSliderReady, setSliderReady] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const resize = () => {
    if (window.innerWidth > 1000) setIsMobile(false);
    if (window.innerWidth <= 1000) setIsMobile(true);
  };

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  const state = useSelector((state) => state.contests);

  const photoClickHandler = (resultId, photoId) => {
    setCurrentResultId(resultId);
    const result = contest.results.find((result) => result.id === resultId);
    const slide = result.images.find((photo) => photo.id === photoId);
    setCurrentSlide(slide);
  };

  const closePhotoClickHandler = () => {
    setCurrentSlide();
  };

  const nextPhotoClickHandler = (photoId) => {
    const result = contest.results.find(
      (result) => result.id === currentResultId
    );
    const currentPhotoIndex = result.images.findIndex(
      (photo) => photo.id === photoId
    );
    if (!result.images[currentPhotoIndex + 1]) {
      setCurrentSlide(result.images[0]);
    } else {
      setCurrentSlide(result.images[currentPhotoIndex + 1]);
    }
  };

  const prevPhotoClickHandler = (photoId) => {
    const result = contest.results.find(
      (result) => result.id === currentResultId
    );
    const currentPhotoIndex = result.images.findIndex(
      (photo) => photo.id === photoId
    );
    if (!result.images[currentPhotoIndex - 1]) {
      setCurrentSlide(result.images[result.images.length - 1]);
    } else {
      setCurrentSlide(result.images[currentPhotoIndex - 1]);
    }
  };

  useEffect(() => {
    if (!state.contests) return;
    setContest(state.contests);
    setTimeout(() => {
      setSliderReady(true);
    }, 1000);
  }, [state]);
  const sliderRef = useRef(null);

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
    swipe: false,
    onInit: () => {
      if (!isMobile) return;
      setTimeout(() => {
        const slickTrackGlobal = document.querySelector(".slick-track");
        const activeSlide = document.querySelector(".itemToHeight");
        slickTrackGlobal.style.height = activeSlide.clientHeight + "px";
      }, 2000);
    },
    beforeChange: (oldSlide, newSlide) => {
      if (!isMobile) return;
      const activeSlideId = contest.results[newSlide].id;
      const currentSlideOnPage = document.getElementById(
        "result_" + activeSlideId
      );
      const slickTrack = document.querySelector(".slick-track");
      slickTrack.style.height = currentSlideOnPage.clientHeight + "px";
    },
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
  if (!contest) return;
  else
    return (
      <>
        {currentSlide && (
          <ModalPhoto
            photo={currentSlide}
            clickClose={closePhotoClickHandler}
            clickNext={nextPhotoClickHandler}
            clickPrev={prevPhotoClickHandler}
          />
        )}
        <Slider {...settings} ref={sliderRef}>
          {contest.results.map((item, index) => (
            <ResultItem
              key={index}
              item={item}
              photoClickHandler={isMobile ? null : photoClickHandler}
            />
          ))}
        </Slider>
      </>
    );
};

export default ResultSlider;
