import React, { useEffect, useRef, useState } from "react";
import styles from "./NewsItem.module.scss";

import { ReactComponent as DefaultImage } from "../../../assets/img/decors/blue-decor.svg";

const NewsItem = ({ item }) => {
  const [imgHeight, setHeight] = useState(240);
  const dateFormatter = (string) => {
    const array = string.split("-");
    return array.reverse().join(".");
  };

  const imgRef = document.getElementById("imgRef");

  const resize = () => {
    setHeight(imgRef.clientWidth / 1.5);
  };

  useEffect(() => {
    if (!imgRef) return;
    resize();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, [imgRef]);

  return (
    <a
      href={
        item.category === "event"
          ? "https://ingorod24.ru/news/events/" + item.id
          : "https://ingorod24.ru/news/media/" + item.id
      }
      target="_blank"
      rel="noopener noreferrer"
      className={styles.item}
    >
      {item.images.length > 0 ? (
        <img
          src={item.images[0].cropped_image}
          alt={item.title}
          style={{ height: imgHeight }}
          id="imgRef"
        />
      ) : (
        <div className={styles.default_image} style={{ height: imgHeight }}>
          <DefaultImage />
        </div>
      )}
      <span>{dateFormatter(item.date_to_show)}</span>
      <p>{item.title}</p>
    </a>
  );
};

export default NewsItem;
