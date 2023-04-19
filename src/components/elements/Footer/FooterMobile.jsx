import React, { useEffect, useState } from "react";
import styles from "./Footer.module.scss";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";

import { ReactComponent as LocationIcon } from "../../../assets/img/icons/location-mobile.svg";
import { ReactComponent as PhoneIcon } from "../../../assets/img/icons/phone-mobile.svg";
import { ReactComponent as MailIcon } from "../../../assets/img/icons/email-mobile.svg";
import { ReactComponent as DecorImage } from "../../../assets/img/decors/grey-decor-footer-mobile.svg";

import { useSelector } from "react-redux";
import LogoMobile from "../LogoMobile/LogoMobile";

const FooterMobile = () => {
  const [contacts, setContacts] = useState();
  const state = useSelector((state) => state.contests.contests);

  useEffect(() => {
    if (!state) return;
    setContacts({
      phone: state.phone,
      email: state.email,
      address: state.address,
    });
  }, [state]);
  return (
    <footer id="contacts">
      <div className={styles.footer_mobile}>
        <div className={styles.head_logo}>
          <Container>
            <LogoMobile />
          </Container>
        </div>

        <div className={styles.content}>
          <Container>
            <DecorImage className={styles.decor} />
            <ul className={styles.contact}>
              {contacts && (
                <>
                  {contacts && contacts.address && (
                    <li className={styles.icon}>
                      <div className={styles.icon_wrap}>
                        <LocationIcon />
                      </div>{" "}
                      {contacts.address}
                    </li>
                  )}
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
          </Container>
        </div>

        {/* <Logo />
          <ul className={styles.nav}>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Новости
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                О конкурсе
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Этапы
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Участникам
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Жюри
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Партнеры
              </a>
            </li>
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
          </ul> */}
      </div>
    </footer>
  );
};

export default FooterMobile;
