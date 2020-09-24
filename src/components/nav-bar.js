import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";

import useScrollPosition from "../hooks/useScrollPosition";
import useWindowSize from "../hooks/useWindowSize";

import classnames from "classnames";
import css from "./css/nav-bar.module.css";

const NavBar = ({ language, setLanguage, location }) => {
  const intl = useIntl();
  const windowSize = useWindowSize();
  const scrollPosition = useScrollPosition();
  const [selected, setSelected] = useState(false);

  const languageChanged = (lang) => (e) => {
    setLanguage(lang);
  };

  const onClick = (e) => {
    setSelected(!selected);
  };

  const isHomePage = location === "/";
  const name = classnames(css.name, { [css.noNav]: !isHomePage });
  const menuStyle = classnames(css.logo, css.menuLogo, {
    [css.darkMenuLogo]: scrollPosition.top > windowSize.height * 0.7,
  });
  const filter = classnames({ [css.filterPage]: selected });

  if (isHomePage)
    return (
      <div className={filter}>
        <img
          src="icons/menu.svg"
          alt="menu"
          className={menuStyle}
          onClick={onClick}
        />
        {selected && (
          <div>
            <div className={css.sideBar}></div>
            <div className={css.clickablePage} onClick={onClick} />
          </div>
        )}
      </div>
    );
  return (
    <header className={css.header}>
      <Link to="/">
        <img src="tim_logo.svg" alt="" className={css.logo} />
      </Link>
      <h1 className={name}>Timothée Couble</h1>
      {isHomePage && (
        <div className={css.nav}>
          <a className={css.navItem} href="#experiences">
            {intl.messages.navBar.experiences}
          </a>
          <a className={css.navItem} href="#skills">
            {intl.messages.navBar.skills}
          </a>
          <a className={css.navItem} href="#education">
            {intl.messages.navBar.education}
          </a>
          {/* <a className={css.navItem}>Personal Project</a> */}
        </div>
      )}
      <div>
        {language === "en" && (
          <img
            src="flags/fr.svg"
            alt="Mettre en Français"
            className={css.lang}
            onClick={languageChanged("fr")}
          />
        )}
        {language === "fr" && (
          <img
            src="flags/en.svg"
            alt="Set in English"
            className={css.lang}
            onClick={languageChanged("en")}
          />
        )}
      </div>
    </header>
  );
};

export default NavBar;
