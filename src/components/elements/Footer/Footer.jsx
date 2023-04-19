import React, { useEffect, useState } from "react";
import styles from "./Footer.module.scss";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";

import { ReactComponent as LocationIcon } from "../../../assets/img/icons/location.svg";
import { ReactComponent as PhoneIcon } from "../../../assets/img/icons/phone.svg";
import { ReactComponent as MailIcon } from "../../../assets/img/icons/email.svg";
import { useSelector } from "react-redux";

const Footer = () => {
  const [contacts, setContacts] = useState();
  const contactsRedux = useSelector((state) => state.contests.contests);
  const state = useSelector((state) => state.contests);

  const itemNavClickHandler = (e, anchor) => {
    e.preventDefault();

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

  useEffect(() => {
    if (!contactsRedux) return;
    setContacts({
      phone: contactsRedux.phone,
      email: contactsRedux.email,
      address: contactsRedux.address,
    });
  }, [contactsRedux]);
  return (
    <footer id="contacts">
      <Container>
        <div className={styles.footer}>
          <div className={styles.logoWrap}>
            <Logo />
          </div>
          <ul className={styles.nav}>
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
          <ul className={styles.contact}>
            {contacts && (
              <>
                <li className={styles.head}>Адрес:</li>
                {contacts && contacts.address && (
                  <li className={styles.icon}>
                    <div className={styles.icon_wrap}>
                      <LocationIcon />
                    </div>{" "}
                    {contacts.address}
                  </li>
                )}
                <li className={styles.head}>Контакты:</li>
                {contacts && contacts.phone && (
                  <li className={styles.icon}>
                    <div className={styles.icon_wrap}>
                      <PhoneIcon />
                    </div>{" "}
                    <a href={"tel:" + contacts.phone}>{contacts.phone}</a>
                  </li>
                )}
                {contacts && contacts.email && (
                  <li className={styles.icon}>
                    <div className={styles.icon_wrap}>
                      <MailIcon />
                    </div>{" "}
                    <a href={"mailto:" + contacts.email}>{contacts.email}</a>
                  </li>
                )}
              </>
            )}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
