import React, { useEffect, useState } from "react";
import styles from "./ResultSlider.module.scss";
import ResultItemPhotoSlider from "./ResultItemPhotoSlider";

const ResultItem = ({ item, photoClickHandler }) => {
  const createMarkup = (text) => {
    return { __html: text };
  };
  return (
    <div className={`${styles.item} itemToHeight`} id={"result_" + item.id}>
      <div className={styles.head}>
        <div className={styles.slider_photos}>
          <ResultItemPhotoSlider
            photos={item.images}
            photoClickHandler={photoClickHandler}
            resultId={item.id}
          />
        </div>
        <div className={styles.text}>
          <p className={styles.place}>{item.place}</p>
          <div
            className={styles.short_description}
            dangerouslySetInnerHTML={createMarkup(item.short_description)}
          ></div>
        </div>
      </div>
      {item.full_description && (
        <div
          className={styles.description}
          dangerouslySetInnerHTML={createMarkup(item.full_description)}
        ></div>
      )}

      {item.files && item.files.length > 0 && (
        <div className={styles.documents}>
          {item.files.map((document, index) => (
            <a
              key={index}
              href={document.file}
              target="_blank"
              rel="noopener noreferrer"
            >
              {document.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResultItem;
