import React, { useEffect, useState } from "react";
import styles from "./PartnersScreen.module.scss";
import { useSelector } from "react-redux";
import LineHead from "../../elements/LineHead/LineHead";
import Container from "../../elements/Container/Container";
import Heading2 from "../../elements/Heading2/Heading2";
import PartnersSlider from "../../elements/PartnersSlider/PartnersSlider";

const PartnersScreen = () => {
  const [partners, setPartners] = useState();
  const state = useSelector((state) => state.contests.contests);

  useEffect(() => {
    if (!state) return;
    setPartners(state.partners);
  }, [state]);

  return (
    <section className={styles.wrap} id="partners">
      <LineHead>
        <Container>
          <Heading2>Партнеры</Heading2>
        </Container>
      </LineHead>
      <Container>
        {partners && (
          <div className={styles.slider}>
            <PartnersSlider partners={partners} />
          </div>
        )}
      </Container>
    </section>
  );
};

export default PartnersScreen;
