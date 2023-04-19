import React from "react";
import styles from "./TimeMap.module.scss";

const TimeMapItem = ({ date, description, position }) => {
  return (
    <div className={styles.item} style={position === "left" ? {} : {}}>
      <p
        style={
          position === "left" ? { paddingRight: 120 } : { paddingLeft: 120 }
        }
      >
        {date}
      </p>
      <div className={styles.line}>
        <div
          className={styles.red_marker}
          style={position === "left" ? { right: -11 } : { left: -11 }}
        ></div>
      </div>
      <span
        style={
          position === "left" ? { paddingRight: 120 } : { paddingLeft: 120 }
        }
      >
        {description}
      </span>
    </div>
  );
};

export default TimeMapItem;
