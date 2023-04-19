import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import { ReactComponent as BurgerIcon } from "../../../assets/img/icons/burger.svg";
import MobileNavList from "../MobileNavList/MobileNavList";

const Header = () => {
  const [isShowMenu, setShowMenu] = useState(false);
  const [isMobile, setMobile] = useState(false);

  const resize = () => {
    if (window.innerWidth > 1350) setMobile(false);
    if (window.innerWidth <= 1350) setMobile(true);
  };

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    if (isShowMenu) document.querySelector("body").style.overflowY = "hidden";
    if (!isShowMenu) document.querySelector("body").style.overflowY = "";
  }, [isShowMenu]);

  return (
    <header className={styles.header}>
      <Logo />
      {!isMobile ? (
        <NavBar />
      ) : (
        <BurgerIcon onClick={() => setShowMenu(true)} />
      )}
      {isMobile && <MobileNavList isOpen={isShowMenu} close={setShowMenu} />}
    </header>
  );
};

export default Header;
