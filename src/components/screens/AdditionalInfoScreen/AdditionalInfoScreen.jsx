import React, { useEffect, useState } from "react";
import styles from "./AdditionalInfoScreen.module.scss";
import Container from "../../elements/Container/Container";
import { useSelector } from "react-redux";
import Heading2 from "../../elements/Heading2/Heading2";
import AdditionalSlider from "../../elements/AdditionalSlider/AdditionalSlider";

import { ReactComponent as BlueDecor } from "../../../assets/img/decors/blue-decor.svg";
import { ReactComponent as BlueDecorMobile } from "../../../assets/img/decors/blue-decor-mobile.svg";
import { ReactComponent as GreyDecor } from "../../../assets/img/decors/grey-decor-top-right.svg";
import { ReactComponent as GreyDecorMobile } from "../../../assets/img/decors/grey-decor-top-right-mobile.svg";
import ModalPhoto from "../../elements/ModalPhoto/ModalPhoto";

const AdditionalInfoScreen = () => {
  const [title, setTitle] = useState();
  const [info, setInfo] = useState();
  const [photos, setPhotos] = useState();
  const [currentResultId, setCurrentResultId] = useState();

  const state = useSelector((state) => state.contests.contests);

  const [currentSlide, setCurrentSlide] = useState();

  const photoClickHandler = (photoId) => {
    const slide = state.additional_photos.find((photo) => photo.id === photoId);
    setCurrentSlide(slide);
  };

  const closePhotoClickHandler = () => {
    setCurrentSlide();
  };

  const nextPhotoClickHandler = (photoId) => {
    const currentPhotoIndex = state.additional_photos.findIndex(
      (photo) => photo.id === photoId
    );
    if (!state.additional_photos[currentPhotoIndex + 1]) {
      setCurrentSlide(state.additional_photos[0]);
    } else {
      setCurrentSlide(state.additional_photos[currentPhotoIndex + 1]);
    }
  };

  const prevPhotoClickHandler = (photoId) => {
    const currentPhotoIndex = state.additional_photos.findIndex(
      (photo) => photo.id === photoId
    );
    if (!state.additional_photos[currentPhotoIndex - 1]) {
      setCurrentSlide(
        state.additional_photos[state.additional_photos.length - 1]
      );
    } else {
      setCurrentSlide(state.additional_photos[currentPhotoIndex - 1]);
    }
  };

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

  useEffect(() => {
    if (!state) return;
    if (!state.sections_titles) return;
    if (state.sections_titles.info) setTitle(state.sections_titles.info);
    if (state.full_description) setInfo(state.full_description);
    if (state.additional_photos && state.additional_photos.length > 0)
      setPhotos(state.additional_photos);
  }, [state]);

  return (
    <section className={styles.wrap}>
      {isMobile ? (
        <GreyDecorMobile className={styles.grey_decor} />
      ) : (
        <GreyDecor className={styles.grey_decor} />
      )}

      {!isMobile && <BlueDecor className={styles.blue_decor} />}
      <Container>
        <Heading2>{title}</Heading2>
        <div className={styles.content}>
          {info && <div className={styles.text}>{info}</div>}

          {photos && (
            <div className={styles.slider}>
              {isMobile && (
                <BlueDecorMobile className={styles.blue_decor_mobile} />
              )}
              {currentSlide && (
                <ModalPhoto
                  photo={currentSlide}
                  clickClose={closePhotoClickHandler}
                  clickNext={nextPhotoClickHandler}
                  clickPrev={prevPhotoClickHandler}
                />
              )}
              <AdditionalSlider
                photos={photos}
                photoClickHandler={photoClickHandler}
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default AdditionalInfoScreen;
