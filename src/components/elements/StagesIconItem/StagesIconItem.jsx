import React from "react";
import styles from "./StagesIconItem.module.scss";

const StagesIconItem = ({
  number,
  start_date,
  end_date,
  id,
  setActiveStages,
  activeStages,
}) => {
  return (
    <div className={styles.item} onClick={() => setActiveStages(id)}>
      <div
        className={styles.number}
        style={activeStages.id === id ? { backgroundColor: "#ffffff" } : {}}
      >
        <p style={activeStages.id === id ? { color: "#004669" } : {}}>
          {number}
        </p>
      </div>
      <div className={styles.dates}>
        <span>{start_date}</span>
        <span>{end_date}</span>
      </div>
    </div>
  );
};

export default StagesIconItem;
