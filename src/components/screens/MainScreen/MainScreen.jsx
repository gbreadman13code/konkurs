import React, { useEffect, useState } from "react";
import styles from "./MainScreen.module.scss";
import Container from "../../elements/Container/Container";
import Header from "../../elements/Header/Header";
import MainTitle from "../../elements/MainTitle/MainTitle";
import { useSelector } from "react-redux";

const MainScreen = () => {
  const [contest, setContest] = useState();
  const state = useSelector((state) => state.contests);

  useEffect(() => {
    if (!state.contests) return;
    setContest(state.contests);
  }, [state]);

  if (!contest) return;
  else
    return (
      <section
        className={styles.wrapper}
        style={{
          backgroundImage: 'url("' + contest.photo + '")',
        }}
      >
        <Container>
          <div className={styles.content}>
            <Header />
            <MainTitle name={contest.title} description={contest.description} />
            {contest.additional_files && (
              <ul className={styles.documents_list}>
                {contest.additional_files.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.file}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Container>
      </section>
    );
};

export default MainScreen;
