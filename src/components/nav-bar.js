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
        <div className={css.navItem}>{intl.messages.navBar.experiences}</div>
        <div className={css.navItem}>{intl.messages.navBar.skills}</div>
        <div className={css.navItem}>{intl.messages.navBar.education}</div>
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
