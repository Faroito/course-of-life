import React from "react";
// import { Link } from "react-router-dom";
import moment from "moment";
import { useIntl } from "react-intl";

import css from "./css/intro.module.css";

const birthDate = moment("1998-03-11");

const Intro = ({ intro }) => {
  const intl = useIntl();

  const now = moment();
  const age = now.diff(birthDate, "year");

  return (
    <div className={css.background}>
      <div className={css.figure} />
      <div className={css.intro}>
        <div className={css.presentation}>
          <h1 className={css.name}>Timothée Couble</h1>
          <div>
            <div className={css.qualifier}>{intl.messages.intro.title}</div>
            <div className={css.qualifier}>
              {age + " " + intl.messages.intro.years}
            </div>
            <div className={css.qualifier}>{intl.messages.intro.location}</div>
          </div>
          <div className={css.iconList}>
            <a
              className={css.icon}
              href="https://www.linkedin.com/in/timothee-couble/"
            >
              <img
                src="icons/linkedin.svg"
                alt="linkedin"
                className={css.logo}
              />
            </a>
            <a className={css.icon} href="https://github.com/Faroito">
              <img src="icons/github.svg" alt="github" className={css.logo} />
            </a>
            <div className={css.icon}>
              <img
                src="icons/download.svg"
                alt="download"
                className={css.logo}
              />
            </div>
          </div>
        </div>
        <img className={css.portrait} src="portrait.jpg" alt="" />
      </div>
      <div className={css.subhead}>
        <div className={css.subtitle}>{intl.messages.intro.subtitle}</div>
        <p className={css.description}>{intl.messages.intro.description}</p>
        {/* <div>{intl.messages.body.intro}</div> */}
      </div>
    </div>
  );
};

export default Intro;
