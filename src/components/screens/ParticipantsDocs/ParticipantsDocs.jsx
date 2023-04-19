import React, { useEffect, useRef, useState } from "react";
import styles from "./ParticipantsDocs.module.scss";
import Container from "../../elements/Container/Container";
import Heading2 from "../../elements/Heading2/Heading2";
import { useSelector } from "react-redux";

import { ReactComponent as DocIcon } from "../../../assets/img/icons/document.svg";

const ParticipantsDocs = () => {
  const [docs, setDocs] = useState();
  const [wasScrolled, setScrolled] = useState(false);
  const [ContentOffsetLeft, setContentOffsetLeft] = useState(0);
  const [timeline, setTimeline] = useState();
  const state = useSelector((state) => state.contests.contests);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeline(document.getElementById("containerScroll"));
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!timeline) return;
    timeline.onmousedown = (e) => {
      let pageX = 0;

      document.onmousemove = (e) => {
        if (pageX !== 0) {
          timeline.scrollLeft = timeline.scrollLeft + (pageX - e.pageX);
        }
        pageX = e.pageX;
        setScrolled(true);
      };

      // заканчиваем выполнение событий
      document.onmouseup = () => {
        document.onmousemove = null;
        timeline.onmouseup = null;
        setTimeout(() => {
          setScrolled(false);
        }, 100);
      };

      // отменяем браузерный drag
      timeline.ondragstart = () => {
        return false;
      };
    };
  }, [timeline, wasScrolled]);

  useEffect(() => {
    if (!state) return;
    setDocs(state.documents);
  }, [state]);

  const linkClickHandler = (e) => {
    if (wasScrolled) e.preventDefault();
  };

  const container = document.getElementById("mainContainer");

  useEffect(() => {
    setContentOffsetLeft(container.offsetLeft);
  }, [container]);

  return (
    <section className={styles.wrap} id="participants_info">
      <Container>
        <Heading2>Участникам</Heading2>
      </Container>
      {docs && (
        <div
          className={styles.content}
          style={{ marginLeft: ContentOffsetLeft }}
          id="containerScroll"
        >
          {docs.map((item, index) => (
            <div key={index} className={styles.item}>
              <a
                href={item.file}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => linkClickHandler(e)}
              >
                <DocIcon />
                <span>{item.title}</span>
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ParticipantsDocs;
