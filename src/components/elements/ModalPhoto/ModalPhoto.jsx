import React, { useEffect, useState } from "react";
import styles from "./ModalPhoto.module.scss";

import { ReactComponent as NextArrow } from "../../../assets/img/icons/arrow-right.svg";
import { ReactComponent as PrevArrow } from "../../../assets/img/icons/arrow-left.svg";
import { ReactComponent as CloseIcon } from "../../../assets/img/icons/close-icon.svg";

const ModalPhoto = ({ photo, clickNext, clickPrev, clickClose }) => {
  const [isLoad, setLoad] = useState(true);

  const closeByEsc = (e) => {
    if (e.key !== "Escape") return;
    clickClose();
  };
  useEffect(() => {
    window.addEventListener("keyup", closeByEsc);
    document.querySelector("body").style.overflowY = "hidden";

    return () => {
      window.removeEventListener("keyup", closeByEsc);
      document.querySelector("body").style.overflowY = "";
    };
  }, []);
  return (
    <div className={styles.modal_container}>
      <CloseIcon className={styles.close} onClick={clickClose} />
      <PrevArrow
        className={styles.prev}
        onClick={() => {
          setLoad(true);
          clickPrev(photo.id);
        }}
      />
      <div className={styles.image}>
        <p style={isLoad ? { opacity: 1 } : { opacity: 0 }}>Загрузка...</p>
        <img
          src={photo.image ? photo.image : photo.photo}
          style={isLoad ? { opacity: 0 } : { opacity: 1 }}
          onLoad={() => setLoad(false)}
          alt="Изображение"
        />
      </div>
      <NextArrow
        className={styles.next}
        onClick={() => {
          setLoad(true);
          clickNext(photo.id);
        }}
      />
    </div>
  );
};

export default ModalPhoto;
