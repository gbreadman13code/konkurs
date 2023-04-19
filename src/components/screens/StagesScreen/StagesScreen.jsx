import React, { useEffect, useState } from "react";
import styles from "./StagesScreen.module.scss";
import Container from "../../elements/Container/Container";
import Heading2 from "../../elements/Heading2/Heading2";
import Line from "../../elements/Line/Line";
import { useSelector } from "react-redux";
import StagesIconItem from "../../elements/StagesIconItem/StagesIconItem";
import TimeMap from "../../elements/TimeMap/TimeMap";
import TimeMapMobile from "../../elements/TimeMap/TimeMapMobile";

const StagesScreen = () => {
  const [stages, setStages] = useState();
  const [activeStages, setActiveStages] = useState();
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

  const getDates = (array) => {
    const fisrtDate = array[0].dates.split("-")[0];
    const lastDate = array[array.length - 1].dates.split("-")[1];
    return [fisrtDate, lastDate];
  };

  const stagesIconClickHandler = (id) => {
    const newActiveStage = stages.find((item) => item.id === id);
    setActiveStages(newActiveStage);
  };

  useEffect(() => {
    if (!state) return;
    setStages(state.stages);
    setActiveStages(state.stages[0]);
  }, [state]);

  if (!stages) return;
  else
    return (
      <section className={styles.wrap} id="stages">
        <Container>
          <Heading2>ЭТАПЫ КОНКУРСА</Heading2>
        </Container>
        <Line></Line>
        <Container>
          <div className={styles.stages_icons_wrap}>
            {stages.map((item, index) => (
              <StagesIconItem
                key={index}
                id={item.id}
                setActiveStages={stagesIconClickHandler}
                activeStages={activeStages}
                number={item.number}
                start_date={getDates(item.items)[0]}
                end_date={getDates(item.items)[1]}
              />
            ))}
          </div>
          {activeStages &&
            (isMobile ? (
              <TimeMapMobile items={activeStages.items} />
            ) : (
              <TimeMap items={activeStages.items} />
            ))}
        </Container>
      </section>
    );
};

export default StagesScreen;
