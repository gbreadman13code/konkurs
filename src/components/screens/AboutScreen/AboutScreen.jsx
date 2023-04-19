import React, { useEffect, useState } from "react";
import styles from "./AboutScreen.module.scss";
import LineHead from "../../elements/LineHead/LineHead";
import Container from "../../elements/Container/Container";
import Heading2 from "../../elements/Heading2/Heading2";
import { useSelector } from "react-redux";
import AboutItem from "../../elements/AboutItem/AboutItem";

import { ReactComponent as DecorImage } from "../../../assets/img/decors/grey-decor-bottom-right.svg";
import { ReactComponent as DecorImageMobile } from "../../../assets/img/decors/grey-decor-bottom-right-mobile.svg";
import Line from "../../elements/Line/Line";

const AboutScreen = () => {
  const [about, setAbout] = useState();
  const [isMobile, setIsMobile] = useState(false);
  const state = useSelector((state) => state.contests.contests);

  const resize = () => {
    if (window.innerWidth > 1000) setIsMobile(false);
    if (window.innerWidth <= 1000) setIsMobile(true);
  };

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    setAbout(state.abouts);
  }, [state]);

  return (
    <section className={styles.wrap} id="about">
      <div className={styles.head_wrapper}>
        <LineHead>
          <Container>
            <Heading2>о конкурсе</Heading2>
          </Container>
        </LineHead>
      </div>
      {about && (
        <Container>
          {about.map((item, index) => (
            <AboutItem
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </Container>
      )}
      {isMobile ? (
        <DecorImageMobile className={styles.decor} />
      ) : (
        <DecorImage className={styles.decor} />
      )}
      {isMobile && <Line color={"blue"} />}
    </section>
  );
};

export default AboutScreen;
