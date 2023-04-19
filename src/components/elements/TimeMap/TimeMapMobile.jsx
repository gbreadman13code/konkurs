import React from "react";
import styles from "./TimeMap.module.scss";
import TimeMapItem from "./TimeMapItem";

const TimeMapMobile = ({ items }) => {
  const getDates = (array) => {
    const fisrtDate = array[0].dates.split("-")[0];
    const lastDate = array[array.length - 1].dates.split("-")[1];
    return [fisrtDate, lastDate];
  };
  return (
    <div className={styles.time_map_mobile}>
      <div className={styles.lineBetween}></div>
      <div className={styles.row}>
        <div className={styles.start_date_wrap}>
          <div className={styles.dashed_line}>
            <div className={styles.white_marker}></div>
          </div>
          <div className={styles.start_date}>
            <p>{getDates(items)[0]}</p>
          </div>
        </div>
      </div>
      {items.map((item, index) => (
        <div className={styles.row} key={index}>
          <TimeMapItem
            date={item.dates}
            position={"left"}
            description={item.description}
          />
        </div>
      ))}
      <div
        className={styles.row}
        style={items.length % 2 !== 0 ? { flexDirection: "row-reverse" } : {}}
      >
        <div
          className={styles.end_date_wrap}
          style={items.length % 2 === 0 ? { flexDirection: "row-reverse" } : {}}
        >
          <div className={styles.dashed_line}>
            <div className={styles.white_marker}></div>
          </div>
          <div className={styles.end_date}>
            <p>{getDates(items)[1]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeMapMobile;
