import React, { useEffect, useState } from "react";
import styles from "./ResultsScreen.module.scss";
import Container from "../../elements/Container/Container";
import Line from "../../elements/Line/Line";
import Heading2 from "../../elements/Heading2/Heading2";
import ResultSlider from "../../elements/ResultSlider/ResultSlider";

const ResultsScreen = () => {
  const [isMobile, setIsMobile] = useState(true);

  const resize = () => {
    if (window.innerWidth > 1000) setIsMobile(false);
    if (window.innerWidth <= 1000) setIsMobile(true);
  };

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section className={styles.results}>
      <Container>
        <Heading2 size={"24px"}>Результаты конкурса</Heading2>
      </Container>
      <Line color={"blue"} />
      <Container>
        <div id="resultSlider">
          <ResultSlider />
        </div>
      </Container>
      {!isMobile && <Line color={"blue"} />}
    </section>
  );
};

export default ResultsScreen;
