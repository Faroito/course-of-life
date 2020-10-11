import React from "react";
import { useIntl } from "react-intl";
// import classnames from "classnames";

import Education from "../components/education";
import ExperienceCard from "../components/experience-card";
import Projects from "../components/projects";
import Intro from "../components/intro";
import css from "./css/body.module.css";

const Body = ({ body }) => {
  const intl = useIntl();
  return (
    <div className={css.body}>
      <Intro />
      <h2 id="experiences" className={css.partTitle}>
        {intl.messages.body.experiences}
      </h2>
      <div className={css.experiences}>
        {intl.messages.cards.experiences.map((experience, index) => {
          return <ExperienceCard {...experience} idx={index} key={index} />;
        })}
      </div>
      <Projects />
      <h2 id="education" className={css.partTitle}>
        {intl.messages.body.education}
      </h2>
      <Education />
    </div>
  );
};

export default Body;
