import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useIntl } from "react-intl";

// import classnames from "classnames";
import css from "./intro.module.css";

const birthDate = moment("1998-03-11");

const Intro = ({ intro }) => {
  const intl = useIntl();

  const now = moment();
  const age = now.diff(birthDate, "year");

  return (
    <div className={css.background}>
      <div className={css.presentation}>
        <h1 className={css.name}>Timothée Couble</h1>
        <div>{age + " " + intl.messages.intro.years}</div>
        <div>{intl.messages.intro.location}</div>
      </div>
      <img className={css.portrait} src="portrait.jpg" alt="" />
    </div>
  );
};

export default Intro;
