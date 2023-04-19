import React from "react";
import styles from "./NotFoundPage.module.scss";

import { ReactComponent as Decor } from "../../../assets/img/decors/grey-decor-bottom-right-mobile.svg";
import Container from "../../elements/Container/Container";
import LogoMobile from "../../elements/LogoMobile/LogoMobile";

const NotFoundPage = () => {
  return (
    <div className={styles.wrap}>
      <Container>
        <div className={styles.content}>
          <div className={styles.logo}>
            <LogoMobile />
          </div>
          <p>Конкурс не найден!</p>
          <p>Возможно, не указан или указан неверный идентификатор конкурса.</p>
          <p>
            Пожалуйста, вернитесь{" "}
            <a href={"https://ingorod24.ru/contests"}>на страницу "Конкурсы"</a>
            , чтобы поискать необходимый там.
          </p>
        </div>
        <Decor className={styles.decor} />
      </Container>
    </div>
  );
};

export default NotFoundPage;
