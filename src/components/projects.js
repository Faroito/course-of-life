import React from "react";
import { useIntl } from "react-intl";

import css from "./css/projects.module.css";

const Projects = ({ projects }) => {
  const intl = useIntl();

  return (
    <div className={css.projectsPage}>
      <div className={css.background}>
        <div className={css.button}>{intl.messages.body.projects_button}</div>
      </div>
    </div>
  );
};

export default Projects;
