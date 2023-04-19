import React, { useEffect, useState } from "react";
import styles from "./NewsScreen.module.scss";
import Heading2 from "../../elements/Heading2/Heading2";
import Container from "../../elements/Container/Container";
import { useSelector } from "react-redux";
import NewsSlider from "../../elements/NewsSlider/NewsSlider";

const NewsScreen = () => {
  const [news, setNews] = useState();
  const state = useSelector((state) => state.contests.news);

  useEffect(() => {
    if (!state) return;
    setNews(state.results);
  }, [state]);
  return (
    <section className={styles.wrap} id="news">
      <Container>
        <Heading2>Новости</Heading2>
        {news && <NewsSlider news={news} />}
      </Container>
    </section>
  );
};

export default NewsScreen;
