import React, { useEffect, useRef, useState } from "react";
import styles from "./AboutItem.module.scss";

const AboutItem = ({ title, description }) => {
  const [isActive, setActive] = useState(false);
  const content = useRef(null);

  useEffect(() => {
    if (!content.current || content.current === null) return;
    if (isActive) {
      content.current.style.maxHeight = content.current.scrollHeight + "px";
    } else {
      content.current.style.maxHeight = null;
    }
  }, [isActive, content]);

  return (
    <div className={styles.item} onClick={() => setActive(!isActive)}>
      <div className={styles.head_wrap}>
        <p className={isActive ? styles.active : ""}>{title}</p>
      </div>
      <div className={styles.content} ref={content}>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default AboutItem;
