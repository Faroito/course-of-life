import React from "react";
import { useIntl } from "react-intl";
// import classnames from "classnames";

import ExperienceCard from "./experience-card";
import css from "./body.module.css";

const Body = ({}) => {
  const intl = useIntl();
  return (
    <div className={css.body}>
      <div>{intl.messages.body.intro}</div>
      <div className={css.experiences}>
        <h2>{intl.messages.navBar.experiences}</h2>
        {intl.messages.cards.experiences.map((experience, index) => {
          return <ExperienceCard {...experience} key={index} />;
        })}
      </div>
      <h2>{intl.messages.navBar.skills}</h2>
      <h2>{intl.messages.navBar.education}</h2>
    </div>
  );
};

export default Body;
