import React from "react";
import styles from "./MainTitle.module.scss";

const MainTitle = ({ name, description }) => {
  return (
    <div className={styles.main_title}>
      <h1>{name}</h1>
      <div className={styles.line}></div>
      <p>{description}</p>
    </div>
  );
};

export default MainTitle;
