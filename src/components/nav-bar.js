import React from "react";
import { useIntl } from "react-intl";
// import classnames from "classnames";
import css from "./nav-bar.module.css";

const NavBar = ({ language, setLanguage }) => {
  const intl = useIntl();

  const languageChanged = (lang) => (e) => {
    setLanguage(lang);
  };

  return (
    <header>
      <div>
        <img src="tim_logo.svg" alt="" className={css.logo} />
      </div>
      <h1>Timothée Couble</h1>
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
