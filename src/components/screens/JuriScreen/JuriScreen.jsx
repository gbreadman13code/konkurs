import React, { useEffect, useState } from "react";
import styles from "./JuriScreen.module.scss";
import Container from "../../elements/Container/Container";
import Heading2 from "../../elements/Heading2/Heading2";
import { useSelector } from "react-redux";
import JuriCard from "../../elements/JuriItem/JuriItem";

const JuriScreen = () => {
  const [juri, setJuri] = useState();
  const state = useSelector((state) => state.contests.contests.jury);

  useEffect(() => {
    if (!state || state.length < 1) return;
    setJuri(state);
  }, [state]);

  return (
    <section className={styles.wrap} id="juri">
      <Container>
        <Heading2>Жюри</Heading2>
        {juri && (
          <div className={styles.juri_container}>
            {juri.map((item, index) => (
              <JuriCard
                key={index}
                title={item.fio}
                description={item.description}
                image={item.photo}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default JuriScreen;
