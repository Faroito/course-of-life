import React, { useState } from "react";

import useScrollPosition from "../hooks/useScrollPosition";
import useWindowSize from "../hooks/useWindowSize";
import useElementTopWindow from "../hooks/useElementTopWindow";

import classnames from "classnames";
import css from "./css/nav-bar.module.css";

const LangMenu = ({ language, setLanguage, topDark, forceDark }) => {
  const windowSize = useWindowSize();
  const scrollPosition = useScrollPosition();
  const [over, setOver] = useState(false);

  const languageChanged = (lang) => (e) => {
    setLanguage(lang);
  };

  const onOver = (status) => (e) => {
    setOver(status);
  };

  const onIntro = scrollPosition.top > windowSize.height * topDark;
  const isDarkMode = onIntro && forceDark;
  const langMenuTop = over ? 0 : -42;
  const banner = classnames(css.banner, {
    [css.darkBanner]: isDarkMode,
  });
  const langSelector = classnames(css.langSelector, {
    [css.darkLangSelector]: isDarkMode,
  });
  return (
    <div
      className={css.langMenu}
      onMouseEnter={onOver(true)}
      onMouseLeave={onOver(false)}
      style={{ top: langMenuTop }}
    >
      <div className={langSelector}>
        <img
          src="flags/fr.svg"
          alt="Mettre en Français"
          className={css.langLogo}
          onClick={languageChanged("fr")}
        />
        <img
          src="flags/en.svg"
          alt="Set in English"
          className={css.langLogo}
          onClick={languageChanged("en")}
        />
      </div>
      <div className={banner}>
        <img src="icons/banner.svg" alt="language" />
        <div>{language.toUpperCase()}</div>
      </div>
    </div>
  );
};

const NavBar = ({ language, setLanguage, location, projectPage }) => {
  const isHomePage = location === "/";
  const elementTopWindow = useElementTopWindow(projectPage);

  if (isHomePage)
    return (
      <LangMenu
        language={language}
        setLanguage={setLanguage}
        topDark={0.82}
        forceDark={!elementTopWindow}
      />
    );
  else {
    return (
      <header className={css.header}>
        <h1 className={css.name}>Timothée Couble</h1>
        <LangMenu
          language={language}
          setLanguage={setLanguage}
          topDark={0.1}
          forceDark={false}
        />
        ;
      </header>
    );
  }
};

export default NavBar;
