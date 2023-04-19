import React from "react";
import styles from "./Container.module.scss";

const Container = ({ children, navmenu }) => {
  return (
    <div
      className={styles.container}
      style={navmenu ? { height: "auto" } : {}}
      id="mainContainer"
    >
      {children}
    </div>
  );
};

export default Container;
