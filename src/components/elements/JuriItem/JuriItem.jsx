import React, { useEffect, useRef, useState } from "react";
import styles from "./JuriItem.module.scss";

import JuriPlaceholder from "../../../assets/img/decors/juri-placeholder.png";

const JuriCard = ({ image, title, description }) => {
  const [imgHeight, setImgHeight] = useState(360);
  const [isMobile, setIsMobile] = useState(false);

  const resize = () => {
    if (window.innerWidth > 1000) setIsMobile(false);
    if (window.innerWidth <= 1000) setIsMobile(true);
  };

  const calculateImageHeight = () => {
    if (!imgRef.current || imgRef.current === null) return;
    setImgHeight(imgRef.current.clientWidth);
  };

  useEffect(() => {
    resize();
    calculateImageHeight();
    window.addEventListener("resize", resize);
    window.addEventListener("resize", calculateImageHeight);

    return () => {
      window.removeEventListener("resize", calculateImageHeight);
      window.removeEventListener("resize", resize);
    };
  }, []);
  const imgRef = useRef(null);

  useEffect(() => {
    calculateImageHeight();
  }, [imgRef]);

  return (
    <div className={styles.item}>
      {image ? (
        <img src={image} alt="card-img" ref={imgRef} height={imgHeight} />
      ) : (
        <div
          className={styles.emptyImage}
          ref={imgRef}
          style={{ height: imgHeight + 4 }}
        >
          <img src={JuriPlaceholder} alt="" />
        </div>
      )}

      <div>
        <p>{title}</p>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default JuriCard;
