import React, { useEffect, useState } from "react";
import styles from "./MobileNavList.module.scss";
import Line from "../Line/Line";
import { useSelector } from "react-redux";

import { ReactComponent as CloseIcon } from "../../../assets/img/icons/close-nav.svg";
import { ReactComponent as DecorImage } from "../../../assets/img/decors/grey-decor-bottom-left.svg";
import Container from "../Container/Container";

const MobileNavList = ({ isOpen, close }) => {
  const [title, setTitle] = useState("");
  const titleRedux = useSelector((state) => state.contests.contests);
  const state = useSelector((state) => state.contests);

  useEffect(() => {
    if (!titleRedux) return;
    setTitle(titleRedux.title);
  }, [titleRedux]);

  const itemNavClickHandler = (e, anchor) => {
    e.preventDefault();
    close();

    setTimeout(() => {
      const element = document.getElementById(anchor);
      if (!element) return;
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }, 300);
  };

  return (
    <nav className={isOpen ? `${styles.wrap} ${styles.open}` : styles.wrap}>
      <Container navmenu={true}>
        <div className={styles.head}>
          <p>{title}</p>
          <CloseIcon onClick={() => close(false)} />
        </div>
      </Container>
      <div className={styles.content}>
        <Line color={"blue"} />
        <Container navmenu={true}>
          <ul className={styles.content}>
            {state.news && state.news.results.length > 0 && (
              <li>
                <a
                  href="http://localhost:3000/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => itemNavClickHandler(e, "news")}
                >
                  новости
                </a>
              </li>
            )}
            {state.contests && state.contests.abouts.length > 0 && (
              <li>
                <a
                  href="http://localhost:3000/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => itemNavClickHandler(e, "about")}
                >
                  о конкурсе
                </a>
              </li>
            )}
            {state.contests && state.contests.stages.length > 0 && (
              <li>
                <a
                  href="http://localhost:3000/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => itemNavClickHandler(e, "stages")}
                >
                  этапы
                </a>
              </li>
            )}
            {state.contests &&
              state.contests.additional_photos.length > 0 &&
              state.contests.full_description &&
              state.contests.sections_titles !== null &&
              state.contests.sections_titles.info && (
                <li>
                  <a
                    href="http://localhost:3000/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => itemNavClickHandler(e, "participants_info")}
                  >
                    участникам
                  </a>
                </li>
              )}
            {state.contests && state.contests.jury.length > 0 && (
              <li>
                <a
                  href="http://localhost:3000/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => itemNavClickHandler(e, "juri")}
                >
                  жюри
                </a>
              </li>
            )}
            {state.contests && state.contests.partners.length > 0 && (
              <li>
                <a
                  href="http://localhost:3000/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => itemNavClickHandler(e, "partners")}
                >
                  партнеры
                </a>
              </li>
            )}
          </ul>
        </Container>
        <DecorImage />
        <Line color={"blue"} />
      </div>
      <div></div>
    </nav>
  );
};

export default MobileNavList;
