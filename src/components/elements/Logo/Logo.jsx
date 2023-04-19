import React from "react";
import styles from "./Logo.module.scss";
import { ReactComponent as LogoImg } from "../../../assets/img/logo/logo.svg";

const Logo = () => {
  return (
    <div className={styles.logo_wrap}>
      <a href="https://ingorod24.ru/" target="_blank" rel="noopener noreferrer">
        <LogoImg />
      </a>
    </div>
  );
};

export default Logo;
