import React from "react";
import styles from "./LogoMobile.module.scss";
import { ReactComponent as LogoMobileImg } from "../../../assets/img/logo/logo-mpbile.svg";

const LogoMobile = () => {
  return (
    <div className={styles.logo_wrap}>
      <a href="https://ingorod24.ru/" target="_blank" rel="noopener noreferrer">
        <LogoMobileImg />
      </a>
    </div>
  );
};

export default LogoMobile;
