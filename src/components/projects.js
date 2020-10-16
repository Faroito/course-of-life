import React, { useState }  from "react";
import { useIntl } from "react-intl";

import classnames from "classnames";
import css from "./css/projects.module.css";

const Projects = ({ projects }) => {
  const intl = useIntl();
  const [open, setOpen] = useState(false);

  const onClick = (status) => (e) => {
    setOpen(status);
  };

  const button = classnames(css.button, {[css.hide]: open})
  const background = classnames(css.background, {[css.extendedBackground]: open})

  return (
    <div className={css.projectsPage}>
      <div className={background}>
        <div className={button} onClick={onClick(true)}>{intl.messages.body.projects_button}</div>
        {open && <h2 className={css.title}>{intl.messages.body.projects}</h2>}
        {open && <div className={css.projectScreen}></div>}
      </div>
    </div>
  );
};

export default Projects;
