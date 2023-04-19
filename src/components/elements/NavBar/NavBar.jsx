import React from "react";
import styles from "./NavBar.module.scss";
import { useSelector } from "react-redux";

const NavBar = () => {
  const state = useSelector((state) => state.contests);
  const itemNavClickHandler = (e, anchor) => {
    e.preventDefault();
    const element = document.getElementById(anchor);
    if (!element) return;
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <nav className={styles.nav}>
      <ul>
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

        <li>
          <a
            href="http://localhost:3000/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => itemNavClickHandler(e, "contacts")}
          >
            контакты
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
